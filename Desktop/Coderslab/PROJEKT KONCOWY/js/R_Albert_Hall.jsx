import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_R_Albert_Hall from './Subpage_R_Albert_Hall.jsx';

export default class Subsite_R_Albert_Hall extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_R_Albert_Hall/>
                <Footer/>
            </div>
        )
    }
}