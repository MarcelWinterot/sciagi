let zawartoscDat = document.getElementById("zawartoscDat");
let zawartoscPojec = document.getElementById("zawartoscPojec");
let zawartoscWydarzen = document.getElementById("zawartoscWydarzen");

daty = document.getElementById("daty").addEventListener("click", function() {
    zawartoscDat.style.display = "block";
    zawartoscPojec.style.display = "none";
    zawartoscWydarzen.style.display = "none";
});

pojecia = document.getElementById("pojecia").addEventListener("click", function() {
    zawartoscDat.style.display = "none";
    zawartoscPojec.style.display = "block";
    zawartoscWydarzen.style.display = "none";
});

wydarzenia = document.getElementById("wydarzenia").addEventListener("click", function() {
    zawartoscDat.style.display = "none";
    zawartoscPojec.style.display = "none";
    zawartoscWydarzen.style.display = "block";
});