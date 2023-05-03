function scrollToSection() {
  var section = document.getElementById("nome-da-secao");
  section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}