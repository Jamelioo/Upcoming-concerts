async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea8fcc0be5msh014de60d714562cp198165jsn0e43a32ae48c',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };
    let city = (prompt("Enter a city"))
    let link = "https://concerts-artists-events-tracker.p.rapidapi.com/location?name="+city+"&minDate=2022-05-20&maxDate=2022-12-31&page=1"
    const res = await fetch(link, options)
    const record = await res.json()


    document.getElementById('concerts').innerHTML= record.data.map(item => `<li>${item.name}</li>`).join('');

}
fetchData();