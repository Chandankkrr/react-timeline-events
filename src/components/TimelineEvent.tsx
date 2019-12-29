import React from 'react';
import Events, { Event } from './Events';
import Memories, { Memory } from './Memories';

interface TimelineEvent {
    year: number;
    events: Array<Event>;
    memories: Array<Memory>;
}
interface TimelineEventProps {
    data: Array<TimelineEvent>;
    showMemories: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = (props: TimelineEventProps) => {
    const { data, showMemories } = props;
    return (
        <div>
            {data.map((item: TimelineEvent, index: number) => {
                const { events, memories } = item;
                return(
                <div key={`data-${index}`}>
                    <Events
                        events={events} />
                    {showMemories && <Memories
                        memories={memories} />}
                    </div>
                )
            })}
        </div>
    );
}

export default TimelineEvent;
