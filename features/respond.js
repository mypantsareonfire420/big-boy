module.exports = (m, arr) => {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i][2] === 'start') {
      if(m.content.toLowerCase().startsWith(arr[i][0])) {
        m.channel.send(arr[i][1]);
      }
    } else if(arr[i][2] === 'end') {
      if(m.content.toLowerCase().endsWith(arr[i][0])) {
        m.channel.send(arr[i][1]);
      }
    } else if(m.content.toLowerCase().includes(arr[i][0])) {
      m.channel.send(arr[i][1]);
    }
  }
};
