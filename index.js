document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    let button = document.querySelector("button")
    let gardenDiv = document.querySelector("#garden-section")
    const scienceList = document.getElementById("scienceNames")
    const description = document.getElementById("description")
    let handleButton = function (e) {
        let ul = document.createElement('ul')
        ul.textContent = `${plantName}`
        console.log(ul)
        gardenDiv.append(ul)
}
    form.addEventListener(`submit`, function (e) {
        e.preventDefault()
        scienceList.innerHTML = ""
        var search = document.getElementById("search").value.toLowerCase();
        fetch(`http://www.growstuff.org/crops/` + search + ".json", {
                header: 'Access-Control-Allow-Origin'
            })
            .then((resp) => resp.json())
            .then((data) => {
                button.removeEventListener(`click`, handleButton)
                button.hidden = ""
                console.log(data)
                plants = data
                plantName = plants.openfarm_data.attributes.name
                plantImage = plants.openfarm_data.attributes.main_image_path
                plantDescription = plants.openfarm_data.attributes.description
                console.log(plantName)
                document.getElementById("plantName").innerHTML = `
                ${plantName}`
                document.getElementById("plantPic").src = `
                ${plantImage}`
                scienceNames = plants.scientific_names
                scienceNames.forEach(scienceName => {
                    let listedScience = document.createElement("li")
                    listedScience.innerHTML = `
                    ${scienceName.name}`
                    scienceList.append(listedScience)
                })
                description.innerHTML = plantDescription
                button.addEventListener(`click`, handleButton)
            })
            .catch((error) => alert("Plant not found. Please use the singular form and spell the plant correctly."))
    })
})