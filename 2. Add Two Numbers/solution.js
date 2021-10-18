/**
 * Add Two Numbers
 * 
 * Accepts two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a 
 * single digit. Adds the two numbers and returns the sum as a linked list.
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let current;
    
    current = l1;
    let num1arr = [];
    while (current.next) {
        num1arr = [current.val, ...num1arr];
        current = current.next;
    }
    num1arr = [current.val, ...num1arr];
    const num1 = parseInt(num1arr.join(''));
    
    current = l2;
    let num2arr = [];
    while (current.next) {
        num2arr = [current.val, ...num2arr];
        current = current.next;
    }
    num2arr = [current.val, ...num2arr];
    const num2 = parseInt(num2arr.join(''));
    
    const num3 = num1 + num2;
    
    const result = ('' + num3).split('').reverse();
    return result.map(x => new ListNode(x));
};