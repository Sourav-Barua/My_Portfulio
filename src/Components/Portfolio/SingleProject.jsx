import React, { useState } from 'react';

const SingleProject = ({ card }) => {
    const [showModal, setShowModal] = useState(false);

    const { id, projectName, projectImage, codeLink, liveSite, projectDetails } = card;

    const handleDetailsButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" >
            <figure>
                <img src={projectImage} className="h-56 w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {projectName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <a href={codeLink}>Git_Hub <i className="uil uil-github-alt"></i></a>
                    </div>
                    <div className="badge badge-outline">
                        <a href={liveSite}>Live-Site <i className="uil uil-link"></i></a>
                    </div>
                    <button
                        className="badge badge-outline"
                        onClick={handleDetailsButtonClick}
                    >
                        Details
                        <i className="uil uil-notes"></i>
                    </button>
                </div>
            </div>

            {/* Modal Dialog */}
            {showModal && (
                <div className="modal">
                    <div className="modal-box">

                        <div className="modal-content">
                            <h2>Project Details</h2>
                            <p>{projectDetails}</p>
                            <button
                                className="modal-close"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleProject;
