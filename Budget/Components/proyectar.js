export default {
    variables: {
      selec: document.querySelector("#select"),
      type: document.querySelector("#type"),
      ingreso: document.querySelector("#myIngreso"),
      egreso: document.querySelector("#myEgreso"),
      much: document.querySelector("#much").value,
      suma: `$${0}`,
      money: document.querySelector("#cantidad"),
      button: document.querySelector("#button"),
      cuentas:[],
      data:[],
    },

    showValores() {
      this.variables.selec.addEventListener("change", (e) => {
        let selection = this.variables.selec.value;
        if (selection === "Ingreso") {
          this.variables.suma += this.variables.much;
          this.variables.ingreso.textContent = this.variables.suma;
        } else if (selection === "Egreso") {
          this.variables.suma += this.variables.much;
          this.variables.egreso.textContent = this.variables.suma;
        }});
    },
    consolelog() {
        this.variables.button.addEventListener("click", (e) => {
            let data = this.variables.data;
            let selection = this.variables.selec.value;
            let typeValue = this.variables.type.value;
            let muchValue = document.querySelector("#much").value;
            let newCuenta = new Cuenta(selection, typeValue, muchValue);
                this.variables.cuentas.unshift(newCuenta);
            let storedData = localStorage.getItem("cuenta");        
            if (storedData) {
                storedData = JSON.parse(storedData);
                if (!Array.isArray(storedData)) {
                storedData = [];
                }
                } else {
                    storedData = [];
                }
                storedData.unshift(newCuenta);
                data = localStorage.setItem("cuenta", JSON.stringify(storedData));
            }); 
      }, 
    tabla(){
        let storedData = localStorage.getItem("cuenta");
        if(storedData){
            storedData= JSON.parse(storedData);
            document.querySelector("#tables").insertAdjacentHTML("beforeend",`
            <div>${dataTable}</div>`)
        }
    },
    dataTable(data){
        if (selection === "Ingreso"){
            return `
            <div id="ingresoTable">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">NAME</th>
                    <th scope="col">VALUE</th>
                    <th scope="col">%%%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
              </table>
        </div>` 
        }
    }     
    };
    class Cuenta {
      constructor(selection, typeValue, muchValue) {
        // Constructor de la clase Cuenta
        this.selection = selection;
        this.typeValue = typeValue;
        this.muchValue = muchValue;
      }
  };
  