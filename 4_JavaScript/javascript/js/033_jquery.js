$("box2").hover(function() {
    $(this).css("background-color", "yellow");
}, function() {
    $(this).css("background-color", "blue");
}
);

$("#box2").mouseenter(function() {
    alert("You entered p1!")
});

$("#box2").mouseleave(function() {
    alert("Bye! You leaved p1!")
});
