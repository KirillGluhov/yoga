import { useEffect, useState } from "react";
import { ElementType, TypographyClass, Font, FontStyle, DeviceType, Color, Weight } from "../StyleDefinition";
import Header from "../components/Header";
import Typography from "../components/Typography";
import useResize from "../hooks/use-resize";
import "../styles/home.css"
import axios from "axios";
import { fetchHomeSmallPhoto } from "../server/MockedServer";
import YogaCarousel from "../components/YogaCarousel";

function Home()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();

    const [homeSmallPhoto, setHomeSmallPhoto] = useState(undefined);

    useEffect(() => {
        fetchHomeSmallPhoto().then(url => {
            setHomeSmallPhoto(url);
        });
    }, [])
    
    return (<>
    {
        <div className="home">
            <Header width={width} isScreenPC={isScreenPC} isScreenTablet={isScreenTablet} isScreenMobile={isScreenMobile}/>
            <div className="homeMain">
                <div className="homeFirstColumn">
                    <div className="homeFirstColumnFirstRow">
                        <h1 className="homeMainText">СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
                    </div>
                    <div className="homeFirstColumnSecondRow">
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