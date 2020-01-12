import React from 'react';
import styles from '../css/App.module.css';

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
    <div className={styles.timeline}>
    { events.map((item: Event, index: number) => {
      const { title, description, date, image } = item;
      const containerClassName = index % 2 === 0 
        ? `${styles.container} ${styles.left}` 
        : `${styles.container} ${styles.right}`
      return (
        <div className={containerClassName}
          key={`event-${title}`}
          data-date={date}
        >
          <div className={styles.content}>
            <h1>{title}</h1>
            <p>{description}</p>
              { image && <img src={image} alt={title} className={styles.image} /> }
          </div>
        </div>
        )
      })
    }
    </div>
  );
}

export default Events;