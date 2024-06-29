const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};

// Default Exporting
module.exports = getFirstNames;
