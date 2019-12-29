import React from 'react';

export interface Event {
  title: string;
  description: string;
  date: string;
  image: string;
}

interface EventsProps {
  events: Array<Event>;
}

const Events: React.FC<EventsProps> = (props: EventsProps) => {
  const { events } = props;
  return (
    <ul className="timeline">
    { events.map((item: Event) => {
      const { title, description, date, image } = item;
      return (<li
      key={`event-${title}`}
      className="event"
      data-date={date}
    >
      <h1>{title}</h1>
      <p>{description}</p>
         { image && <img src={image} alt={title} className="image" /> }
      </li>)
      })
    }
    </ul>
  );
}

export default Events;