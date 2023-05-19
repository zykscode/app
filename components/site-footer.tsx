import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import React from 'react';

import { ModeToggle } from './mode-toggle';
import styles from './styles.module.css';

type Props = {
  links: {
    twitter?: string;
    github?: string;
    youtube?: string;
  };
};

export const SiteFooter = ({ links }: Props) => {
  const { twitter, github, youtube } = links;
  return (
    <footer className="container py-2 ">
      <div className="flex flex-col items-center justify-between gap-4 border-t  py-10 md:h-24 md:flex-row md:py-0">
        <div className="order-1 md:order-2">
          <ModeToggle />
        </div>
        <h3 className="order-3 md:order-1">hello 1</h3>
        <div className={`${styles.social} order-2 md:order-3`}>
          {twitter && (
            <a
              className={styles.twitter}
              href={`https://twitter.com/${twitter}`}
              title={`Twitter @${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          )}

          {github && (
            <a
              className={styles.github}
              href={`https://github.com/${github}`}
              title={`GitHub @${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
          {youtube && (
            <a
              className={styles.youtube}
              href={`https://www.youtube.com/${youtube}`}
              title={`YouTube ${youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
