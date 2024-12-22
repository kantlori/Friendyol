import mainCategories from "../FakeData/MainCategories";
import SuggestionCard from "./SuggestionCard";
import "./MainCategories.css"

function MainCategories() {
    return (
        <article className="main-categories">
            {mainCategories.map((item, index) => (
                <SuggestionCard key={index} item={item} />
            ))}
        </article>
    )
}

export default MainCategories