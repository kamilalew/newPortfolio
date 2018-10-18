import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_Camden from './Subpage_Camden.jsx';

export default class Subsite extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_Camden/>
                <Footer/>
            </div>
        )
    }
}