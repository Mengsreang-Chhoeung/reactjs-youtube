import React from "react";
import "./index.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
    const {} = props;

    return (
        <div className="footer">
            <p>Powered by <a title="W3.CSS" href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
        </div>
    );
};

export default Footer;
