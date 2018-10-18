import React from "react";
import Menu from './Menu.jsx';


export default class Header extends React.Component {
    render() {
        return(
            <div className="full_background">
                <div className="container">
                    <div className="main_header">
                        <div className="logo"><img src="../images/London_logo.jpg" id="LondonLogo"/></div>
                        <div className="menu"><Menu/></div>
                    </div>
                </div>
            </div>
        )
    }
}
