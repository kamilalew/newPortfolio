import React from "react";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input1: '',
            input2:'',
            input3: '',
            message: [],
        }
    }


        handleChange1 = (e) => {
            this.setState({
                input1: e.target.value,
            })
        };

       handleChange2 = (e) => {
        this.setState({
            input2: e.target.value,
        })
    };

    handleChange3 = (e) => {
        this.setState({
            input3: e.target.value,
        })
    };

    // handleChange4 = (e) => {
    //     this.setState({
    //         input1: '',
    //         input2:'',
    //         input3: '',
    //         message: [],
    //     })
    // };



    handleSubmit =(e)=>{
        e.preventDefault();
        const newArray=[];


        if (this.state.input1.length <= 2) {
            newArray.push("Please enter more than 2 characters in the 'name' field");
        }


        if (this.state.input2.indexOf("@") ===-1) {
            newArray.push("@ is missing from the email address");
        }

        if (this.state.input3.length <= 0) {
            newArray.push("Message field can't be blank");
        }

        if (this.state.input1.length > 2 && this.state.input2.indexOf("@") !==-1 && this.state.input3.length > 0) {
            newArray.push("Thanks for messaging us");
            this.setState({
                input1: '',
                input2:'',
                input3: '',
                message: [],
            })
        }

        this.setState({
            message: newArray,
        })
    };


    render(){

        return(
            <div className="full_background1">
                <div className="container2">
                <div className="left_form">
                    <h2>GET IN TOUCH</h2>
                    <div>{this.state.message.length ===0 ? "": this.state.message.map(m=><p className="array">{m}</p>)}</div>
                    <form method="post" className="form_footer" onSubmit={this.handleSubmit}>
                        <div className="text">
                            <input type="text" id="name" placeholder="Name" onChange={ this.handleChange1 } value={this.state.input1}/>
                        </div>
                        <div className="text">
                            <input type="text" id="email" placeholder="Email" onChange={ this.handleChange2 } value={this.state.input2}/>
                        </div>
                        <div className="text_area">
                            <textarea id="message" id="message" placeholder="Message" onChange={ this.handleChange3 } value={this.state.input3}/>
                        </div><span className="button_send">
                        <button type="submit" className="btnSend" onClick={ this.handleClick3 }>SEND</button>
                    </span>
                    </form>

                </div>

                <div className="right_form">
                    <h2>FOLLOW</h2>
                    <div className="icons_list">
                    <ul className="icons">
                        <li><a href="https://twitter.com/BBCLondonNews" className="icon style2 fab fa-twitter"></a>
                        </li>
                        <li><a href="https://www.theguardian.com/technology/2017/dec/04/facebooks-new-london-office-brings-800-jobs-to-the-capital" className="icon style2 fab fa-facebook"></a>
                        </li>
                        <li><a href="https://www.instagram.com/london/?hl=en" className="icon style2 fab fa-instagram"></a>
                        </li>
                        <li><a href="https://github.com/IBMCodeLondon" className="icon style2 fab fa-github"></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}