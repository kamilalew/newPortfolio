import React from "react";

export default class Subpage_R_Albert_Hall extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/R_A2.jpg",
                "../images/R_A_3.jpg",
                "../images/R_A_4.jpg",
                "../images/R_A1.jpg",
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
                        <h1>Royal Albert Hall</h1>
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
                        <p>The Royal Albert Hall is a concert hall on the northern edge of South Kensington, London, which has held the Proms concerts annually each summer since 1941. It has a capacity of up to 5,272 seats. The Hall is a registered charity held in trust for the nation and receives no public or government funding.<br/><br/>

                            Since its opening by Queen Victoria in 1871, the world's leading artists from many performance genres have appeared on its stage and it has become one of the UK's most treasured and distinctive buildings. The location of some of the most notable events in British culture, each year it hosts more than 390 shows in the main auditorium, including classical, rock and pop concerts, ballet, opera, film screenings with live orchestra, sports, award ceremonies, school and community events, charity performances and banquets. A further 400 events are held each year in the non-auditorium spaces.
                            <br/><br/>
                            The Hall was originally supposed to have been called the Central Hall of Arts and Sciences, but the name was changed to the Royal Albert Hall of Arts and Sciences by Queen Victoria upon laying the Hall's foundation stone in 1867, in memory of her husband, Prince Albert, who had died six years earlier. It forms the practical part of a memorial to the Prince Consort – the decorative part is the Albert Memorial directly to the north in Kensington Gardens, now separated from the Hall by Kensington Gore.`<br/><br/>
                            The Hall at the opening ceremony, seen from Kensington Gardens
                            The Hall has been affectionately titled "The Nation's Village Hall". The first concert was Arthur Sullivan's cantata On Shore and Sea, performed on 1 May 1871.
                            <br/><br/>
                            Many events are promoted by the Hall, whilst since the early 1970s promoter Raymond Gubbay has brought a range of events to the Hall including opera, ballet and classical music. Some events include classical and rock concerts, conferences, banquets, ballroom dancing, poetry recitals, educational talks, motor shows, ballet, opera, film screenings and circus shows. It has hosted many sporting events, including boxing, squash, table tennis, basketball, wrestling including the first Sumo wrestling tournament to be held in London as well as UFC 38 (the first UFC event to be held in the UK), tennis and even a marathon.</p>
                    </div>
                </div>
            </div>
        );
    }
}