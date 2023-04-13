const myForm = document.querySelector("#myForm");
const myColor = document.querySelector("#color");
const myRango = document.querySelector("#range");
const valorRango = document.querySelector("#valor");
const myMarca= document.querySelectorAll('input[name="marca"]');
const myBorrador = document.querySelector('input[name="borrador"]');
const myMaterial= document.querySelectorAll('input[name="material"]');


myRango.addEventListener('input', (e)=>{
    const valor = e.target.value;
    valorRango.textContent= `${valor} Cm`;
});
class lapiz{
    #marca
    constructor({ color="#FF0000", range = 18 , borrador = true, material="madera", marca="Norma" }){
        this.color = color;
        this.range = range;
        this.borrador= borrador;
        this.#marca = marca;
        this.material = material;
    }

    getMarca(){return this.#marca;}
    getRange(){return this.range;}

    setMarca(nuevaMarca){this.#marca = nuevaMarca;}
    setRange(nuevoRango){this.range = nuevoRango;}
}


const lectura = myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selectedMarca = document.querySelector('input[name="marca"]:checked');
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



