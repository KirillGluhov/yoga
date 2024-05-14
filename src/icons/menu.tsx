import React from "react";

interface MenuProps {
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const Menu: React.FC<MenuProps> = ({ onClick }) =>
{
    return (
    <svg className="menu-icon" width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M1 1H31" stroke="#789776" stroke-width="2" stroke-linecap="round"/>
        <path d="M1 9.5H31" stroke="#789776" stroke-width="2" stroke-linecap="round"/>
        <path d="M1 18H31" stroke="#789776" stroke-width="2" stroke-linecap="round"/>
    </svg>
    );
}

export default Menu;