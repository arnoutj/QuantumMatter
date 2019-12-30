const sortByLastNameAscending = (name1, name2) => {
  const names1 = name1.split(/[ ,]+/);
  const names2 = name2.split(/[ ,]+/);
  if (names1[names1.length - 1] > names2[names2.length - 1]) {
    return 1;
  }
  if (names1[names1.length - 1] < names2[names2.length - 1]) {
    return -1;
  }
  return 0;
};

export default sortByLastNameAscending;