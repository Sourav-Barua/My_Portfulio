import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        // Replace 'resume.pdf' with the actual file name and extension
        const fileUrl = '/src/Components/ResumeDownload/Resume.pdf';
        window.open(fileUrl, '_blank'); 
    };

    return (
        <button onClick={handleDownload} className="btn btn-primary ">
            Download Resume
            <i class="uil uil-arrow-circle-down"></i>   
        </button>
    );
};

export default Resume;