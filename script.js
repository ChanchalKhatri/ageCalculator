const birthday = document.getElementById("birthday");
const currentday = document.getElementById("currentday");
const ageForm = document.getElementById("ageForm");

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dayDiv = document.getElementById("days");
  const monthDiv = document.getElementById("months");
  const yearDiv = document.getElementById("years");

  const dob = new Date(birthday.value);
  const cday = new Date(currentday.value);

  if (dob > cday) {
    alert("The 'Date of Birth' cannot be after the selected date.");
    return;
  }

  let years = cday.getFullYear() - dob.getFullYear();
  let months = cday.getMonth() - dob.getMonth();
  let days = cday.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const daysInPrevMonth = new Date(
      cday.getFullYear(),
      cday.getMonth(),
      0
    ).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // Update UI with calculated values
  dayDiv.innerHTML = `<h1>${days}</h1><span>days</span>`;
  monthDiv.innerHTML = `<h1>${months}</h1><span>months</span>`;
  yearDiv.innerHTML = `<h1>${years}</h1><span>years</span>`;
});
