# Jeu de Memory

**Démo en ligne :** [https://github.com/matheorim/memory](https://github.com/matheorim/memory)

## Description
Une application web interactive du jeu de memory développée en JavaScript. Le joueur doit retourner des cartes pour former des paires d'images identiques générées aléatoirement via une API. La partie se termine lorsque toutes les paires sont trouvées, avec un affichage du temps écoulé et du nombre de coups joués.

## Technologies utilisées
* **HTML5** : Structure sémantique et accessibilité.
* **CSS3** : Mise en page responsive, grille dynamique 4x4 pour le plateau de jeu.
* **JavaScript (ES6+)** : Manipulation dynamique du DOM, gestion d'état locale sans dépendance externe.
* **Picsum Photos API** : Génération dynamique des visuels des cartes ([https://picsum.photos/](https://picsum.photos/)).

## Fonctionnalités & Choix techniques
* **Accessibilité (A11y & ARIA)** :
  * Intégration des attributs `role="button"` et `tabindex="0"` sur chaque carte pour la navigation au clavier.
* **Algorithme de Fisher-Yates** :
  * Mélange impartial du tableau de cartes à chaque début de partie afin de garantir un tirage purement aléatoire.
* **Gestion de l'asynchronisme** :
  * Masquage différé des cartes incorrectes via `setTimeout` (délai de 800 ms).
  * Chronomètre dynamique mis à jour chaque seconde à l'aide de `setInterval`.
  * Verrouillage du plateau (`lockBoard`) pour éviter les clics multiples pendant la comparaison des cartes.

## Lancement en local

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/matheorim/memory.git
   cd memory

Exécuter le jeu :
2. **Exécuter le jeu :**
* Double-clique sur le fichier `index.html` pour l'ouvrir dans ton navigateur web (Chrome, Firefox, Edge, Safari).