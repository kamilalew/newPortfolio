import React from "react";

export default class Footer extends React.Component {
    render() {
        return(
            <div className="full_background1">
                <div className="container2">
                <div className="left_form">
                    <h2>GET IN TOUCH</h2>
                    <form method="post" className="form_footer">
                        <div className="text">
                            <input type="text" id="name" placeholder="Name"/>
                        </div>
                        <div className="text">
                            <input type="text" id="email" placeholder="Email"/>
                        </div>
                        <div className="text_area">
                            <textarea id="message" id="message" placeholder="Message"/>
                        </div>
                    </form>
                    <span className="button_send">
                        <button type="submit" className="btnSend">SEND</button>
                    </span>
                </div>

                <div className="right_form">
                    <h2>FOLLOW</h2>
                    <div className="icons_list">
                    <ul className="icons">
                        <li><a href="#" className="icon style2 fab fa-twitter"></a>
                        </li>
                        <li><a href="#" className="icon style2 fab fa-facebook"></a>
                        </li>
                        <li><a href="#" className="icon style2 fab fa-instagram"></a>
                        </li>
                        <li><a href="#" className="icon style2 fab fa-github"></a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}