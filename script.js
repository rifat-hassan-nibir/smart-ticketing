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
        <p class="col-span-5 font-inter text-base text-description-color text-[#030712]">Seat</p>
        <p class="col-span-5 font-inter text-base text-description-color text-[#030712]">Economy</p>
        <p class="col-span-2 font-inter text-base text-right text-description-color text-[#030712]">550</p>
        `;
      ticketDetailsArea.appendChild(newTicketDetailsDiv);

      // Updating total price
    } else {
      alert("You cannot select more than 4 seats");
    }
  });
}
