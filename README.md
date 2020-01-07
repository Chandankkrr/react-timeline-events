# react-timeline-events

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Easily add a timeline events to your existing react application. 

[Checkout the demo site](https://chandankkrr.github.io/react-timeline-events/)

![react-timeline-events_1](https://raw.githubusercontent.com/Chandankkrr/react-timeline-events/master/screenshots/chandankkrr.github.io_react-timeline-events_%20(1).png)

![react-timeline-events_1](https://raw.githubusercontent.com/Chandankkrr/react-timeline-events/master/screenshots/chandankkrr.github.io_react-timeline-events_%20(2).png)

## Install

`npm install react-timeline-events`

## Usage

``` javascript
import Timeline from 'react-timeline-events';

...

<Timeline
    headerTitle='Social media in the last decade'
    data={data}
    showMemories={false}
    renderHeader={true}
    headerStyles={{
        // provide your custom styles
        background: 'linear-gradient(to right, #E91E63 0%, #673AB7 100%)',
        color: 'white',
        minHeight: '65vh',
        borderBottom: '2px dotted #fff'
    }}
    textStyles={{
        color: 'white',
        fontSize: '5rem'
    }}
    timelineStyles={{
        background: 'linear-gradient(to right, #673AB7 0%, #E91E63 100%)'
    }}
/>
```

## Timeline props

```typescript
    headerTitle: string;
    Provide a header title to be rendered (optional)

    data: Array<TimelineEventObject>;
    Array of timeline event object thats contains events and memories properties

    showMemories: boolean;
    Optional configuration to either show or hide memories (images) for a events (default: false)

    renderHeader: boolean;
    Optional configuration to either show or hide header component (default: false)

    headerStyles?: CSSProperties;
    Optional header styles configuration that allows to add additional styles to the header component (default: false)

    textStyles?: CSSProperties;
    Optional text styles configuration that allows to add additional styles to the header text (default: false)

    timelineStyles?: CSSProperties;
    Optional timeline styles configuration that allows to add additional styles to the timeline (default: false)

```

## TimelineEventObject props

```typescript
    events: Array<Event>;
    Array of events object

    memories: Array<Memory>;
    Array of memory object
```

## Event props

```typescript
    title: string;
    Event title

    description: string;
    Event description

    date: string;
    Event date

    image: string;
    Image source
```

## Memory props

```typescript
    title: string;
    Memory title

    source: string;
    Image source

    type: string;
    Image type, one of big, horizontal or vertical
```
