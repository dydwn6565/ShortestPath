function dijkstra(graph, s) {
    var answer = {};
    answer[s] = [];
    answer[s].distance = 0;

    while (true) {
        var parent = null;
        var nearest = null;
        var distance = Infinity;

        //for each existing solution
        for (var n in answer) {
            if (!answer[n])
                continue
            var nsdist = answer[n].distance;
            var neighbor = graph[n];
            //for each of its adjacent nodes...
            for (var a in neighbor) {
                //without a solution already...
                if (answer[a])
                    continue;
                //choose nearest node with lowest *total* cost
                var ds = nsdist + neighbor[a];
                if (ds < distance) {
                    //reference parent
                    parent = answer[n];
                    nearest = a;
                    distance = ds;
                }
            }
        }

        //no more solutions
        if (distance === Infinity) {
            break;
        }

        //extend parent's solution path
        answer[nearest] = parent.concat(nearest);
        //extend parent's cost
        answer[nearest].distance = distance;
    }

    return answer;
}

//create graph
var dijkstraGraph = {};

var layer = {
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

for (var id in layer) {
    if (!dijkstraGraph[id])
        dijkstraGraph[id] = {};
    layer[id].forEach(function(aid) {
        dijkstraGraph[id][aid] = 1;
        if (!dijkstraGraph[aid])
            dijkstraGraph[aid] = {};
        dijkstraGraph[aid][id] = 1;
    });
}