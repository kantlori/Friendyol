import sahteBannerVeri from "../../FakeData/Banner-three";
import MiddleBanner from "./MiddleBanner";


function BannerThree() {
    return (
        <article className="middle-banner-three">
            <div className="middle-banners">
                {sahteBannerVeri.map((item, index) => (
                    <MiddleBanner key={index} item={item} />
                ))}
            </div>
        </article>
    )
}

export default BannerThree