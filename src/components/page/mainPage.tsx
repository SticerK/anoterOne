import React from 'react';
import Header from '../header/header';
import Profile from '../profile/profile';
import Projects from '../projects/projects';
import Section from '../UI/section';
import Title from '../UI/title';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainPage = () => {
  const theme = useSelector((state: RootState) => state.themeSlice.mode);

  return (
    <>
      <Header />
      <Section variant={theme === 0 ? 'silver' : ''}>
        <Title>Профиль</Title>
        <Profile />
      </Section>
      <Section>
        <Title>Портфолио</Title>
        <Projects />
      </Section>
      <Modal />
      <Footer />
    </>
  );
};

export default MainPage;
