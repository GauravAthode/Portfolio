import Contact from "@/sections/Contact";
import { useSEO } from "@/hooks/useSEO";

const ContactPage = () => {
    useSEO({
        title: "Contact | Gaurav Athode — Full Stack Developer",
        description:
            "Get in touch with Gaurav Athode — Full Stack Developer open to opportunities, collaborations and interesting projects.",
        path: "/contact",
    });
    return (
        <div className="pt-20" data-testid="contact-page">
            <Contact />
        </div>
    );
};

export default ContactPage;
