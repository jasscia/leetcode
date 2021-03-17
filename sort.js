//冒泡排序
function sort1(list){
  const n=list.length
  for(let i=0;i<n-1;i++){
    for(let j=0;j<n-1-i;j++){
      if(list[j]>list[j+1]){
        swap(list,j,j+1)
      }
    }
  }
  return list
}
//优化的冒泡
function sort2(list){
  const n=list.length
  let count=0
  for(let i=0;i<n-1;i++){
    count=0
    for(let j=0;j<n-1-i;j++){
      if(list[j]>list[j+1]){
        count++
        swap(list,j,j+1)
      }
    }
    if(count===0){
      break
    }
  }
  return list
}
//选择排序
function sort3(list){
  const n = list.length
  for(let i=0;i<n;i++){
    let index = i;//找最小值
    let value = list[index]
    for(let j=i+1;j<n;j++){
      if(list[j]<value){
        index=j
        value=list[j]
      }
    }
    swap(list, index,i)
  }
  return list
}

//插入排序
function sort4(list){
  const n = list.length
  for(let i =0;i<n-1;i++){
    for(let j=0;j<=i;j++){
      if(list[j]>list[i+1]) {
        for(let p=i;p>=j;p--){
          swap(list,p,p+1)
        }
        break
      }
    }
  }
  return list
}
//快速排序
function sort5(list){
  quickSort(list,0,list.length-1)
  function quickSort(list, start,end){
    //单指针
    if(start>=end){return}
    let pivot = start
    let v=list[pivot]
    for(let i=pivot+1;i<=end;i++){
      if(list[i]<v){
        swap(list,i,pivot)
        pivot++
      }
    }
    quickSort(list,start,pivot-1)
    quickSort(list,pivot+1,end)
  }
  return list
}

//归并排序
function sort6(list){
}

function swap(list,i,j){
  const temp=list[i]
  list[i]=list[j]
  list[j]=temp
}


[[1,3,2,4],[2,1,1,1,]].forEach((list)=>{
  console.log(sort1(list.slice()),sort2(list.slice()),sort3(list.slice()),sort4(list.slice()),sort5(list.slice()))
})