import category from "../FakeData/Category";
import SuggestionCard from "./SuggestionCard";


function SuggestionsCategory() {
    return (
        <article className="suggestion-category">
            {category.map((item, index) => (
                <SuggestionCard key={index} item={item} />
            ))}
        </article>
    )
}

export default SuggestionsCategory