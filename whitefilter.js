
/**
* 
* @param {*} data 
* @param {*} filter 
*/

function whiteFilter(data, filter) {
  let result
  if (typeof data === 'object') {
    result = Array.isArray(data) ? [] : {}
    _whiteFilter(data, filter, result)
    return result
  } else {
    return '不符合规则'
  }
}

function _whiteFilter(data, filter, result) {
    if (!data || typeof filter !== 'object') {
    return
  } else {
    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        result[index] = {}
        let filter2 = filter
        _deepFilter_white(item, filter2, result[index])
      })
    } else if (typeof data === 'object') {
      let filter2 = filter
      _deepFilter_white(data, filter2, result)
    } else { return }
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
        _whiteFilter(data[key], filter[key], result[key])
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

// console.log(JSON.stringify(deepFilter(a, reg)))
console.log('white', JSON.stringify(whiteFilter(a, reg)))
result = {
  name: 'kk',
  info: {
    a: 1,
    list: [{ c: 1 }, { c: 2 }]
  },
  list: [{ d: 2 }, { d: 3 }]
}