const getResidents = document.querySelector(".get-residents");

const itWorks = () => {
  console.log("it works!");
};

getResidents.addEventListener(
  "click",
  axios.get("https://swapi.dev/api/planets/2").then((res) => {
    for (let i = 0; i < res.data.residents.length; i++) {
      axios.get(res.data.residents[i]).then((res) => {
        const bodyElement = document.body;
        const h2 = document.createElement("h2");
        const text = document.createTextNode(`${res.data.name}`);
        h2.appendChild(text);
        bodyElement.appendChild(h2);
      });
    }
  })
);
