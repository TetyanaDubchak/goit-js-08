import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = JSON.parse(localStorage.getItem(KEY)) ?? 0;


player.setCurrentTime(currentTime).then().catch();

const onPlay = (e) => {
    localStorage.setItem(KEY, JSON.stringify(e.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));