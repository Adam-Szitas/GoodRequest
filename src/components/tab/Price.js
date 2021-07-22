const PriceItem = ({ price }) =>{
    console.log(price);
    return (
        <>
            <div className="price">
                {price.id} {price.currency}
            </div>
        </>
    )
}
export default PriceItem
