import React from "react";

export default class Subpage_wiltons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/Wiltons1.gif",
                "../images/Wiltons2.jpg",
                "../images/Wilt1.jpg",
                "../images/Wiltons4.jpg",
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
                        <h1>Wiltons Music Hall</h1>
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
                        <p>Wilton's Music Hall is a Grade II* listed building, built as a music hall and now run as a multi-arts performance space in Graces Alley,[1] off Cable Street in the London Borough of Tower Hamlets. It is one of very few surviving music halls and retains many original features.
                            <br/><br/>
                            Wilton's has been a producing venue since 2004. It produces imaginative, distinctive work that has roots in the early music hall tradition but reinterpreted for an audience of today, which means presenting a diverse and distinct programme including opera, puppetry, classical music, cabaret, dance, and magic. Situated at the heart of the historic East End within easy walking distance from The Tower of London, the River Thames and the City, it is a focus for theatrical and East End history, as well as a living theatre, concert hall, public bar and heritage site.
                            <br/><br/>
                            The venue recently underwent an extensive programme of restoration work. The theatre did not close at any point during the building works: instead running an interim arts programme called The Chrysalis Club. The award-winning[2] spaces reopened in October 2015. Wilton's is a unique building comprising a mid-19th Century grand music hall attached to an 18th-century terrace of three houses and a pub. Originally an alehouse dating from 1743 or earlier, it may well have served the Scandinavian sea captains and wealthy merchants who lived in neighbouring Wellclose Square. <br/><br/>From c. 1826, it was also known as The Mahogany Bar, reputedly because the landlord was the first to install a mahogany bar and fittings in his pub. In 1839 a concert room was built behind the pub and in 1843 it was licensed for a short time as The Albion Saloon, a saloon theatre, legally permitted to put on full-length plays. John Wilton bought the business in c. 1850, enlarged the concert room three years later, and replaced it with his 'Magnificent New Music Hall' in 1859. </p>
                    </div>
                </div>
            </div>
        );
    }
}