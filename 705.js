/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.hash = {}

};

MyHashSet.prototype.add = function(key) {
  this.hash[key] = this.hash[key] ||[]
  this.hash[key].push(key)
};

MyHashSet.prototype.remove = function(key) {
  delete this.hash[key]
};

MyHashSet.prototype.contains = function(key) {
  return !!this.hash[key]
};