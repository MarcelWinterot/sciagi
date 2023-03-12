t1 = document.getElementById("t1");
t2 = document.getElementById("t2");

button1 = document.getElementById("b1").addEventListener("click", function(){
    t1.style.display = "block";
    t2.style.display = "none";
});

button2 = document.getElementById("b2").addEventListener("click", function(){
    t1.style.display = "none";
    t2.style.display = "block";
});