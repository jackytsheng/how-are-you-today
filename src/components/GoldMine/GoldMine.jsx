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
              src='//html5.gamedistribution.com/rvvASMiM/c50d8a3e26c54b66b67f5059eae2d13d/?gdpr-tracking=0&gdpr-targeting=0&gdpr-third-party=0&gd_sdk_referrer_url=https%3A%2F%2Fgamedistribution.com%2Fgames%2Fgold-miner&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2dhbWVkaXN0cmlidXRpb24uY29tL2dhbWVzL2dvbGQtbWluZXIiLCJwYXJlbnREb21haW4iOiJnYW1lZGlzdHJpYnV0aW9uLmNvbSIsInRvcERvbWFpbiI6ImdhbWVkaXN0cmlidXRpb24uY29tIiwiaGFzSW1wcmVzc2lvbiI6ZmFsc2UsImxvYWRlckVuYWJsZWQiOnRydWUsImhvc3QiOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInZlcnNpb24iOiIxLjUuMTQifQ%253D%253D'
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
