
function Product({}) {
    return (
        <div className= "Product">
            <img src={Product.image} alt={Product.name}/>
            <p>${Product.name}
            </p>
            <p>${Product.price}
            </p>
            <button>Add to Cart</button>
        </div>
    )
}