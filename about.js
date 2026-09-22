const aboutText = {
  en: {
    home: 'Home',
    closet: 'Closet',
    calendar: 'Calendar',
    about: 'About me',
    title: 'About me',
    intro1: 'Hi! I’m Clara, a 24-year-old sissy from Spain who loves chastity, feminization, and exploring my submissive side. I’m mostly subby, but I also enjoy switching things up and taking on a more dominant role from time to time. 👀',
    intro2: 'I’m open-minded, curious, and always happy to meet new people, share experiences, and have fun with others who enjoy the same kind of lifestyle. Whether it’s chatting, getting to know each other, or simply sharing interests and experiences, I’m always up for a good conversation.',
    interestsTitle: 'My interests',
    interests: 'Feminization · Sissy Training · Chastity · Tease & Denial · Anal Training · Oral Training · Hypno · Humiliation · CBT · Bondage · Cum Eating · Nipple Play · Body Writing · Sissygasms · Body Worship · Cuckolding · Censoring',
    contact: 'Feel free to reach out through my social networks. My DMs are always open, and I love meeting new people. 💕',
    content: 'I also share content featuring myself and more across my social networks, so make sure to check them out if you’d like to see more. 👀'
  },
  es: {
    home: 'Inicio',
    closet: 'Armario',
    calendar: 'Calendario',
    about: 'Sobre mí',
    title: 'Sobre mí',
    intro1: '¡Hola! Soy Clara, una sissy española de 24 años a la que le encantan la castidad, la feminización y explorar su lado sumiso. Soy principalmente sumisa, aunque de vez en cuando también disfruto cambiando los papeles y adoptando un rol más dominante. 👀',
    intro2: 'Soy abierta de mente, curiosa y siempre me gusta conocer gente nueva, compartir experiencias y divertirme con otras personas que disfrutan de este mismo estilo de vida. Ya sea para charlar, conocernos o simplemente compartir intereses y experiencias, siempre estoy dispuesta a tener una buena conversación.',
    interestsTitle: 'Mis intereses',
    interests: 'Feminización · Entrenamiento sissy · Castidad · Provocación y negación · Entrenamiento anal · Entrenamiento oral · Hipnosis · Humillación · CBT · Bondage · Comer semen · Juego con pezones · Escritura corporal · Sissygasms · Adoración corporal · Cuckolding · Censura',
    contact: 'No dudes en escribirme a través de mis redes sociales. Mis mensajes directos siempre están abiertos y me encanta conocer gente nueva. 💕',
    content: 'También comparto contenido protagonizado por mí y mucho más en mis redes sociales, así que no olvides echarles un vistazo si quieres ver más. 👀'
  }
};

function setAboutLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem('sissy-clara-language', language);
  document.querySelectorAll('[data-language]').forEach((item) => {
    item.classList.toggle('active', item.dataset.language === language);
  });
  document.querySelectorAll('[data-about]').forEach((item) => {
    item.textContent = aboutText[language][item.dataset.about];
  });
}

document.querySelector('.language-switch').addEventListener('click', (event) => {
  const button = event.target.closest('[data-language]');
  if (button) setAboutLanguage(button.dataset.language);
});

setAboutLanguage(localStorage.getItem('sissy-clara-language') || 'en');
