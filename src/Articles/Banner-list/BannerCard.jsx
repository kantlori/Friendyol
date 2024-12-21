
function BannerCard({ item }) {
    return (
        <div className="banner-card">
            <a href={item.link}><img src={item.img} alt={item.title} /></a>
        </div>
    )
}

export default BannerCard