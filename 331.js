function isValidSerialization(preorder) {
  preorder = preorder.split(',')
  const tree = {}
  let node = tree
  for (let i = 0; i < preorder.length; i++) {
    if (!node) {
      return false
    }
    if (preorder[i] === '') {
      return false
    } else if (preorder[i] === '#') {
      node.value = null
      while (node = node.parent) {
        if (!node.right) {
          node.right = { parent: node }
          node = node.right
          break
        }
      }
    } else {
      node.value = preorder[i]
      node.left = { parent: node }
      node = node.left
    }
  }
  return node ? false:true
}
["#,9,3,4,#,#,1,#,#,2,#,6,#,#","9,#,#,1","1,1,#","1,#,#","1,#"].forEach(s => console.log(isValidSerialization(s)))