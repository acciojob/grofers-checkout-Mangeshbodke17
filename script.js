const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let sum = 0;

  prices.forEach(cell => {
    const value = parseFloat(cell.textContent.trim());
    if (!isNaN(value)) {
      sum += value;
    }
  });

  const result = document.querySelector("#ans");
  result.textContent = sum;
};

getSumBtn.addEventListener("click", getSum);
