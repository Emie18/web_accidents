ajaxRequest('GET', 'php/request.php/liste_new_base', afficheListe);


function afficheListe(data) {

  var tableau = document.querySelector('#affiche table');

  data.forEach(elem => {
    var ligne = document.createElement('tr');

    ligne.innerHTML = `
        <td>${elem.id_accident}</td>
        <td>${elem.ville}</td>
        <td>${elem.date_heure}</td>
        <td>${elem.descr_athmo}</td>
        <td>${elem.descr_agglo}</td>
        <td>${elem.descr_lum}</td>
        <td>${elem.descr_dispo_secu}</td>
        <td>${elem.descr_etat_surf}</td>
        <td>${elem.descr_type_col}</td>
        <td>${elem.descr_cat_veh}</td>
        <td><button type="button" onClick=trouver_cluster(${elem.longitude},${elem.latitude})>Trouver</button></td>
      `;

    tableau.appendChild(ligne);
  });
}

//exemple d'url :http://etu115.projets.isen-ouest.fr/cgi/test.py?longitude=41&latitude=15
function trouver_cluster(longitude, latitude) {

  fetch('/cgi/scriptkmean.py?longitude=' + longitude + '&latitude=' + latitude)
    .then(response => response.text())
    .then(result => {
      document.getElementById('resultat').innerText = result;
    });

}
ajaxRequest('GET', 'php/request.php/cluster', function(data) {
  // Créer la carte
  mapboxgl.accessToken = 'pk.eyJ1IjoiZW1pZTE4IiwiYSI6ImNsaDdxdXB2dDAxZmYzZW1tM3hhbWR3b24ifQ.zjp20nsMooS-xVfxn982pA'; // Remplacez YOUR_ACCESS_TOKEN par votre propre jeton d'accès Mapbox
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Style de la carte (vous pouvez choisir un autre style)
    center: [2.554071, 46.603354], // Centre initial de la carte
    zoom: 4 // Niveau de zoom initial de la carte
  });

  // Parcourir les données et ajouter des marqueurs à la carte
  data.forEach(function(item) {
    // Créer un élément HTML personnalisé pour le marqueur
    var el = document.createElement('div');
    el.className = 'marker';

    // Ajouter le marqueur à la carte
    var marker = new mapboxgl.Marker(el)
      .setLngLat([item.longitude, item.latitude])
      .addTo(map);
    el.innerHTML =`<p classe="cluster">${item.ia}</p>`

  });
});