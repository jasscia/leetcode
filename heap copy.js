class Heap{
  constructor(arr){
    this.heapify(arr||[])
  }
  heapify(arr){
    this.heap=[]
    arr.forEach(value=>{
      this.insert(value)
    })
  }
  insert (value){
    this.heap.push(value)
    this.shiftUp(this.size()-1)
  }
  remove (){
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }
  topN(n){
    const arr=[]
    const copyed = this.heap.slice()
    for(let i=0;i<n;i++){
      arr.push(this.remove())
    }
    this.heap = copyed
    return arr
  }
  shiftDown(index){
    const rightIndex=this.getRightIndex(index)
    const leftIndex=this.getLeftIndex(index)
    if(rightIndex>=this.size() && leftIndex>=this.size()){return}
    if(this.heap[rightIndex]<this.heap[leftIndex]){
      if(this.heap[index]<this.heap[leftIndex]){}
      this.swap(leftIndex,index)
      this.shiftDown(leftIndex)
    } else if(this.heap[rightIndex]>this.heap[leftIndex]){
      if(this.heap[index]<this.heap[rightIndex]){}
      this.swap(rightIndex,index)
      this.shiftDown(rightIndex)
    }
  }
  shiftUp(index){
    const parentIndex=this.getParentIndex(index)
    if(parentIndex<0){return}
    if(this.heap[parentIndex]<this.heap[index]){
      this.swap(parentIndex,index)
      this.shiftUp(parentIndex)
    }
  }
  size(){
    return this.heap.length
  }
  height(){
    return Math.floor(Math.log2(this.size()))
  }
  getParentIndex(index){
    if(index & 1){
      return (index - 1) /2
    } else {
      return (index - 2) /2
    }
  }
  getRightIndex(index){
    return 2*index+1
  }
  getLeftIndex(index){
    return 2*index+2
  }
  isRoot(index){
    index===0
  }
  swap(a,b){
    [this.heap[b],this.heap[a]] = [this.heap[a],this.heap[b]]
  }
}

const heap = new Heap([1,2,3,4,5,6,7])
console.log(heap.topN(7),heap,)