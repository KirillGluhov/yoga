import { useEffect, useState } from "react";
import { ElementType, TypographyClass, Font, FontStyle, DeviceType, Color, Weight } from "../StyleDefinition";
import Header from "../components/Header";
import Typography from "../components/Typography";
import useResize from "../hooks/use-resize";
import "../styles/home.css"
import axios from "axios";
import { fetchHomeSmallPhoto } from "../server/MockedServer";
import YogaCarousel from "../components/YogaCarousel";

import bigFlower from "../background/bigFlower.svg";
import mediumFlower from "../background/mediumFlower.svg";
import smallFlower from "../background/smallFlower.svg";

import bigButtonSignUp from "../UIelements/bigSignUp.svg";
import smallFlowerImage from "../UIelements/smallFlowerImage.svg";

function Home()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();

    const [homeSmallPhoto, setHomeSmallPhoto] = useState(undefined);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetchHomeSmallPhoto().then(url => {
            setHomeSmallPhoto(url);
        });
    }, [])

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (<>
    {
        <div className="home">
            <Header 
                width={width}
                isScreenPC={isScreenPC} 
                isScreenTablet={isScreenTablet} 
                isScreenMobile={isScreenMobile}
            />
            <div className="homeMain">
                {
                    isScreenPC ? 
                    <img src={bigFlower} className="flower"></img> : 
                    isScreenTablet ? 
                    <img src={mediumFlower} className="flower"></img> : 
                    null
                }
                <div className="homeFirstColumn">
                    {
                        (isScreenMobile && !isScreenPC && !isScreenTablet) ?
                        <img src={smallFlower} className="flowerSmall"></img> :
                        null
                    }
                    <div className="homeFirstColumnFirstRow">
                        <h1 className="homeMainText">СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
                    </div>
                    <div className="homeFirstColumnSecondRow">
                        {
                            (isScreenPC) ? 
                            <div className="wrapForSignUp">
                                <img 
                                    src={bigButtonSignUp} className="buttonSignUp" 
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                ></img>
                                <img src={smallFlowerImage} className="flowersImage" style={{width: `${isHovered ? "347px" : "82px"}`, height: `${isHovered ? "294px" : "70px"}`}}></img>
                            </div>
                             : 
                             (isScreenTablet) ? 
                             <div className="wrapForSignUp">
                                 <img 
                                     src={bigButtonSignUp} className="buttonSignUp" 
                                     onMouseEnter={handleMouseEnter}
                                     onMouseLeave={handleMouseLeave}
                                 ></img>
                                 <img 
                                    src={smallFlowerImage} 
                                    className="flowersImage" 
                                    style={
                                        {width: `${isHovered ? "248.5px" : "82px"}`,
                                        height: `${isHovered ? "210.5px" : "70px"}`}
                                    }
                                 ></img>
                             </div> : null
                        }
                        <div className="homeTextSecond">
                            <p className="textHarmony">Здесь мы поможем вам держать тело в тонусе, а душу - в гармонии</p>
                        </div>
                        <div className="homePoints">
                            <div className="yogaPointsAndPhoto">
                                <div className="yogaPhotoSmall">
                                    <img src={homeSmallPhoto} className="homeSmallPhoto"></img>
                                </div>
                                <div className="plusPointsToCenter">
                                    <div className="pointsToCenter">
                                        <div className="onePoint">
                                            <div className="forNumber">
                                                <h2 className="bigNumber">6</h2>
                                            </div>
                                            <div className="forPlusesToChoose">
                                                <p className="plusesToChoose smaller">направлений в одном абонементе</p>
                                            </div>
                                        </div>
                                        <div className="onePoint">
                                            <div className="forNumber">
                                                <h2 className="bigNumber">4</h2>
                                            </div>
                                            <div className="forPlusesToChoose big">
                                                <p className="plusesToChoose">тренера с большим практическим опытом</p>
                                            </div>
                                        </div>
                                        <div className="onePoint">
                                            <div className="forNumber">
                                                <h2 className="bigNumber">2</h2>
                                            </div>
                                            <div className="forPlusesToChoose">
                                                <p className="plusesToChoose small">просторных зала для занятий</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeSecondColumn">
                    {
                        (isScreenMobile && !isScreenPC && !isScreenTablet) ? 
                        <div className="wrapForSignUp">
                            <img 
                            src={bigButtonSignUp} 
                                className="buttonSignUp" 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            ></img>
                            <img src={smallFlowerImage} className="flowersImage" style={{width: `${isHovered ? "248.5px" : "82px"}`, height: `${isHovered ? "210.5px" : "70px"}`}}></img>
                        </div> : 
                        null
                    }
                    <div className="homeMainTextInvisible">
                        <h1 className="homeMainText">СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
                    </div>
                    <YogaCarousel/>
                </div>
            </div>
        </div> 
    }
    </>);
}

export default Home;

/*

<Header width={width} isScreenPC={isScreenPC} isScreenTablet={isScreenTablet} isScreenMobile={isScreenMobile}/>

*/