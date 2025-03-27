import mongoose, { mongo } from "mongoose";

const itemSchema = await mongoose.Schema(
    {
        name: String,
        description: String
    }, {collection: "simpleCRUD"}
);

const Item = mongoose.model('Item', itemSchema);
export default Item;