/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head) {
      return head
  }
  if (n === 0) {
      return head
  }
  let headDomp = new ListNode('')
  headDomp.next = head
  let preNode = headDomp
  let currNode = head
  let targetNode = currNode
  let i = 1;
  while (i < n) {
      targetNode = targetNode.next
      i++
  }
  while(targetNode.next) {
      preNode = currNode
      currNode = currNode.next
      targetNode = targetNode.next
  }
  preNode.next = currNode.next
  return headDomp.next
};