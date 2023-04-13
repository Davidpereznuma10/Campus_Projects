const myForm = document.querySelector("#myForm");
const myColor = document.querySelector("color")
const myRango = document.querySelector("#range");
const valorRango = document.querySelector("#valor");
const myMarca= document.querySelectorAll('input[name="marca"]');
const myBorrador= document.querySelectorAll('input[name="borrador"]');
const myMaterial= document.querySelectorAll('input[name="material"]');


myRango.addEventListener('input', (e)=>{
    const valor = myRango.value;
    valorRango.textContent= `${valor} Cm`;
});

class lapiz{
        #marca
    constructor({ color="#FF0000",range=18,borrador= true,material="madera",}){
    this.color = color;
    this.range = range;
    this.#marca = "Norma"; 
    this.material = material;}

    get marca(){
        return this.#marca;}

    set marca(nuevaMarca){
    this.#marca = nuevaMarca}
}

const lectura = myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(myForm);
    let formDataObj = Object.fromEntries(formData.entries());
    let miLapiz = new lapiz(formDataObj)
    console.log(miLapiz);
})