let form = document.querySelector("form")

form.addEventListener(`submit`, function(e){
    e.preventDefault()
    var search = document.getElementById("search").value 
    fetch("https://www.growstuff.org/api/v1/crops")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.Filter(
            function(data){ return data.attributes.name == plantName }
    ))
        

        });
        // document.getElementById("plants").innerHTML = `
        // <p>Plant Name: `
    })

