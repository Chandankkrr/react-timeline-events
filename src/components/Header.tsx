import React, { CSSProperties } from 'react';

interface HeaderProps {
    title?: string;
    headerStyles?: CSSProperties;
    textStyles?: CSSProperties;
}

const Memory: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { title, headerStyles, textStyles } = props;

    return (
        <header 
            className="app-header" 
            style={{...headerStyles}}>
        <h1 style={{...textStyles}}>{title}</h1>
      </header>
    )
}

export default Memory;
