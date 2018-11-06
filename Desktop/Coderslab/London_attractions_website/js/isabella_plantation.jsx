import React from "react";
import Header from './header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subpage_Isabella from './Subpage_Isabella.jsx';

export default class Subsite_Isabella extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Subpage_Isabella/>
                <Footer/>
            </div>
        )
    }
}