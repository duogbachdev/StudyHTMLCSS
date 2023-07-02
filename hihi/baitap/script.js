function toggleSolution(exerciseId) {
    var solution = document.getElementById("solution-" + exerciseId);
    var button = document.getElementById("button-" + exerciseId);

    if (solution.style.display === "none") {
        solution.style.display = "block";
        button.innerText = "Ẩn lời giải";
    } else {
        solution.style.display = "none";
        button.innerText = "Xem lời giải";
    }
}
