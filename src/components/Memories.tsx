import React from 'react';

export interface IMemory{
  title: string,
    source: string,
    type: string
};

interface IMemoriesProps {
    memories: Array<IMemory>
};

const Memories: React.FC<IMemoriesProps> = (props: IMemoriesProps) => {
    const { memories } = props;
    return (
      <div className="img-container">
      {memories.map((memory: IMemory, index: number) => {
        const { title, source, type } = memory;
            return (
              <a
                href={source}
                data-lightbox="homePortfolio"
                key={`memory-${title}`}
                className={type}
              >
                <img src={source} alt={title}/>
              </a>
            );
          })}
      </div>
    )
}

export default Memories;
