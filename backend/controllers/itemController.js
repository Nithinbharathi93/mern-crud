import Item from "../models/itemModel.js";

export const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({message:"Error fetching message"});
    }
}

export const createItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({message:"Couldn't create item"});
    }
}

export const updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(200).json(item);
    } catch (error) {
        res.status(400).json({message:"Can't update item"});
    }
}

export const deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        req.status(200).json({message:"Item deleted"});
    } catch (error) {
        res.status(500).json({message:"Deletion failed"});
    }
}
