const myForm = document.querySelector("#myForm");
const myColor = document.querySelector("#color");
const myRango = document.querySelector("#range");
const valorRango = document.querySelector("#valor");
const myMarca= document.querySelectorAll('input[name="marca"]');
const myBorrador = document.querySelector('input[name="borrador"]');
const myMaterial= document.querySelectorAll('input[name="material"]');
const No_Tiene = false;
const Tiene = true;


myRango.addEventListener('input', (e)=>{
    const valor = e.target.value;
    valorRango.textContent= `${valor} Cm`;
});


class lapiz{
    #marca
    constructor({ color="#FF0000", range = 18, borrador = Tiene, material="madera", marca="Norma" }){
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
    if (selectedMarca) {formDataObj.marca = selectedMarca.value;}
    const miLapiz = new lapiz(formDataObj)
    console.log(miLapiz);
});
