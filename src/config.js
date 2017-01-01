import moment from 'moment'

var nextYear = parseInt(moment().format('YYYY')) + 1;

var youtubeCode = '5fZT4dnkXM8';

var config = {
    countdown: {
        to: nextYear + '/01/01',
        // to: moment().add(5, 'seconds'),
        text: 'Seconds until ' + nextYear
    },
    youtube: {
        id: youtubeCode,
        quality: 'hd1080', // large/medium/small
        speed: 1.5,
        player_config: {
            controls: 0,
            showinfo: 0,
            loop: 1,
            playlist: youtubeCode,
            rel: 0,
            iv_load_policy: 3,
            autoplay: 1,
            start: 1,
            end: 19980
        }
    },
    quotes: {
        items: [
            'doesbenhaveagf?',
            'gaypride',
            'votetrump',
            'newyearnewme',
            'garageparty',
            'alexscottisalegend',
            'secretdildo',
            'RIPtheexerciseapp',
            'brexitwaspoppysidea'
        ],
        refreshRate: 7
    },
    shoutOut: {
        namespace: 'shoutouts-demo',
        refreshRate: 30
    },
    switcher: {
        countDown: {
            start: 60,
            end: 1
        },
        final: {
            start: 0,
            end: -600
            // end: -6
        }
    },
    firebase: {
        apiKey: "AIzaSyD6PsxQBoxFMks5SgSWcyhGvEqqgoI_tag",
        authDomain: "newyear-2017.firebaseapp.com",
        databaseURL: "https://newyear-2017.firebaseio.com",
        storageBucket: "newyear-2017.appspot.com",
        messagingSenderId: "137397020585"
    }
};

export default config;