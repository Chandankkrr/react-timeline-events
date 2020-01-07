import React from 'react';

export interface Memory{
    title: string;
    source: string;
    type: string;
}

interface MemoriesProps {
    memories: Array<Memory>;
}

const Memories: React.FC<MemoriesProps> = (props: MemoriesProps) => {
    const { memories } = props;
    return (
      <div className="img-container">
      {memories.map((memory: Memory) => {
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
