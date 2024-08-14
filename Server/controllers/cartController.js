
const CartModel = require("../models/cartModel");
const itemModels = require("../models/itemModels")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

//ADD-TO-CART
const addtocart = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const user_id = req.user.id;
    const cart = await CartModel.findOne({ user_id });

    if (cart) {
      let product = cart.products.find((p) => p.product_id === product_id);

      if (product) {
        product.quantity += quantity;
        await cart.save();
        res.status(200).json({
            status: "success",
            message: "Product quantity updated",
            product,
          });
      } 
      else {
        let newProduct = { product_id, quantity };
        cart.products.push(newProduct);
        await cart.save();
        res.status(200).json({
            status: "success",
            message: "Product added to cart",
            newProduct,
          });
      }
    } 
    else {
      const newCart = new CartModel({
        user_id,
        products: [{ product_id, quantity }],
      });
      await newCart.save();
      res.status(200).json({ message: "New Product added to cart" });
    }
  } catch (err) {
    res.status(500).json({ message: "error", error: err.message });
  }
};

//GET-ITEMS
const getCarts = async (req, res) => {
  const user_id = req.user.id;
  try {
    const cart = await CartModel.findOne({ user_id });
    if (cart) {
      let subtotal = 0;
      const productDetails = await Promise.all(
        cart.products.map(async (item) => {
          const product = await itemModels.findOne({ id: item.product_id }, 'title description image price');
          if (!product) {
            console.error(`Product with ID ${item.product_id} not found`);
            return null; // Or handle this case as needed
          }
          subtotal += product.price * item.quantity;
          return {
            name: product.title, // 'name' to 'title' to match the field in 'itemModels'
            description: product.description,
            image: product.image,
            rate: product.price, // 'rate' to 'price' to match the field in 'itemModels'
            quantity: item.quantity,
          };
        })
      );

      // Filter out any null products (in case some products were not found)
      const filteredProductDetails = productDetails.filter(item => item !== null);

      return res.json({
        status: "success",
        data: {
          products: filteredProductDetails,
          subtotal,
        },
      });
    } else {
      return res.status(404).json({
        status: "error",
        message: "Cart not found",
      });
    }
  } catch (error) {
    console.error(`Error fetching cart for user ${user_id}:`, error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};



//REMOVE QUANTITY
const removequantity = async (req, res) => {
  const user_id = req.user.id;
  const product_id = req.body.product_id;
  const quantity = req.body.quantity;
  try {
    const cart = await CartModel.findOne({ user_id });
    if (cart) {
      const prod = cart.products.findIndex((p) => p.product_id === product_id);
      if (prod !== -1) {
        cart.products[prod].quantity -= quantity;
        console.log(quantity);
        if (cart.products[prod].quantity <= 0) {
          await CartModel.deleteOne({ user_id });
        }
        await cart.save();
        res.status(200).json({ message: "success", message: "quantity reduced", quantity });
      } else {
        res.status(401).json({ message: "product not found", message: err.message });
      }
    } else {
        res.status(401).json({ message: "cart not found", error: err.message });
    }
  } catch (err) {
       res.status(500).json({ message: "internal err", error: err.message });
  }
};

//DELETE CART
// const deletecart = async (req, res) => {
//   const product_id = req.body.product_id;
//   const user_id = req.user.id;

//   try {
//     const cart = await CartModel.findOne({ user_id });
//     if (cart) {
//       const product = cart.products.findIndex(
//         (p) => p.product_id === product_id
//       );
//       if (product > -1) {
//         cart.products.splice(product, 1);
//         if (cart.products.length > 0) {
//           await cart.save();
//         } else {
//           await CartModel.deleteOne({ user_id });
//         }
//         res.send({ message: "Product removed from cart" });
//       } else {
//         res.send({ message: "Item not found" });
//       }
//     } else {
//       res.send({ message: "No products found" });
//     }
//   } catch (err) {
//     res.status(401).json({ message: err.message });
//   }
// };

// const deleteproducts = async(req,res)=>{
//     await CartService.deleteproduct(req.user , req.body.product_id)
// }


module.exports = {
  addtocart,
  getCarts,
  removequantity
};
