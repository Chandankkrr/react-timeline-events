import React from 'react';
import Events, { IEvent } from './Events';
import Memories, { IMemory } from './Memories';

interface ITimelineEvent {
    year: number,
    events: Array<IEvent>,
    memories: Array<IMemory>
}
interface ITimelineEventProps {
    data: Array<ITimelineEvent>,
    showMemories: boolean,
};

const TimelineEvent: React.FC<ITimelineEventProps> = (props: ITimelineEventProps) => {
    const { data, showMemories } = props;
    return (
        <div>
            {data.map((item: ITimelineEvent, index: number) => {
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
