import React from "react";

export default class Subpage_Isabella extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/Isabella-Plantation-Richmond-Park.jpg",
                "../images/isabella_1.jpg",
                "../images/isabella_2.jpg",
                "../images/isabella_3.jpg",
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
                        <h1>Isabella Plantation</h1>
                    </div>
                    <div className="arrow_position">
                        <div className="nextArrow" onClick={this.incCounter}><i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="subpage_photo_ind_new" style={{backgroundImage: `url(${this.state.images[this.state.counter]})`}}></div>

                        <div className="backArrow" onClick={this.incCounterback}><i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="main_p">
                        <p>Isabella Plantation, Richmond Park, London
                            Isabella Plantation is a woodland garden in Richmond Park in south west London. It is managed by The Royal Parks.
                            <br/><br/>
                            Originally located in a boggy part of Richmond Park, it was labelled on a 1771 map as Isabell Slade. Slade, or sleyt, meant a bog or open space between woods and or banks, and isabel meant dirty or greyish brown, referring to the colour of the soil there.
                            <br/><br/>
                            The Isabella Plantation was established in the early 19th century when Lord Sidmouth, who was Deputy Ranger of Richmond Park and a former Prime Minister of the United Kingdom, fenced it as an area of woodland to keep the park's deer out. After World War II it was transformed into a woodland garden. It is now organically run, resulting in a rich flora and fauna. Opened to the public in 1953, it is now a major visitor attraction in its own right.

                            <br/><br/>
                            Isabella Plantation in bloom in May
                            In October 2012 it was reported that about 40 per cent of the Isabella Plantation is covered with Rhododendron ponticum, a non-native and invasive variety of rhododendron introduced by the Victorians, and that this would be removed over the next five years.
                            <br/><br/>
                            In 2014, improvements were made to the Plantation to incorporate new direction signs, wheelchair-accessible pathways and toilets and a new shelter and gazebo through a project funded by the Heritage Lottery Fund. The works also incorporated de-silting of all three ponds in the Plantation and establishing new waterfalls in the streams, funded by The Royal Parks with contributions from the Friends of Richmond Park.</p>
                    </div>
                </div>
            </div>
        );
    }
}