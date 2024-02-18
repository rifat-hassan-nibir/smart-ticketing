// Selecting Seats

let seatCount = 0;
let availableSeats = 40;
let totalPrice = 0;
const seats = document.getElementsByClassName("seats");

for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (seatCount < 4) {
      // Changing seats bg color
      seat.classList.add("bg-theme-color", "selected");
      seat.setAttribute("disabled", true);
      seat.childNodes[1].classList.add("text-white");
      seatCount++;
      availableSeats--;

      // Updating remaining seats
      setInnerTextById("seats-left", availableSeats);

      // Updating selected seats count in the seats details
      setInnerTextById("selected-seats-count", seatCount);

      // Updating ticket details area
      const ticketDetailsArea = document.getElementById("ticket-details-area");
      const newTicketDetailsDiv = document.createElement("div");
      newTicketDetailsDiv.classList.add("grid", "grid-cols-12", "mt-4");
      newTicketDetailsDiv.innerHTML = `
        <p class="col-span-5 font-inter text-base text-description-color text-[#030712]">${seat.innerText}</p>
        <p class="col-span-5 font-inter text-base text-description-color text-[#030712]">Economy</p>
        <p class="col-span-2 font-inter text-base text-right text-description-color text-[#030712]">550</p>
        `;
      ticketDetailsArea.appendChild(newTicketDetailsDiv);

      // Updating total price
      totalPrice += 550;
      setInnerTextById("total-price", totalPrice);
    } else {
      alert("You cannot select more than 4 seats");
    }
  });
}

// Appiying coupon code
const couponButton = document.getElementById("coupon-field-button");
const couponField = document.getElementById("coupon-field");
const couponArea = document.getElementById("coupon-area");
couponField.addEventListener("keyup", function (e) {
  if (totalPrice === 2200) {
    if (e.target.value === "NEW15" || e.target.value === "Couple 20") {
      couponButton.removeAttribute("Disabled");
      couponButton.classList.add("bg-theme-color");
      if (e.target.value === "NEW15") {
        couponButton.addEventListener("click", function () {
          const discountedPrice = totalPrice * 0.15;
          const newPrice = totalPrice - discountedPrice;
          const priceSummary = document.getElementById("price-summary");
          const discountedPriceDiv = document.createElement("div");
          discountedPriceDiv.innerHTML = `
          <div class="flex justify-between mt-4">
            <p class="font-inter text-base font-semibold text-[#030712]">Discounted Price</p>
            <p class="font-inter text-base font-semibold text-[#030712]">BDT ${discountedPrice}</p>
          </div>
          `;
          priceSummary.appendChild(discountedPriceDiv);
          setInnerTextById("grand-total-price", newPrice);
          couponArea.classList.add("hidden");
        });
      } else if (e.target.value === "Couple 20") {
        couponButton.addEventListener("click", function () {
          const discountedPrice = totalPrice * 0.2;
          const newPrice = totalPrice - discountedPrice;
          const priceSummary = document.getElementById("price-summary");
          const discountedPriceDiv = document.createElement("div");
          discountedPriceDiv.innerHTML = `
          <div class="flex justify-between mt-4">
            <p class="font-inter text-base font-semibold text-[#030712]">Discounted Price</p>
            <p class="font-inter text-base font-semibold text-[#030712]">BDT ${discountedPrice}</p>
          </div>
          `;
          priceSummary.appendChild(discountedPriceDiv);
          setInnerTextById("grand-total-price", newPrice);
          couponArea.classList.add("hidden");
          setInnerTextById("grand-total-price", newPrice);
        });
      }
    } else {
      couponButton.setAttribute("Disabled", true);
      couponButton.classList.remove("bg-theme-color");
    }
  } else {
    alert("Select 4 tickets to get discount");
  }
});
