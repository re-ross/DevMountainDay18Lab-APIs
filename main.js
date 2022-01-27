const getResidents = document.querySelector(".get-residents");
const resetBtn = document.querySelector(".reset");
const divElement = document.querySelector("div");

getResidents.addEventListener(
  "click",
  axios.get("https://swapi.dev/api/planets/2").then((res) => {
    for (let i = 0; i < res.data.residents.length; i++) {
      axios.get(res.data.residents[i]).then((res) => {
        const h2 = document.createElement("h2");
        const text = document.createTextNode(`${res.data.name}`);
        h2.appendChild(text);
        divElement.appendChild(h2);
      });
    }
  })
);

resetBtn.addEventListener("click", () => {
  divElement.removeChild(divElement.firstChild);
});
