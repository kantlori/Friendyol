

function CardPopular({ item }) {
    return (
        <div className="popularcard">
            <div className="popularcard-img">
                <a href={item.link}><img src={item.img} alt={item.title} /></a>
            </div>
            <div className="popularcard-details">
                <h6>{item.description}</h6>
                <p>{item.rating}</p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default CardPopular