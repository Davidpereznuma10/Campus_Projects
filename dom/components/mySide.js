export default {
    nav:[
        {
        title:"About",
        text:"Panic! at the Disco was an American pop rock band from Las Vegas, Nevada, formed in 2004 by childhood friends <a id='links' href='https://en.wikipedia.org/wiki/Ryan_Ross'>Ryan Ross</a>, <a id='links' href='https://en.wikipedia.org/wiki/Spencer_Smith_(musician)'>Spencer Smith</a>, Brent Wilson, and <a id='links' href='https://en.wikipedia.org/wiki/Brendon_Urie'>Brendon Urie</a>. Following several lineup changes, Panic! began operating as the solo project of frontman Urie from 2015 until the project's discontinuation in 2023."
    },
        {
            title:"The most Popular tracks",
            link: [
                    {
                        name:"House of Memories",
                        href:"https://open.spotify.com/track/2DgdHcjWmO3qd50RzuBLgZ?si=89ca29d3fd9f489d",
                    },
                    {
                        name:"High Hopes",
                        href:"https://open.spotify.com/track/1rqqCSm0Qe4I9rUvWncaom?si=90c5f1c007964d52",
                    },
                    {
                        name:"I Writte Sins Not Tragedies",
                        href:"https://open.spotify.com/track/5cY8y2XgOfkAh4kSWLFKkz?si=2b0fbcf396754df2",
                    },
                    {
                        name:"Dead of a Bachelor",
                        href:"https://open.spotify.com/track/1BECwm5qkaBwlbfo4kpYx8?si=ef06fdb8ac4b4b9e",
                    },
                    {
                        name:"Emperor's New clothes",
                        href:"https://open.spotify.com/track/3px2rAPu74ltbkf9eZsZ8h?si=1bb378a251e54867",
                    },
                    {
                        name:"Don't Threaten Me with a Good Time",
                        href:"https://open.spotify.com/track/2fh3bZ8jZhMxOcfESE9nQY?si=23cf551bc23b40cf",
                    },
                    {
                        name:"The Ballad of Mona Lisa",
                        href:"https://open.spotify.com/track/5rLi8B8qgk6qThwRnKHW2P?si=382190ba4e444f4b",
                    },
                    {
                        name:"Hey Look Ma, I Made It",
                        href:"https://open.spotify.com/track/22oEJW6r2rMb9z4IntfyEa?si=364dd441ddb24060",
                    },
                    {
                        name:"Victorius",
                        href:"https://open.spotify.com/track/6od5hFv9IT5JHc7NEF9HRv?si=d8e6aea0753642ad",
                    },
                    {
                        name:"Golden Days",
                        href:"https://open.spotify.com/track/3fwKVZ73y7UUGMyR6rVCRa?si=0d725c06c2754325",
                    },],
        },
        {
        title: "Social Media",
        link:[
        {
            name:"Facebook",
            href:"https://www.facebook.com/panicatthedisco/?locale=es_LA",
        },
        {
            name:"Twitter",
            href:"https://twitter.com/PanicAtTheDisco?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
        {
            name:"Instagram",
            href:"https://www.instagram.com/panicatthedisco/",
        },]
    },
],
showSidebar(){
    const data = this.nav.map((val,id)=>{
        return((val.link)?this.list(val):this.cards(val));
    });
    document.querySelector("#sidebar").insertAdjacentHTML("beforeend", data.join(""));
},
cards(val){
    return `
        <div class="p-4 mb-3 bg-black rounded">
            <h4 class="fst-italic" strong>${val.title}</h4>
            <p class="mb-0" em>${val.text}</p>
        </div>
    `;
},
list(val){
    return `
        <div class="p-4">
            <h4 class="fst-italic">${val.title}</h4>
            <ol class="list-unstyled">
                ${val.link.map((val,id)=> `<li><a id="links"  href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
        </div>
    `;
}
}