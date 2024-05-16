import "../styles/direction.css";
import useResize from "../hooks/use-resize";

function Direction()
{
    const { width, isScreenPC, isScreenTablet, isScreenMobile } = useResize();

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
        <div className="directionMainInformation" style={{backgroundColor: "red"}}>

        </div>
    </div>);
}

export default Direction;