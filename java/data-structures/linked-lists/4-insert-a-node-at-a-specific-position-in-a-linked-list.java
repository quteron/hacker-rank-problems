static SinglyLinkedListNode insertNodeAtPosition(SinglyLinkedListNode head, int data, int position) {
    SinglyLinkedListNode node = new SinglyLinkedListNode(data);

    if (position == 0) {
        node.next = head;
        return node;
    }

    SinglyLinkedListNode current = head;
    while (--position != 0) {
        current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return head;
}
