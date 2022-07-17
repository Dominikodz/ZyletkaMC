// Make a request for a user with a given ID
axios.get('https://api.mcstatus.io/v1/status/java/graj.zyletkamc.ga')
.then(function (response) {
    // handle success
    console.log(response);

    //console.log(response.data.host); //graj.pierwsza-test.ga
    document.getElementById("hostname").innerHTML = response.data.host;
    document.getElementById("hostname-zone").innerHTML = response.data.host;

    //console.log(response.data.online); //online true

    //console.log(response.data.response.motd.html); // motd
    document.getElementById("motd-zone").innerHTML = response.data.response.motd.html

    //console.log(response.data.response.players.max); // max graczy
    //console.log(response.data.response.players.online); // online graczy
    document.getElementById("players").innerHTML = response.data.response.players.online + '<!-- --> / <!-- -->' + response.data.response.players.max
    document.getElementById("players-zone").innerHTML = response.data.response.players.online + '<!-- --> / <!-- -->' + response.data.response.players.max
    
    // remove "purpur" part from version; can be misleading
    //let gameversion = response.data.response.version.name
    //gameversion.replace("Purpur","")
    // doesnt work :(; it displays that cannot find hostname

    //console.log(response.data.response.version.name); // purpur
    document.getElementById("version").innerHTML = response.data.response.version.name


    //change favicon to correct from mc server
    //document.getElementById("favicon-zone").src = response.data.response.favicon;

})
.catch(function (error) {
    // handle error
    console.log(error);
    document.getElementById("hostname").innerHTML = "Server jest wyłączony!";
    document.getElementById("hostname-zone").innerHTML = "Server jest wyłączony!";
    document.getElementById("hostname").style.color = "red";
    document.getElementById("hostname-zone").style.color = "red";
})
.then(function () {
    // always executed
});