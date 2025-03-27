import axios from "axios";

const ItemList = ({items, refreshItems}) => {
    const handleDelete = async (id) => {
        await axios.delete(`/api/item/${id}`);
        refreshItems();
    };
    if (!Array.isArray(items)) {
        return <p>No items available</p>;
    }

    return (
        <>
            <ul>
                {items.map((item) => {
                    <li key={item._id}>
                        {item.name} - {item.description}
                        <button onClick={handleDelete(item._id)}>Delete</button>
                    </li>
                })} 
            </ul>
        </>
    )
}

export default ItemList;