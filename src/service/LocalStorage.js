function GetLS(key, defaultData) {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
}
function SetLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export { GetLS, SetLS };
