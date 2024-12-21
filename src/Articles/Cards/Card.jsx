

function Card({ item }) {
    return (
        <div className="card">
            <div className="card-img">
                <a href={item.link}><img src={item.img} alt={item.title} /></a>
            </div>
            <div className="card-details">
                <h6>{item.description}</h6>
                <p>{item.rating}</p>
                <p>{item.price}</p>
            </div>
        </div>
    )
}

export default Card