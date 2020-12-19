static int getNode(SinglyLinkedListNode head, int positionFromTail) {
    SinglyLinkedListNode slow = head;
    SinglyLinkedListNode fast = head;

    while (positionFromTail-- != 0) {
        fast = fast.next;
    }

    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow.data;
}
