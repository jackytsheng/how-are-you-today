import React, { useEffect } from 'react';
import { Clock } from './Clock';
import Menu from './Menu';
import { StartTogetherDate, DateWeKnow, DateWeMet, DateWeEngaged} from './Constant';
import './Landing.css';
import Loading from '../Loading';

const Landing = () => {
  const setUpClock = (date, className) => {
    let c = new Clock(date);

    let clockNode = document.querySelector(`.${className}`);
    while (clockNode.childElementCount !== 0) {
      clockNode.removeChild(clockNode.firstChild);
    }
    clockNode.appendChild(c.el);
  };

  useEffect(() => {
    setUpClock(StartTogetherDate, 'togetherClock');
    setUpClock(DateWeMet, 'metClock');
    setUpClock(DateWeKnow, 'knowClock');
    setUpClock(DateWeEngaged, 'engagedClock');
  }, []);

  return (
    <div className='landing-wrapper'>
      <Loading />
      <div className='landing-clock'>
        <ClockSection
          title={'距离我们在一起已经'}
          clockName={'togetherClock'}
        />
        <ClockSection title={'距离我们第一次见面已经'} clockName={'metClock'} />
        <ClockSection title={'距离我们相识已经'} clockName={'knowClock'} />
        <ClockSection title={'距离求婚纪念日💍'} clockName={'engagedClock'} />
      </div>
      <Menu />
    </div>
  );
};
const ClockSection = ({ title, clockName }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className={clockName}></div>
    </div>
  );
};

export default Landing;
