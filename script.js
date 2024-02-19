// Selecting Seats

let seatCount = 0;
let availableSeats = 40;
let totalPrice = 0;

const formNumberField = document.getElementById("form-number");
const formSubmitButton = document.getElementById("form-submit-button");

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
      setInnerTextById("grand-total-price", totalPrice);

      // Cannot select more than 4 seats
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
  if (seatCount === 4) {
    if (e.target.value === "NEW15" || e.target.value === "Couple 20") {
      couponButton.removeAttribute("disabled");
      if (e.target.value === "NEW15") {
        couponButton.addEventListener("click", function () {
          const discountedPrice = totalPrice * 0.15;
          const newPrice = totalPrice - discountedPrice;
          priceSummaryDiv(0.15);
          setInnerTextById("grand-total-price", newPrice);
          couponArea.classList.add("hidden");
        });
      } else if (e.target.value === "Couple 20") {
        couponButton.addEventListener("click", function () {
          const discountedPrice = totalPrice * 0.2;
          const newPrice = totalPrice - discountedPrice;
          priceSummaryDiv(0.2);
          setInnerTextById("grand-total-price", newPrice);
          couponArea.classList.add("hidden");
          setInnerTextById("grand-total-price", newPrice);
        });
      }
    } else {
      couponButton.setAttribute("disabled", true);
    }
  } else {
    couponField.value = "";
    alert("Select 4 tickets to get discount");
  }
});

// Form Functionality

formSubmitButton.addEventListener("click", function () {
  if (totalPrice === 0 || formNumberField.value.length !== 11) {
    alert("Select at least 1 seat and enter a phone number with 11 digits");
  } else {
    document.getElementById("main-body").classList.add("hidden");
    document.getElementById("modal-body").classList.remove("hidden");
  }
});

// Modal button functionality

document.getElementById("continue-button").addEventListener("click", function () {
  document.getElementById("main-body").classList.remove("hidden");
  document.getElementById("modal-body").classList.add("hidden");
  location.reload();
});
