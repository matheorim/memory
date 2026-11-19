# Jeu de Memory

**Démo en ligne :** [https://matheorim.github.io/memory/](https://matheorim.github.io/memory/)

## Description

Une application web interactive du jeu de memory développée en JavaScript. Le joueur retourne des cartes pour former des paires d'images identiques, générées aléatoirement via une API. La partie se termine lorsque toutes les paires sont trouvées, avec l'affichage du temps écoulé et du nombre de coups joués.

## Technologies utilisées

* **HTML5** : structure sémantique (`main`, titre, zones `aria-live`).
* **CSS3** : mise en page responsive, grille 4x4 fluide qui s'adapte à la largeur de l'écran (mobile, tablette, ordinateur).
* **JavaScript (ES6+)** : manipulation dynamique du DOM, gestion d'état locale sans dépendance externe.
* **Picsum Photos API** : génération des visuels des cartes ([https://picsum.photos/](https://picsum.photos/)).

## Fonctionnalités et choix techniques

* **Responsive** : cartes carrées (`aspect-ratio`) dans une grille `repeat(4, 1fr)`, espacements fluides avec `clamp()`.
* **Accessibilité (A11y & ARIA)** :
  * `role="button"`, `tabindex="0"` et `aria-label` sur chaque carte pour la navigation au clavier (Entrée ou Espace).
  * Attribut `alt` sur les images, focus visible, résultat annoncé via `aria-live`.
* **Algorithme de Fisher-Yates** : mélange impartial des cartes à chaque début de partie.
* **Gestion de l'asynchronisme** :
  * Masquage différé des cartes incorrectes via `setTimeout` (800 ms).
  * Chronomètre mis à jour chaque seconde via `setInterval`.
  * Verrouillage du plateau (`lockBoard`) pour éviter les clics multiples pendant la comparaison.
* **Bouton « Nouvelle partie »** pour rejouer sans recharger la page.

## Lancement en local

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/matheorim/memory.git
   cd memory
   ```
2. **Exécuter le jeu :** ouvrir le fichier `index.html` dans un navigateur web (Chrome, Firefox, Edge, Safari).
