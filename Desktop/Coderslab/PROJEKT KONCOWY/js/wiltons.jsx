import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_wiltons from './Subpage_wiltons.jsx';

export default class Subsite_wiltons extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_wiltons/>
                <Footer/>
            </div>
        )
    }
}