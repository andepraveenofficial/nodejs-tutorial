// import External Files
const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

// Default Exporting
module.exports = getPeopleInCity;
