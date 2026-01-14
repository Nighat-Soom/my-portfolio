
    document.addEventListener('DOMContentLoaded', function () {
      const textElement = document.querySelector('.text');
      const cursorElement = document.querySelector('.cursor');
      const words = ["Full Stack Developer", "Python Specialist", "Django Developer", "React Specialist", "Responsive Web Design"];
      const deletingSpeed = 50;
      const typingSpeed = 50;
      const pauseDuration = 1000;

      let currentIndex = 0;
      let currentCharIndex = 0;
      let isDeleting = false;

      function updateText() {
        const currentWord = words[currentIndex];

        if (isDeleting) {
          textElement.textContent = currentWord.substring(0, currentWord.length - currentCharIndex);
          currentCharIndex++;

          if (currentCharIndex > currentWord.length) {
            currentCharIndex = 0;
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            setTimeout(updateText, pauseDuration);
          } else {
            setTimeout(updateText, deletingSpeed);
          }
        } else {
          textElement.textContent = currentWord.substring(0, currentCharIndex);
          currentCharIndex++;

          if (currentCharIndex > currentWord.length) {
            currentCharIndex = 0;
            isDeleting = true;
            setTimeout(updateText, pauseDuration);
          } else {
            setTimeout(updateText, typingSpeed); text
          }
        }
      }

      updateText();
    });


