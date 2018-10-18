import React from "react";

export default class Subpage_littlevenice extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/Little_Venice.jpg",
                "../images/Little-Venice2.jpg",
                "../images/little_venice1.jpg",
                "../images/Little_venice3.jpg",
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
                        <h1>Little Venice</h1>
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
                        <p>Little Venice is a neighbourhood in London centred on an area of decorative houseboats and a partly tree-lined, three-way junction of canals. Many of its buildings are Regency white painted stucco terraced town houses and taller blocks (mansions) in the same style. The junction, a small fraction larger than usual along the canals, is that of the Paddington Arm of the Grand Union Canal and the Regent's Canal, and is also known as Browning's Pool or Little Venice Lagoon. To the south is the largely commercial Paddington Basin and Hyde Park.
                            <br/><br/>

                            Little Venice is also a ward frequently named when warding is done every 8-12 years by the City of Westminster for elections (for councillor representation). The ward had 11,040 residents according to the local authority in 2015. A main street wholly in the ward is Warwick Avenue. The area rises to the north and includes the tube station of the same name. Little Venice is a comparatively recent name for parts of Paddington and Maida Vale in the City of Westminster, which had been referred to as London's "Venice" for a century before "Little" was added. The name was in frequent use by the latter half of the 20th century.
                            <br/><br/>
                            The origin of the name is sometimes attributed to the poet Robert Browning who lived at Beauchamp Lodge, 19 Warwick Crescent, in 1862–87. This was disputed by Lord Kinross in 1966 who asserted that Lord Byron (1788–1824) first humorously compared the locale to Venice. The name "little Venice" was later formally applied to an electoral ward of the City of Westminster.</p>
                    </div>
                </div>
            </div>
        );
    }
}