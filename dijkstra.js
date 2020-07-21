function dijkstra(graph, s) {
    var answer = {};
    answer[s] = [];
    answer[s].dist = 0;

    while (true) {
        var parent = null;
        var nearest = null;
        var dist = Infinity;

        //for each existing solution
        for (var n in answer) {
            if (!answer[n])
                continue
            var ndist = answer[n].dist;
            var neighbor = graph[n];
            //for each of its adjacent nodes...
            for (var a in neighbor) {
                //without a solution already...
                if (answer[a])
                    continue;
                //choose nearest node with lowest *total* cost
                var d = neighbor[a] + ndist;
                if (d < dist) {
                    //reference parent
                    parent = answer[n];
                    nearest = a;
                    dist = d;
                }
            }
        }

        //no more solutions
        if (dist === Infinity) {
            break;
        }

        //extend parent's solution path
        answer[nearest] = parent.concat(nearest);
        //extend parent's cost
        answer[nearest].dist = dist;
    }

    return answer;
}

//create graph
var graph = {};

var layout = {
    '1': ['2', '6'],
    '2': ['3', '7'],
    '3': ['4', '8'],
    '4': ['5', '9'],
    '5': ['10'],
    '6': ['7', '11'],
    '7': ['8', '12'],
    '8': ['9', '13'],
    '9': ['10', '14'],
    '10': ['15'],
    '11': ['12', '16'],
    '12': ['13', '17'],
    '13': ['14'],
    '14': ['15'],
    '15': [],
    '16': [],
    '17': [],
}

for (var id in layout) {
    if (!graph[id])
        graph[id] = {};
    layout[id].forEach(function(aid) {
        graph[id][aid] = 1;
        if (!graph[aid])
            graph[aid] = {};
        graph[aid][id] = 1;
    });
}