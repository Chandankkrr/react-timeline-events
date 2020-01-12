import React from 'react';
import styles from '../css/App.module.css';

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
      <div className={styles.imageContainer}>
      {memories.map((memory: Memory) => {
        const { title, source, type } = memory;
            return (
              <a
                href={source}
                data-lightbox="homePortfolio"
                key={`memory-${title}`}
                className={styles[type]}
              >
                <img src={source} alt={title}/>
              </a>
            );
          })}
      </div>
    )
}

export default Memories;
