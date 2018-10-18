import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_burlesque from './Subpage_burlesque.jsx';

export default class Subsite_burlesque extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_burlesque/>
                <Footer/>
            </div>
        )
    }
}