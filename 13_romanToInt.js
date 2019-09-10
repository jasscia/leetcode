/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
  }
  let res = 0;
  let currId = 0;   
  let n1 = s.substr(s.length - 1, 1)
  let n2
  while(currId < s.length) {
      n2 = s.substr(Math.max(s.length - 2 - currId , 0), 1)
      if (!n2 || map[n2] >= map[n1]) {
          res += map[n1]
          currId++
          n1 = n2
      } else if (map[n2] < map[n1]) {
          res += map[n1]
          res -= map[n2]
          currId += 2
          n1 = s.substr(s.length - 1 - currId, 1)
      }
  }
  return res
};