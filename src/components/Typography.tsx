import useResize from "../hooks/use-resize";
import { DeviceType, ElementType, TypographyClass } from "../StyleDefinition";

function Typography(
    props: { fontstyle: TypographyClass, devicetype: DeviceType }
) {
    const width = useResize();


    return (
        <>
            {
                (props.fontstyle.element === ElementType.H1)
                ?
                <h1 style={{ fontSize: `${(props.devicetype === DeviceType.PC) ? props.fontstyle.size.desktop : props.fontstyle.size.mobile}px` }} className={`text ${props.fontstyle.color} ${props.fontstyle.weight} ${props.fontstyle.font} ${props.fontstyle.font_style}`}>{props.fontstyle.content}</h1>
                :
                (props.fontstyle.element === ElementType.H2)
                ?
                <h2 style={{ fontSize: `${(props.devicetype === DeviceType.PC) ? props.fontstyle.size.desktop : props.fontstyle.size.mobile}px` }} className={`text ${props.fontstyle.color} ${props.fontstyle.weight} ${props.fontstyle.font} ${props.fontstyle.font_style}`}>{props.fontstyle.content}</h2>
                :
                (props.fontstyle.element === ElementType.H3)
                ?
                <h3 style={{ fontSize: `${(props.devicetype === DeviceType.PC) ? props.fontstyle.size.desktop : props.fontstyle.size.mobile}px` }} className={`text ${props.fontstyle.color} ${props.fontstyle.weight} ${props.fontstyle.font} ${props.fontstyle.font_style}`}>{props.fontstyle.content}</h3>
                :
                (props.fontstyle.element === ElementType.H4)
                ?
                <h4 style={{ fontSize: `${(props.devicetype === DeviceType.PC) ? props.fontstyle.size.desktop : props.fontstyle.size.mobile}px` }} className={`text ${props.fontstyle.color} ${props.fontstyle.weight} ${props.fontstyle.font} ${props.fontstyle.font_style}`}>{props.fontstyle.content}</h4>
                :
                <p style={{ fontSize: `${(props.devicetype === DeviceType.PC) ? props.fontstyle.size.desktop : props.fontstyle.size.mobile}px` }} className={`text ${props.fontstyle.color} ${props.fontstyle.weight} ${props.fontstyle.font} ${props.fontstyle.font_style}`}>{props.fontstyle.content}</p>
            }
        </>
    );
}

export default Typography;

/*

<p>Элемент: {props.fontstyle.element}</p>
            <p>Шрифт: {props.fontstyle.font}</p>
            <p>Стиль шрифта: {props.fontstyle.font_style}</p>
            <p>Размер в пикселях на ПК: {props.fontstyle.size.desktop}</p>
            <p>Размер в пикселях на Мобильном устройстве: {props.fontstyle.size.mobile}</p>
            <p>Вес: {props.fontstyle.weight}</p>


*/