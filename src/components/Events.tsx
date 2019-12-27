import React from 'react';

export interface IEvent {
  title: string,
  description: string
  date: string,
};

interface IEventsProps {
  events: Array<IEvent>
};

const Events: React.FC<IEventsProps> = (props: IEventsProps) => {
  const { events } = props;
  return (
    <ul className="timeline">
    { events.map((item: IEvent, index: number) => {
      const { title, description, date } = item;
      return (<li
      key={`events-${title}`}
      className="events"
      data-date={date}
    >
      {date ? (
        <h3>{title}</h3>
      ) : (
        <h1>{title}</h1>
      )}
      <p>{description}</p>
    </li>)
    })
    }
    </ul>
  );
}

export default Events;