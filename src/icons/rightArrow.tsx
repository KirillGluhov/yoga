import React from "react";

export interface ArrowProps {
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const RightArrow: React.FC<ArrowProps & { className?: string }> = ({ onClick, className }) =>
{
    return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={`arrow ${className}`}>
            <circle cx="17" cy="17" r="16.5" stroke="#789776"/>
            <path d="M15.8431 12.0002L20.6002 16.7573C20.6496 16.8066 20.6496 16.8867 20.6002 16.9361L15.8431 21.6932" stroke="#789776" stroke-linecap="round"/>
        </svg>
    );
}

export default RightArrow;