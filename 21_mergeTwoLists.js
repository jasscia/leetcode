/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode()
  let node = head
  let node1 = l1
  let node2 = l2
  while (node1 && node2) {
      if (node1.val > node2.val) {
          node.next = node2
          node = node.next
          node2 = node2.next

      } else {
          node.next = node1
          node = node.next
          node1 = node1.next
      }
  }
  
  node.next = node1 || node2
  return head.next
};