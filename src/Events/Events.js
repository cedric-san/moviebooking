import React, { useState } from 'react';

const Events = () => {
  const events = ['workshop', 'kids', 'comedy show', 'Talks', 'screening'];
  const eventsCards = [
    { eventName: 'Data Science', category: 'Tech', price: 'free' },
    { eventName: 'on the spot', category: 'comedy', price: 'free' },
    { eventName: 'Comedy Showcase', category: 'comedy', price: 'free' },
  ];

  return (
    <div>
      <h1>Events in Chennai</h1>
      {events.map((events) => {
        return (
          <span
            class="badge bg-primary"
            style={{ margin: '5px', padding: '10px' }}
          >
            {events}
          </span>
        );
      })}
      <ul>
        {eventsCards.map((movie, index) => {
          return (
            <li key={index}>
              <div>
                <div className="movieCards">
                  <img style={{backgroundColor:'red',width:'200px'}}
                    className="imgSize"
                    src={}
                    alt=""
                  />
                </div>

                <div>
                  <h4 style={{ width: '100px' }}>{movie.eventName}</h4>
                  <p>{movie.category} </p>
                  <p>{movie.price} </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
