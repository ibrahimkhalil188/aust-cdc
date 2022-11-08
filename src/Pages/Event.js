import React from 'react';
import EventHero from '../Components/Event/EventHero';
import EventStaticWithDetails from '../Components/Event/EventStaticWithDetails';

const Event = () => {
    return (
        <div>
            <EventHero></EventHero>
            <EventStaticWithDetails revers={false}></EventStaticWithDetails>
            <EventStaticWithDetails revers={true}></EventStaticWithDetails>
        </div>
    );
};

export default Event;