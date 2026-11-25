function changeImage() {

    let image = document.getElementById("guzik");

    if (image.src.includes("guzik_01.png")) {
        image.src = "guzik_02.png";
    } else {
        image.src = "guzik_01.png";
    }
}

fetch("opis_apple.txt")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load text file");
        }

        return response.text();
    })
    .then(text => {
        document.getElementById("text-container").textContent = text;
    })
    .catch(error => {
        console.error(error);
    });
