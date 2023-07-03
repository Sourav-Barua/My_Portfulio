import { useState } from 'react';
import './navbar.css'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');

    const navItems = [
        { label: 'Home', path: '#home' },
        { label: 'About', path: '#about' },
        { label: 'Skills', path: '#skill' },
        { label: 'Projects', path: '#portfolio' },
        { label: 'Contact', path: '#contact' }
    ];

    const handleLinkClick = (label) => {
        setActiveLink(label);
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item, index) => (
                            <li key={index} className={activeLink === item.label ? 'active' : ''}>
                                <a onClick={() => handleLinkClick(item.label)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl name_style">Sourav B.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, index) => (
                        <li key={index} className={activeLink === item.label ? 'active' : ''}>
                            <a onClick={() => handleLinkClick(item.label)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Send Message</a>
            </div>
        </div>
    );
};

export default Navbar;
