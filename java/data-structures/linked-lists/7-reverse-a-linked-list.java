static SinglyLinkedListNode reverse(SinglyLinkedListNode head) {
    if (head == null || head.next == null) {
        return head;
    }

    SinglyLinkedListNode reversed = reverse(head.next);
    head.next.next = head;
    head.next = null;

    return reversed;
}
