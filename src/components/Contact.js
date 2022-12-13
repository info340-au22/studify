import React from "react";

export function Contact(props) {
    return (
        <main className="contact container">
            <h2>Contact Us</h2>
            <div className="contact-div">
                <div className="contact-member-div">
                    <h4>Minh Mai</h4>
                    <div className="portrait">
                        <img src="img/minh-mai.jpeg" alt="Minh's avatar"/>
                    </div>
                    <div className="creator-normal-text">
                        <p className="contact-text">To contact Minh via email, you can visit at <a href="mailto: mcm2304@uw.edu">mcm2304@uw.edu</a></p>
                    </div>
                </div>
                <div className="contact-member-div">
                    <h4>Luong Quan</h4>
                    <div className="portrait">
                        <img src="img/luong-quan.jpg" alt="Luong's avatar"/>
                    </div>
                    <div className="creator-normal-text">
                        <p className="contact-text">To contact Luong via email, you can visit at <a href="mailto: luongq@uw.edu">luongq@uw.edu</a></p>
                    </div>
                </div>
            </div>
        </main>
    )
}