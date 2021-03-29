

const container = document.querySelector("#bodyName");

const bands = [
    {name:"VILLAGERS OF IOANNINA CITY",date: "14 MEI 2021", time: "21:00", description: "Een van de grootste heavy rock bands van Griekeland met invloeden van Folk uit Epirius, alt-metal en post rock.", youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "GYEDU-BLAY AMBOLLEY",date:"15 MEI 2021", time : "21:00", description:"Afrofunk Legende, de ‘James Brown van Ghana’ keert terug naar Grounds!", youtubeURL:"https://www.youtube.com/embed/mdHfT84GT1Y?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "CHOUK BWA & THE ÅNGSTROMERS",date:"18 JUNI 2021", time : "21:00", description:"Atypische voodoo met opzwepende ritmes en elektronica.",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "BOI AKIH STORYTELLER",date:"18 JUNI 2021", time : "20:00", description:"BOI AKIH speelt Storyteller: moderne jazz verweven met folk tradities vanuit alle windstreken.",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "SAMBA TOURÉ TRIO",date:"8 OKTOBER 2021", time : "21:00", description:"De beste gitarist van Mali keert op zijn nieuwe album terug naar zijn muzikale roots.",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "MAURINO",date:"15 OKTOBER 2021", time : "21:00", description:"Het brein achter het grootste Latin feest van Nederland, Fiesta Macumba, komt met Future Latin naar Grounds!",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "LES FRÈRES SMITH",date:"113 NOVEMBER 2021", time : "21:00", description:"Afrobeat, Afrosoul en Afrofunk: Les Frères Smith presenteert hun nieuwe album!",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "TAMIKREST",date:"20 NOVEMBER 2021", time : "21:00", description:"Terug in Grounds: Sahara Blues van Tamikrest!",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"},
    {name: "VALVETRONIC BRASSBAND EP RELEASE",date:"10 DECEMBER 2021", time : "21:00", description:"Een Brassband maar dan anders: Van House naar Dance en Hiphop!",youtubeURL:"https://www.youtube.com/embed/7dBCYrFiJSw?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"}
    ];

function makeDiv(bandName, date, time, description, youtube){

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("bandName");
    container.appendChild(mainDiv);

    const nameDiv = document.createElement("div");
    nameDiv.innerText = bandName
    mainDiv.appendChild(nameDiv);

    const dateDiv = document.createElement("div");
    dateDiv.innerText = date
    mainDiv.appendChild(dateDiv);

    const timeDiv = document.createElement("div");
    timeDiv.innerText = time;
    mainDiv.appendChild(timeDiv);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.innerText = description;
    mainDiv.appendChild(descriptionDiv);
//create iframe to include youtube video.
    const youtubeDiv = document.createElement("iframe");
    //put youtube url inside src of iframe
    youtubeDiv.src = youtube;
    mainDiv.appendChild(youtubeDiv);

}



for (let band of bands) {
    makeDiv(band.name, band.date, band.time, band.description,band.youtubeURL)
}


