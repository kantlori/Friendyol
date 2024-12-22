import { useRef } from "react";
import sahteUrunVerisi from "../../FakeData/FakePopularProduct.js";
import Card from "./Card.jsx";
import "./Card.css";

function PopularCards() {
    const scrollContainer = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainer.current;
        const scrollAmount = container.offsetWidth;
        container.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="popular-cards-wrapper">
            <button
                className="popular-arrow left"
                onClick={() => scroll("left")}
                aria-label="Sola kaydır"
            >
                ◀
            </button>
            <article className="popular-cards">
                <div className="card-header">
                    <h5>Popüler Ürünler</h5>
                </div>
                <div className="widget-product" ref={scrollContainer}>
                    {sahteUrunVerisi.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </article>
            <button
                className="popular-arrow right"
                onClick={() => scroll("right")}
                aria-label="Sağa kaydır"
            >
                ▶
            </button>
        </div>
    );
}

export default PopularCards;
