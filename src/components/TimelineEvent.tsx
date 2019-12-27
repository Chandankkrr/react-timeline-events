import React from 'react';
import Events, { IEvent } from './Events';
import Memories, { IMemory } from './Memories';

interface ITimelineEvent {
    year: number,
    events: Array<IEvent>,
    memories: Array<IMemory>
}
interface ITimelineEventProps {
    data: Array<ITimelineEvent>
};

const TimelineEvent: React.FC<ITimelineEventProps> = (props: ITimelineEventProps) => {

    return (
        <div>
            {props.data.map((item: ITimelineEvent, index: number) => {
                return(
                <div key={`data-${index}`}>
                    <Events
                        events={item.events} />
                    <Memories
                        memories={item.memories} />
                    </div>
                )
            })}
        </div>
    );
}

export default TimelineEvent;
