function revList(head) {
    let prev = null
    let curr = head, next

    while(curr) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}