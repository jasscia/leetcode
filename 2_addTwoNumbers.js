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
var addTwoNumbers = function(l1, l2) {
  let ret = null
  let currNode = null
  let p = l1
  let q = l2
  while (p || q) {
      if (ret) {       
          currNode.next = currNode.next || new ListNode(0)
          currNode = currNode.next
      } else {
          ret = new ListNode(0)
          currNode = ret
      }
      if (p) {
          currNode.val += p.val
          p = p.next
      }
      if (q) {
          currNode.val += q.val
          q = q.next
      }
      if (currNode.val >= 10) {
          currNode.next = new ListNode(1)
      }
      currNode.val = currNode.val % 10;
  }
  return ret
};