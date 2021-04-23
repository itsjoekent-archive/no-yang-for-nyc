import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/" passHref>
        <a>
          <Image src="/logo.svg" width={100} height={60} />
        </a>
      </Link>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  position: absolute;
  top: 32px;
  left: calc(50vw - 50px);
  z-index: 10;

  img {
    cursor: pointer;
  }
`;
