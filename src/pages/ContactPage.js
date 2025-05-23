import React from "react";
import { ContactTitle } from "../components/Titles";
import Contact from "../components/Contact";

const ContactPage = () => {
    return (
        <div className="contact-page">
            <ContactTitle />
            <Contact />
        </div>
    );
}
export default ContactPage;