/**
 * Given an object, return true if the object is empty, otherwise return false.
 * @param obj - The object to check.
 * @returns true
 */
export const isEmptyObject = (obj) => {
  if (typeof obj === "object" && obj != null) {
    return Object.keys(obj).length >= 1 ? false : true;
  }
  return true;
};

/**
 * Convert seconds to a string of hours, minutes, and seconds.
 * @param sec - The number of seconds to convert.
 * @returns The function is returning the string "1:00:00"
 */
export const convertSecondsTo = (sec) => {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  seconds = Math.round(seconds * 100) / 100;
  if (hours === 0) {
    let result = minutes < 10 ? minutes : minutes;
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
  } else {
    let result = hours < 10 ? "" + hours : hours;
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
  }
};

export const strClip = (str) => {
  return str.split(" ")[1].slice(0, 5);
};

/**
 * Returns the date before the specified number of days.
 * @param duration - number of days to go back from today
 * @returns {
 *   today: "2020-04-20",
 *   xDaysBefore: "2020-04-17"
 * }
 */
export const dateBefore = (duration) => {
  const date = new Date();
  const today = new Date().toISOString().split("T")[0];
  const newDate = date.setDate(date.getDate() - duration);
  const dateBefore = new Date(newDate).toISOString().split("T")[0];
  return {
    today: today,
    xDaysBefore: dateBefore,
  };
};

export const smallString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
/**
 * Cannot generate summary
 * @param text - the text to be read
 * @returns The number of words in the text.
 */
export const readingTime = (text) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
