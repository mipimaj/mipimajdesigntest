document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(function(question) {
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling;
          const symbol = this.querySelector('.symbol');
          if (answer.style.maxHeight) {
              answer.style.maxHeight = null;
              answer.style.paddingBottom = "0";
              symbol.textContent = '+';
          } else {
              answer.style.maxHeight = answer.scrollHeight + "px";
              answer.style.paddingBottom = answer.scrollHeight + 10 + "px";
              symbol.textContent = '-';
          }
      });
  });
});
