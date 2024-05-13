import { ElementType, TypographyClass, Font, FontStyle, DeviceType, Color, Weight } from "../StyleDefinition";
import Header from "../components/Header";
import Typography from "../components/Typography";
import useResize from "../hooks/use-resize";
import "../styles/home.css"

function Home()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();
    
    return (<>
    {
        <div className="home">
            <Header width={width} isScreenPC={isScreenPC} isScreenTablet={isScreenTablet} isScreenMobile={isScreenMobile}/>
            <div className="homeMain">
                <div className="homeFirstColumn">
                    <div className="homeFirstColumnFirstRow">
                        <h1 className="homeMainText">СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
                    </div>
                    <div style={{backgroundColor: 'magenta'}} className="homeFirstColumnSecondRow"></div>
                </div>
                <div style={{backgroundColor: 'green'}} className="homeSecondColumn"></div>
            </div>
        </div> 
    }
    </>);
}

export default Home;

/*

<Header width={width} isScreenPC={isScreenPC} isScreenTablet={isScreenTablet} isScreenMobile={isScreenMobile}/>

*/