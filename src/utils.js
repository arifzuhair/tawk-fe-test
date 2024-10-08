const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const dateDiff = (date1, date2, unit) => {
  const ms = Math.abs(date2.getTime() - date1.getTime());
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const years = Math.floor(days / 365.25);

  switch (unit) {
    case "days":
      return { diff: days, label: days > 1 ? "days" : "day" };
    case "hours":
      return { diff: hours, label: days > 1 ? "hours" : "hour" };
    case "minutes":
      return { diff: minutes, label: days > 1 ? "minutes" : "minute" };
    case "weeks":
      return { diff: weeks, label: days > 1 ? "weeks" : "week" };
    case "years":
      return { diff: years, label: days > 1 ? "years" : "year" };
    default:
      throw new Error(`Invalid unit: ${unit}`);
  }
};

export { debounce, dateDiff };
