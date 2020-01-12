import React, { CSSProperties } from 'react';
import Events, { Event } from './Events';
import Memories, { Memory } from './Memories';

export interface TimelineEventObject {
    events: Array<Event>;
    memories: Array<Memory>;
}

interface TimelineEventProps {
    data: Array<TimelineEventObject>;
    showMemories?: boolean;
    timelineStyles?: CSSProperties;
}

const TimelineEvent: React.FC<TimelineEventProps> = (props: TimelineEventProps) => {
    const { data, showMemories, timelineStyles } = props;
    return (
        <div style={{
            background: 'linear-gradient(to right, #673AB7 0%, #E91E63 100%)',
            ...timelineStyles
            }}>
            {data.map((item: TimelineEventObject, index: number) => {
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
