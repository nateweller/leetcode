/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    if (! head.next) return null;
    
    let nodes = [head];

    let index = 0;
    while (nodes[nodes.length - 1].next) {
        nodes.push(head);
        head = head.next;
        
        if (! head) {
            if (index - n + 1 === 0) {
                // target is original head, return new head
                return nodes[index - n + 3];
            } else {
                // slice out target
                nodes[index - n + 1].next = nodes[index - n + 3] || null;
            }
        }

        index++;
    }
    
    return nodes[0];
    
};