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
  this.data[h] =  this.data[h]||[]
  if(!(this.data[h]).includes(key)){
    this.data[h].push(key)
  }
};

MyHashSet.prototype.remove = function(key) {
  const h = this.hash(key)
  const index = (this.data[h]||[]).findIndex(v=>v===key)
  if(index!==-1){
    this.data[h].splice(index,1)
  }
};

MyHashSet.prototype.contains = function(key) {
  const h = this.hash(key)
  return !!(this.data[h]||[]).includes(key)
};