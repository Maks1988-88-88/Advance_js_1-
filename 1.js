"use strict";

let people = prompt("Введите число отдыхающих", "");
let val = Number(people);
const isValidInput = people !== null && !Number.isNaN(val);
console.log(people);

const hurgada = 25;
const sharm = 15;
const taba = 6;
let error = 0 >= people;

if (people <= 0 && isValidInput) {
  console.log(people);
  alert("Ошибка!");
}  else if (people == Math.abs(people) && people == Math.round(people)) {
  // alert("роботает");

  if (people <= hurgada) {
    let hurgada_confirm = confirm("Согласны ли Вы быть в группе hurgada?");
    if (hurgada_confirm == true) {
      let sum_hurgada = hurgada - people;
      alert(sum_hurgada + " осталось мест в hurgada");
    } else if (people <= sharm) {
      let sharm_confirm = confirm("Согласны ли Вы быть в группе sharm?");
      if (sharm_confirm == true) {
        let sum_sharm = sharm - people;
        alert(sum_sharm + " осталось мест в sharm");
      } else if (people <= taba) {
        let taba_confirm = confirm("Согласны ли Вы быть в группе taba?");
        if (taba_confirm == true) {
          let sum_taba = taba - people;
          alert(sum_taba + " осталось мест в taba");
        } else if (taba_confirm == false) {
          alert("Вы нечего не выбрали");
        } else {
          alert("Мест нет!");
        }
      } else {
        alert("Мест нет!");
      }
    } else {
      alert("Мест нет!");
    }
  } else {
    alert("Мест нет!");
  }
} else {
  alert("Вы нечего не выбрали!");
}
