public static List<Integer> dynamicArray(int n, List<List<Integer>> queries) {
    ArrayList<Integer>[] seqList = new ArrayList[n];
    for (int i = 0; i < n; i++) {
        seqList[i] = new ArrayList<Integer>();
    }

    int lastAnswer = 0;
    List<Integer> output = new ArrayList<Integer>();

    for(List<Integer> query : queries) {
        int q = query.get(0);
        int x = query.get(1);
        int y = query.get(2);
        int index = (x ^ lastAnswer) % n;
        List<Integer> seq = seqList[index];

        if (q == 1) {
            seq.add(y);
        } else {
            int j = y % seq.size();
            lastAnswer = seq.get(j);
            output.add(lastAnswer);
        }
    }

    return output;
}
