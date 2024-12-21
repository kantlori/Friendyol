import sahteBannerVeri from "../../FakeData/Banner-three";
import BannerCard from "./BannerCard";


function BannerThree() {
    return (
        <article className="middle-banner-three">
            <div className="middle-banners">
                {sahteBannerVeri.map((item, index) => (
                    <BannerCard key={index} item={item} />
                ))}
            </div>
        </article>
    )
}

export default BannerThree