static SinglyLinkedListNode mergeLists(SinglyLinkedListNode a, SinglyLinkedListNode b) {
    SinglyLinkedListNode fake = new SinglyLinkedListNode(0);
    SinglyLinkedListNode current = fake;

    while (a != null && b != null) {
        if (a.data <= b.data) {
            current.next = a;
            a = a.next;
        } else {
            current.next = b;
            b = b.next;
        }

        current = current.next;
    }

    if (a != null) {
        current.next = a;
    }

    if (b != null) {
        current.next = b;
    }

    return fake.next;
}
