import React from "react";

export default class Subpage_Camden extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/camden-passage.jpg",
                "../images/camden-Town-5.jpg",
                "../images/camden-town-6.jpg",
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
                        <h1>Camden Passage</h1>
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
                        <p>Camden Passage off Upper Street in the London Borough of Islington, minutes from Angel tube station is a picturesque car free London street. The passage is known for its antique shops, markets and its array of independent shops, cafes and restaurants.<br/><br/>

                            It hosts an antique market every Wednesday, Saturday, and Sunday (On the Corner of Camden Passage and Charlton Place, and at the Pierrepont Arcade Market space)
                            a book market on Thursday and Friday (at the Pierrepont Arcade Market space)
                            a market with an eclectic mix of vintage & retro clothes, pictures, vintage luggage, interesting one off items, collectables and bric-a-brac on Wednesday, Friday, Saturday and Sunday (along the Passage near the Camden Head pub)
                            free nightly comedy at the Camden Head public house
                            As for the independent shops, cafes and restaurants, these are typically open seven days a week.<br/><br/>

                            As for the independent shops, cafes and restaurants, these are typically open seven days a week.

                            History[edit]
                            It was built, as an alley, along the backs of houses on Upper Street, then Islington High Street, in 1767.<br/><br/>

                            The antiques market was founded in the 1960s, in conjunction with the Metropolitan Borough of Islington by John Payton. The venture was initially successful, attracting over 350 traders, but recently the centre of Islington has undergone regeneration, leading to higher rents being asked at the renewal of leases.
                            <br/><br/>
                            Following some years of lying derelict, a former tram shed was reopened on 14 November 1979 as The Mall Antiques Arcade, and at its height housed over 35 dealers on its ground and lower ground floors. The building also housed other businesses, such as a restaurant in its upper floors, but the mall closed in 2008. In 2013 it became a Jack Wills shop, and as of 2014 was a Superdry store. In 2016 it became a sofa.com store.
                            <br/><br/>
                            The closure of the arcade reflects the reduction in the number of antique traders in the nearby Camden Passage. The building is a Grade II listed building. Its severe windowless brick aspect is dictated by its original use, English Heritage describe its architecture as influenced by, and a tribute to, Newgate Prison (by George Dance the Younger), which had been demolished in 1902, three years before this building's construction by the LCC.</p>
                    </div>
                </div>
            </div>
        );
    }
}