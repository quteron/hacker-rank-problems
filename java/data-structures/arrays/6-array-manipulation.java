static long arrayManipulation(int n, int[][] queries) {
    int[] arr = new int[n+1];

    for (int[] query : queries) {
        int l = query[0];
        int r = query[1];
        int value = query[2];

        arr[l-1] += value;
        arr[r] -= value;
    }

    long sum = 0;
    long max = 0;
    for (long value : arr) {
        sum += value;
        max = Math.max(sum, max);
    }

    return max;
}
