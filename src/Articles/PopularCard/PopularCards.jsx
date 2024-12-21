import sahteUrunVerisi from "../../FakeData/FakeProduct.js";
import CardPopular from "./CardComponent.jsx";


function PopularCards() {
    return (
        <article className="component-item">
            <div className="widget-product">
                {sahteUrunVerisi.map((item) => (
                    <CardPopular key={item.id} item={item} />
                ))}
            </div>
        </article>
    );
}

export default PopularCards;