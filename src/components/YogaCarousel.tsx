import { useEffect, useState } from "react";
import { fetchHomeAllPhoto } from "../server/MockedServer";
import LeftArrow from "../icons/leftArrow";
import RightArrow from "../icons/rightArrow";

function YogaCarousel()
{
    const [homePhotos, setHomePhotos] = useState([]);
    const [position, setPosition] = useState(1);

    useEffect(() => {
        fetchHomeAllPhoto().then(urls => {
            setHomePhotos(urls);
        })
    }, [])

    const handleClickLeft = () => {
        if (position == 1)
        {
            setPosition(homePhotos.length)
        }
        else
        {
            setPosition(position-1);
        }
    };

    const handleClickRight = () => {

        if (position == homePhotos.length)
        {
            setPosition(1);
        }
        else
        {
            setPosition(position+1);
        }
    }
    
    return (
        <div className="yogaCarousel">
            <div className="homeChangingPhoto">
            {homePhotos.map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        className={`homeChoosingPhoto ${position === index + 1 ? 'active' : ''}`}
                    />
                ))}
            </div>
            <div className="panelOfNavigation">
                <div className="homeNumberOfPhotoInCarouselAndProgress">
                    <div className="homeNumberOfPhotoInCarousel">
                        <p className="homeNumberListed">{position}</p>
                        <p className="homeAll">{`/${homePhotos && homePhotos.length}`}</p>
                    </div>
                    <div className="homeProgressBar">
                        <div className="homeProgress" style={{width: `${(position / homePhotos.length) * 100}%`}}></div>
                    </div>
                </div>
                <div className="homeButtonsToChangePhoto">
                    <LeftArrow onClick={handleClickLeft}/>
                    <RightArrow onClick={handleClickRight}/>
                </div>
            </div>
        </div>
    )
}

export default YogaCarousel;