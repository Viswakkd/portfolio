import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import FadeInSection from './FadeInSection';
import { useForm } from "react-hook-form";
function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <FadeInSection>
            <div className="contact-box" id="contact">
                <p>Get In Touch</p>
                <h1>Contact Me</h1>
                <div className="link-box">
                    <div className="mail"><MdOutlineEmail /><a target='_blank' rel='noopener noreferrer' href='mailto:viswabharathyv@outlook.com'>viswabharathyv@outlook.com</a></div>
                    <div className="linked-in"><FaLinkedin /><a target='_blank' href='https://www.linkedin.com/in/viswabharathy-viswanathan-a7520b221/'>LinkedIn</a></div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="first">
                        <div className="row-11">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name"
                                {...register("firstName", { required: "First Name is required" })}
                            />
                            {errors.firstName && <small>{errors.firstName.message}</small>}
                        </div>
                        <div className="row-12">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name"
                                {...register("lastName")}
                            />
                        </div>
                    </div>
                    <div className="second">
                        <div className="row-21">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"
                                {...register("email",
                                    {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+\.\S+$/,
                                            message: "Invalid email address",
                                        }
                                    }
                                )}
                            />
                            {errors.email && <small>{errors.email.message}</small>}
                        </div>
                        <div className="row-22">
                            <label htmlFor="mobile">Cell</label>
                            <input
                                type="tel"
                                id="mobile"
                                {...register("mobile", {
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter valid 10 digit number"
                                    }
                                })}
                            />
                            {errors.mobile && <small>{errors.mobile.message}</small>}
                        </div>
                    </div>
                    <div className="third">
                        <label htmlFor="message">Subject</label>
                        <div className="editor">
                            <textarea  
                            id="message"
                            rows={6}
                            {...register("message",{
                                required:"Message is required"
                            })}
                            ></textarea>
                            {errors.message && <small>{errors.message.message}</small>}
                        </div>
                    </div>
                    <div className='smt-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </FadeInSection>
    )
}

export default Contact;