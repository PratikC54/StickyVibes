import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            Built with
            <FontAwesomeIcon icon={faHeart} className="footer-icon" />
            by <a href="https://pratiksenapati.netlify.app" target="_blank" rel="noreferrer">
                PratikC54
            </a>  &copy;2026 StickyVibes. All rights reserved.
        </footer>
    );

}

export default Footer