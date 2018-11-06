import React from "react";

import {
    NavLink,
} from 'react-router-dom';




export default class Menu extends React.Component {
    state= {
        class: 'menu',
    };

    handleClick = () => {
        this.setState({
            class: (this.state.class === "menu") ? "active": "menu",
        })
    };

    render() {
const style={
    class: (this.state.class === "menu") ? "active": "menu",
};
        return(
            <div className={ this.state.class } style={style}>
                <button className='buttonHamburger' onClick={this.handleClick} ><i className="fas fa-ellipsis-v"></i><i
                    className="fas fa-bars"></i></button>
                <ul className="menuList" >
                    <li><NavLink activeClassName="activeItemMenu" to={"/"}>Home</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/camden-passage">Camden Passage</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/isabella-plantation">Isabella Plantation</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/leighton-house">Leighton House</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/little-venice">Little Venice</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/royal-albert-hall">Royal Albert Hall</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/st-martin-in-the-fields">St Martin in the Fields</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/thames-path">Thames Path</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/house-of-burlesque">House of Burlesque</NavLink></li>
                    <li><NavLink activeClassName="activeItemMenu" to="/wiltons-music-hall">Wilton's Music Hall</NavLink></li>
                </ul>
            </div>

        )
    }
}





