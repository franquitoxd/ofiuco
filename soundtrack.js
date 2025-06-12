 document.addEventListener("DOMContentLoaded", () => {
  const canciones = [
    { titulo: "aries", archivo: "aries.mp3" },
    { titulo: "dereck", archivo: "dereck.mp3" },
    { titulo: "escorpio", archivo: "escorpio.mp3" },
    { titulo: "karyle", archivo: "kaelith.mp3" },
    { titulo: "leo", archivo: "leo.mp3" },
    { titulo: "morvock", archivo: "morvock.mp3" },
    { titulo: "ofiuco", archivo: "ofiuco.mp3" },
    { titulo: "pelea vs aries", archivo: "pelea vs aries.mp3" },
    { titulo: "pelea vs escorpio", archivo: "pelea vs escorpio.mp3" },
    { titulo: "pelea vs leo", archivo: "pelea vs leo.mp3" },
    { titulo: "s.t.e.v.e", archivo: "s.t.e.v.e.mp3" }
  ];

  const contenedor = document.getElementById("soundtrack-container");

  canciones.forEach(cancion => {
    const item = document.createElement("div");
    item.style.marginBottom = "20px";
    item.innerHTML = `
      <h3>${cancion.titulo}</h3>
      <audio controls style="width: 100%;">
        <source src="${cancion.archivo}" type="audio/mpeg">
        Tu navegador no soporta el audio.
      </audio>
    `;
    contenedor.appendChild(item);
  });
});