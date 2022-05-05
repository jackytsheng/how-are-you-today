import React, { useEffect } from 'react';
import { Clock } from './Clock';
import { StartTogetherDate, DateWeKnow, DateWeMet } from './Constant';
import './Landing.css';

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
  }, []);

  return (
    <div className='landing-clock'>
      <ClockSection title={'距离我们在一起已经'} clockName={'togetherClock'} />
      <ClockSection title={'距离我们第一次见面已经'} clockName={'metClock'} />
      <ClockSection title={'距离我们相识已经'} clockName={'knowClock'} />
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
