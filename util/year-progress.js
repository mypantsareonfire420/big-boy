module.exports = () => {
  let year = new Date().getFullYear();

  let now = new Date();
  let start = new Date(year, 0, 1);
  let end = new Date(year + 1, 0, 1);
  
  return ((now - start) / (end - start) * 100).toFixed(5);
}
