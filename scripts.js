fetchText();

async function fetchText() {
    let response = await fetch("https://www.windfinder.com/forecast/freire_araucania_chile", { mode: 'no-cors'});

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.text();
        // handle data
        document.getElementById("title").innerHTML = data.substring(
              str.indexOf('<span id="spotheader-spotname" class="spot-headline__large">') + 1,
              str.lastIndexOf('</span>'));
    } else {
    	document.getElementById("title").innerHTML = "404";
    }
}
