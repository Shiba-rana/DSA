function middleList(head) {
    let slow = head
    let fast = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow
    }
    return slow
    
}