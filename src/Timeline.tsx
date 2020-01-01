import React, {CSSProperties} from 'react';
import './App.css';
import Header from './components/Header';
import TimelineEvent, { TimelineEventObject } from './components/TimelineEvent';


interface TimelineProps {
  headerTitle?: string;
  data: Array<TimelineEventObject>;
  showMemories?: boolean;
  renderHeader?: boolean;
  headerStyles?: CSSProperties;
  textStyles?: CSSProperties;
  timelineStyles?: CSSProperties;
}

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
  const { headerTitle, data, showMemories = false, renderHeader, headerStyles, textStyles, timelineStyles } = props;
  return (
    <div className="App">
     { renderHeader &&  (
        <Header
          title={headerTitle}
          headerStyles={headerStyles} 
          textStyles={textStyles}
        />)
      }
      <TimelineEvent
        data={data}
        timelineStyles={timelineStyles}
        showMemories={showMemories} />
    </div>
  );
}

export default Timeline;
