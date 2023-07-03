import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div className='mt-9 mb-8'>
            <div className='text-center p-6'>
                <h1 className="text-3xl">My <span className="text-neutral-600">Skill</span></h1>
                <p className="text-fuchsia-800">Here It Is</p>
            </div>
            <div className="container">
                <div className="bar learning" data-skill="Mongo DB"></div>
                <div className="bar back basic" data-skill="Firebase"></div>
                <div className="bar back intermediate" data-skill="React"></div>
                <div className="bar front advanced" data-skill="CSS3"></div>
                <div className="bar front expert" data-skill="HTML5"></div>
            </div>
        </div>
    );
};

export default Skill;
