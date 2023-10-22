import Image from 'next/image';
import React, { FC, memo } from 'react';

import { ImageWrapper, SpotlightContainer, Subtitle, Title } from './styled';
import { SpotLightProps } from './types';

const Spotlight: FC<SpotLightProps> = ({ title, subtitle, poster }) => {
  return (
    <SpotlightContainer>
      <Title variant='h1'>{title}</Title>

      <Subtitle>{subtitle}</Subtitle>
      {poster && (
        <ImageWrapper>
          <Image alt={title} src={poster} blurDataURL={poster} fill placeholder='blur' />
        </ImageWrapper>
      )}
    </SpotlightContainer>
  );
};

export default memo(Spotlight);