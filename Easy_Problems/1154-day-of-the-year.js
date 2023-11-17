const dayOfYear = date => {
    let counter = 0;
    let yearObject = {"01":31, "02":28, "03":31, "04":30, "05":31, "06":30, "07":31, "08":31, "09":30, "10":31, "11":30, "12":31};
    let components = date.split("-")
    components.shift();
    for(let i = 0; i < Object.keys(yearObject).length; i++) {
      console.log(Object.keys(yearObject)[i]);
      counter += Object.values(yearObject)[i];
    }
    console.log(Object.keys(yearObject).length)
    return counter;
  };