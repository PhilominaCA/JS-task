var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    //Get all the countries in Asia region using filter
    var asia_countries = data.filter((elem) => elem.region === "Asia");
    console.log(asia_countries);
    //Get all the countries with population< 2lac  using filter
    var Ppulation = data.filter((elem) => elem.population < 200000);
    console.log(Ppulation);
    //Print countries with currency = USD
    //  var Currenc = data.filter((elem) => elem.currencies[0].code === "USD").map((elem) => elem.name);
    var Currenc = data.filter((elem) => {
        for (var i in elem.currencies) {
            if (elem.currencies[i].code === "USD")
                return true;
        }
    });
    console.log(Currenc);
    //print total population of all contries using reduce
    var total_popualtion = data.reduce((accum, elem) => { return accum + elem.population }, 0);
    console.log(total_popualtion);
}