import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_leighton from './Subpage_leighton.jsx';

export default class Subsite_leighton extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_leighton/>
                <Footer/>
            </div>
        )
    }
}