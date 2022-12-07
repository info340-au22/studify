import React, {useState} from "react";

export function Contact(props) {
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    return(
        <main className="contact-div">
            <h2 className="tag-for-contact">Contact Us</h2>
                <div className="firstbox">
                    <br />
                    <h5>Hey, Studifier!!!</h5>
                    <h5>Let's us know your experience!!!</h5>
                    <br />
                    First name<br /><br />
                    <input className="contact-input"
                        name="firstname"
                        type="text"
                        value={firstname}
                        placeholder="Enter your first name here"
                        onChange={e => { setFname(e.target.value); }} />

                    <br /><br />

                    Last name<br /><br />
                    <input className="contact-input"
                        name="lastname"
                        type="text"
                        value={lastname}
                        placeholder="Enter your last name here"
                        onChange={e => { setLname(e.target.value); }} />

                    <br /><br />

                    Email<br /><br />
                    <input className="contact-input"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="Enter your email here"
                        onChange={e => { setEmail(e.target.value); }} />

                    <br /><br />

                    Review feedback<br /><br />
                    <input className="contact-input"
                        name="feedback"
                        type="text"
                        value={feedback}
                        placeholder="Enter your feedback here"
                        onChange={e => { setFeedback(e.target.value); }} />

                    <br /><br />

                    <button clasasName="contact-button" onClick={e=>{
                    if(firstname==='' || lastname==='' || feedback==='')
                        alert("FILL THE FIELDS")
                    else if(firstname.length>10 || lastname.length>10 || feedback.length>40)
                    {
                        alert("ENTER LESS THAN 40 CHARACTERS IN A PARTICULAR FIELD");
                    }
                    else{
                    props((list)=>{
                        return [
                            ...list,
                                    {
                                        fname: firstname,
                                        lname: lastname,
                                        emailaddress: email,
                                        review: feedback
                                    }
                               ];
                            }
                        );
                                
                        setFname("");
                        setLname("");
                        setEmail("");
                        setFeedback("");
                        }
                    }

                    } >Share my feedback</button>
                </div>
        </main>
    );
}