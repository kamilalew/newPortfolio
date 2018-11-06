import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_littlevenice from './Subpage_littlevenice.jsx';

export default class Subsite_littlevenice extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_littlevenice/>
                <Footer/>
            </div>
        )
    }
}