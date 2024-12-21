

function SuggestionCard({ item }) {
    return (
        <div className="suggestion-card" >
            <a href={item.link}><img src={item.img} alt={item.title} /></a>
            <h6>{item.title}</h6>
        </div>
    )
}


export default SuggestionCard