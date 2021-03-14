/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.base = 769
  this.data = Array(769)
  this.hash = function(v){
    return v % this.base
  }

};

MyHashSet.prototype.add = function(key) {
  const h = this.hash(key)
  const e = this.data.find((_,index)=>index===t)
  if(e){
    e.push(h)
  } else {
    this.data[h]=[h]
  }
};

MyHashSet.prototype.remove = function(key) {
  const h = this.hash(key)
  delete this.data[h]
};

MyHashSet.prototype.contains = function(key) {
  const h = this.hash(key)
  const e = this.data.find((_,index)=>index===t)
  return !!e
};