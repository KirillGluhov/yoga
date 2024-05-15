import { ArrowProps } from "./rightArrow";

const LeftArrowActive: React.FC<ArrowProps & { className?: string }> = ({onClick, className}) =>
{
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`arrow ${className}`}>
            <circle cx="17" cy="17" r="17" transform="matrix(-1 4.6679e-10 4.6679e-10 1 34.0002 0)" fill="#789776"/>
            <path d="M18.1574 12.0001L13.4003 16.7572C13.3509 16.8066 13.3509 16.8866 13.4003 16.936L18.1574 21.6931" stroke="#FEFBF7" stroke-linecap="round"/>
        </svg>
    )
}

export default LeftArrowActive;