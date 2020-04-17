import React, {ReactNode} from 'react';
import {styled} from 'styles/themes/bridge';

interface Props {
  logo?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
}

export default function Layout({
  logo,
  button,
  children,
}: Props) {
  return (
    <LayoutStyle>
      <div className='content'>
        <div className='logo'>{logo}</div>
        {children}
        <div className='cta-button'>{button}</div>
      </div>
    </LayoutStyle>
  );
}

const LayoutStyle = styled.div`
  background-color: ${({theme}) => theme.backgroundColor};
  height: 100%;

  .content {
    position: relative;
    margin: 0 auto;
    padding: 65px 43px;
    width: 100%;
    max-width: 480px;
    height: 100%;
  }

  .logo {
    position: absolute;
    top: 26px;
    right: 18px;

    > svg {
      color: ${({theme}) => theme.logoColor};
    }
  }

  .cta-button {
    display: flex;
    position: absolute;
    bottom: 44px;
    left: 50%;
    justify-content: center;
    transform: translateX(-50%);
    width: 100%;
  }

  @media (max-width: 320px) {
    .content {
      padding: 65px 18px;
    }
  }
`;
