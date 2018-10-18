import React from "react";
import Slide from './Slide.jsx';
import RightArrow from './RightArrow.jsx';
import LeftArrow from './LeftArrow.jsx';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "../images/camden-passage.jpg",
                "../images/camden-passage1.jpg",
                "../images/camden-passage2.jpg",
    ],
            currentIndex: 0
        };
    }

goToPrevSlide = () => {

}

    goToNextSlide = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        }));
    }


    render() {
        return (
            <div className="slider">

                {
                    this.state.images.map((image) => (

                    <Slide image={image} />
                    ))
                }

                <LeftArrow goToPrevSlide={this.goToPrevSlide}/>
                <RightArrow goToNextSlide={this.goToNextSlide}/>
            </div>
        );
    }
}

