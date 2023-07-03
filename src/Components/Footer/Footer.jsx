import Social from "../Social/Social";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4">
                  <Social/>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by <span className="name_style">Sourav Barua Niloy</span></p>
            </div>
        </footer>
    );
};

export default Footer;