const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

function animations() {

    var end = document.getElementById("searchValue1").value;
    const t = anime.timeline({
        //each animations have a 1000ms duration
        //and easeInSine easing
        duration: 1000,
        easing: 'easeInSine'
    });
    if (end == '2') {
        t.add({
            targets: '#div1',
            translateX: 250
        })
    }
    if (end == '3') {
        t.add({
            targets: '#div1',
            translateX: 500
        })
    }
    if (end == '4') {
        t.add({
            targets: '#div1',
            translateX: 750
        })

    }
    if (end == '5') {
        t.add({
            targets: '#div1',
            translateX: 1000
        })

    }
    if (end == '6') {
        t.add({
            targets: '#div1',
            translateY: 200
        })
    }
    if (end == '7') {
        t.add({
            targets: '#div1',
            translateX: 250
        })
        t.add({
            targets: '#div1',
            translateY: 200
        })

    }
    if (end == '8') {
        t.add({
            targets: '#div1',
            translateX: 500
        })
        t.add({
            targets: '#div1',
            translateY: 200
        })

    }
    if (end == '9') {
        t.add({
            targets: '#div1',
            translateX: 750
        })
        t.add({
            targets: '#div1',
            translateY: 200
        })
    }
    if (end == '10') {
        t.add({
            targets: '#div1',
            translateX: 1000
        })
        t.add({
            targets: '#div1',
            translateY: 200
        })
    }
    if (end == '11') {

        t.add({
            targets: '#div1',
            translateY: 400
        })
    }
    if (end == '12') {
        t.add({
            targets: '#div1',
            translateX: 250
        })
        t.add({
            targets: '#div1',
            translateY: 400
        })
    }
    if (end == '13') {
        t.add({
            targets: '#div1',
            translateX: 500
        })
        t.add({
            targets: '#div1',
            translateY: 400
        })
    }
    if (end == '14') {
        t.add({
            targets: '#div1',
            translateX: 750
        })
        t.add({
            targets: '#div1',
            translateY: 400
        })
    }
    if (end == '15') {
        t.add({
            targets: '#div1',
            translateX: 1000
        })
        t.add({
            targets: '#div1',
            translateY: 400
        })
    }

}

function route() {

    var end = document.getElementById("searchValue1").value;
    console.log(1);

    var solutions = dijkstra(dijkstraGraph, 1);
    console.log("From '" + 1 + "' to " + end);
    for (var s in solutions) {
        if (!solutions[s]) continue;
        console.log(" -> " + s + ": [" + solutions[s].join(", ") + "] (dist:" + solutions[s].dist + ")");
    }
    var distance = solutions[end].dist;
    openForm();
    addvalue();

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function addvalue() {
    var solutions = dijkstra(dijkstraGraph, 1);
    var end = document.getElementById("searchValue1").value;
    var i = 0;
    while (solutions[end][i]) {
        var para = document.createElement("P");
        para.innerHTML = "[ " + solutions[end][i] + " ]";

        document.getElementById("Poistion").appendChild(para);
        i++;
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}