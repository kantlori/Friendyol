import trademarksData from "../FakeData/Trademarks";
import SuggestionCard from "./SuggestionCard";

function SuggestionTrademarks() {
    return (
        <article className="suggestions-trademarks">
            {trademarksData.map((item, index) => (
                <SuggestionCard key={index} item={item} />
            ))}
        </article>
    )
}

export default SuggestionTrademarks