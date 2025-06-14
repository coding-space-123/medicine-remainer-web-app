<<<<<<< HEAD
const form = document.getElementById("reminderForm");
const reminderList = document.getElementById("reminderList");
const reminderSound = document.getElementById("reminderSound"); // 🔊

let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

// Display reminders with delete button
function renderReminders() {
  reminderList.innerHTML = "";
  reminders.forEach((reminder, index) => {
    const li = document.createElement("li");
    li.textContent = `${reminder.name} at ${reminder.time} `;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌ Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";

    // Delete logic
    deleteBtn.addEventListener("click", () => {
      reminders.splice(index, 1); // remove from array
      localStorage.setItem("reminders", JSON.stringify(reminders)); // update storage
      renderReminders(); // re-render list
    });

    li.appendChild(deleteBtn);
    reminderList.appendChild(li);
  });
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("medicineName").value;
  const time = document.getElementById("reminderTime").value;

  reminders.push({ name, time, alerted: false });
  localStorage.setItem("reminders", JSON.stringify(reminders));
  renderReminders();
  form.reset();
});

// Check every second
setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  reminders.forEach((reminder) => {
    if (reminder.time === currentTime && !reminder.alerted) {
      reminderSound.play().then(() => {
        alert(`⏰ Time to take your medicine: ${reminder.name}`);
        }); // 🔊 play sound
      reminder.alerted = true;
    }
  });

  localStorage.setItem("reminders", JSON.stringify(reminders));
}, 1000);

// Initial render
renderReminders();
=======
const form = document.getElementById("reminderForm");
const reminderList = document.getElementById("reminderList");
const reminderSound = document.getElementById("reminderSound"); // 🔊

let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

// Display reminders with delete button
function renderReminders() {
  reminderList.innerHTML = "";
  reminders.forEach((reminder, index) => {
    const li = document.createElement("li");
    li.textContent = `${reminder.name} at ${reminder.time} `;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌ Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";

    // Delete logic
    deleteBtn.addEventListener("click", () => {
      reminders.splice(index, 1); // remove from array
      localStorage.setItem("reminders", JSON.stringify(reminders)); // update storage
      renderReminders(); // re-render list
    });

    li.appendChild(deleteBtn);
    reminderList.appendChild(li);
  });
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("medicineName").value;
  const time = document.getElementById("reminderTime").value;

  reminders.push({ name, time, alerted: false });
  localStorage.setItem("reminders", JSON.stringify(reminders));
  renderReminders();
  form.reset();
});

// Check every second
setInterval(() => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  reminders.forEach((reminder) => {
    if (reminder.time === currentTime && !reminder.alerted) {
      reminderSound.play().then(() => {
        alert(`⏰ Time to take your medicine: ${reminder.name}`);
        }); // 🔊 play sound
      reminder.alerted = true;
    }
  });

  localStorage.setItem("reminders", JSON.stringify(reminders));
}, 1000);

// Initial render
renderReminders();
>>>>>>> 4b75d8ca66616380c8c9f6999133bf1461bf146d
