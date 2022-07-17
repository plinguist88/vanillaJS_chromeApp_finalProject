const $time = document.querySelector('#time');
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getTime() {
  const date = new Date();
  const nYear = date.getFullYear();
  const nMonth = (date.getMonth() + 1);
  const nDate = date.getDate();
  const nHour = date.getHours();
  const nMinute = date.getMinutes();
  const nSecond = date.getSeconds();
  const nDay = date.getDay();
  console.log(nYear, nMonth, nDate, nHour, nMinute, nSecond, nDay);

  const rMonth = ((nMonth) < 10) ? '0' + (nMonth) : nMonth;
  const rDate = ((nDate) < 10) ? '0' + (nDate) : nDate;
  const rHour = String(nHour).padStart(2, 0);
  const rMinute = String(nMinute).padStart(2, 0);
  const rSecond = String(nSecond).padStart(2, 0);
  const rDay = days[nDay];

  const $year = $time.querySelector(':nth-child(1)');
  const $monthDate = $time.querySelector(':nth-child(2)');
  const $am = $time.querySelector(':nth-child(3) span:first-child');
  const $pm = $time.querySelector(':nth-child(3) span:last-child');
  const $hourMinuteSecond = $time.querySelector(':nth-child(4)');
  const $day = $time.querySelector(':nth-child(5)');

  $year.innerText = nYear;
  $monthDate.innerText = `${rMonth}.${rDate}`;
  if (nHour < 12) {
    $am.style.color = '#27ae60';
    $pm.style.color = '#7f8c8d';
    $am.style.border = '2px solid #27ae60';
  } else {
    $am.style.color = '#7f8c8d';
    $pm.style.color = '#27ae60';
    $pm.style.border = '2px solid #27ae60';
  }
  $hourMinuteSecond.innerText = `${rHour}:${rMinute}:${rSecond}`;
  $day.innerText = rDay;
}

getTime()
setInterval(getTime, 1000);