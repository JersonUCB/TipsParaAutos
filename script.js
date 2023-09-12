document.addEventListener("DOMContentLoaded", function () {
  const mostrarMasInfo1 = document.getElementById("mostrarMasInfo1");
  const informacionAdicional1 = document.getElementById("informacionAdicional1");

  const mostrarMasInfo2 = document.getElementById("mostrarMasInfo2");
  const informacionAdicional2 = document.getElementById("informacionAdicional2");

  const mostrarMasInfo3 = document.getElementById("mostrarMasInfo3");
  const informacionAdicional3 = document.getElementById("informacionAdicional3");

  const mostrarMasInfo4 = document.getElementById("mostrarMasInfo4");
  const informacionAdicional4 = document.getElementById("informacionAdicional4");

  const mostrarMasInfo5 = document.getElementById("mostrarMasInfo5");
  const informacionAdicional5 = document.getElementById("informacionAdicional5");

  const mostrarMasInfo6 = document.getElementById("mostrarMasInfo6");
  const informacionAdicional6 = document.getElementById("informacionAdicional6");

  const mostrarMasInfo7 = document.getElementById("mostrarMasInfo7");
  const informacionAdicional7 = document.getElementById("informacionAdicional7");

  const mostrarMasInfo8 = document.getElementById("mostrarMasInfo8");
  const informacionAdicional8 = document.getElementById("informacionAdicional8");
  

  mostrarMasInfo1.addEventListener("click", function () {
    if (informacionAdicional1.classList.contains("d-none")) {
      informacionAdicional1.classList.remove("d-none");
      mostrarMasInfo1.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional1.classList.add("d-none");
      mostrarMasInfo1.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo2.addEventListener("click", function () {
    if (informacionAdicional2.classList.contains("d-none")) {
      informacionAdicional2.classList.remove("d-none");
      mostrarMasInfo2.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional2.classList.add("d-none");
      mostrarMasInfo2.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo3.addEventListener("click", function () {
    if (informacionAdicional3.classList.contains("d-none")) {
      informacionAdicional3.classList.remove("d-none");
      mostrarMasInfo3.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional3.classList.add("d-none");
      mostrarMasInfo3.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo4.addEventListener("click", function () {
    if (informacionAdicional4.classList.contains("d-none")) {
      informacionAdicional4.classList.remove("d-none");
      mostrarMasInfo3.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional4.classList.add("d-none");
      mostrarMasInfo4.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo5.addEventListener("click", function () {
    if (informacionAdicional5.classList.contains("d-none")) {
      informacionAdicional5.classList.remove("d-none");
      mostrarMasInfo5.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional5.classList.add("d-none");
      mostrarMasInfo5.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo6.addEventListener("click", function () {
    if (informacionAdicional6.classList.contains("d-none")) {
      informacionAdicional6.classList.remove("d-none");
      mostrarMasInfo6.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional6.classList.add("d-none");
      mostrarMasInfo6.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo7.addEventListener("click", function () {
    if (informacionAdicional7.classList.contains("d-none")) {
      informacionAdicional7.classList.remove("d-none");
      mostrarMasInfo7.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional7.classList.add("d-none");
      mostrarMasInfo7.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

  mostrarMasInfo8.addEventListener("click", function () {
    if (informacionAdicional8.classList.contains("d-none")) {
      informacionAdicional8.classList.remove("d-none");
      mostrarMasInfo8.textContent = "Mostrar Menos"; // Cambia el texto del botón
    } else {
      informacionAdicional8.classList.add("d-none");
      mostrarMasInfo8.textContent = "Más Información"; // Cambia el texto del botón
    }
  });

});

