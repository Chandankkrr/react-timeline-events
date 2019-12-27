import React, { CSSProperties } from 'react';

interface IHeaderProps {
    imageSource?: string,
    title?: string,
    headerStyles?: CSSProperties,
    textStyles?: CSSProperties,
};

const Memory: React.FC<IHeaderProps> = (props: IHeaderProps) => {
    const { imageSource, title, headerStyles, textStyles } = props;

    return (
        <header className="app-header" style={{backgroundImage: `url('${imageSource}')`,...headerStyles}}>
        <h1 style={{...textStyles}}>{title}</h1>
      </header>
    )
}

export default Memory;
