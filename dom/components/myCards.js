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
    showCards(){
        const ws = new Worker ("components/storage/wsMyCards.js", {type:"module"});
        ws.postMessage({module:"showDes", data:this.albums});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector("#cards").append(...doc.body.children);
        })
    }
}