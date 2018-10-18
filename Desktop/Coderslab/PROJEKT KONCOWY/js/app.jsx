import React from 'react';
import ReactDOM from 'react-dom';

import './../scss/style.scss';
import Header from './Header.jsx';
import MainText from './MainText.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import Subsite from './camden_passage.jsx';
import Subsite_Isabella from './isabella_plantation.jsx';
import Subsite_leighton from './leighton_house.jsx';
import Subsite_littlevenice from './littlevenice.jsx';
import Subsite_R_Albert_Hall from './R_Albert_Hall.jsx';
import Subsite_StMartin from './StMartin.jsx';
import Subsite_thamespath from './thames_path.jsx';
import Subsite_burlesque from './burlesque.jsx';
import Subsite_wiltons from './wiltons.jsx';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';



class AllLondon extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainText/>
                <Gallery/>
                <Footer/>
            </div>
        )
    }
}

// const App = () => <Subsite />
//
// document.addEventListener('DOMContentLoaded', function(){
//
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path= "/" component = {AllLondon}/>
                <Route exact path= "/camden-passage" component = {Subsite}/>
                <Route exact path= "/isabella-plantation" component = {Subsite_Isabella}/>
                <Route exact path= "/leighton-house" component = {Subsite_leighton}/>
                <Route exact path= "/little-venice" component = {Subsite_littlevenice}/>
                <Route exact path= "/royal-albert-hall" component = {Subsite_R_Albert_Hall}/>
                <Route exact path= "/st-martin-in-the-fields" component = {Subsite_StMartin}/>
                <Route exact path= "/thames-path" component = {Subsite_thamespath}/>
                <Route exact path= "/house-of-burlesque" component = {Subsite_burlesque}/>
                <Route exact path= "/wiltons-music-hall" component = {Subsite_wiltons}/>
            </Switch>
        </HashRouter>
    );
}
document.addEventListener('DOMContentLoaded', function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});