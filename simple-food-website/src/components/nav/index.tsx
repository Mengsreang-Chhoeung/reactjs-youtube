import React from "react";
import "./index.css";

interface NavProps {}

const Nav: React.FC<NavProps> = (props) => {
    const {} = props;

    return (
        <nav>
            <a href="#" className="logo">Food Website</a>

            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;