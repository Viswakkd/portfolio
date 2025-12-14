import './contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Contact(){
    return(
        <div className="contact-box" id="contact">
            <p>Get In Touch</p>
            <h1>Contact Me</h1>
            <div className="link-box">
                <div className="mail"><MdOutlineEmail /><a target='_blank' rel='noopener noreferrer' href='mailto:viswabharathyv@outlook.com'>viswabharathyv@outlook.com</a></div>
                <div className="linked-in"><FaLinkedin /><a target='_blank' href='https://www.linkedin.com/in/viswabharathy-viswanathan-a7520b221/'>LinkedIn</a></div>
            </div>
            <div className="contact-form">
                <div className="first">
                    <div className="row-11">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />
                    </div>
                    <div className="row-12">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                </div>
                <div className="second">
                    <div className="row-21">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="row-22">
                        <label htmlFor="mobile">Cell</label>
                        <input type="tel" id="mobile" />
                    </div>
                </div>
                <div className="third">
                    <label htmlFor="message">Subject</label>
                    <div className="editor" contentEditable="true" id="message"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;