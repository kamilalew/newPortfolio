import React from "react";

export default class Subpage_thamespath extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/thames1.jpg",
                "../images/thames2.jpg",
                "../images/thames3.jpg",
                "../images/thames4.jpg",
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
                        <h1>Thames Path</h1>
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
                        <p>The Thames Path is a National Trail following the River Thames from its source near Kemble in Gloucestershire to the Thames Barrier at Charlton, south east London. It is about 184 miles (296 km) long.[1] A path was first proposed in 1948 but it only opened in 1996.<br/><br/>

                            The Thames Path's entire length can be walked, and a few parts can be cycled. Some parts of the Thames Path, particularly west of Oxford, are subject to flooding during the winter. The river is also tidal downstream from Teddington Lock and parts of the path may be under water if there is a particularly high tide. Most of the Thames Path uses the river towpath. Historically, towpath traffic crossed the river using many ferries, [3] but crossings in these places do not all exist now and some diversion from the towpath is necessary.
                            <br/><br/>
                            The Thames towpath [4] was generally extended upstream on the non-tidal river to Inglesham by the Thames Navigation Commission due to the opening of the now disused Thames and Severn Canal in 1789, one and a half miles upstream of the highest boat lock near Lechlade.[5] This point is the limit of navigation for powered craft and although there is a right of navigation for smaller craft up to Cricklade, there is no further towpath so if no other riverside right of way exists, the Thames path diverts away from the river to extend the route to Thames Head. A section of permissive path now exists alongside the river at Upper Inglesham.
                            <br/><br/>
                            Today, between Inglesham and Putney Bridge, the towpath still allows access by foot to at least one side of the river for the whole length of the river navigation (but not mill streams, backwaters or a few meanders cut off by lock cuttings). The main exception to this is a stretch of river without any dedicated path in Home Park, Windsor lost as a consequence of the removal of Datchet Bridge as part of changes due to the Windsor Castle Act 1848, and which accounts for the Thames Path's diversion from the river at Datchet. There are also two other short sections of river missing towpath either side of The Swan public house in Pangbourne, and between Marlow bridge and weir. Otherwise, between Inglesham and Putney, the Thames Path only make diversions from the remaining towpath due to the lack of a lock, bridge or ferry to cross the river in the original locations. There are also some lengths of river bypassed by navigation cuttings which are still accessible directly off the Thames Path at Sutton Pools, Penton Hook Lock and Desborough Island. </p>
                    </div>
                </div>
            </div>
        );
    }
}