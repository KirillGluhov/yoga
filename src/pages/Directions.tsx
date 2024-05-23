import "../styles/direction.css";
import useResize from "../hooks/use-resize";
import { useEffect, useState } from "react";
import { fetchDirections } from "../server/MockedServer";
import { Direction } from "../server/MockedServer";
import RightArrowActive from "../icons/rightArrowActive";
import LeftArrow from "../icons/leftArrow";
import LeftArrowActive from "../icons/leftArrowActive";
import RightArrow from "../icons/rightArrow";
import { chooseDay } from "../functions/chooseDay";

import flower from "../background/directionFlower.svg";

import calendarLg from "../UIelements/calendarLg.svg";
import calendarMd from "../UIelements/calendarMd.svg";
import calendarSm from "../UIelements/calendarSm.svg";

import timerLg from "../UIelements/timerLg.svg";
import timerMd from "../UIelements/timerMd.svg";
import timerSm from "../UIelements/timerSm.svg";

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
            <img src={flower} className="directionFlower"/>
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
                    <div className="directionDateAndTime">
                        <div className="directionTitleCanBeChange">
                            {
                                directions.map((direction, index) => (
                                    <h3 
                                        key={index} 
                                        className={`directionTitleMainPart ${position === index + 1 ? 'active' : ''}`}
                                    >{direction.name}</h3>
                                ))
                            }
                        </div>
                        <div className="directionDateAndTimeWithText">
                            <div className="directionDateWithLargeLength">
                                <div className="directionCalendar">
                                    <img 
                                        src={
                                            (isScreenPC) ? 
                                            calendarLg : 
                                            (isScreenTablet) ? 
                                            calendarMd : calendarSm
                                        }
                                    />
                                </div>
                                <div className="directionCalendarText">
                                    {
                                        directions.map((direction, index) => (
                                            <div className="directionCalendarAndTimerTextWrapper" key={index}>
                                                <p className={`directionCalendarAndTimerText directionAdditionalSpace ${position === index + 1 ? 'active' : ''}`}>Проходит по: </p>
                                                <p 
                                                    
                                                    className={`directionCalendarAndTimerText ${position === index + 1 ? 'active' : ''}`}
                                                >{`${
                                                    direction.days.reduce(
                                                        (accumulator, currentValue, index) => 
                                                        accumulator + chooseDay(currentValue) + (
                                                            index < direction.days.length - 1 ? ", " : ""
                                                        ), ''
                                                    )
                                                }`}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="directionTimeWithLargeLength">
                                <div className="directionTimer">
                                    <img 
                                        src={
                                            (isScreenPC) ? 
                                            timerLg : 
                                            (isScreenTablet) ? 
                                            timerMd : timerSm
                                        }
                                    />
                                </div>
                                <div className="directionTimerText">
                                    {
                                        directions.map((direction, index) => (
                                            <div className="directionCalendarAndTimerTextWrapper" key={index}>
                                                <p className={`directionCalendarAndTimerText directionAdditionalSpace ${position === index + 1 ? 'active' : ''}`}>Длительность: </p>
                                                <p  
                                                    className={`directionCalendarAndTimerText ${position === index + 1 ? 'active' : ''}`}
                                                >{`${direction.duration} минут`}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="directionTextAndNavigation">
                        <div className="directionTextCanBeBigger">
                            <div className="directionTitleWithText" >
                            {
                                directions.map((direction, index) => (
                                    <h3 
                                        key={index} 
                                        className={`directionTitleMainPart ${position === index + 1 ? 'active' : ''}`}
                                    >{direction.name}</h3>
                                ))
                            }
                            </div>
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