import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_StMartin from './Subpage_StMartin.jsx';

export default class Subsite_StMartin extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_StMartin/>
                <Footer/>
            </div>
        )
    }
}