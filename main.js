const wheel = document.getElementById("wheelIcon");
const langToggle = document.getElementById("langToggle");

const elements = {
  title: document.querySelector(".title h2"),
  sectionTitles: document.querySelectorAll(".text-part h3"),
  sectionTexts: document.querySelectorAll(".text-part p"),
  sections: document.querySelectorAll(".section"),
  designerBtn: document.getElementById("designerBtn"),
  designerList: document.getElementById("designerList"),
  sourcesBtn: document.getElementById("sourcesBtn"),
  sourcesList: document.getElementById("sourcesList"),
};

let currentLang = "en";

const texts = {
  en: {
    title: "What is a computer ?",
    introTitle: "Introduction :",
    introText:
      "A computer is an important machine in our life. We use it for school, work, and fun.",
    mainPartsTitle: "Main Parts of the Computer :",
    mainPartsText:
      "A computer has two big sides: hardware and software. Hardware is what we can see and touch. Software is the programs that run on the computer.",
    internalTitle: "Internal Components :",
    internalText:
      "Inside the computer, there are many parts. They are all connected on a main board. Some parts help with thinking, others with saving, and some with power. All these internal components stay inside the case.",
    externalTitle: "External Components :",
    externalText:
      "Outside the computer, we also find hardware. These are the tools we use with our hands and eyes. They include things for typing, moving, showing, printing, and sound. These external components make the computer easy to use.",
    togetherTitle: "How They Work Together :",
    togetherText:
      "When we use the computer, all components work together. The inside parts do the main job. The outside parts let us control and use the system. If one part is missing, the computer cannot work well.",
    conclusionTitle: "Conclusion :",
    conclusionText:
      "A computer is like a team of many members. Each member has a place in the team. When they work together, the system is complete. In simple words, a computer is not one thing. It is many things connected as one box, and that makes it powerful.",
    designerBtn: "Designer :",
    designerItems: [
      "Frontend Developer",
      "UI/UX Designer",
      "Portfolio Creator",
    ],
    sourcesBtn: "Sources",
    sourcesItems: ["ChatGPT", "YouTube", "Gemini"],
  },
  ar: {
    title: "ما هو الحاسوب ؟",
    introTitle: " : المقدمة",
    introText: "الحاسوب آلة مهمة في حياتنا. نستخدمه للدراسة والعمل والترفيه.",
    mainPartsTitle: " : الأجزاء الرئيسية للحاسوب",
    mainPartsText:
      "للحاسوب جانبان كبيران: العتاد والبرمجيات. العتاد هو ما نراه ونلمسه، والبرمجيات هي البرامج التي تعمل على الجهاز.",
    internalTitle: ": المكونات الداخلية",
    internalText:
      "بداخل الحاسوب توجد العديد من الأجزاء. كلها متصلة على اللوحة الأم. بعض الأجزاء تساعد في المعالجة، أخرى للتخزين، وأخرى للطاقة. كل هذه المكونات تبقى داخل الصندوق.",
    externalTitle: " : المكونات الخارجية",
    externalText:
      "خارج الحاسوب نجد أيضًا العتاد. هذه الأدوات نستخدمها بأيدينا وأعيننا. تشمل الكتابة، التحريك، العرض، الطباعة، والصوت. هذه المكونات الخارجية تجعل الحاسوب سهل الاستخدام.",
    togetherTitle: " : كيف تعمل معا :",
    togetherText:
      "عند استخدامنا للحاسوب، تعمل جميع المكونات معًا. الأجزاء الداخلية تقوم بالعمل الأساسي. والأجزاء الخارجية تسمح لنا بالتحكم. إذا غاب جزء واحد، فلن يعمل الجهاز جيدًا.",
    conclusionTitle: " : المكونات ",
    conclusionText:
      "الحاسوب مثل فريق من عدة أعضاء. لكل عضو دور في الفريق. عندما يعملون معًا، يكتمل النظام. ببساطة، الحاسوب ليس شيئًا واحدًا، بل عدة أشياء متصلة في صندوق واحد.",
    designerBtn: " : المصمم",
    designerItems: ["مطور واجهات", "مصمم UI/UX", "صانع البورتفوليو"],
    sourcesBtn: " : المصادر",
    sourcesItems: ["ChatGPT", "YouTube", "Gemini"],
  },
};

// تغيير اللغة
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  langToggle.textContent = currentLang.toUpperCase();
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  // تحديث العناوين والنصوص
  elements.title.textContent = texts[currentLang].title;
  const titles = [
    "introTitle",
    "mainPartsTitle",
    "internalTitle",
    "externalTitle",
    "togetherTitle",
    "conclusionTitle",
  ];
  const textsArray = [
    "introText",
    "mainPartsText",
    "internalText",
    "externalText",
    "togetherText",
    "conclusionText",
  ];
  elements.sectionTitles.forEach((h3, i) => {
    h3.textContent = texts[currentLang][titles[i]];
    h3.style.textAlign = currentLang === "ar" ? "right" : "left";
  });
  elements.sectionTexts.forEach((p, i) => {
    p.textContent = texts[currentLang][textsArray[i]];
    p.style.textAlign = currentLang === "ar" ? "right" : "left";
  });

  // تغيير أماكن الصور
  elements.sections.forEach((section, i) => {
    if (currentLang === "ar") {
      section.style.flexDirection = "row"; // جميع الصور على اليسار
    } else {
      section.style.flexDirection = i % 2 === 0 ? "row" : "row-reverse"; // الإنجليزية تعود للوضع الأصلي
    }
    const textPart = section.querySelector(".text-part");
    textPart.style.textAlign = currentLang === "ar" ? "right" : "left";
  });

  // تحديث القوائم المنسدلة
  elements.designerBtn.childNodes[0].textContent =
    texts[currentLang].designerBtn + " ";
  elements.designerList.querySelectorAll("li").forEach((li, i) => {
    li.textContent = texts[currentLang].designerItems[i];
  });
  elements.sourcesBtn.childNodes[0].textContent =
    texts[currentLang].sourcesBtn + " ";
  elements.sourcesList.querySelectorAll("li").forEach((li, i) => {
    li.textContent = texts[currentLang].sourcesItems[i];
  });
});

// دوران العجلة مع التمرير
window.addEventListener("scroll", () => {
  const rotation = window.scrollY;
  wheel.style.transform = `rotate(${rotation}deg)`;
});

// القوائم المنسدلة
const dropdowns = [
  [elements.designerBtn, elements.designerList],
  [elements.sourcesBtn, elements.sourcesList],
];

dropdowns.forEach(([btn, list]) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = btn.classList.contains("active");
    document.querySelectorAll(".dropdown-btn").forEach((b) => {
      b.classList.remove("active");
      b.nextElementSibling.style.display = "none";
    });
    if (!isActive) {
      btn.classList.add("active");
      list.style.display = "block";
    }
  });
});

// إغلاق القوائم عند الضغط في أي مكان آخر
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-btn").forEach((b) => {
    b.classList.remove("active");
    b.nextElementSibling.style.display = "none";
  });
});
