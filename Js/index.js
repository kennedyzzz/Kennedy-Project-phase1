let order = [];
let total = 0;

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    let name = item.getAttribute("data-name");
    let price = parseFloat(item.getAttribute("data-price"));
    order.push({ name, price });
    total += price;
    updateOrderSummary();
  });
});

document.getElementById("order-btn").addEventListener("click", () => {
  alert("Thank You Order placed! Total: $ " + total.toFixed(2));
  order = [];
  total = 0;
  updateOrderSummary();
});

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

const base_url = "http://localhost:3000/Menu";

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
