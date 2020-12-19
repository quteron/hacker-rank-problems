static int findMergeNode(SinglyLinkedListNode head1, SinglyLinkedListNode head2) {
    SinglyLinkedListNode a = head1;
    SinglyLinkedListNode b = head2;

    while (a != b) {
        a = a.next;
        if (a == null) {
            a = head1;
        }

        b = b.next;
        if (b == null) {
            b = head2;
        }
    }

    return a.data;
}
