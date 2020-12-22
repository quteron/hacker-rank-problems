public static List<Integer> rotateLeft(int d, List<Integer> arr) {
    List<Integer> b = new ArrayList<Integer>(arr.size());
    for (int i=d; i<arr.size(); i++) {
        b.add(arr.get(i));
    }
    for (int i=0; i<d; i++) {
        b.add(arr.get(i));
    }

    return b;
}
