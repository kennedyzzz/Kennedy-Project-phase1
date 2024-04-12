let order = [];
let total = 0;
//This enables us to click any item and it will be viewed in the order summary together with the price
document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    let name = item.getAttribute("data-name");
    let price = parseFloat(item.getAttribute("data-price"));
    order.push({ name, price });
    total += price;
    updateOrderSummary();
  });
});

//This makes it that when ther order button is clicked it displays a text and the total
document.getElementById("order-btn").addEventListener("click", () => {
  alert("Order placed! Total: $ " + total.toFixed(2));
  order = [];
  total = 0;
  updateOrderSummary();
});
//This is to enable us to get a respnse once the submit comment is clicked
const ComButton = document.getElementsByClassName("btn");
for (let i = 0; i < ComButton.length; i++) {
  ComButton[i].addEventListener("click", () => {
    alert("Your comment has been sent. Thank you for your support.");
  });
}

//This makes it possible to see all the individual items in our order summary
function updateOrderSummary() {
  let orderList = document.getElementById("order-list");
  let totalElement = document.getElementById("total");
  orderList.innerHTML = "";
  order.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price.toFixed(2);
    orderList.appendChild(li);
  });
  totalElement.textContent = total.toFixed(2);
}

const base_url =
  "https://my-json-server.typicode.com/kennedyzzz/Kennedy-Project-phase1/Menu";
  
// a function used for fetching info from json server

function fetching() {
  fetch(`${base_url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((Menu) => {
      Menu.forEach((Menu) => renderMenu(Menu));
    })
    .catch((error) => {
      console.error("Error fetching Menu", error);
    });
}
