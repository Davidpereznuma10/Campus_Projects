export default {
    info:{
        tittle: "Panic! at the Disco is ending after nearly two decades",
        paragraph:"Brendon Urie, the band's frontman and last remaining original member, made the announcement on Instagram. The post said the band's upcoming European tour for the 2022 album Viva Las Vengeance will be its last.\n\"Growing up in Vegas I could've never imagined where this life would take me,\" Urie wrote. \"But sometimes a journey must end for a new one to begin.",
        btn:{
            name:"Continue...",
            href:"https://www.npr.org/2023/01/24/1151092998/panic-at-the-disco-ending-brendon-urie",
        },
    },
    Image: "/dom/style/img/logo.jpg",

    ShowAllBanner(){        
        const ws = new Worker ("dom/components/storage/wsMyBanner.js", {type:"module"});
        let count=0;
        ws.postMessage({module:"showImg", data:this.Image});
        ws.postMessage({module:"showContenido", data:this.info});
        let id= [".imgBanner","#Banner"]
        ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count].append(...doc.body.children));
            (id.length-1== count)? ws.terminate():count++;
        });
    }
    // showBackground(){
    //     document.querySelector(".imgBanner").style.backgroundImage=`url(${this.Image})`;
    // },
    // showBanner(){
    //     document.querySelector("#Banner").insertAdjacentHTML("beforeend",
    //     `<h1 class="display-4 fst-italic">${this.tittle}</h1>
    //     <p class="lead my-3">${this.paragraph}</p>
    //     <p class="lead mb-0"><a href="${this.btn.href}" class="text-white fw-bold">${this.btn.name}</a></p>`
    //     )

    // }
}
