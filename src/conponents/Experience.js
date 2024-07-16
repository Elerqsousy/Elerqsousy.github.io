import React from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = React.useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
      justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;
          <a
            target='_blank'
            href={companyLink || '#'}
            className='text-primary capitalize hover:underline dark:text-primaryDark'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <div className='flex flex-col w-full'>
          {work.map((item, i) => (
            <p key={item + '-' + i} className='font-medium w-full md:text-sm'>- {item}</p>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
    once: true,
  });

  return (
    <div className='mt-64 lg:mt-32'>
      <h2
        className='font-bold text-8xl mb-16 w-full text-center 
      lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
      >
        Experience
      </h2>
      <div
        ref={ref}
        className='w-[75%] mx-auto relative overflow-hidden lg:w-[90%] md:w-full'
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='mt-2 absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:mt-3 xs:mt-4 xs:w-[2px] md:left-[28px] xs:left-[19px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
        <Details
            position='Co-founder & Full Stack Developer'
            company='Slow Fire'
            companyLink='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
            time='March 2024 – Present'
            address='Egypt, Remote'
            work={[
              'Food and beverage startup offering high-quality homemade food products through a mobile app.'
            ]}
          />
          <Details
            position='Founder & Full Stack Developer'
            company='Hire Hopefuls'
            companyLink='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
            time='June 2023 – Present'
            address='Egypt, Remote'
            work={[
              'Hire  Hopefuls is a Social Startup aiming to close the gap between Skilled Refugees and Displaced People worldwide, and their job markets.'
            ]}
          />
          <Details
            position='Front-End Web Developer'
            company='Sifi'
            companyLink='https://www.sifi.app/'
            time='April 2022 – June 2023'
            address='Saudi Arabia, Remote'
            work={[
              'Developed 100+ complex responsive pages with different access and authorization levels using testable reusable components built with React, Next.Js, JavaScript, Typescript, Redux, Tailwind, and Sass for user and admin portals in less than 8 months, saving 6 months of development time.',
              'Designed and optimized an automated Integration system using Redux Toolbox, Redux-Saga, and Context API for internally developed API endpoints, and global authorization and authentication across all portals.',
            ]}
          />
          <Details
            position='Front-End Web Developer, Intern'
            company='Apace Refunds'
            companyLink='https://apacerefunds.com/'
            time='March 2022 – July 2022'
            address='United States, Remote'
            work={[
              'Led the Development of the Merchant Portal; main view, using React, Redux Less, and ANT Design.',
              'Suggested and implemented a new code review policy to improve code quality and foster cross-team alignment.',
              'Designed and Integrated the payment gateway using Stripe and a custom-built authentication gate across all views.',
            ]}
          />
          <Details
            position='Mentor, Volunteer'
            company='Microverse'
            companyLink='https://www.microverse.org/'
            time='February 2022 – November 2023'
            address='United States, Remote'
            work={[
              'Mentored and supported 6 junior web developers through regular code reviews and weekly consultation meetings, providing technical guidance and fostering their professional growth.',
              'Identified opportunities to enhance code quality and performance by proposing improvements to code organization, ensuring efficient and optimized development processes.',
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
