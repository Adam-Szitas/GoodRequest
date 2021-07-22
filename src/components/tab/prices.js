import PriceItem from "./Price";
import { useState } from "react";


const Prices = () =>{
    const [prices, setPrices] = useState([
        {
            id: 5,
            currency: '€',
        },
        {
            id: 10,
            currency: '€',
        },
        {
            id: 20,
            currency: '€',
        },
        {
            id: 30,
            currency: '€',
        },
        {
            id: 50,
            currency: '€',
        },
        {
            id: 100,
            currency: '€',
        }
    ]);
    return (
        <>
            {prices.map((price) => {
                <PriceItem key={price.id} price={price}/>
            })}
        </>
    )
}

export default Prices
