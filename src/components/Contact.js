import React, { useRef, useState } from "react"
import { Row, Col, Container } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { EmailSVG } from "./svgComponents/EmailSVG"

export const Contact = () => {
    const formInitialDetails = {
        fullName: '',
        email: '', 
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      setButtonText("Sending...")
  
      emailjs
        .sendForm('service_9047ktd', 'template_b922r3q', form.current, {
          publicKey: '-QmLT9D6rzdUml8HZ',
        })
        .then(
          () => {
            alert("Email Sent")
            setFormDetails(formInitialDetails)
            setButtonText('Send')
          },
          () => {
            alert("Email Failed to Send")
            setButtonText('Send')
          },
        );
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails, 
            [category]: value
        });
    };


    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-item-center">
                <div className="contact-bx">
                    <Col md={6} style={{height: 500}}>
                        <div className="contact-svg-container">
                            <EmailSVG />
                        </div>
                        </Col>
                        <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row style={{marginTop: 70}}>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_name" placeholder="Full Name" value={formDetails.fullName} onChange={(e) => onFormUpdate('fullName', e.target.value)}  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" placeholder="Email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea name="message" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} />
                                </Col>
                                <input type="submit" value={buttonText} />
                            </Row>
                        </form>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}