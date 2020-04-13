const container = document.querySelector(".container");
const strongmen = [
  {
    name: "Pudzian",
    image: "images/pudzian.jpg"
  },
  {
    name: "Bjornsson",
    image: "images/bjornsson.jpg"
  },
  {
    name: "Caron",
    image: "images/caron.jpg"
  },
  {
    name: "Hall",
    image: "images/hall.jpg"
  },
  {
    name: " Kieliszkowski",
    image: "images/kieliszkowski.jpg"
  },
  {
    name: " Licis",
    image: "images/licis.jpg"
  },
  {
    name: "Pritchett",
    image: "images/pritchett.jpg"
  },
  {
    name: "Radzikowski",
    image: "images/radzikowski.jpg"
  },
  {
    name: "Shaw",
    image: "images/shaw.jpg"
  }
];
const showStrongmen = () => {
  let output = "";
  strongmen.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Strongman</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showStrongmen);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
