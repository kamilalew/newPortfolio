import React from 'react';
import ReactDOM from 'react-dom';

import './../scss/style.scss';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import MainText from './MainText.jsx';
import Footer from './Footer.jsx';

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
                {/*<Slider/>*/}
                <MainText/>
                <Footer/>
            </div>
        )
    }
}

class Example extends React.Component{
    render(){
        return <h1>test</h1>
    }
}

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path= "/" component = {AllLondon}/>
                <Route exact path= "/camden-passage" component = {Example}/>
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