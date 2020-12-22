static SinglyLinkedListNode insertNodeAtHead(SinglyLinkedListNode head, int data) {
    SinglyLinkedListNode node = new SinglyLinkedListNode(data);
    node.next = head;
    return node;
}
