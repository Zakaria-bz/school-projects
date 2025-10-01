let people = JSON.parse(localStorage.getItem("people")) || [];

function savePeople() {
  localStorage.setItem("people", JSON.stringify(people));
}

function renderPeople() {
  const container = document.getElementById("peopleContainer");
  container.innerHTML = "";

  people.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.imageUrl}" alt="صورة ${p.name}" class="person-img"/>
      <h3>${p.name} ${p.surname}</h3>
      <div class="info" style="display: none;">
        <p>العمر: ${p.age}</p>
        <p>التقييم: ${"⭐".repeat(p.rating)}</p>
      </div>
      <button class="toggle-btn">إظهار المعلومات</button>
      <button class="delete-btn">حذف</button>
    `;

    const toggleBtn = card.querySelector(".toggle-btn");
    const infoBox = card.querySelector(".info");
    toggleBtn.addEventListener("click", () => {
      if (infoBox.style.display === "none") {
        infoBox.style.display = "block";
        toggleBtn.textContent = "إخفاء المعلومات";
      } else {
        infoBox.style.display = "none";
        toggleBtn.textContent = "إظهار المعلومات";
      }
    });

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      people.splice(index, 1);
      savePeople();
      renderPeople();
    });

    container.appendChild(card);
  });
}

function addPerson(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const rating = document.querySelector("input[name='rating']:checked")?.value;
  const imageInput = document.getElementById("image");
  const file = imageInput.files[0];

  if (!name || !surname || !age || !rating || !file) {
    alert("رجاءً املأ جميع الحقول ✍️");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageUrl = e.target.result;
    const newPerson = { name, surname, age, rating, imageUrl };

    people.push(newPerson);
    savePeople();
    renderPeople();
    document.getElementById("personForm").reset();
  };
  reader.readAsDataURL(file);
}

document.getElementById("personForm").addEventListener("submit", addPerson);
renderPeople();
