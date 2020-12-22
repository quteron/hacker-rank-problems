// iteration
static DoublyLinkedListNode reverse(DoublyLinkedListNode head) {
    DoublyLinkedListNode prev = head;

    while (head != null) {
        DoublyLinkedListNode next = head.next;
        head.next = head.prev;
        head.prev = next;
        prev = head;
        head = next;
    }

    return prev;
}

// recursion
static DoublyLinkedListNode reverse(DoublyLinkedListNode head) {
    DoublyLinkedListNode next = head.next;
    head.next = head.prev;
    head.prev = next;
    return next == null ? head : reverseRecursive(next);
}
