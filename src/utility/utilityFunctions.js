const _ = require("lodash");
export const dateFormat = date => {
  if (!date) {
    return null;
  }

  const day = new Date(date);

  const dd = day.getDate() < 10 ? `0${day.getDate()}` : `${day.getDate()}`;
  const mm =
    day.getMonth() + 1 < 10
      ? `0${day.getMonth() + 1}`
      : `${day.getMonth() + 1}`; //January is 0!
  const yyyy = day.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
};

export const timeFormat = date => {
  if (!date) {
    return null;
  }

  const day = new Date(date);
  return day.toTimeString().split(" ")[0];
};

export const timeDifference = (startDate, endDate, buildPane = false) => {
  if (!startDate || !endDate) {
    return null;
  }
  const diff =
    (new Date(endDate).getTime() - new Date(startDate).getTime()) / 1000;
  const date = new Date(null);
  date.setSeconds(diff); // specify value for SECONDS here
  if (buildPane) {
    return diff;
  }
  return date.toISOString().substr(11, 8);
};
/*  
    created - 13/Oct/2018@13:40
    Get Browser Icon By Browser Name
*/
export const getBrowserIcon = browserName => {
  switch (browserName) {
    case "chrome":
      return "google_chrome.png";
    case "firefox":
      return "mozilla-firefox.png";
    case "maxthon":
      return "mozilla-firefox.png";
    case "internet explorer":
      return "mozilla-firefox.png";
    case "edge":
      return "mozilla-firefox.png";
    default:
      return "browser.svg";
  }
};
/*
  created - 13/10/2018@15:30
  Summary Calculation On Build Pane
*/
export const calculateSummary = data => {
  //console.log(data);
  let testCount = data.length;
  let timeTaken = [];
  let passedTest = 0;
  let failedTest = 0;
  let notRecog = 0;
  data.map((item, index) => {
    switch (item.status) {
      case "passed":
        passedTest += 1;
        break;
      case "failed":
        failedTest += 1;
        break;
      default:
        notRecog += 1;
        break;
    }
    let time = timeDifference(item.startedAt, item.endedAt, true);
    timeTaken.push(parseInt(time));
    return timeTaken;
  });
  let duration = _.sum(timeTaken);
  return (
    testCount +
    " Tests ran in " +
    duration +
    " seconds | " +
    passedTest +
    " Passed, " +
    failedTest +
    " Failed and " +
    notRecog +
    " others"
  );
};

/*
  created - 13/10/2018@16:14
  Summary Calculation On Build Pane
*/

export const getGlobalBuildStatus = data => {
  let passed = 0;
  let test_count = data.length;
  // console.log(test_count);
  data.map((item, index) => {
    if ((item.status = "passed")) {
      passed += 1;
    }
    return passed;
  });
  if (passed === test_count) {
    return "Completed";
  } else {
    return "Pending";
  }
};

/*  
    created - 13/Oct/2018@13:46
    Build Environment Data Array 
    In order to Integrate 
    Environment Info Component 
*/
export const buildEnvironmentInfo = env => {
  let os_type = env.os.split(" ");
  let envInfo = {};
  switch (os_type[0]) {
    case "windows":
      envInfo = {
        visible: true,
        data: {
          type: "pc",
          os: _.capitalize(env.os),
          os_version: os_type[1],
          os_icon: "windows.png",
          device_name: "Desktop",
          screen_resolution: env.resolution,
          browser: _.capitalize(env.browserName),
          browser_version: env.version,
          browser_icon: getBrowserIcon(env.browserName),
          className: "envinfo",
          device_icon: "computer.png"
        }
      };
      break;
    case "android":
      envInfo = {
        visible: true,
        data: {
          type: "mobile",
          os: _.capitalize(env.os),
          os_version: os_type[1],
          os_icon: "android.png",
          device_name: _.capitalize(env.device),
          screen_resolution: env.resolution,
          browser: _.capitalize(env.browserName),
          browser_version: env.version,
          browser_icon: getBrowserIcon(env.browserName),
          className: "envinfo",
          device_icon: "android.png"
        }
      };
      break;
    case "mac":
      envInfo = {
        visible: true,
        data: {
          type: "pc",
          os: _.capitalize(env.os),
          os_version: os_type[1],
          os_icon: "apple.png",
          device_name: _.capitalize("macintosh"),
          screen_resolution: env.resolution,
          browser: _.capitalize(env.browserName),
          browser_version: env.version,
          browser_icon: getBrowserIcon(env.browserName),
          className: "envinfo",
          device_icon: "apple.png"
        }
      };
      break;
    case "ios":
      console.log("iosHey");
      break;
    default:
      console.log("that's Default");
      break;
  }
  return envInfo;
};

export const extractTimeFromDateTimestamp = timestamp => {
  let splittedTime = timestamp.split(" ");
  return splittedTime[1] ? splittedTime[1] : "00:00:00";
};

export const formatBytes = bytes => {
  let decimals = 2;
  if (bytes == 0) return "0 Bytes";
  var k = 1024,
    dm = decimals <= 0 ? 0 : decimals || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
