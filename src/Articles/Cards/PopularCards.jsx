
import sahteUrunVerisi from "../../FakeData/FakePopularProduct.js";
import Card from "./Card.jsx";
import "./Card.css"


function PopularCards() {
    return (
        <article className="popular-cards">
            <div className="card-header">
                <h5>Popüler Ürünler</h5>
            </div>
            <div className="widget-product">
                {sahteUrunVerisi.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </article>
    );
}

export default PopularCards;