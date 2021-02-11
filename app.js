
function armyform() {
    let country = document.getElementById("country").value
    let education = document.getElementById("education").value
    let height = document.getElementById("height").value
    let age = document.getElementById("age").value
    let result = document.getElementById("result")


    if (country === "pakistan" && height >= 5 && age >= 18 && age <= 25 && education === "graduation" || age >= 26 && age <= 28 && education === "master"
    ) {
        result.innerHTML = "you are eligible"

    }

    else {

        result.innerHTML = "you ar not eligible"
    }


}