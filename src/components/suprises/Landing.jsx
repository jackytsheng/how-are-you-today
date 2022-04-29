import React from 'react';
import styled from 'styled-components';
const halfHeight = '0.72em';
const borderRaius = '0.15em';
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlipClock = styled.div`
  text-align: center;
  perspective: 400px;
  margin: 20px auto;
`;
const FlipClockPiece = styled.span`
  display: inline-block;
  margin: 0 5px;
`;
const Card = styled.b`
  display: block;
  position: relative;
  padding-bottom: ${halfHeight};
  font-size: 9vw;
  line-height: 0.95;
`;

const CardTop = styled.b`
  display: block;
  height: $halfHeight;
  color: #ccc;
  background: #222;
  padding: 0.25em 0.25em;
  border-radius: $borderRadius $borderRadius 0 0;
  backface-visiblity: hidden;
  transform-style: preserve-3d;
  width: 1.8em;
  transform: translateZ(0);
`;

const CardBottom = styled.b`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: solid 1px #000;
  background: #393939;
  border-radius: 0 0 $borderRadius $borderRadius;
  pointer-events: none;
  overflow: hidden;
  &:after {
    display: block;
    margin-top: -${halfHeight};
  }
`;

const CardBack = styled.b`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;

  &::before,
  &::after {
    display: block;
    height: $halfHeight;
    color: #ccc;
    background: #222;
    padding: 0.25em 0.25em;
    border-radius: $borderRadius $borderRadius 0 0;
    backface-visiblity: hidden;
    transform-style: preserve-3d;
    width: 1.8em;
    transform: translateZ(0);
  }

  &:before {
    content: attr(data-value);
    position: relative;
    z-index: -1;
    overflow: hidden;
  }
`;

const CardDesc = styled.span`
  font-size: 2vw;
`;

const Landing = () => {
  function CountdownTracker(label, value) {
    var el = document.createElement('span');

    el.className = 'flip-clock__piece';
    el.innerHTML =
      '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
      '<span class="flip-clock__slot">' +
      label +
      '</span>';

    this.el = el;

    var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

    this.update = function (val) {
      val = ('0' + val).slice(-2);
      if (val !== this.currentValue) {
        if (this.currentValue >= 0) {
          back.setAttribute('data-value', this.currentValue);
          bottom.setAttribute('data-value', this.currentValue);
        }
        this.currentValue = val;
        top.innerText = this.currentValue;
        backBottom.setAttribute('data-value', this.currentValue);

        this.el.classList.remove('flip');
        void this.el.offsetWidth;
        this.el.classList.add('flip');
      }
    };

    this.update(value);
  }

  // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    return {
      Total: t,
      Days: Math.floor(t / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((t / 1000 / 60) % 60),
      Seconds: Math.floor((t / 1000) % 60),
    };
  }

  function getTime() {
    var t = new Date();
    return {
      Total: t,
      Hours: t.getHours() % 12,
      Minutes: t.getMinutes(),
      Seconds: t.getSeconds(),
    };
  }

  function Clock(countdown, callback) {
    countdown = countdown ? new Date(Date.parse(countdown)) : false;
    callback = callback || function () {};

    var updateFn = countdown ? getTimeRemaining : getTime;

    this.el = document.createElement('div');
    this.el.className = 'flip-clock';

    var trackers = {},
      t = updateFn(countdown),
      key,
      timeinterval;

    for (key in t) {
      if (key === 'Total') {
        continue;
      }
      trackers[key] = new CountdownTracker(key, t[key]);
      this.el.appendChild(trackers[key].el);
    }

    var i = 0;
    function updateClock() {
      timeinterval = requestAnimationFrame(updateClock);

      // throttle so it's not constantly updating the time.
      if (i++ % 10) {
        return;
      }

      var t = updateFn(countdown);
      if (t.Total < 0) {
        cancelAnimationFrame(timeinterval);
        for (key in trackers) {
          trackers[key].update(0);
        }
        callback();
        return;
      }

      for (key in trackers) {
        trackers[key].update(t[key]);
      }
    }

    setTimeout(updateClock, 500);
  }

  var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
  var c = new Clock(deadline, function () {
    alert('countdown complete');
  });
  document.body.appendChild(c.el);

  var clock = new Clock();
  document.body.appendChild(clock.el);

  return (
    <Wrapper>
      <FlipClock>
        <FlipClockPiece></FlipClockPiece>
        <FlipClockPiece></FlipClockPiece>
        <FlipClockPiece>
          <CardTop></CardTop>
          <CardBottom>7</CardBottom>
          <CardBack>
            <CardBottom></CardBottom>
          </CardBack>
          <CardDesc>Minutes</CardDesc>
        </FlipClockPiece>
      </FlipClock>
    </Wrapper>
  );
};

export default Landing;
