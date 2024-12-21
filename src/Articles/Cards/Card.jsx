function Card({ item }) {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <div className="rating">
                <span className="rating-value">({rating.toFixed(1)})</span>
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <span key={`full-${index}`} className="star full">★</span>
                    ))}
                {halfStar === 1 && <span className="star half">☆</span>}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <span key={`empty-${index}`} className="star empty">☆</span>
                    ))}

            </div>
        );
    };

    return (
        <div className="card">
            <div className="card-img">
                <a href={item.link}><img src={item.img} alt={item.title} /></a>
            </div>
            <div className="card-details">
                <h6>{item.description}</h6>
                <div className="rating-container">
                    {renderStars(item.rating)}
                </div>
                <p>{item.price}</p>
            </div>
        </div>
    );
}

export default Card;
