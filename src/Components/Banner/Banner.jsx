import React from 'react';
import Social from '../Social/Social';
import './Banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    return (
        <div className="banner bg-gray-100 px-4 py-8 lg:flex lg:justify-between lg:items-center mt-6 mb-8" >
            <div className="text-center lg:w-2/5" data-aos="zoom-in-right">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    Hi, I am <span className="name_style">Sourav Barua</span>
                </h1>
                <div className="my_profession mb-4">
                    <h3>
                        -------- <span>Full Stack Web Developer</span> --------
                    </h3>
                </div>
                <p className="mb-4">
                    I'm creative designer based in Bangladesh, and I'm very passionate and dedicated to my work.
                </p>
                <a href="" className='btn btn-primary'>
                    Hire Me
                    <i className="uil uil-arrow-circle-right"></i>
                </a>
                <Social />
            </div>
            <div className="flex flex-col-reverse lg:flex-row picture mt-4 lg:mt-0 lg:w-3/5" data-aos="zoom-in-left">
                <img
                    src="https://i.ibb.co/kH02Vg7/profile1.png"
                    alt="Banner Picture"
                    className="w-full lg:w-auto rounded-se-full glowing-animation"
                />
            </div>

        </div>
    );
};

export default Banner;
