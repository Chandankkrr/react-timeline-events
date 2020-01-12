import React, { CSSProperties } from 'react';
import styles from '../css/App.module.css';

interface HeaderProps {
    title?: string;
    headerStyles?: CSSProperties;
    textStyles?: CSSProperties;
}

const Memory: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { title, headerStyles, textStyles } = props;

    return (
        <header 
            className={styles.appHeader} 
            style={{
                background: 'linear-gradient(to right, #E91E63 0%, #673AB7 100%)', 
                color: 'white', 
                minHeight: '65vh',
                borderBottom: '2px dotted #fff',
                ...headerStyles
            }}
        >
        <h1
            style={{
                color: 'white',
                fontSize: '5rem',
                ...textStyles
            }}
        >
            {title}
        </h1>
      </header>
    )
}

export default Memory;
