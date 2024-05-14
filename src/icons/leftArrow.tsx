import { ArrowProps } from "./rightArrow";

const LeftArrow: React.FC<ArrowProps> = ({onClick}) =>
{
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <circle cx="17" cy="17" r="16.5" transform="matrix(-1 4.6679e-10 4.6679e-10 1 34.0002 0)" stroke="#789776"/>
            <path d="M18.1574 12.0001L13.4003 16.7572C13.3509 16.8066 13.3509 16.8866 13.4003 16.936L18.1574 21.6931" stroke="#789776" stroke-linecap="round"/>
        </svg>
    );
}

export default LeftArrow;