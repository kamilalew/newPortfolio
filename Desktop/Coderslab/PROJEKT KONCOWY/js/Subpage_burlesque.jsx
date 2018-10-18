import React from "react";

export default class Subpage_burlesque extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/bur2.jpg",
                "../images/bur.jpg",
                "../images/bur3.jpg",
                "../images/bur4.jpg",
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
                        <h1>House of Burlesque</h1>
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
                        <p>House of Burlesque is the UK's top burlesque production house. Run by international showgirl Tempest Rose, HOB first shot to critical acclaim in 2010 with 'Circus Burlesque', when they sold out the prestigious Assembly Rooms in Edinburgh and won Edinburgh Spotlight's Pick of the Fringe Award. The show went on to perform twice at The Theatre Royal in Windsor after beginning life in 2009 at Islington's Kings Head Theatre.<br/><br/>

                            Their next production 'House of Burlesque...Shipwrecked' toured UK theatres in 2012/13 in association with The Booking Office after a successful run at the legendary Madame Jojo's in Soho. House of Burlesque also runs 'Burlesque Idol, the UK's best burlesque newcomer competition in it's 9th year which was launched at Madame Jojo's where Tempest Rose also ran highly successful residencies with House of Burlesque...Banged Up, and The Love Show, and due to overwhelming success at the venue, proudly launched a weekly Saturday show - The House of Burlesque Speakeasy which now runs at Sway in Covent Garden.<br/> <br/> Burlesque Idol is now resident at the iconic Hippodrome Casino theatre in Leicester Square, toured the UK in 2016 and has sister shows in Australia and the USA run by Lola LaBelle.<br/><br/>

                            House of Burlesque are in the 6th year of a residency at the incredible London Wonderground now branded The Underbelly Festival - a 1920s paradiso spiegeltent, selling out the 605 capacity, and receiving high critical praise for bringing the representation of burlesque to a new level. <br/><br/>In 2017 Tempest Rose launched House of Burlesque 2.0 in conjunction with Alex Rochford for The Producers UK - beginning as an hour long revue at Vault Festival, 2.0 went on to a highly acclaimed run at  The Underbelly Festival on London's Southbank, and ended the year with a packed season at Christmas in Leicester Square, and  mini-season at The Piece Hall in Halifax. <br/><br/>A contemporary  production featuring multi-screen projections, bringing burlesque back to it's roots of satire and social commentary  with a fresh and dynamic take on the modern world, House of Burlesque 2.0 has revolutionised and re-defined the genre of burlesque receiving sensational reviews and praise. </p>
                    </div>
                </div>
            </div>
        );
    }
}