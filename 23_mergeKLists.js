/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let head = new ListNode()
  let currNode = head
  let points = []
  lists.forEach(head => {
      head && points.push(head)
  })
  while(points.length > 1) {
      let n = points.length
      let minNode = points[0]
      let minNodeIndex = 0
      for (let i = 1; i < n; i++) {
          let node = points[i]
          if (minNode.val > node.val) {
              minNode = node
              minNodeIndex = i
          }
      }
      
      currNode.next = minNode
      currNode = currNode.next
      if (!minNode.next) {
          points.splice(minNodeIndex, 1)
      } else {
          points[minNodeIndex] = minNode.next
      }
  }
  
  if (points.length === 1) {
      currNode.next = points[0]
  }
  return head.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function(lists) {
  let head = new ListNode()
  let currNode = head
  let points = []
  lists.forEach(head => {
      head && points.push(head)
  })
  points.sort((a, b) => a.val - b.val)
  while(points.length > 1) {
      let minNode = points[0]
      currNode.next = minNode
      currNode = currNode.next
      if (minNode.next) {
          let minNextNode = minNode.next
          let n = points.length
          let i = 0
          while(points.length === n && i < n) {
              if (minNextNode.val < points[i].val) {
                  points.splice(i, 0, minNextNode)
              }
              i++
          }
          if (points.length === n) {
              points.push(minNextNode)
          }
      }           
      points.shift()
  }
  
  if (points.length === 1) {
      currNode.next = points[0]
  }
  return head.next
};