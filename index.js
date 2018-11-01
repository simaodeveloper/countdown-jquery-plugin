(function (e) {
    e.fn.countdown = function (t) {
        var interval;
        var days;
        var hours;
        var minutes;
        var seconds;
        var $this = this;

        function format(time) {
            return String(time).length >= 2 ? time : "0" + time;
        }

        function setLabel(label, time) {
            UI['label'+label].text(r.labels[r.lang][label.substr(0, label.length - 1) + (time == 1) ? '' : 's']);
        }

        function i() {
            eventDate = Date.parse(r.date) / 1e3;
            currentDate = Math.floor(e.now() / 1e3);

            if (eventDate < currentDate) {
                UI.el.trigger('finish');
                clearInterval(interval);
            } else {
                seconds = eventDate - currentDate;

                days = Math.floor(seconds / 86400);
                seconds -= days * 60 * 60 * 24;

                hours = Math.floor(seconds / 3600);
                seconds -= hours * 60 * 60;

                minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60;

                setLabel('days', days);
                setLabel('hours', hours);
                setLabel('minutes', minutes);
                setLabel('seconds', seconds);
            }

            UI.el.trigger('timeupdate', {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });

            if (r["format"] == "on") {
                days = format(days);
                hours = format(hours);
                minutes = format(minutes);
                seconds = format(seconds);
            }

            if (!isNaN(eventDate)) {
                UI.timedays.text(days);
                UI.timehours.text(hours);
                UI.timeminutes.text(minutes);
                UI.timeseconds.text(seconds);
            } else {
                console.error("Invalid date. Example: 30 Tuesday 2013 15:50:00");
                clearInterval(interval);
            }
        }

        var r = {
            date: null,
            format: null,
            lang: 'EN',
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
        };

        t && e.extend(true, r, t);

        var UI = {
            el: e(this),
            timedays:  e(this).find(r.selectors.time.days),
            timehours:  e(this).find(r.selectors.time.hours),
            timeminutes:  e(this).find(r.selectors.time.minutes),
            timeseconds:  e(this).find(r.selectors.time.seconds),
            labeldays: e(this).find(r.selectors.label.days),
            labelhours: e(this).find(r.selectors.label.hours),
            labelminutes: e(this).find(r.selectors.label.minutes),
            labelseconds: e(this).find(r.selectors.label.seconds) ,
        };

        i();
        interval = setInterval(i, 1e3);

        return this;
    }
})(jQuery);
