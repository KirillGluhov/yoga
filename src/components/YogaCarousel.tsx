import { useEffect, useState } from "react";
import { fetchHomeAllPhoto } from "../server/MockedServer";
import LeftArrow from "../icons/leftArrow";
import RightArrow from "../icons/rightArrow";
import LeftArrowActive from "../icons/leftArrowActive";
import RightArrowActive from "../icons/rightArrowActive";

function YogaCarousel()
{
    const [homePhotos, setHomePhotos] = useState([]);
    const [position, setPosition] = useState(1);

    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);

    useEffect(() => {
        fetchHomeAllPhoto().then(urls => {
            setHomePhotos(urls);
        })
    }, [])

    const handleMouseEnterRight = () => {
        setIsHoveredRight(true);
    };

    const handleMouseLeaveRight = () => {
        setIsHoveredRight(false);
    };

    const handleMouseEnterLeft = () => {
        setIsHoveredLeft(true);
    };

    const handleMouseLeaveLeft = () => {
        setIsHoveredLeft(false);
    };

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
                <div className="leftArrow" onClick={handleClickLeft}></div>
                <div className="rightArrow" onClick={handleClickRight}></div>
                {
                    homePhotos.map((photo, index) => (
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
                        <div className="homeNumberListedWrap">
                        {
                            homePhotos.map((photo, index) => (
                                <p className={`homeNumberListed ${position === index + 1 ? 'active' : ''}`} key={index}>{index+1}</p>
                            ))
                        }
                        </div>
                        <p className="homeAll">{`/${homePhotos && homePhotos.length}`}</p>
                    </div>
                    <div className="homeProgressBar">
                        <div className="homeProgress" style={{width: `${(position / homePhotos.length) * 100}%`}}></div>
                    </div>
                </div>
                <div className="homeButtonsToChangePhoto">
                    <div
                        onMouseEnter={handleMouseEnterLeft}
                        onMouseLeave={handleMouseLeaveLeft}
                        className="arrowWrap"
                    >
                        <LeftArrowActive onClick={handleClickLeft} className={isHoveredLeft ? `active` : ""}/> 
                        <LeftArrow onClick={handleClickLeft} className={isHoveredLeft ? `` : "active"}/>
                    </div>
                    <div
                        onMouseEnter={handleMouseEnterRight}
                        onMouseLeave={handleMouseLeaveRight}
                        className="arrowWrap"
                    >
                        <RightArrowActive onClick={handleClickRight} className={isHoveredRight ? `active` : ""}/> 
                        <RightArrow onClick={handleClickRight} className={isHoveredRight ? `` : "active"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YogaCarousel;

// <p className="homeNumberListed">{position}</p>

/*

*/