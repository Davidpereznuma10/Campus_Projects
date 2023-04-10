export default {
    Image: "/dom/style/img/logo.jpg",
    info:{
        tittle: "Panic! at the Disco is ending after nearly two decades",
        paragraph:"Brendon Urie, the band's frontman and last remaining original member, made the announcement on Instagram. The post said the band's upcoming European tour for the 2022 album Viva Las Vengeance will be its last.\n\"Growing up in Vegas I could've never imagined where this life would take me,\" Urie wrote. \"But sometimes a journey must end for a new one to begin.",
        btn:{
            name:"Continue...",
            href:"https://www.npr.org/2023/01/24/1151092998/panic-at-the-disco-ending-brendon-urie",
        },
    },
    ShowAllBanner(){        
        const ws = new Worker("components/storage/wsMyBanner.js", {type:"module"});
        let count=0;
        ws.postMessage({module:"showImg", data:this.Image});
        ws.postMessage({module:"showContenido", data:this.info});
        let id= ["#showImg","#Banner"]
        ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): undefined;
        count++;});
    }
}
