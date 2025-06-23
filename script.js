const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  
  const prices = document.querySelectorAll(".price");

  let sum = 0;


  for (let i = 0; i < prices.length - 1; i++) {
    sum += Number(prices[i].textContent);
  }


  prices[prices.length - 1].textContent = sum;
};

getSumBtn.addEventListener("click", getSum);
