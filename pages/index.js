import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import loadContent from '../content';
import Logo from '../components/Logo';
import useCopy from '../hooks/useCopy';

export default function Home(props) {
  const { content } = props;

  const t = useCopy();

  return (
    <React.Fragment>
      <Head>
        <title>{t('title', content.site)}</title>
      </Head>
      <Page>
        <Logo />
        <CoverPhotoContainer>
          <CoverPhotoOverlay />
          <img src="/yang.png" alt={t('hero-alt-text', content.site)} />
        </CoverPhotoContainer>
      </Page>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const content = await loadContent();

  return {
    props: {
      content,
    },
  }
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.navy};
`;

const CoverPhotoContainer = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center center;
    z-index: 1;
  }
`;

const CoverPhotoOverlay = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: linear-gradient(to bottom, rgba(43, 45, 66, 0.15), #2B2D42);
`;
