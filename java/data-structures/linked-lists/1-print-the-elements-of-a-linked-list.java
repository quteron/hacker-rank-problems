static void printLinkedList(SinglyLinkedListNode head) {
    SinglyLinkedListNode current = head;
    while(current != null) {
        System.out.println(current.data);
        current = current.next;
    }
}
