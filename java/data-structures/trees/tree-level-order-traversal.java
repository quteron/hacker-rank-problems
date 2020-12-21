public static void levelOrder(Node root) {
    if (root == null) {
        return;
    }

    ArrayDeque<Node> queue = new ArrayDeque<Node>()
    queue.addLast(root);
    
    while (!queue.isEmpty()) {
        Node node = queue.removeFirst();
        System.out.print(node.data + " ");

        if (node.left != null) {
            queue.addLast(node.left);
        }

        if (node.right != null) {
            queue.addLast(node.right);
        }
    }
}
