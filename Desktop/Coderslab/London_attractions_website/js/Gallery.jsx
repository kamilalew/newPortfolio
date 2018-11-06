import React from "react";

import {
   Redirect
} from 'react-router-dom';


export default class Gallery extends React.Component {

   constructor(props){
       super(props);
       this.state={
           redirect: "",
       }
   }


    redirectToCamden=()=>{
        this.setState({
            redirect: "camden",
        })
    }
    redirectToIsabella=()=>{
        this.setState({
            redirect: "isabella",
        })
    }
    redirectToLeighton=()=>{
        this.setState({
            redirect: "leighton",
        })
    }
    redirectToLittlevenice=()=>{
        this.setState({
            redirect: "littlevenice",
        })
    }
    redirectToRoyalalbert=()=>{
        this.setState({
            redirect: "royalalbert",
        })
    }

    redirectToStMartin=()=>{
        this.setState({
            redirect: "stmartin",
        })
    }

    redirectToThames=()=>{
        this.setState({
            redirect: "thames",
        })
    }

    redirectToBurlesque=()=>{
        this.setState({
            redirect: "burlesque",
        })
    }

    redirectToWiltons=()=>{
        this.setState({
            redirect: "wiltons",
        })
    }

    render() {

       if(this.state.redirect==="camden"){
           return <Redirect to="/camden-passage"/>
       }

        if(this.state.redirect==="isabella"){
            return <Redirect to="/isabella-plantation"/>
        }

        if(this.state.redirect==="leighton"){
            return <Redirect to="/leighton-house"/>
        }

        if(this.state.redirect==="littlevenice"){
            return <Redirect to="/little-venice"/>
        }

        if(this.state.redirect==="royalalbert"){
            return <Redirect to="/royal-albert-hall"/>
        }

        if(this.state.redirect==="stmartin"){
            return <Redirect to="/st-martin-in-the-fields"/>
        }

        if(this.state.redirect==="thames"){
            return <Redirect to="/thames-path"/>
        }

        if(this.state.redirect==="burlesque"){
            return <Redirect to="/house-of-burlesque"/>
        }

        if(this.state.redirect==="wiltons"){
            return <Redirect to="/wiltons-music-hall"/>
        }

        return (
            <div className="full_background_1">

                <div className="container_photos">

                    <div className="container_1">
                        <div className="style1">
                            <div onClick={this.redirectToCamden} className="image1 images">
                                <div className="image_wrapper">
                                    <h2>Camden Passage</h2>
                                    <div className="content">
                                        <p>Tucked behind Upper Street in Islington, Camden Passage is a real treasure
                                            trove of cute cafes, independent boutiques, vintage shops – where you'll
                                            find everything from exquisite one-offs to fun party outfits – as well as an
                                            antiques market selling furniture, curios, war memorabilia and various
                                            bric-a-brac.</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="style2">
                            <div onClick={this.redirectToIsabella} className="image2 images">
                                <div className="image_wrapper">
                                    <h2>Isabella Plantation</h2>
                                    <div className="content">
                                        <p>The Isabella Plantation is a 40 acre woodland garden set within a Victorian
                                            woodland plantation planted in the 1830's. First opened to the public in
                                            1953, it is best known for its evergreen azaleas, which line the ponds and
                                            streams and at their peak of flower in late April and early May.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="style3">
                            <div onClick={this.redirectToLeighton} className="image3 images">
                                <div className="image_wrapper">
                                <h2>Leighton House</h2>
                                <div className="content">
                                    <p>The Arab Hall at the Leighton House Museum, former residence of Victorian-era painter Frederic, Lord Leighton. The Arab Hall is tiled with the ceramics and woodwork Leighton collected on trips to the Middle East.</p>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container_1">

                        <div className="style4">
                            <div onClick={this.redirectToLittlevenice} className="image4 images">
                                <div className="image_wrapper">
                                <h2>Little Venice</h2>
                                <div className="content">
                                    <p>Just as its name suggests, Little Venice is London's answer to the famous Italian city. Home to various waterside cafes, pubs and restaurants, the area comes alive in the summer months as Londoners jump on canal boats or walk along the riverside to nearby Camden or Regent's Park.</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="style5">
                            <div onClick={this.redirectToRoyalalbert} className="image5 images">
                                <div className="image_wrapper">
                                <h2>Royal Albert Hall</h2>
                                <div className="content">
                                    <p>The Royal Albert Hall is a concert hall on the northern edge of South Kensington, London. It's one of Britain's most iconic buildings, designed by Royal Engineers, and opened by Queen Victoria in 1871. Now Grade I listed, it hosts over 380 events in the main auditorium every year including a full range of music, sport and films. It has held the Proms concerts annually each summer since 1941.</p>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="style6">
                            <div onClick={this.redirectToStMartin} className="image6 images">
                                <div className="image_wrapper">
                                <h2>St Martin in the Fields</h2>
                                <div className="content">
                                    <p>St Martin-in-the-Fields has a proud history of hosting some of London’s best live classical music events. Audiences and performers come together in central London to enjoy a series of evening classical concerts, free lunchtime concerts, educational concerts, concerts for families and late-night music events in St Martin’s wonderfully rich acoustic.</p>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container_1">

                        <div className="style7">
                            <div onClick={this.redirectToThames} className="image7 images">
                                <div className="image_wrapper">
                                <h2>Thames Path</h2>
                                <div className="content">
                                    <p>The Thames is home to many of London's treasures, not many of them hidden, but the 40-mile-long Thames Path has many quieter spots to be discovered. The best way to explore is to hire a bike and cycle the length of the path, with public beaches, one of Charles Dickens’ favourite pubs (The Prospect of Whitby) and the village of Rotherhithe just some of the highlights to discover.</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="style8">
                            <div onClick={this.redirectToBurlesque} className="image8 images">
                                <div className="image_wrapper">
                                <h2>House of Burlesque</h2>
                                <div className="content">
                                    <p>UK top burlesque production company House of Burlesque run by Burlesque Star Miss Tempest Rose providing top quality Burlesque cabaret shows. From UK theatre tours and residencies at the famous Hippodrome Casino, the Underbelly Festival and Christmas in Leicester Square,  world class events in the UK and abroad to inspiring the next generation of performers and artists.</p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="style9">
                            <div onClick={this.redirectToWiltons} className="image9 images">
                                <div className="image_wrapper">
                                <h2>Wilton's Music Hall</h2>
                                <div className="content">
                                    <p>Wilton’s Music Hall is a gem in the heart of London and the oldest grand music hall in the world. It presents a year round programme of exceptional live music and world-class productions alongside learning and participation work that engages the local community and schools. </p>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
