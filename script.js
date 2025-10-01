let currentRating = 0;

function setRating(stars) {
  currentRating = stars;
  const starsEl = document.querySelectorAll("#stars-input span");
  starsEl.forEach((star, i) => {
    star.classList.toggle("active", i < stars);
  });
}

function addPerson() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  const file = document.getElementById("photo").files[0];

  if (!firstname || !lastname || !age || !file || currentRating === 0) {
    alert("من فضلك أدخل كل البيانات وأعط تقييمًا");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const grid = document.getElementById("peopleGrid");

    const card = document.createElement("div");
    card.className = "card";

    const id = Date.now();

    card.innerHTML = `
      <img src="${e.target.result}" alt="${firstname}">
      <h3>${firstname} ${lastname}</h3>
      <p>العمر: ${age}</p>
      <p><strong>التقييم:</strong> ${currentRating} ⭐</p>
      <button onclick="toggleInfo(${id})" id="btn-${id}">إظهار المعلومات</button>
      <div class="info" id="info-${id}">
        <p><strong>الاسم:</strong> ${firstname}</p>
        <p><strong>اللقب:</strong> ${lastname}</p>
        <p><strong>العمر:</strong> ${age}</p>
        <p><strong>التقييم:</strong> ${currentRating} ⭐</p>
      </div>
    `;

    grid.appendChild(card);

    // إعادة التهيئة للفورم
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("photo").value = "";
    currentRating = 0;
    document
      .querySelectorAll("#stars-input span")
      .forEach((s) => s.classList.remove("active"));
  };
  reader.readAsDataURL(file);
}

function toggleInfo(id) {
  const info = document.getElementById(`info-${id}`);
  const btn = document.getElementById(`btn-${id}`);
  if (info.style.display === "block") {
    info.style.display = "none";
    btn.innerText = "إظهار المعلومات";
  } else {
    info.style.display = "block";
    btn.innerText = "إخفاء المعلومات";
  }
}

// استرجاع الأشخاص من LocalStorage أو مصفوفة فارغة
let people = JSON.parse(localStorage.getItem("people")) || [];

// دالة لإعادة حفظ في LocalStorage
function savePeople() {
  localStorage.setItem("people", JSON.stringify(people));
}

// دالة لإضافة شخص جديد
function addPerson(name, surname, age, rating, imageUrl) {
  const newPerson = { name, surname, age, rating, imageUrl };
  people.push(newPerson);
  savePeople();
  renderPeople();
}

// دالة لعرض الأشخاص في الصفحة
function renderPeople() {
  const container = document.getElementById("peopleContainer");
  container.innerHTML = "";

  people.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.imageUrl}" alt="صورة ${p.name}" />
      <h3>${p.name} ${p.surname}</h3>
      <p>العمر: ${p.age}</p>
      <p>التقييم: ${"⭐".repeat(p.rating)}</p>
      <button onclick="removePerson(${index})">حذف</button>
    `;
    container.appendChild(card);
  });
}

// دالة لحذف شخص
function removePerson(index) {
  people.splice(index, 1);
  savePeople();
  renderPeople();
}

// أول ما تفتح الصفحة
renderPeople();
