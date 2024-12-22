import { useRef } from "react";
import trademarksData from "../FakeData/Trademarks";
import SuggestionCard from "./SuggestionCard";

function SuggestionTrademarks() {
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
        <div className="suggestions-trademarks-wrapper">
            <button
                className="suggestions-arrow left"
                onClick={() => scroll("left")}
                aria-label="Sola kaydır"
            >
                ◀
            </button>
            <article
                className="suggestions-trademarks"
                ref={scrollContainer}
                aria-label="Marka önerileri"
            >
                {trademarksData.map((item, index) => (
                    <SuggestionCard key={index} item={item} />
                ))}
            </article>
            <button
                className="suggestions-arrow right"
                onClick={() => scroll("right")}
                aria-label="Sağa kaydır"
            >
                ▶
            </button>
        </div>
    );
}

export default SuggestionTrademarks;
