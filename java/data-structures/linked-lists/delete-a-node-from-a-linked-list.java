static SinglyLinkedListNode deleteNode(SinglyLinkedListNode head, int position) {
   if (position == 0) {
       return head.next;
   }

   SinglyLinkedListNode current = head;
   while (--position != 0) {
       current = current.next;
   }

   current.next = current.next.next;
   return head;
}
