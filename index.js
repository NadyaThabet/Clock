setInterval(() => {
  let myText = document.querySelector("h1");
  let myDate = new Date();
  let mySeconds = myDate.getSeconds();
  let myMins = myDate.getMinutes();
  let myHrs = myDate.getHours();

  if (mySeconds <= 9) {
    mySeconds = "0" + mySeconds;
  }
  if (myMins <= 9) {
    myMins = "0" + myMins;
  }
  if (myHrs <= 9) {
    myHrs = "0" + myHrs;
  }
  if (myHrs == 0) {
    myHrs = 12;
  }
  if (myHrs > 12) {
    myHrs = myHrs - 12;
    myHrs = "0" + myHrs;
    myText.innerHTML = myHrs + ":" + myMins + ":" + mySeconds + " PM";
  } else {
    myText.innerHTML = myHrs + ":" + myMins + ":" + mySeconds + " AM";
  }
});
