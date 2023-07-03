import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';

const Portfolio = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('../../../public/project.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            })
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div className="text-center mt-9 mb-8">
            <h1 className="text-3xl">My <span className="text-neutral-600">Projects</span></h1>
            <p className="text-fuchsia-800">Take a Look</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-11/12 mx-auto">
                {cards.map(card => (
                    <SingleProject key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
