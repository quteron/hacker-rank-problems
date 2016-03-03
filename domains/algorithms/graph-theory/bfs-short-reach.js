function BFSearch(vertices) {
    this.vertices = vertices;
    this.visited = null;
    this.edges = null;

    this.adj = new Array(vertices);
    for(var i = 0; i < vertices; i++) {
        this.adj[i] = [];
    }
}

BFSearch.prototype.addEdge = function(from, to) {
    this.adj[from].push(to);
    this.adj[to].push(from);
};

BFSearch.prototype.bfs = function(vertex) {
    this.visited = new Array(this.vertices).fill(false);
    this.edges = new Array(this.vertices).fill(0);

    var queue = [vertex];
    this.visited[vertex] = true;

    while(queue.length != 0) {
        var current = queue.shift();
        var adjVertices = this.adj[current];
        for(var i = 0; i < adjVertices.length; i++) {
            var v = adjVertices[i];
            if(!this.visited[v]) {
                this.edges[v] = 6 + this.edges[current];
                this.visited[v] = true;
                queue.push(v);
            }
        }
    }

    this.edges = this.edges.map(function(e) {
        return e == 0 ? -1 : e;
    });
    this.edges.splice(vertex, 1);
};

function processData(input) {
    var scanner = new Scanner(input);
    var t = scanner.nextNumber();

    while(t > 0) {
        var n = scanner.nextNumber();
        var m = scanner.nextNumber();

        var s = new BFSearch(n);
        while(m > 0) {
            var a = scanner.nextNumber();
            var b = scanner.nextNumber();
            s.addEdge(a-1, b-1);
            m--;
        }

        var vertex = scanner.nextNumber();
        s.bfs(vertex - 1);

        console.log(s.edges.join(" "));
        t--;
    }
}