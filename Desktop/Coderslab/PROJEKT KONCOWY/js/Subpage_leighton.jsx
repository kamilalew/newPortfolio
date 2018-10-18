import React from "react";

export default class Subpage_leighton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/leighton-house.jpg",
                "../images/leighton_1.jpg",
                "../images/leighton_2.jpg",
                "../images/leighton_3.jpg",
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
                        <h1>Leighton House</h1>
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
                        <p>The Leighton House Museum is in the Holland Park district of Kensington and Chelsea in London. The painter Frederic, Lord Leighton commissioned the architect and designer George Aitchison to build him a combined home and studio. The resulting building, now Grade II* listed, is noted for its elaborate Orientalist and aesthetic interiors.<br/><br/>
                            Leighton House Museum
                            Lord LEIGHTON - Leighton House 12 Holland Park Road Holland Park London W14 8LZ.
                            Location	Holland Park
                            London, W14
                            United Kingdom
                            Coordinates	51°29′54.89″N 0°12′11.12″WCoordinates: 51°29′54.89″N 0°12′11.12″W
                            Built	1866–95
                            Architect	George Aitchison
                            Governing body	Kensington and Chelsea Borough Council
                            Listed Building – Grade II*
                            Official name: Leighton House
                            <br/><br/>
                            The Leighton House Museum is in the Holland Park district of Kensington and Chelsea in London. The painter Frederic, Lord Leighton commissioned the architect and designer George Aitchison to build him a combined home and studio. The resulting building, now Grade II* listed, is noted for its elaborate Orientalist and aesthetic interiors.<br/><br/>
                            The museum has been open to the public since 1929. In 1958 the London County Council commemorated Leighton with a blue plaque at the museum.The museum was awarded the European Union Prize for Cultural Heritage / Europa Nostra Award in 2012. It is open daily except Tuesdays, and is a companion museum to 18 Stafford Terrace, another Victorian artist's home in Kensington.
                            <br/><br/>
                            The house's pseudo-Islamic court has featured as a set in various film and television programs, such as Nicholas Nickleby (2002), Brazil (1985), and an episode of the drama series Spooks, as well as the music video for the songs "Golden Brown" by The Stranglers and "Gold" by Spandau Ballet.</p>
                    </div>
                </div>
            </div>
        );
    }
}