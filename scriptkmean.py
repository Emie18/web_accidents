#!/usr/bin/python3.9

# exemple d'appel du script en ligne de commande ou exec php : python /var/www/etu000/cgi/test.py request=bonjour
# exemple d'appel du script depuis le navigateur http://etu000.projets.isen-ouest.fr/cgi/test.py?request=bonjour

# ecrit le header requis pour un affichage dans le navigateur (ne pas oublier le retour à la ligne obligatoire en fin de print)

print ("Content-type: application/json \r\n")

# https://docs.python.org/3.9/library/cgi.html
import cgi
import cgitb
import numpy as np
from sklearn.cluster import KMeans

# https://www.w3schools.com/python/python_json.asp
import json

# activation debeug CGI
cgitb.enable()

# recurperation des parametres de l'url envoyés par le formulaire dans la variable form
form = cgi.FieldStorage()
#print(form,"\n")
centroids = [[48.21, -2.61], [50.33, 2.23], [48.61, 2.43],[47.56, 0.31], [47.43, 4.98], [48.77, 6.97],[44.16, 5.58], [44.42, -0.46], [46.6, -1.2], [45.486, 2.41]]
latitude = float(form['latitude'].value)
longitude = float(form['longitude'].value)
accident_coordinates = np.array([[latitude, longitude]])


# # Créer un array numpy à partir de la liste des centroïdes
centroids_array = np.array(centroids)

# # Créer un modèle K-means avec le nombre de clusters égal au nombre de centroïdes
kmeans = KMeans(n_clusters=len(centroids_array), random_state=0,n_init=10)

# # Ajuster le modèle aux données des centroïdes
kmeans.fit(centroids_array)

# # Prédire le cluster d'appartenance de l'accident
predicted_cluster = kmeans.predict(accident_coordinates)

# # Retourner le cluster d'appartenance sous forme de JSON
result = {'cluster': int(predicted_cluster)}

# #print(result)
# # verification de présence d'une clé dans le tableau form
if 'longitude' not in form:
     print('il manque la longitude')
# else:
#     print('oui')
#     # lecture de la valeur de l'attribut dans une variable



# # transformation de la variable dic en chaine de caractères JSON
dic_json = json.dumps(result)

# # affichage d'exemple d'une chaine json
# # print ('{"request": "'+request+'", "tab": ["v1","v2","v3"]}')
print(dic_json)

