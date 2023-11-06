# CAHIER DE TESTS

## LISTE DES FONCTIONS

* **addTask()** : cette fonction a pour but d'ajouter dans le dom les éléments d'une tâche à compléter.
* **checkTaskTitle()** : cette fonction a pour but de vérifier que l'input "task title" est valable.
* **checkTaskDescription()** : cette fonction a pour but de vérifier que l'input "task description" est valable.
* **validateTask()** : cette fonction a pour but de valider que les inputs ne contiennent pas d'éléments néfastes (code pour intrusion par injection).
* **saveTaskToDB()** : cette fonction a pour but de sauvegarder la tâche dans la BDD.
* **suppressTask()** : cette fonction a pour but de supprimer du DOM l'élément de la liste.
* **deleteTaskFromDB()** : cette fonction a pour but de supprimer une tâche de la liste et de la base de données.
* **markTaskDone()** : cette fonction a pour but de changer l'état de la tâche de "not completed" a "completed" (false > true) lorsque la ckeckbox est validée.
* **markTaskUndone()** : cette fonction a le but inverse de la fonction markTaskDone().

## PREMIER TEST 

**NOM :** addTask()<br>
**ID :** #1<br>
**Type :** test E2E.<br>

**Objectif :**<br> 
Ce test a pour but de vérifier que la fonction JS permettant d'ajouter un élément à la liste en HTML fonctionne bien.<br>

**Références :**<br> 
User story : l'utilisateur remplis l'élément "input" du DOM et clique sur le bouton "ajouter".<br>
L'élément est ajouté dans la "to-do list" et contient (dans le DOM): 
* nom de l'élément, 
* une brève description,
* une checkbox,
* un bouton supprimer.<br>

**Etapes de test :**<br>
1. Remplit l'input avec des informations valides.<br>
2. Clique sur le bouton "Ajouter".<br>
3. Vérification que l'information apparait bien en bas de page, sous la section "Taches à accomplir".<br>
4. Vérification qu'il n'y a pas d'erreur dans la console.<br>

**Résultat attendu :**<br>
Le test doit réussir sans erreurs et afficher le message "Tache ajoutée." dans la console et dans une dialog box.<br>

## DEUXIEME TEST

**NOM :** checkTaskTitle()<br>
**ID :** #2<br>
**Type :** test E2E.<br>

**Objectif :**<br>
Le test doit valider que l'input de titre de la tâche ne contient pas de texte néfaste.<br>

**Références :**<br>
User story : l'utilisateur remplis l'élément "input" du DOM et clique sur le bouton "ajouter".<br>
Si l'entrée est vide ou contenue dans la variable 'badWords', il y aura une alerte indiquant que le contenu n'est pas valide et les raisons.

**Etapes de test :**<br>
1. L'utilisateur remplit l'input avec des caractères spéciaux ou des mots interdits.<br>
2. Clique sur le bouton "Ajouter".<br>
3. Vérification que l'information apparait bien en bas de page, sous la section "Taches à accomplir".<br>

**Résultat attendu :**<br>
Le test doit échouer si les conditions sont remplies et afficher le message "Erreur lors de l'ajout de la tâche" dans la console.<br>
Un message d'erreur doit apparaître dans une dialog box pour indiquer à l'utilisateur qu'il a fait une erreur.<br>
Le test doit échouer et afficher le message "Erreur: Le nom de la tache ne peut contenir que des lettres".

## TROISIEME TEST

**NOM :** checkTaskDescription()<br>
**ID :** #3<br>
**Type :** test E2E.<br>

**Objectif :**<br>
Le test doit valider que l'input de titre de la tâche ne contient pas de texte néfaste.<br>

**Références :**<br>
User story : l'utilisateur remplis l'élément "input" du DOM et clique sur le bouton "ajouter".<br>
Si l'entrée est vide ou contenue dans la variable 'badWords', il y aura une alerte indiquant que le contenu n'est pas valide et les raisons.

**Etapes de test :**<br>
1. L'utilisateur remplit l'input avec des caractères spéciaux ou des mots interdits.<br>
2. Clique sur le bouton "Ajouter".<br>
3. Vérification que l'information apparait bien en bas de page, sous la section "Taches à accomplir".<br>

**Résultat attendu :**<br>
Le test doit échouer si les conditions sont remplies et afficher le message "Erreur lors de l'ajout de la tâche" dans la console.<br>
Un message d'erreur doit apparaître dans une dialog box pour indiquer à l'utilisateur qu'il a fait une erreur.<br>
Le test doit échouer et afficher le message "Erreur: Le nom de la tache ne peut contenir que des lettres".

## QUATRIEME TEST

**NOM :** validateTask()<br>
**ID :** #4<br>
**Type :** test unitaire.<br>

**Objectif :**<br>
Le test doit valider que le contenu des inputs existe et ne contiennent pas de texte néfaste.<br>

**Conditions préalables :**<br>
Les tests précédents sont validés.

**Etapes de test :**<br>
1. Appel de la fonction validateTask().<br>
2. Envoi d'un input vide.<br>
3. Envoi d'un input contenant du texte néfaste (injection).<br>
4. Vérifier si la fonction renvoie true.<br>

**Résultat attendu :**<br>
La fonction renvoie false et affiche le message "Veuillez renseigner une tache.".




La fonction ajoute à la base de données le contenu de la tâche : 
* nom, 
* description, 
* initialisation de la tâche à "not completed" (false)