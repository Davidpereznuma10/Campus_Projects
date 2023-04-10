export default{
    title : {
        name:"Panic At The Disco",
        href:"https://open.spotify.com/artist/20JZFwl6HVl6yg8a4H3ZqK?si=NU3Pe6g4R_yKP0xnEjjVGg",
        logo:"../dom/style/img/icon.png"
    },
    Albums:[
        {
            name: "A Fever You Can't Sweat Out",
            href: "https://open.spotify.com/album/01hp4DvayKlnqUQrmk0vvz",
        },
        {
            name: "Pretty. Odd",
            href: "https://open.spotify.com/album/78EcStHa23JPRmLNan5fST?si=vbKotHbKSjOiy_snFl3-YA",
        },
        {
            name: "Vices & Virtues",
            href: "https://open.spotify.com/album/5S0nsfYhHa1uz10V4yoWSL?si=aBIHx2icQQCJ2s2Gfq_mrw",
        },
        {
            name: "Too Weird to Live, Too Rare to Die!",
            href: "https://open.spotify.com/album/1hxraaWEf3wFnJxADf8Dge?si=G02p5x2cRLq7sg0j2mzBnA",
        },
        {
            name: "Death of a Bachelor",
            href: "https://open.spotify.com/album/6twKQ0EsUJHVlAr6XBylrj?si=XL4jtvhSQKWM72VRYR3B_g"
        },
        {
            name: "Pray for the Wicked",
            href: "https://open.spotify.com/album/6ApYSpXF8GxZAgBTHDzYge?si=43JjaIcRSWyIm07SL8NBdQ",
        },
        {
            name: "Viva Las Vengeance",
            href: "https://open.spotify.com/album/25DhBz5cckEAFcivcSzSTo?si=jros39QFRFyC5Svn2VN6UQ",
        }
    ],
    
    showHeader(){
            const ws = new Worker("components/storage/wsMyHeader.js", {type:"module"});            
            let count = 0;
            ws.postMessage({module: "lisTitle", data:this.title});
            ws.postMessage({module: "listAlbums", data:this.Albums});
            let id = ["#Tittle","#Albums"];
            ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
                document.querySelector(id[count]).append(...doc.body.children);
                (id.length-1==count) ? ws.terminate(): count++;
            })        
        }
    };