import React from 'react';
import Head from 'next/head';

import Layout from '@/conponents/Layout';
import AnimatedText from '@/conponents/AnimatedText';
import TransitionEffect from '@/conponents/TransitionEffect';
import projectData from '@/conponents/projects_data';
import ProjectItem from '@/conponents/ProjectItem';

const projects = () => {
  return (
    <>
      <Head>
        <title>Mahmoud Rizk | Projects</title>
        <meta
          name='description'
          content='Mahmoud Rizk Portfolio. About and Experience Section.'
        />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light pt-24 lg:pt-16'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-x-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 sm:gap-y-16 md:mb-[100px]'>
            {projectData.map((item) => (
              <div
                className={
                  !item.small ? 'col-span-12' : 'col-span-6 sm:col-span-12'
                }
              >
                <ProjectItem {...item} />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
