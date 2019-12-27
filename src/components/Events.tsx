import React from 'react';

export interface IEvent {
  title: string,
  description: string
  date: string,
  image: string
};

interface IEventsProps {
  events: Array<IEvent>
};

const Events: React.FC<IEventsProps> = (props: IEventsProps) => {
  const { events } = props;
  return (
    <ul className="timeline">
    { events.map((item: IEvent, index: number) => {
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