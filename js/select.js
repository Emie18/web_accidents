/*
Author: Gauthier LE MOAL
Login : etu113
Groupe: ISEN A3 GROUPE 1 Trinôme 6
Annee: 2022-2023
*/

'use strict';

ajaxRequest('GET', 'php/request.php/meteos', affiche_athmo);
function affiche_athmo(data){
  var sel = document.getElementById('descr_athmos');
  data.forEach(elem => {
  let opt = document.createElement('option');
  opt.value = elem.descr_athmo;
  opt.textContent += elem.descr_athmo // or opt.innerHTML += user.name
  sel.appendChild(opt);
      // console.log(element.nom);
  });
}

 ajaxRequest('GET', 'php/request.php/luminosites', affiche_lum);
function affiche_lum(data){

  var sel = document.getElementById('descr_lumi');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.descr_lum;
 opt.textContent += elem.descr_lum // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
}

ajaxRequest('GET', 'php/request.php/ceintures', affiche_dispo_secu);
function affiche_dispo_secu(data){

 var sel = document.getElementById('descr_dispo_secur');
data.forEach(elem => {
let opt = document.createElement('option');
opt.value = elem.descr_dispo_secu;
opt.textContent += elem.descr_dispo_secu // or opt.innerHTML += user.name
sel.appendChild(opt);
    // console.log(element.nom);
});
}

ajaxRequest('GET', 'php/request.php/routes', affiche_etat_surf);
function affiche_etat_surf(data){

  var sel = document.getElementById('descr_etat_surfa');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.descr_etat_surf;
 opt.textContent += elem.descr_etat_surf // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
 }

 ajaxRequest('GET', 'php/request.php/vehicules', affiche_cat_veh);
 function affiche_cat_veh(data){

  var sel = document.getElementById('descr_cat_vehi');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.descr_cat_veh;
 opt.textContent += elem.descr_cat_veh // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
 }

 ajaxRequest('GET', 'php/request.php/agglos', affiche_agglo);
 function affiche_agglo(data){

  var sel = document.getElementById('descr_agglos');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.descr_agglo;
 opt.textContent += elem.descr_agglo // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
 }

 ajaxRequest('GET', 'php/request.php/collisions', affiche_type_col);
 function affiche_type_col(data){

  var sel = document.getElementById('descr_type_coli');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.descr_type_col;
 opt.textContent += elem.descr_type_col // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
 }

 ajaxRequest('GET', 'php/request.php/ville', affiche_ville);
 function affiche_ville(data){

  var sel = document.getElementById('ville');
 data.forEach(elem => {
 let opt = document.createElement('option');
 opt.value = elem.id_code_insee
 opt.textContent += elem.ville // or opt.innerHTML += user.name
 sel.appendChild(opt);
     // console.log(element.nom);
 });
 }