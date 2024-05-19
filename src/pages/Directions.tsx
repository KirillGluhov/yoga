import "../styles/direction.css";
import useResize from "../hooks/use-resize";
import { useEffect, useState } from "react";
import { fetchDirections } from "../server/MockedServer";
import { Direction } from "../server/MockedServer";
import RightArrowActive from "../icons/rightArrowActive";
import LeftArrow from "../icons/leftArrow";
import LeftArrowActive from "../icons/leftArrowActive";
import RightArrow from "../icons/rightArrow";

function Directions()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();

    const [directions, setDirections] = useState<Array<Direction>>([]);
    const [position, setPosition] = useState(1);

    const [isHoveredRight, setIsHoveredRight] = useState(false);
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);

    useEffect(() => {
        fetchDirections().then(direction => {
            setDirections(direction);
        })
    },[])

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
            setPosition(directions.length)
        }
        else
        {
            setPosition(position-1);
        }
    };

    const handleClickRight = () => {

        if (position == directions.length)
        {
            setPosition(1);
        }
        else
        {
            setPosition(position+1);
        }
    }

    return (<div className="direction" id="direction">
        <div className="directionTitleWithMainInformation">
            <div className="directionTitle">
                <h2 className="directionTitleText">ВСЕ НАПРАВЛЕНИЯ В ОДНОМ АБОНЕМЕНТЕ</h2>
            </div>
            <div className="directionSecondInfo">
                {
                    isScreenPC ? 
                    <h4 className="directionSecondInfoText">Не определились с направлением?
                    Мы подскажем!</h4> :
                    <p className="directionSecondInfoText">Не определились с направлением?
                    Мы подскажем!</p>
                }
            </div>
        </div>
        <div className="directionMainInformation">
            <div className="typesOfDirections second add additional">
                {
                    directions.map((direction, index) => (
                        <button className={`oneDirection add secondadd second${index + 1 === position ? ' active' : ''}`} onClick={() => setPosition(index + 1)} key={index+1}><p className="directionText" >{direction.name}</p></button>
                    ))
                }
            </div>
            <div className="directionPhotoAndText">
                <div className="directionPhoto">
                    {
                        directions.map((direction, index) => (
                            <img 
                                key={index} 
                                src={direction.url} 
                                className={`directionPhotoUrl ${position === index + 1 ? 'active' : ''}`}
                            />
                        ))
                    }
                </div>
                <div className="directionTextAll">
                    <div className="directionDateAndTime" style={{backgroundColor: "red"}}></div>
                    <div className="directionTextAndNavigation">
                        <div className="directionTextCanBeBigger">
                            <div 
                                className="directionTitleWithText" 
                                style={{backgroundColor: "orange"}}
                            ></div>
                            <div className="directionTextSmall">
                                {
                                    directions.map((direction, index) => (
                                        <div 
                                            className={`directionTextBlock ${position === index + 1 ? 'active' : ''}`} 
                                        >
                                            {
                                                direction.description.map((paragraph, subIndex) => (
                                                    <p 
                                                        className="directionSmallestText"
                                                    >{paragraph}</p>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="directionNavigationWrap">
                            <div className="directionNavigation">
                                <div className="panelOfNavigationDirection">
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
                                    <div className="directionNumberOfPhotoInCarouselAndProgress">
                                        <div className="directionProgressBar">
                                            <div className="homeProgress" style={{width: `${(position / directions.length) * 100}%`}}></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Directions;

/*

*/