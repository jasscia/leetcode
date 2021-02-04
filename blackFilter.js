
/**
* 
* @param {*} data 
* @param {*} filter 
*/

function blackFilter(data, filter) {
  let result
  if (typeof data === 'object') {
    result = Array.isArray(data) ? [] : {}
    _blackFilter(data, filter, result)
    return result
  } else {
    return '不符合规则'
  }
}

function _blackFilter(data, filter, result) {
  // if (!data || !Array.isArray(filter)) {
    if (!data || typeof filter !== 'object') {
    return
  } else {
    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        result[index] = {}
        _deepFilter_black(item, filter, result[index])
      })
    } else if (typeof data === 'object') {
      _deepFilter_black(data, filter, result)
    } else { return }
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
        _blackFilter(data[key], filter[key], result[key])
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

console.log('black', JSON.stringify(blackFilter(a, reg)))
result = {
  name: 'kk',
  info: {
    a: 1,
    list: [{ c: 1 }, { c: 2 }]
  },
  list: [{ d: 2 }, { d: 3 }]
}