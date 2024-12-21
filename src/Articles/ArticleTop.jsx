
function ArticleTop({ item }) {

    return (
        <div className="article-top">
            <img src={item.img} alt={item.title} />
            <li><a href={item.link}>{item.title}</a></li>
        </div>
    )
}

export default ArticleTop