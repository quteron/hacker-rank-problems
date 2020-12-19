static SinglyLinkedListNode insertNodeAtTail(SinglyLinkedListNode head, int data) {
    if (head == null) {
        return new SinglyLinkedListNode(data);
    }

    SinglyLinkedListNode current = head;
    while (current.next != null) {
        current = current.next;
    }

    current.next = new SinglyLinkedListNode(data);
    return head;
}
