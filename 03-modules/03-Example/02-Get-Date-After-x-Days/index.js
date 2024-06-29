// import Third Party Package
const addDays = require("date-fns/addDays");

// Add 10 days to 22 August 2020:

const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};

module.exports = getDateAfterXDays;
