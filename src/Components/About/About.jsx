import React from 'react';
import Resume from '../ResumeDownload/Resume';
import './About.css'

const About = () => {
    return (
        <div className='mt-9 mb-8'>
            <div className="text-center">
                <h1 className="text-3xl">About <span className="text-neutral-600">Me</span></h1>
                <p className="text-fuchsia-800">My Introduction</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                <div className="lg:mr-10" data-aos="fade-up"
                    data-aos-duration="2000">
                    <img
                        src="https://i.ibb.co/hg8gw2b/profile-3.jpg"
                        alt="Banner Picture"
                        className="w-full lg:w-auto rounded-full glowing-border"
                    />
                </div>


                <div className="lg:w-2/3" data-aos="fade-up"
                    data-aos-duration="2000">
                    <div className="flex justify-center mt-5 lg:mt-0">
                        <div className="flex justify-center space-x-8">
                            {/* card-1 */}
                            <div className="border p-4 text-center rounded-lg transition duration-300 hover:bg-gray-100 hover:shadow-md">
                                <i className="uil uil-award-alt text-4xl"></i>
                                <p>Experience</p>
                                <p>2 Years</p>
                            </div>
                            {/* card-2 */}
                            <div className="border p-4 text-center rounded-lg transition duration-300 hover:bg-gray-100 hover:shadow-md">
                                <i className="uil uil-bag text-4xl"></i>
                                <p>Projects Completed</p>
                                <p>10+</p>
                            </div>
                            {/* card-3 */}
                            <div className="border p-4 text-center rounded-lg transition duration-300 hover:bg-gray-100 hover:shadow-md">
                                <i className="uil uil-phone-volume text-4xl"></i>
                                <p>Support</p>
                                <p>Online 24/7</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-5 lg:mt-10">
                        <p className="text-center lg:text-left">
                            Frontend developer, I create web pages with UI / UX user interface. I have years of experience, and many clients are happy with the projects carried out.
                        </p>
                    </div>

                    <div className="flex justify-center mt-5">
                        <Resume />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
