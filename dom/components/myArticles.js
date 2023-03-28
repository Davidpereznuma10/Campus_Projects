export default {
    sention:{
        name: "About the artists",
    },

    showSection() {
        document.querySelector('#section').insertAdjacentHTML("beforeend",`
          <h3 class="pb-4 mb-4 fst-italic border-bottom" strong>${this.sention.name}</h3>
        `);}

}