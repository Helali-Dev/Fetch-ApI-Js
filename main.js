// import  data from "./db.json" with { type: "json" };
const contentContainer = document.querySelector(".content-container");

// Get Data From API
async function getData() {
  const response = await fetch("./db.json");
  const data = await response.json();

  showData(data);
}
getData();
// Show Data From API
const showData = (data) => {
  data.forEach((item) => {
    const { url, description, name } = item;
    const contentItem = `
    <section class='content-item'>
         <div class='image-box'>
              <img src='${url} ' alt='image' class='image' />
                    <div class='description-box'>
                    <p class='description-text'>${description}</p>
                    </div>
         </div>
         <h3 class='name'>${name}</h3>
    </section>
    `;

    contentContainer.innerHTML += contentItem;
  });
};
