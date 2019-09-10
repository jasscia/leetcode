/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let mapList = [{
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V', 
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
  },{
      1: 'X',
      2: 'XX',
      3: 'XXX',
      4: 'XL',
      5: 'L',
      6: 'LX',
      7: 'LXX',
      8: 'LXXX',
      9: 'XC',
  },{
      1: 'C',
      2: 'CC',
      3: 'CCC',
      4: 'CD',
      5: 'D',
      6: 'DC',
      7: 'DCC',
      8: 'DCCC',
      9: 'CM',
  }]
  let size = 0
  let res = ''
  while(num && size <= 2) {
      let curr = num % 10        
      if (curr !== 0) {
          res = mapList[size][curr] + res
      }
      num = (num - num % 10) / 10
      size++
  }
  for (let i=0; i< num; i++) {
      res = 'M' + res
  }
  return res
};