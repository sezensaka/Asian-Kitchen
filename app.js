const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "./img/Tteokbokki.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "./img/Chicken Ramen.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "./img/Bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "./img/Dan Dan Mian.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "./img/Yangzhou Fried Rice.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "./img/Onigiri.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "./img/Jajangmyeon.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "./img/Ma Yi Shang Shu.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "./img/Doroyaki.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];


let btnContainer = document.querySelector(".btn-container")

let btnCategory = ["All", "Korea", "Japan", "China"]


btnCategory.forEach(item => {

    const btn = document.createElement("button");

    btn.textContent = item;

    btn.classList.add("btn", "btn-outline-dark", "btn-item");

    btnContainer.appendChild(btn);

    btn.addEventListener("click", function () {

        let btnCategory = this.textContent;

        let selectedMenu;
        if (btnCategory === "All") {
            selectedMenu = menu;
        } else {
            selectedMenu = menu.filter(item => item.category === btnCategory);
        }

        showMenu(selectedMenu);
    });
});

function showMenu(menuItems) {

    const divParent = document.querySelector("#divParent");
    divParent.innerHTML = "";

    menuItems.forEach(item => {
        const menuItem = `
        <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" alt="${item.title}" class="photo">
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div>
      `;
        divParent.innerHTML += menuItem;
    });
}
showMenu(menu);