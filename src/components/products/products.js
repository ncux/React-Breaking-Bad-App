import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from "../loading/loading";

const PRODUCTS_API = ``;

export const Products = props => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(PRODUCTS_API);
            console.log(data);
            setProducts(data);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const showProducts = (
        products.length > 0 && products.map(product => (
            <Product key={product.id} />
        ))
    );



    if(loading) return (<Loading />);




    return (
        <div className="">
            { showProducts }
        </div>
    );

};

