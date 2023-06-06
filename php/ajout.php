<?php

    require_once('database.php');
    // Database connexion.
  $db = dbConnect();
  if (!$db)
  {
    header ('HTTP/1.1 503 Service Unavailable');
    exit;
  }

  // Check the request.
  $requestMethod = $_SERVER['REQUEST_METHOD'];
  //les get ?url
  $request = substr($_SERVER['PATH_INFO'], 1);
  $request = explode('/', $request);
  $requestRessource = array_shift($request);



    if ($requestMethod == 'POST' && $requestRessource == 'form') {
        $date_heure = $_POST['date_heure'];
        $latitude = $_POST['latitude'];
        $longitude = $_POST['longitude'];
        $age = $_POST['age'];
        $descr_athmo = $_POST['descr_athmo'];
        $id_code_insee = $_POST['id_code_insee'];
        $descr_lum = $_POST['descr_lum'];
        $descr_dispo_secu = $_POST['descr_dispo_secu'];
        $descr_etat_surf = $_POST['descr_etat_surf'];
        $descr_cat_veh = $_POST['descr_cat_veh'];
        $descr_agglo = $_POST['descr_agglo'];
        $descr_type_col = $_POST['descr_type_col'];
    
        // Effectuer la requête en fonction des critères de filtrage
        $request = "INSERT INTO accidents(date_heure, latitude, longitude, age, descr_athmo, id_code_insee, descr_lum, descr_dispo_secu, descr_etat_surf, descr_cat_veh, descr_agglo, descr_type_col) 
        VALUES('$date_heure', '$latitude', '$longitude', '$age', '$descr_athmo', '$id_code_insee', '$descr_lum', '$descr_dispo_secu', '$descr_etat_surf', '$descr_cat_veh', '$descr_agglo', '$descr_type_col')";
        $statement = $db->prepare($request);
        $statement->execute();
        if ($statement->rowCount() > 0) {
            // La commande a été exécutée avec succès
            $data= "l'accident à été ajouté";
        } else {
            // La commande n'a pas été exécutée ou n'affecte aucune ligne
            $data = "La commande n'a pas été exécutée";
        }

          // Send data to the client.
  header('Content-Type: application/json; charset=utf-8');
  header('Cache-control: no-store, no-cache, must-revalidate');
  header('Pragma: no-cache');
  header('HTTP/1.1 200 OK');
  echo json_encode($data);
  exit;
    }
?> 