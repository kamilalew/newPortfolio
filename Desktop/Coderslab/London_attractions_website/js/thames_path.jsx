import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_thamespath from './Subpage_thamespath.jsx';

export default class Subsite_thamespath extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_thamespath/>
                <Footer/>
            </div>
        )
    }
}