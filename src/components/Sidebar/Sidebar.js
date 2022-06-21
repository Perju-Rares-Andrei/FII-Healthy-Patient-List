import React from 'react';
import { SidebarData } from "./SidebarData";
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="logo">
                            <div id="img"><img className="style-logo"  src="logo-image.png" alt="logo"/></div>
                            <div><p>
                                FII Healthy
                            </p></div>
                </div>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row" id={window.location.pathname == val.link ? "active" : ""} onClick={() => { window.location.pathname = val.link }}>
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;