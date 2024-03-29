function setInnerTextById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function priceSummaryDiv(discountAmount) {
  const discountedPrice = totalPrice * discountAmount;
  const priceSummary = document.getElementById("price-summary");
  const discountedPriceDiv = document.createElement("div");
  discountedPriceDiv.innerHTML = `
          <div class="flex justify-between mt-4">
            <p class="font-inter text-base font-semibold text-[#030712]">Discount</p>
            <p class="font-inter text-base font-semibold text-[#030712]">BDT ${discountedPrice}</p>
          </div>
          `;
  priceSummary.appendChild(discountedPriceDiv);
}

function addThemeColor(element) {
  element.classList.remove("bg-gray-400");
  element.classList.add("bg-theme-color");
}

function removeThemeColor(element) {
  element.classList.add("bg-gray-400");
  element.classList.remove("bg-theme-color");
}
