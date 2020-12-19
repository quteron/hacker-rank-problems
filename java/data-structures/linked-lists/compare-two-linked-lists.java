static boolean compareLists(SinglyLinkedListNode a, SinglyLinkedListNode b) {
    while (a != null && b != null) {
        if (a.data != b.data) {
            return false;
        }

        a = a.next;
        b = b.next;
    }

    return a == null && b == null;
}
