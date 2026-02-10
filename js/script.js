/* Lógica de Navegación - Protocolo Sicker */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    console.log("TSH_LOG: Menu expanded.");
  } else {
    x.className = "topnav";
    console.log("TSH_LOG: Menu collapsed.");
  }
}

/* Efecto de fondo dinámico (opcional, para mayor inmersión) */
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    const bg = document.getElementById('bg-canvas');
    if(bg) {
        bg.style.background = `radial-gradient(circle at ${x}% ${y}%, #0a1a1d 0%, #05070a 100%)`;
    }
});