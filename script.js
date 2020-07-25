{
  let getUpTime = 7;
  let noon = 12;
  let lunchTime = 14;
  let dinnerTime = 18;
  let nightTime = 22;
  let partyTime;

  let showCurrentTime = function () {
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = 'AM';

    if (hours >= noon) {
      meridian = 'PM';
    }
    if (hours > noon) {
      hours = hours - 12;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    let clockTime =
      hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';

    clock.innerText = clockTime;
  };

  let updateClock = function () {
    let time = new Date().getHours();
    let messageText;
    let image = './assets/daytime.jpg';

    let timeEventJS = document.getElementById('timeEvent');
    let generalImageJS = document.getElementById('generalImage');

    if (time == partyTime) {
      image = './assets/party.jpg';
      messageText = 'Time to party!';
    } else if (time == getUpTime) {
      image = './assets/wakeUp.jpg';
      messageText = 'Get up!';
    } else if (time == lunchTime) {
      image = './assets/lunch.png';
      messageText = 'Are you hungry?';
    } else if (time == dinnerTime) {
      image = './assets/dinner.png';
      messageText = 'Dinnertime!';
    } else if (time == nightTime) {
      image = './assets/night.jpg';
      messageText = 'Go to bed!';
    } else {
      image = './assets/daytime.jpg';
      messageText = 'Have a good day!';
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    generalImageJS.src = image;

    showCurrentTime();
  };
  updateClock();

  let oneSecond = 1000;
  setInterval(updateClock, oneSecond);

  const partyButton = document.getElementById('partyTimeButton');

  const partyEvent = function () {
    if (partyTime < 0) {
      partyTime = new Date().getHours();
      partyTimeButton.innerText = 'Party Over!';
    } else {
      partyTime = -1;
      partyTimeButton.innerText = 'Party Time!';
    }
  };

  partyButton.addEventListener('click', partyEvent);
  partyEvent();

  let getUpSelect = document.getElementById('getUpSelect');

  let getUpEvent = function () {
    getUpTime = getUpSelect.value;
  };

  getUpSelect.addEventListener('change', getUpEvent);

  let lunchTimeSelect = document.getElementById('lunchTimeSelect');

  let lunchTimeEvent = function () {
    lunchTime = lunchTimeSelect.value;
  };

  lunchTimeSelect.addEventListener('change', lunchTimeEvent);

  let dinnerTimeSelect = document.getElementById('dinnerTimeSelect');

  let dinnerTimeEvent = function () {
    dinnerTime = dinnerTimeSelect.value;
  };

  dinnerTimeSelect.addEventListener('change', dinnerTimeEvent);
}
