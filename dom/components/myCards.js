export default {
    albums:[
        {
            articles:"Albums",
            name: "A Fever You Can't Sweat Out",
            year:"2005",
            paragraph:"Upon its release, A Fever You Can't Sweat Out became a commercial success. Its second single, \"I Write Sins Not Tragedies\", became a top 10 hit in the United States. It helped bolster the album’s sales to 1.8 million in the US by 2011, making it the group's best-selling release.Despite its sales, the album polarized music critics, with many praising the album's catchiness and others questioning its originality. The band promoted the record with stints on the Nintendo Fusion Tour before its first headlining tour, the Nothing Rhymes with Circus Tour. In late 2015, its certification was upgraded to RIAA double platinum for 2 million shipments.",
            covered:"../dom/style/img/a_fever.jpg",
            btn:{
            name:"Listen...",
            href: "https://open.spotify.com/album/01hp4DvayKlnqUQrmk0vvz",
                },
        },
        {
            articles:"Albums",
            name: "Pretty. Odd",
            year:"2008",
            paragraph:"The record received a generally positive critical response, but under-performed commercially in the aftermath of its triple-platinum-selling predecessor, instead only achieving platinum status. The album spent 18 weeks on the Billboard 200, peaking at number two, and the album's lead single \"Nine in the Afternoon\" was certified double platinum by the RIAA. The album has since gathered a cult following and sold 422,000 copies by 2011.In 2019, the album was certified platinum by the RIAA.",
            covered:"../dom/style/img/Pretty._Odd.jpg",
            btn:{
            name:"Listen...",
            href: "https://open.spotify.com/album/78EcStHa23JPRmLNan5fST?si=vbKotHbKSjOiy_snFl3-YA",
                },
        },
        {
            articles:"Albums",
            name: "Vices & Virtues",
            year:"2011",
            paragraph:"Upon release, the album received somewhat mixed, but overall positive, reviews. Critics praised the album's wide variety of musical stylings, while criticism was aimed at the compositional simplicity and Urie's verbose lyricism. Preceded by its lead single, \"The Ballad of Mona Lisa\", the album debuted at number seven on the Billboard 200 selling 56,000 copies within its first week.",
            covered:"../dom/style/img/Vice-virtues.jpg",
            btn:{
            namee:"Listen...",
            href: "https://open.spotify.com/album/5S0nsfYhHa1uz10V4yoWSL?si=aBIHx2icQQCJ2s2Gfq_mrw",
                },
        },
        {
            articles:"Albums",
            name: "Too Weird to Live, Too Rare to Die!",
            year:"2013",
            paragraph:"Described as a \"party record\",Too Weird to Live, Too Rare to Die! was preceded by the singles \"Miss Jackson\" and \"This Is Gospel\", with \"Girls / Girls / Boys\" and Nicotine EP following after its release. The album's overall aesthetic is influenced by dance music, electronica and hip hop.Too Weird to Live, Too Rare to Die! debuted at number two on the US Billboard 200, earning the band their second career number two. The song \"Vegas Lights\" would later be used as the Vegas Golden Knights' goal song.",
            covered:"../dom/style/img/too_weird.jpg",
            btn:{
            name:"Listen...",
            href: "https://open.spotify.com/album/1hxraaWEf3wFnJxADf8Dge?si=G02p5x2cRLq7sg0j2mzBnA",
                },
        },
        {
            articles:"Albums",
            name: "Death of a Bachelor",
            year:"2016",
            paragraph:"Death of a Bachelor debuted at number one on the US Billboard 200, with 190,000 album units, earning the band its best sales week and first number one album. The album has been certified double platinum by the Recording Industry Association of America (RIAA) for sales of at least 2,000,000 copies. It was nominated for the Grammy Award for Best Rock Album at the 59th Annual Grammy Awards.",
            covered:"../dom/style/img/Dean_of.jpg",
            btn:{
            name:"Listen...",
            href: "https://open.spotify.com/album/6twKQ0EsUJHVlAr6XBylrj?si=XL4jtvhSQKWM72VRYR3B_g"
                },
        },
        {
            articles:"Albums",
            name: "Pray for the Wicked",
            year:"2018",
            paragraph:"Pray for the Wicked debuted at number one on the US Billboard 200 with 180,000 album-equivalent units, of which 151,000 were pure album sales. It is the band's second US number-one album.The album also debuted at number one on the ARIA Albums Chart, making it the band's second Australian number-one album.According to Billboard, Pray for the Wicked was the 10th best selling vinyl album of 2018 in the US with sales of 59,000, making a major contribution to the 15% rise of the format in that year.The album was also certified Platinum by the Recording Industry Association of America (RIAA) in the United States.",
            covered:"../dom/style/img/pray_wicked.jpg",
            btn:{
            name:"Listen...",
            href: "https://open.spotify.com/album/6ApYSpXF8GxZAgBTHDzYge?si=43JjaIcRSWyIm07SL8NBdQ",
                },
        },
        {
            articles:"Albums",
            name: "Viva Las Vengeance",
            year:"2022",
            paragraph:"Brendon Urie called the album \"a look back at who I was 17 years ago and who I am now with a fondness that I didn\'t have before. I didn\'t realize I was making an album and there was something on the tape machine that kept me honest.\" \"The album was also described as a \"cinematic musical journey on the fine line between seizing your youth, seizing the day and wearing yourself out\"",
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
                <strong class="d-inline-block mb-2 text-primary">${val.articles}</strong>
                <h3 class="mb-0">${val.name}</h3>
                <div class="mb-1 text-muted">${val.year}</div>
                <p class="card-text mb-auto" text-overflow>${val.paragraph} </p>
                <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img class="responsiveimg" src="${val.covered}"></img>
              </div>
            </div>
          </div>`)
        });
    }
}