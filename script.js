// If you want to change the country you can overwrite the URL https://covid-api.mmediagroup.fr/v1/cases?country=<Country>

// fetch API of covid19 in Slovakia
fetch('https://covid-api.mmediagroup.fr/v1/cases?country=Slovakia')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('cases').innerHTML = data.All.confirmed.toLocaleString(); 
            document.getElementById('deaths').innerHTML = data.All.deaths.toLocaleString();
            document.getElementById('population').innerHTML = data.All.population.toLocaleString();

        // catch errors
        }).catch(error => {
            console.log(error)
            
        })
    
//fetch API of vaccine in Slovakia
fetch('https://covid-api.mmediagroup.fr/v1//vaccines?country=Slovakia')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('vaccines').innerHTML = data.All.people_vaccinated.toLocaleString(); 
            document.getElementById('partially').innerHTML = data.All.people_partially_vaccinated.toLocaleString(); 
        }) .catch(error => {
            console.log(error)
            
        })
