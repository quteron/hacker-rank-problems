static DoublyLinkedListNode sortedInsert(DoublyLinkedListNode head, int data) {
    DoublyLinkedListNode node = new DoublyLinkedListNode(data);
    if (head == null) {
        return node;
    }

    if (head.data > data) {
        node.next = head;
        head.prev = node;
        return node;
    }

    DoublyLinkedListNode current = head;
    while (current.next != null && current.next.data <= data) {
        current = current.next;
    }

    node.prev = current;
    node.next = current.next;
    if (current.next != null) {
        current.next.prev = node;
    }
    current.next = node;

    return head;
}
