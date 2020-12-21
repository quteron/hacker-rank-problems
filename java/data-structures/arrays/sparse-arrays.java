static int[] matchingStrings(String[] strings, String[] queries) {
    Map<String, Integer> map = new HashMap<String, Integer>();
    int[] output = new int[queries.length];

    for (String str : strings) {
        int count = map.getOrDefault(str, 0);
        map.put(str, ++count);
    }

    for (int i=0; i<queries.length; i++) {
        String query = queries[i];
        output[i] = map.getOrDefault(query, 0);
    }

    return output;
}
