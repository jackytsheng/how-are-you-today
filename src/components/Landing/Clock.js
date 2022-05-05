import moment from 'moment';
export function CountdownTracker(label, value) {
  let el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML =
    '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
    '<span class="flip-clock__slot">' +
    label +
    '</span>';

  this.el = el;

  let top = el.querySelector('.card__top'),
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

function getTimeSince(startTime) {
  let t = Date.parse(new Date()) - Date.parse(startTime);
  let a = moment(Date.now());
  let b = moment(startTime);

  let Years = a.diff(b, 'year');
  b.add(Years, 'years');

  let Months = a.diff(b, 'months');
  b.add(Months, 'months');

  let Days = a.diff(b, 'days');
  b.add(Days, 'days');

  return {
    Total: t,
    Years,
    Months,
    Days,
    Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((t / 1000 / 60) % 60),
    Seconds: Math.floor((t / 1000) % 60),
  };
}

export function Clock(countdown) {
  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  let trackers = {},
    t = getTimeSince(countdown),
    key,
    timeinterval;

  for (key in t) {
    if (key === 'Total') {
      continue;
    }
    trackers[key] = new CountdownTracker(key, t[key]);
    this.el.appendChild(trackers[key].el);
  }

  let i = 0;
  function updateClock() {
    timeinterval = requestAnimationFrame(updateClock);

    // throttle so it's not constantly updating the time.
    if (i++ % 10) {
      return;
    }

    let t = getTimeSince(countdown);

    for (key in trackers) {
      trackers[key].update(t[key]);
    }
  }

  setTimeout(updateClock, 500);
}
