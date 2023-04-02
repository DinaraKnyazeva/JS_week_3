let sum = 0;
let totalSum = document.getElementById("totalSum"); // общая сумма
const prices = document.querySelectorAll(".basket__thing-price"); // цена каждого товара
const discount = document.getElementById("discount"); // кнопка
// суммируем все товары (применяется для каждого элемента):
prices.forEach((price) => {
  sum += parseInt(price.textContent);
});
// выводим итог:
totalSum.textContent = sum;
// формула для расчета скидки:
const showProcent = (number) => {
  return number * 0.8;
};
let discountApplied = false; // для проверки была ли применена скидки

// условие при нажатии на кнопку применяется скидка:
discount.addEventListener("click", () => {
  if (!discountApplied) {
    // проверяем была ли уже применена скидка
    prices.forEach((price) => {
      const oldPrice = parseInt(price.textContent);
      const newPrice = showProcent(oldPrice);
      price.textContent = newPrice;
    });
    let newSum = 0;
    prices.forEach((price) => {
      newSum += parseInt(price.textContent);
    });
    // выводим итог с учетом скидки:
    totalSum.textContent = newSum;
    discountApplied = true; // меняем проверку после применения скидки
  }
});
