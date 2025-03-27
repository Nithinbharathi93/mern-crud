import { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

const Home = () => {
    const [items, setItems] = useState([]);
    const fetchItem = async () => {
        const response = await axios.get("/api/item");
        setItems(response.data);
    };

    useEffect(() => {
        fetchItem();
    }, []);

    return(
        <>
            <div>
                <h1>Simple CRUD App</h1>
                <ItemForm refreshItem={fetchItem} />
                <ItemList items={items} refreshItems={fetchItem} />
            </div>
        </>
    )

}

export default Home;