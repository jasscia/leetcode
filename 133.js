/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  const map={}
  return dfs(node, {})

  function dfs(node,res){
      if(node){
          if(map[node.val]){
              res = map[node.val]
          } else {
              map[node.val] = res
              res.val = node.val
              if(node.neighbors.length){
                  res.neighbors = node.neighbors.map(item=>dfs(item,{}))
              } else {
                  res.neighbors =[]
              }
              
          }
          return res
      } else {
          return node
      }
  }
};