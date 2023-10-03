"use strict";
//~~> Alert Generator
export const alert = (position, icon, title, timer) => {
  const Toast = Swal.mixin({
    toast: true,
    position: position,
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: icon,
    title: title,
  });
};

//~~> Add Pattient Alert
export const addPatientAlert = async () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });
  await Toast.fire({
    icon: "success",
    title: "¡Agregado con Éxito!",
  });
};

//~~> Button Alert-Clear Table
export function clearTable() {
  Swal.fire({
    title: "¡Estas por borrar los pacientes!",
    width: 600,
    padding: "3em",
    color: "#716add",
    showCancelButton: true,
    confirmButtonColor: "#716add",
    cancelButtonColor: "#d33",
    confirmButtonText: "ACEPTAR",
    cancelButtonText: "CANCELAR",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem("Patients");
      location.reload();
    }
  });
}
//~~> Loading spinner
export function showLoading() {
  return Swal.fire({
    html:
      '<div class="sk-folding-cube">' +
      '<div class="sk-cube1 sk-cube"></div>' +
      '<div class="sk-cube2 sk-cube"></div>' +
      '<div class="sk-cube4 sk-cube"></div>' +
      '<div class="sk-cube3 sk-cube"></div>' +
      "</div>",
    title: "Cargando...",
    color: "#716add",
    showConfirmButton: false,
  });
}

//~~> Alert Button Delete Patient
export function deletePatientAlert() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
  });
  Toast.fire({
    icon: "info",
    title: "Paciente Eliminado",
  });
}
