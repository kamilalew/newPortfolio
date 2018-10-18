import React from "react";

export default class Subpage_StMartin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/st_m1.jpg",
                "../images/st_m2.jpg",
                "../images/st_m3.jpg",
                "../images/st_m4.jpg",
            ],
            counter: 0
        };
    }

    incCounter = () => {

        if(this.state.counter > this.state.images.length-2){
            this.setState({
                counter: 0,
            })
        }else {
            this.setState({
                counter: this.state.counter + 1,
            })
        }
    }
    incCounterback = () => {

        if(this.state.counter <= 0){
            this.setState({
                counter: this.state.images.length - 1,
            })
        }else{
            this.setState({
                counter: this.state.counter -1,
            })
        }
    }
    render() {
        return (
            <div className="full_background">
                <div className="container">
                    <div className="main_heading">
                        <h1>St Martin in the Fields</h1>
                    </div>
                    <div className="arrow_position">
                        <div className="nextArrow" onClick={this.incCounter}><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                        </div>
                        {/*<div className="subpage_photo_new">*/}
                        <div className="subpage_photo_ind_new" style={{backgroundImage: `url(${this.state.images[this.state.counter]})`}}></div>
                        {/*// <gg/div>*/}
                        <div className="backArrow" onClick={this.incCounterback}><i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="main_p">
                        <p>St Martin-in-the-Fields is an English Anglican church at the north-east corner of Trafalgar Square in the City of Westminster, London. It is dedicated to Saint Martin of Tours. There has been a church on the site since the medieval period. The present building was constructed in a Neoclassical design by James Gibbs in 1722–1726. Because of its prominent position, St Martin-in-the-Fields is one of the most famous churches in London. Dick Sheppard, Vicar from 1914 to 1927 who began programmes for the area's homeless, coined its ethos as the "Church of the Ever Open Door". <br/><br/>The church is famous for its work with young and homeless people through The Connection at St Martin-in-the-Fields, created in 2003 through the merger of two programmes dating at least to 1948. The Connection shares with The Vicar's Relief Fund the money raised each year by the BBC Radio 4 Appeal's Christmas appeal.<br/><br/>

                            The crypt houses a café which hosts jazz concerts whose profits support the programmes of the church. The crypt is also home to the London Brass Rubbing Centre, established in 1975 as an art gallery, book, and gift shop. A life-sized marble statue of Henry Croft, London's first pearly king, was moved to the crypt in 2002 from its original site at St Pancras Cemetery.
                            <br/><br/>
                            In January 2006, work began on a £36-million renewal project. The project included renewing the church itself, as well as provision of facilities encompassing the church's crypt, a row of buildings to the north and some significant new underground spaces in between. The funding included a grant of £15.35 million from the Heritage Lottery Fund. The church and crypt reopened in the summer of 2008.
                            <br/><br/>
                            Twelve historic bells from St Martin-in-the-Fields, cast 1725, are included in the peal of the Swan Bells tower in Perth, Australia. The current set of twelve bells, cast in 1988, which replaced the old ones are rung every Sunday between 9 am and 10 am by the St Martin in the Fields Band of Bell Ringers.</p>
                    </div>
                </div>
            </div>
        );
    }
}