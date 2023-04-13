const myForm = document.querySelector("#myForm");
const myColor = document.querySelector("#color");
const myRango = document.querySelector("#range");
const valorRango = document.querySelector("#valor");
const selectedMarca = document.querySelector('input[name="marca"]');
const myBorrador = document.querySelector('input[name="borrador"]');
const myMaterial= document.querySelectorAll('input[name="material"]');


class lapiz{
    #marca
    constructor({ color="#FF0000", range = 18 , borrador = true, material="Madera", marca="Norma" }){
        this.color = color;
        this.range = range;
        this.borrador= borrador;
        this.#marca = marca;
        this.material = material;
    }

    getMarca(){return this.#marca;}
    setMarca(nuevaMarca){this.#marca = nuevaMarca;}
}


window.addEventListener("DOMContentLoaded",() => {
    const load = new lapiz({});
    valorRango.textContent= `${myRango.value} Cm`;
    myColor.value=  load.value;
    selectedMarca.checked = load.getMarca();
    console.log(myMaterial.checked = load.material);
    myMaterial.checked = load.material;
    myBorrador.checked = load.borrador;
    console.log(load);
    
})


myRango.addEventListener('input', (e)=>{
    const valor = e.target.value;
    valorRango.textContent= `${valor} Cm`;});





const lectura = myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData = new FormData(myForm);
    const formDataObj = Object.fromEntries(formData.entries());
    if (selectedMarca) {formDataObj.marca = selectedMarca.value;};
    const miLapiz = new lapiz(formDataObj)
    const table = document.querySelector("#table").insertAdjacentHTML("beforeend",`
    <tr>
           <th>${miLapiz.color}</th>
           <th>${miLapiz.range} Cm</th>
           <th>${miLapiz.getMarca()}</th>
           <th>${miLapiz.borrador}</th>
           <th>${miLapiz.material}</th>
   </tr>`);
    console.table(miLapiz);
});



