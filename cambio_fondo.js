const tarotSection = document.getElementById("servicios-tarot");
const astroSection = document.getElementById("servicios-astrologia");
const body = document.body;

tarotSection.addEventListener("mouseover", () => {
  body.classList.add("tarot-background");
});
tarotSection.addEventListener("mouseout", () => {
  body.classList.remove("tarot-background");
});

astroSection.addEventListener("mouseover", () => {
  body.classList.add("astro-background");
});
astroSection.addEventListener("mouseout", () => {
  body.classList.remove("astro-background");
});