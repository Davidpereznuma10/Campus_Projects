export default {
    albums:[
        {
            articles:"Albums",
            name: "A Fever You Can't Sweat Out",
            year:"2005",
            paragraph:"",
            covered:"../dom/style/img/a_fever.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/01hp4DvayKlnqUQrmk0vvz",
                },
        },
        {
            articles:"Albums",
            name: "Pretty. Odd",
            year:"2008",
            paragraph:"",
            covered:"../dom/style/img/Pretty._Odd.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/78EcStHa23JPRmLNan5fST?si=vbKotHbKSjOiy_snFl3-YA",
                },
        },
        {
            articles:"Albums",
            name: "Vices & Virtues",
            year:"2011",
            paragraph:"",
            covered:"../dom/style/img/Vice-virtues.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/5S0nsfYhHa1uz10V4yoWSL?si=aBIHx2icQQCJ2s2Gfq_mrw",
                },
        },
        {
            articles:"Albums",
            name: "Too Weird to Live, Too Rare to Die!",
            year:"2013",
            paragraph:"",
            covered:"../dom/style/img/too_weird.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/1hxraaWEf3wFnJxADf8Dge?si=G02p5x2cRLq7sg0j2mzBnA",
                },
        },
        {
            articles:"Albums",
            name: "Death of a Bachelor",
            year:"2016",
            paragraph:"",
            covered:"../dom/style/img/dead.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/6twKQ0EsUJHVlAr6XBylrj?si=XL4jtvhSQKWM72VRYR3B_g"
                },
        },
        {
            articles:"Albums",
            name: "Pray for the Wicked",
            year:"2018",
            paragraph:"",
            covered:"../dom/style/img/pray_wicked.jpg",
            btn:{
            name:"Listen to Spotify...",
            href: "https://open.spotify.com/album/6ApYSpXF8GxZAgBTHDzYge?si=43JjaIcRSWyIm07SL8NBdQ",
                },
        },
        {
            articles:"Albums",
            name: "Viva Las Vengeance",
            year:"2022",
            paragraph:"",
            covered:"../dom/style/img/viva_vengeance.jpg",
            btn:{
            name:"Listen to spotify...",
            href: "https://open.spotify.com/album/25DhBz5cckEAFcivcSzSTo?si=jros39QFRFyC5Svn2VN6UQ",
                },
        },
    ],
    showDes(){
        this.albums.forEach((val,id)=>{
            document.querySelector("#cards").insertAdjacentHTML("beforeend",`
            <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary ">${val.articles}</strong>
                <h3 class="mb-0">${val.name}</h3>
                <div class="mb-1 text-muted">${val.year}</div>
                <p class="card-text mb-auto" text->${val.paragraph} </p>
                <a id="links" href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="responsiveimg" src="${val.covered}">
              </div>
            </div>
          </div>`)
        });
    }
}