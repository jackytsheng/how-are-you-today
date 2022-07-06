import React from 'react';
import styled from 'styled-components';
import BackBtn from '../BackBtn/BackBtn';
import rotate from './rotate.png';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

const Wrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  left: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none;

  & > div {
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;
    }
  }

  & .react-orientation--portrait {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const GoldMine = () => {
  return (
    <>
      <Wrapper>
        <DeviceOrientation lockOrientation={'landscape'}>
          <Orientation orientation='landscape' alwaysRender={false}>
            <iframe
              title='gold mine'
              src='https://html5.gamedistribution.com/c50d8a3e26c54b66b67f5059eae2d13d/?gd_sdk_referrer_url=https://jackytsheng.github.io/how-are-you-today/gold-mine'
              scrolling='none'
              height='100%'
              width='100%'
              frameborder='0'
            ></iframe>
          </Orientation>
          <Orientation orientation='portrait' alwaysRender={false}>
            <img src={rotate} alt='rotate iphone' />
          </Orientation>
        </DeviceOrientation>
      </Wrapper>
      <BackBtn simple={true} />
    </>
  );
};

export default GoldMine;
