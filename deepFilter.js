
/**
* 
* @param {*} data 
* @param {*} filter 
*/

function whiteFilter(data, filter) {
  return deepFilter(data, filter, true)
}
function blackFilter(data, filter) {
  return deepFilter(data, filter, false)
}

function deepFilter(data, filter, isWhite) {
  let result
  if (typeof data === 'object') {
    result = Array.isArray(data) ? [] : {}
    _deepFilter(data, filter, result, isWhite)
    console.log(result)
    return result
  } else {
    return 'data 不符合规则'
  }
}

function _deepFilter(data, filter, result, isWhite) {
  if (typeof filter !== 'object') {
    return 'filter 不符合规则'
  } else {
    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        result[index] = {}
        isWhite ? _deepFilter_white(item, filter, result[index]) : _deepFilter_black(item, filter, result[index])
      })
    } else if (typeof data === 'object') {
      isWhite ? _deepFilter_white(data, filter, result) : _deepFilter_black(data, filter, result)
    } else { return 'data 不符合规则'}
  }
}

function _deepFilter_white(data, filter, result) {
  for (let key in data) {
    if (filter[key] === true) {
      result[key] = data[key]
    } else if (filter[key] === undefined) {
      delete result[key]
    } else {
      if (data[key]) {
        result[key] = Array.isArray(data[key]) ? [] : {}
        _deepFilter(data[key], filter[key], result[key], true)
      }
    }
  }
}
function _deepFilter_black(data, filter, result) {
  for (let key in data) {
    if (filter[key] === true) {
      delete result[key]
    } else if (filter[key] === undefined) {
      result[key] = data[key]
    } else {
      if (data[key]) {
        result[key] = Array.isArray(data[key]) ? [] : {}
        _deepFilter(data[key], filter[key], result[key], false)
      }
    }
  }
}

let a = {
  name: 'kk',
  age: 0,
  info: {
    a: 1,
    b: 2,
    list: [{
      c: 1,
      d: 2
    }, {
      c: 2,
      d: 3
    }]
  },
  list: [{
    c: 1,
    d: 2
  }, {
    c: 1,
    d: 3
  }]
}

reg = {
  name: true,
  info: {
    a: true,
    list: {
      c: true
    }
  },
  list: {
    c: true,
    d: true
  }
}

console.log('white', JSON.stringify(whiteFilter(a, reg)))
console.log('black', JSON.stringify(blackFilter(a, reg)))