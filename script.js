var getUpTime = 7;
var noon = 12;
var lunchTime = 14;
var dinnerTime = 18;
var nightTime = 22;
var partyTime;

var showCurrentTime = function () {
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = 'AM';

  if (hours >= noon) {
    meridian = 'PM';
  }
  if (hours > noon) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    seconds = '0' + seconds;
  }

  var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian + '!';

  clock.innerText = clockTime;
};

var updateClock = function () {
  var time = new Date().getHours();
  var messageText;
  var image = './assets/daytime.jpg';

  var timeEventJS = document.getElementById('timeEvent');
  var generalImageJS = document.getElementById('generalImage');

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

var oneSecond = 1000;
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

var getUpSelect = document.getElementById('getUpSelect');

var getUpEvent = function () {
  getUpTime = getUpSelect.value;
};

getUpSelect.addEventListener('change', getUpEvent);

var lunchTimeSelect = document.getElementById('lunchTimeSelect');

var lunchTimeEvent = function () {
  lunchTime = lunchTimeSelect.value;
};

lunchTimeSelect.addEventListener('change', lunchTimeEvent);

var dinnerTimeSelect = document.getElementById('dinnerTimeSelect');

var dinnerTimeEvent = function () {
  dinnerTime = dinnerTimeSelect.value;
};

dinnerTimeSelect.addEventListener('change', dinnerTimeEvent);
