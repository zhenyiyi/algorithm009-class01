

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let pre = new ListNode(-1);
    let temp = pre;
    while(l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1 != null) {
        temp = l1;
    } else if (l2 != null) {
        temp = l2;
    }
    return pre.next;
};