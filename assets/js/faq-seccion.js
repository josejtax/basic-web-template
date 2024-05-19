document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    const faqToggle = document.createElement("span");
    faqToggle.classList.add("faq-toggle");
    faqToggle.textContent = "+";
    question.appendChild(faqToggle);

    question.addEventListener("click", (e) => {
      const answer = e.target.nextElementSibling;
      answer.classList.toggle("active");
      if (answer.classList.contains("active")) {
        answer.style.height = answer.scrollHeight + "px";
        e.target.querySelector(".faq-toggle").textContent = "-";
      } else {
        answer.style.height = 0;
        e.target.querySelector(".faq-toggle").textContent = "+";
      }
    });
  });
});