// const getResidents = document.querySelector(".get-residents");
// const resetBtn = document.querySelector(".reset");
// const divElement = document.querySelector("div");
// const bodyElement = document.querySelector("body");

// const click = () => {
//   axios.get("https://swapi.dev/api/planets/2").then((res) => {
//     for (let i = 0; i < res.data.residents.length; i++) {
//       axios.get(res.data.residents[i]).then((res) => {
//         const h2 = document.createElement("h2");
//         const text = document.createTextNode(`${res.data.name}`);
//         h2.appendChild(text);
//         divElement.appendChild(h2);
//       });
//     }
//   });

//   getResidents.addEventListener("click", click);

//   resetBtn.addEventListener("click", () => {
//     divElement.innerHTML = ``;
//   });
// };

const resetBtn = document.querySelector(".reset");
const btn = document.querySelector("button");
const bodyEl = document.querySelector("div");

function clear() {
  bodyEl.innerHTML = "";
}

function click() {
  axios.get("https://swapi.dev/api/planets/2").then((res) => {
    for (let i = 0; i < res.data.residents.length; i++) {
      axios.get(res.data.residents[i]).then((res) => {
        const h2URL = document.createElement("h2");
        const text = document.createTextNode(`${res.data.name}`);
        h2URL.appendChild(text);
        bodyEl.appendChild(h2URL);
      });
    }
  });
}

btn.addEventListener("click", click);

resetBtn.addEventListener("click", clear);
