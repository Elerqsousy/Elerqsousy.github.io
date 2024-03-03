import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import { GithubIcon } from '@/conponents/icons';
import BorderSection from '@/conponents/BorderSection';

const FramerImage = motion(Image);

const ProjectItem = ({
  type,
  title,
  summary = null,
  img,
  link,
  github,
  skills,
  small = false,
}) => {
  return (
    <BorderSection
      className={classNames({
        'flex-col justify-center !rounded-2xl p-6 dark:hover:shadow-[5px_5px_13px_light] xs:p-4':
          small,
      })}
      shadow={small ? false : true}
    >
      <Link
        href={link || github}
        target='_blank'
        className={classNames(
          'w-1/2 h-auto cursor-pointer rounded-lg lg:w-full max-h-[50vh] overflow-hidden',
          { '!w-full': small }
        )}
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw, 50vw'
          priority
        />
      </Link>
      <div
        className={classNames(
          'w-1/2 flex flex-1 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 h-full',
          { '!pl-0 mt-4 !w-full lg:text-lg md:text-base': small }
        )}
      >
        <span className='text-primary font-medium text-xl dark:text-primaryDark sm:text-sm'>
          {type}
        </span>
        <Link
          href={link || github}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2
            className={classNames(
              'my-2 w-full text-left text-4xl font-bold sm:text-base',
              {
                'text-3xl lg:text-2xl': small,
              }
            )}
          >
            {title}
          </h2>
        </Link>

        {summary && (
          <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
            {summary}
          </p>
        )}
        <ul className='mb-4 flex justify-start items-center flex-wrap'>
          {skills?.map((skill, i) => (
            <li
              key={skill + '-' + i}
              className='text-sm text-dark/75 dark:text-light/75'
            >
              {skill}
              {i < skills.length - 1 && <>, &nbsp;</>}
            </li>
          ))}
        </ul>
        <div
          className='flex items-center mt-auto'
        >
          <Link
            href={github}
            target='_blank'
            className={classNames('w-10', { 'w-8 md:w-6': small })}
          >
            <GithubIcon />
          </Link>
          {link && (
            <Link
              href={link}
              target='_blank'
              className={classNames('font-semibold ml-4 rounded-lg bg-dark hover:bg-dark/75 text-light py-1 px-6 ', 
              'dark:bg-light dark:hover:bg-light/75 dark:text-dark sm:px-4 sm:text-base', {
                'md:text-sm text:base px-5': small, 'text-lg': !small
              })}
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </BorderSection>
  );
};

export default ProjectItem;
