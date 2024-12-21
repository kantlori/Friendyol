import { useState, useEffect } from "react";
import fakeDiscountProducts from "../../FakeData/FakeDiscountProducts";
import Card from "./Card";

function DiscountCards() {
    // Başlangıçta counter'ı localStorage'dan alıyoruz, yoksa 18 saatten başlatıyoruz.
    const savedCounter = localStorage.getItem('counter');
    const initialCounter = savedCounter ? parseInt(savedCounter) : 18 * 60 * 60;

    const [counter, setCounter] = useState(initialCounter);

    // Counter'ı her saniye bir azaltan efekt
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    const newCounter = prevCounter - 1;
                    localStorage.setItem('counter', newCounter);
                    return newCounter;
                } else {
                    clearInterval(interval);
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(interval); // component unmount olduğunda interval'i temizle
    }, []);

    // Saat formatına dönüştürmek için bir fonksiyon
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <article className="component-item">
            <div className="card-header">
                <p>{formatTime(counter)}</p>
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

export default DiscountCards;
