//冒泡排序
function sort1(list) {
  const n = list.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1)
      }
    }
  }
  return list
}
//优化的冒泡
function sort2(list) {
  const n = list.length
  let count = 0
  for (let i = 0; i < n - 1; i++) {
    count = 0
    for (let j = 0; j < n - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        count++
        swap(list, j, j + 1)
      }
    }
    if (count === 0) {
      break
    }
  }
  return list
}
//选择排序
function sort3(list) {
  const n = list.length
  for (let i = 0; i < n; i++) {
    let index = i;//找最小值
    let value = list[index]
    for (let j = i + 1; j < n; j++) {
      if (list[j] < value) {
        index = j
        value = list[j]
      }
    }
    swap(list, index, i)
  }
  return list
}

//插入排序
function sort4(list) {
  const n = list.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (list[j] > list[i + 1]) {
        for (let p = i; p >= j; p--) {
          swap(list, p, p + 1)
        }
        break
      }
    }
  }
  return list
}
//快速排序 单指针
function sort5(list) {
  quickSort(list, 0, list.length - 1)
  function quickSort(list, start, end) {
    if (start >= end) { return }
    let pivot = start
    let v = list[pivot]
    let index = pivot+1
    for (let i = index; i <= end; i++) {
      if (list[i] < v) {
        swap(list, i, index)
        index++
      }
    }
    swap(list,pivot,index-1)
    pivot=index-1
    quickSort(list, start, pivot - 1)
    quickSort(list, pivot + 1, end)
  }
  return list
}

//快速排序 双指针
function sort6(list) {
  quickSort(list, 0, list.length - 1)
  function quickSort(list, start, end) {
    if (start >= end) { return }
    let pivot=start
    let v = list[pivot]
    let i = start+1, j = end;
    while (i < j) {
      if(list[i] <= v){
        i++
      }
      if(list[j] >= v){
        j--
      }
      if (i<j && list[i] > v && list[j] < v) {
        swap(list, i, j)
      }
    }
    swap(list, pivot, Math.max(i,j)-1)
    console.log([start,end,i,j].join('_'),list.join(''))
    pivot= Math.max(i,j)-1
    quickSort(list, start, pivot - 1)
    quickSort(list, pivot+1, end)
  }
  return list
}

//归并排序
function sort(list) {
}

function swap(list, i, j) {
  const temp = list[i]
  list[i] = list[j]
  list[j] = temp
}


[[1, 3,5, 2, 4], [2, 1, 1, 1,]].forEach((list) => {
  console.log(
    sort1(list.slice()),
    sort2(list.slice()),
    sort3(list.slice()),
    sort4(list.slice()),
    sort5(list.slice()),
    sort6(list.slice())
  )
})