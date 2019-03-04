import React from "react";
import './ticket.css';

const Ticket = ({ ticket }) => {

  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    stops,
    price
  } = ticket;

  return (
    <div className="ticket">
      <div className="ticket__left">
        <div className="ticket__image"></div>
        <button className="ticket__button">Купить<br></br> за {price}</button>
      </div>
      <div className="ticket__right">
        <div className="date">
          <span className="date__time">
            {departure_time}
                </span>
          <span className="date__place">
            {origin}, {origin_name}
                </span>
          <span className="date__day">
            {departure_date}
                </span>
        </div>
        <div className="stops">{stops}</div>
        <div className="date">
          <span className="date__time date__time_align-right">
            {arrival_time}
                </span>
          <span className="date__place">
            {destination_name}, {destination}
                 </span>
          <span className="date__day">
            {arrival_date}
                </span>
        </div>
      </div>
    </div>
  );
}

export default Ticket;