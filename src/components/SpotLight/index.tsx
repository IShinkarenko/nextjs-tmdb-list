import { Box, Typography } from '@mui/material';
import React from 'react';
import { ImageWrapper, SpotlightContainer, Subtitle, Title } from './styled';
import Image from 'next/image';

const Spotlight = () => {
  return (
    <SpotlightContainer>
      <Title variant='h1'>Enjoy big movies, hit series and more</Title>

      <Subtitle>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Subtitle>
      <ImageWrapper>
        <Image
          alt='Spotlight'
          src={'/spotlight.jpg'}
          blurDataURL={'/spotlight.jpg'}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
        />
      </ImageWrapper>
    </SpotlightContainer>
  );
};

export default Spotlight;
