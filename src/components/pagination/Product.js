import './pagination.css'

const Product = ({title, img}) => {
    return (
        <div className="product">
            <img className="product-img" src={img} alt={title}/>
            <span className="product-title">{title}</span>
        </div>
    )
}

export default Product