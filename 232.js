var MyQueue = function() {
  this._stack = []
  this.stack = []
};
MyQueue.prototype.push = function(x) {
this._stack.push(x)
};
MyQueue.prototype.pop = function() {
  if(this.stack.length<=0) {
      while(this._stack.length){
          console.log(this._stack.length)
          this.stack.push(this._stack.pop())
      }
  }
  return this.stack.pop()
};
MyQueue.prototype.peek = function() {
  if(this.stack.length<=0) {
      while(this._stack.length){
          this.stack.push(this._stack.pop())
      }
  }
  return this.stack[this.stack.length-1]
};
MyQueue.prototype.empty = function() {
return (this._stack.length===0 )&&  (this.stack.length===0)
};