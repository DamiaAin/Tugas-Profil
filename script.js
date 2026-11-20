const TombolTema = document.getElementById("TombolTema");

TombolTema.addEventListener("click", function() {
    document.body.classList.toggle("gelap");

    if(document.body.classList.contains("gelap")) {
        TombolTema.textContent = "Ganti Tema Terang"
    }
    else {
        TombolTema.textContent = "Ganti Tema Gelap"
    }
});

const TombolSapa = document.getElementById("TombolSapa");

TombolSapa.addEventListener("click", function() {
    const nama = document.getElementById("nama").value;

    if (nama === "") {
        document.getElementById("hasil").textContent =
            "Masukkan nama dulu, ya!";
    } else {
        document.getElementById("hasil").textContent =
            "Hai, " + nama + "!";
    }
});