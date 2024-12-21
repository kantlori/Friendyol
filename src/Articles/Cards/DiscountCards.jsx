import fakeDiscountProducts from "../../FakeData/FakeDiscountProducts";
import Card from "./Card";



function DiscountCards() {

    return (
        <article className="component-item">
            <div className="card-header">
                <h5>Fırsat Ürünleri</h5>
            </div>
            <div className="widget-product">
                {fakeDiscountProducts.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </article>
    );
}

export default DiscountCards