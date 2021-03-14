/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.base = 769
  this.data = Array(769)
  this.hash = function(v){
    return v % this.base
  }

};

MyHashMap.prototype.put = function(key,value) {
  const h = this.hash(key)
  this.data[h] =  this.data[h]||[]
  const r =(this.data[h]).find((item)=>item[0]===key)
  if(!r){
    this.data[h].push([key,value])
  } else {
    r[1]=value
  }
};

MyHashMap.prototype.get = function(key) {
  const h = this.hash(key)
  const r = (this.data[h]||[]).find((item)=>item[0]===key)
  if(r){
    return r[1]
  }
  return -1
};

MyHashMap.prototype.remove = function(key) {
  const h = this.hash(key)
  const index = (this.data[h]||[]).findIndex(item=>item[0]===key)
  if(index!==-1){
    this.data[h].splice(index,1)
  }
};