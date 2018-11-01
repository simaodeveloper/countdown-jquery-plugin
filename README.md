# countdown-jquery-plugin
Countdown jQuery Plugin

## Example

```html

<ul id="countdown">
    <li>
        <i data-countdown-time-days>00</i><br/>
        <span data-countdown-label-days >dia</span>
    </li>
    <li>
        <i data-countdown-time-hours>00</i><br/>
        <span data-countdown-label-hours >hora</span>
    </li>
    <li>
        <i data-countdown-time-minutes>00</i><br/>
        <span data-countdown-label-minutes >minuto</span>
    </li>
    <li>
        <i data-countdown-time-seconds>00</i><br/>
        <span data-countdown-label-seconds >segundo</span>
    </li>
</ul>
```

```javascript
  $el.countdown({
      date: "19 November 2018 00:00:00",
      format: "on", // "on" -> 02:15:46:07, null -> 2:15:46:7
      lang: "PT_BR",
      selectors: {
        time: {
            days: '[data-countdown-time-days]',
            hours: '[data-countdown-time-hours]',
            minutes: '[data-countdown-time-minutes]',
            seconds: '[data-countdown-time-seconds]'
          },
        label: {
            days: '[data-countdown-label-days]',
            hours: '[data-countdown-label-hours]',
            minutes: '[data-countdown-label-minutes]',
            seconds: '[data-countdown-label-seconds]'
          }
        },
        labels: {
          "EN": {
            day: 'day',
            days: 'days',
            hour: 'hour',
            hours: 'hours',
            minute: 'minute',
            minutes: 'minutes',
            second: 'second',
            seconds: 'seconds',
          }
        }
      }
  }).on('finish', function() {
      // console.log(this); // countdown element
  }).on('timeupdate', function({ days, hours, minutes, seconds }) {
      // console.log(`${days}:${hours}:${minutes}:${seconds}`);
  });
```
