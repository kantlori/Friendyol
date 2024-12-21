
function MiddleBanner({ item }) {
    return (
        <div className="banner-mid">
            <a href={item.link}><img src={item.img} alt={item.title} /></a>
        </div>
    )
}

export default MiddleBanner