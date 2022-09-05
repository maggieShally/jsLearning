/*
 * @Description:
 * @Date: 2021-05-18 17:14:17
 * @LastEditTime: 2022-07-11 09:55:21
 * @FilePath: \webpack-teste:\learn\node\sign\index.js
 */
var schedule = require("node-schedule");
const open = require("open");

const openBrowser = async () => {
  await open("http://e.longsys.com/portal/");
};

const timeStart = function () {

  const minutes = 47 + Math.floor(Math.random() * 5)
  const SIGN_IN_TIME = `08:${minutes}:30`;
  const SIGN_OUT_TIME = "18:02:00";

  const now = new Date();

  console.log(minutes)

  const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

  var signInTime = +new Date(`${today} ${SIGN_IN_TIME}`);

  var signOutTime = +new Date(`${today} ${SIGN_OUT_TIME}`);

  console.log(now > signInTime && now < signOutTime);


  const everyDateCounter = now.getDay() === 5 ? 3 : 1 

  signInTime = +signInTime + 60 * 60 * 24 * 1000 * everyDateCounter;
  console.log(signInTime - now);
  setTimeout(openBrowser, signInTime - now);
  // }
};

const startSchedule = function () {
  console.log('OPENING')
  schedule.scheduleJob(`15 53 08 * * 1-5`, function () {
    const second = Math.floor(Math.random() * 10) * 12000;
    setTimeout(() => {
      openBrowser();
      console.log("scheduleCronstyle:" + new Date());
    }, second);
  });
};

// 6个占位符从左到右分别代表：秒、分、时、日、月、周几
const endSchedule = function () {
  schedule.scheduleJob(`25 12 18 * * 1-5`, function () {
    const second = Math.floor(Math.random() * 10) * 15000;
    setTimeout(() => {
      openBrowser();
      timeStart();
      console.log("scheduleCronstyle:" + new Date());
    }, second);
  });
};

startSchedule();
endSchedule();
