import { ArrowProps } from "./rightArrow";

const RightArrowActive: React.FC<ArrowProps & { className?: string }> = ({onClick, className}) =>
{
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`arrow ${className}`}>
            <circle cx="17" cy="17" r="17" fill="#789776"/>
            <path d="M15.8431 12.0002L20.6002 16.7573C20.6496 16.8067 20.6496 16.8868 20.6002 16.9361L15.8431 21.6932" stroke="#FEFBF7" stroke-linecap="round"/>
        </svg>
    );
}

export default RightArrowActive;