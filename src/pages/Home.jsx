import React from 'react';

import { Top, ProfilePic, CalendarButton, ReadsButton, VideosButton } from '../components';
import {  HomeReads } from '../containers';

const Home = () => {
  return (
    <section>
      <Top />
      <ProfilePic />
      <CalendarButton />
      <ReadsButton />
      <VideosButton />
      <HomeReads />
    </section>
  );
}

export default Home;