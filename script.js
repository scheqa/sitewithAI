document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.knowledge-section');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const section = entry.target;
          if (entry.isIntersecting) {
            // Виден → добавляем класс для анимации входа
            section.classList.add('visible');
          } else {
            // Не виден → убираем класс, чтобы при повторном входе анимация сработала снова
            section.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,       // Анимация начинается, когда 10% блока видно
        rootMargin: '0px 0px -80px 0px' // чуть позже, чтобы была плавность
      }
    );
  
    sections.forEach(section => {
      // Изначально все скрыты
      section.classList.remove('visible');
      observer.observe(section);
    });
  });