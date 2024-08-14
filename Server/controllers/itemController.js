const { request } = require('express');
const itemModel = require('../models/itemModels');
const { v4: uuidv4 } = require('uuid');

//ADD ITEM
const additems = async (req, res) => {
    try {
        const { id, name, expiredyear, description, rate, category, image } = req.body;
        const product = new itemModel({
            id: uuidv4(),
            name,
            expiredyear,
            description,
            rate,
            category,
            image

        })
        await product.save();
        res.status(200).json({ status: "success", message: "Task created successfully" });
        console.log(product);

    } catch (error) {
        res.status(500).json({ status: "failed", message: "Cannot create task", error: error.message });
    }
}

//GET ITEM
const getitems = async (req, res) => {
    try {
        const products = await itemModel.find();
        res.json({ status: "success", message: "products fetched", products })
    }
    catch (err) {
        res.json({ status: "failure", message: "error occured" })
        console.log("error occured");
    }
}

//UPDATE ITEM
const updateitems = async (req, res) => {
    const Id = req.params.id;
    console.log(Id);

    try {
        const prod = await itemModel.findOne({ id: Id });
        console.log(prod)

        if (prod) {
            await prod.updateOne(
                // { id: Id },
                {
                    "name": req.body.name,
                    "description": req.body.description,
                    "category": req.body.category,
                    "rate": req.body.rate,

                    "image": req.body.image

                })
            await prod.save();
        }
        res.status(200).json({ status: "success", message: "Task Updated successfully" });
        console.log(prod);

    } catch (error) {
        res.status(500).json({ status: "failed", message: "Cannot update task", error: error.message });
    }
}


//DELETE ITEM
const deleteitems = async (req, res) => {
    const Id = req.params.id;
    console.log("=>", Id)
    try {
        await itemModel.deleteOne({ id: Id });
        res.status(200).json({ status: "success", message: "Task deleted successfully" });

    }
    catch (err) {
        res.status(500).json({ status: "failure", message: "cannot delete task", error: err.message })
    }
}

module.exports = { additems, getitems, updateitems, deleteitems };