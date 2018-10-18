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
                    <li><NavLink to ="/camden-passage">Camden Passage</NavLink></li>
                    <li><a href="#">Isabella Plantation</a></li>
                    <li><a href="#">Leighton House</a></li>
                    <li><a href="#">Little Venice</a></li>
                    <li><a href="#">Royal Albert Hall</a></li>
                    <li><a href="#">St Martin in the Fields</a></li>
                    <li><a href="#">Thames Path</a></li>
                    <li><a href="#">House of Burlesque</a></li>
                    <li><a href="#">Wilton's Music Hall</a></li>
                </ul>
            </div>

        )
    }
}





