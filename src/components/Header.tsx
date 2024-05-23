import useResize from "../hooks/use-resize";
import Logo from "../icons/logo";
import Telephone from "../icons/tel";
import Typography from "./Typography";
import { TypographyStyle, ElementType, Color, DeviceType, Font, FontStyle, TypographyClass, Weight } from "../StyleDefinition";
import Menu from "../icons/menu";
import { useState } from "react";

function Header(props: {width: number, isScreenPC: boolean, isScreenTablet: boolean, isScreenMobile: boolean})
{
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMenu = () => {
        setIsOpen(!isOpen)
    };

    return (<>
        {
            (props.isScreenPC)
            ? 
            <div className="header">
                <div>
                    <Logo width={115} height={50}/>
                </div>
                <div className="menu">
                    <a 
                        href="#direction" 
                        className="text textColor middleWeight Raleway Medium up-and-down" 
                        style={{fontSize: "13px"}}
                    >ПРОГРАММЫ</a>
                    <a 
                        href="#price" 
                        className="text textColor middleWeight Raleway Medium up-and-down" 
                        style={{fontSize: "13px"}}
                    >ПРАЙС</a>
                    <a 
                        href="#timetable" 
                        className="text textColor middleWeight Raleway Medium up-and-down" 
                        style={{fontSize: "13px"}}
                    >РАСПИСАНИЕ</a>
                    <a 
                        href="#reviews" 
                        className="text textColor middleWeight Raleway Medium up-and-down" 
                        style={{fontSize: "13px"}}
                    >ОТЗЫВЫ</a>
                    <a 
                        href="#contacts" 
                        className="text textColor middleWeight Raleway Medium up-and-down" 
                        style={{fontSize: "13px"}}
                    >КОНТАКТЫ</a>
                </div>
                <div className="telephone">
                    <Telephone/>
                    <Typography 
                    fontstyle={
                        new TypographyClass(
                            ElementType.BUTTON, 
                            Font.Raleway, 
                            FontStyle.medium, 
                            { mobile: 15, desktop: 15 }, 
                            "+7 (924) 444-77-77", 
                            Color.text, 
                            Weight.medium
                        )
                    } 
                    devicetype={DeviceType.PC} />
                </div>
            </div> 
            : 
            (props.isScreenTablet) 
            ? 
            <>
            <div className="header">
                <div>
                    <Logo width={112} height={48}/>
                </div>
                <div className="telephone">
                    <Telephone/>
                    <Typography 
                    fontstyle={
                        new TypographyClass(
                            ElementType.BUTTON, 
                            Font.Raleway, 
                            FontStyle.medium, 
                            { mobile: 14, desktop: 14 }, 
                            "+7 (924) 444-77-77", 
                            Color.text, 
                            Weight.medium
                        )
                    } 
                    devicetype={DeviceType.TABLET} />
                    <Menu onClick={handleClickMenu}/>
                </div>
            </div> 
            <div className={`menu ${!isOpen ? 'hidden' : ''}`}>
                <a 
                    href="#direction" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ПРОГРАММЫ</a>
                <a 
                    href="#price" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ПРАЙС</a>
                <a 
                    href="#timetable" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >РАСПИСАНИЕ</a>
                <a 
                    href="#reviews" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ОТЗЫВЫ</a>
                <a 
                    href="#contacts" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >КОНТАКТЫ</a>
            </div>
            </>
            : 
            <>
            <div className="header">
                <div>
                    <Logo width={96} height={41}/>
                </div>
                <div className="telephone">
                    <Telephone/>
                    <Typography 
                    fontstyle={
                        new TypographyClass(
                            ElementType.BUTTON, 
                            Font.Raleway, 
                            FontStyle.medium, 
                            { mobile: 12, desktop: 12 }, 
                            "+7 (924) 444-77-77", 
                            Color.text, 
                            Weight.medium
                        )
                    } 
                    devicetype={DeviceType.MOBILE} />
                    <Menu onClick={handleClickMenu}/>
                </div>
            </div> 
            <div className={`menu ${!isOpen ? 'hidden' : ''}`}>
                <a 
                    href="#direction" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ПРОГРАММЫ</a>
                <a 
                    href="#price" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ПРАЙС</a>
                <a 
                    href="#timetable" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >РАСПИСАНИЕ</a>
                <a 
                    href="#reviews" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >ОТЗЫВЫ</a>
                <a 
                    href="#contacts" 
                    className="text textColor middleWeight Raleway Medium up-and-down" 
                    style={{fontSize: "13px"}}
                >КОНТАКТЫ</a>
            </div>
            </>
        }
    </>);
}

export default Header;

/*


*/