# CAHIER DE TESTS
---
## LISTE DES FONCTIONS

1. **addTask()** : cette fonction a pour but d'ajouter les éléments d'une tâche à compléter dans un tableau.
2. **checkTaskObject()** : fonction qui a pour but de vérifier le contenu de l'objet.
2. **removeTask()** : cette fonction supprime une tâche du tableau des tâches à compléter.
3. **sortTasks()** : cette fonction permet de modifier l'ordre des tâches dans le tableau d'éléments.
4. **markTaskCompleted()** : cette fonction a pour but de changer l'état de la tâche de "not completed" a "completed" (false > true).
5. **markTaskUncompleted()** : cette fonction effectue l'inverse de la fonction précédente.
6. **markAllAsDone()** : cette fonction a pour but de changer l'état de toutes les tâches de "not completed" à "completed" (false > true).
7. **markAllUndone()** : cette fonction effectue l'inverse de la fonction précédente.

---
## FONCTION addTask()

### PREMIER TEST 

**NOM :** ajout d'un objet rempli<br>
**ID :** ADT01<br>

**Objectif :**<br> 
Ce test a pour but de vérifier que la fonction JS 'addTask()' ajoute bien un objet dans un tableau d'éléments.

**Etapes de test :**<br>
1. création d'une variable array vide.
2. appel de la fonction addTask().
3. vérification que la tache est ajoutée au tableau.

**Résultat attendu :**<br>
La variable array reçoit un nouvel élément.

### DEUXIEME TEST

**NOM :** ajout d'un objet vide<br>
**ID :** ADT02<br>

**Objectif :**<br>
Ce test a pour but de vérifier que la fonction renvoie bien une erreur si l'objet est vide.

**Etapes de test :**<br>
1. creation d'une variable array vide.
2. appel de la fonction addTask(), en passant un objet vide.
3. verification qu'il y ait une exception.

**Résultat attendu :**<br>
Lorsque l'on appelle la fonction, il doit y avoir une exception.

---
## FONCTION checkTaskObject()

### PREMIER TEST

**NOM :** vérification du contenu de l'objet<br>
**ID :** CTO01<br>

**Objectif :**<br>
Vérifier que la fonction ne renvoie pas false si on lui passe un object contenant les bonnes propriétés.<br>

**Etapes de test :**<br>
1. Création d'un objet avec toutes les propriétés nécessaires ("label" (string) et "done" (boolean)).
2. Appel de la fonction checkTaskObject() en passant cet objet.
3. Vérification du résultat obtenu.

**Résultat attendu :**<br>
Le résultat attendu est true.

### DEUXIEME TEST

**NOM :** vérification du contenu de l'objet<br>
**ID :** CTO02<br>
**Objectif :**<br>
Vérifier que la fonction renvoie false si on lui passe un object manquant des propriétés nécessairees (date ou statut).<br>

**Etapes de test :**<br>
1. Création d'un objet avec une propriété qui n'est pas attendue.
2. Appel de la fonction checkTaskObject() en passant cet objet.
3. Vérification du résultat obtenu.

**Résultat attendu :**<br>
Le résultat attendu est false.

---
## FONCTION removeTask()

### PREMIER TEST

**NOM :** suppression d'un objet à un index donné<br>
**ID :** RMT01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que la fonction JS 'removeTask()' supprime bien un objet dans un tableau d'éléments.

**Etapes de test :**<br>
1. creation d'un tableau avec plusieurs éléments (objets JSON).
2. appel de la fonction removeTask(index) qui prend en paramètre un index.
3. verification que l'element à l'index en question est supprimé du tableau.

**Résultat attendu :**<br>
L'objet JSON correspondant est supprimé du tableau.

### DEUXIEME TEST



---
## FONCTION sortTasks()

### PREMIER TEST

**NOM :** changer l'ordre des tâches<br>
**ID :** SRT01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que la fonction JS 'sortTasks()' modifie bien l'ordre des objets dans un tableau d'éléments.

**Etapes de test :**<br>
1. Creation d'un tableau avec plusieurs objets JSON, et leur attribution d'un ordre aléatoire.
2. Déclaration de deux index
3. Vérification que les deux index sont bien dans les limites du tableau et son bien différents 
4. Appel de la fonction sortTasks(index, majeur) qui comprends deux index à intervertir.
5. Vérification que l'ordre des objets a bien été modifié.

**Résultat attendu :**<br>
Le tableau contient les mêmes objets mais dans un ordre différent.

---
## FONCTION markTaskCompleted()

### PREMIER TEST

**NOM :** tâche notée comme complétée : done passe à true<br>
**ID :** MTC01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que l'élément de l'objet avec la clé "done" soit "true".

**Etapes de test :**<br>
1. Création d'un tableau contenant des objets JSON.
2. Déclaration d'un index pour identifier l'objet à modifier.
3. Appel de la fonction markTaskCompleted(index).
4. Vérification que le statut de la tâche à l'index mentionné est passé à "completed" (done = true).

**Résultat attendu :**<br>
Le status de la tache est mis à jour pour indiquer qu'elle est terminée : done: true.

---
## FONCTION markTaskUncompleted()

## PREMIER TEST

**NOM :** status passe à false<br>
**ID :** MTU01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que l'élément de l'objet avec la clé "status" soit "false"

**Etapes de test :**<br>
1. Création d'un tableau contenant des objets JSON.
2. Appel de la fonction markTaskUncompleted().
3. Vérification que le statut de la tâche est passé à "not completed" : status: false.

**Résultat attendu :**<br>
Le status de la tache est mis à jour pour indiquer qu'elle n'est pas terminée : status: false.

---
## FONCTION markAllAsDone()

## PREMIER TEST

**NOM :** statut de toutes les tâches : done: true<br>
**ID :** MAD01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que toutes les taches sont marquées comme complétées.

**Etapes de test :**<br>
1. Création d'un tableau contenant des objets JSON : {label: "", done: false}.
2. Appel de la fonction markAllAsDone() qui modifie les valeurs de done dans chaque objet à true.
3. Vérification que tous les statuts sont passés à "completed" : done: true.

**Résultat attendu :**<br>
Toutes les taches sont mises à jour pour indiquer qu'elles sont terminées : true.

---
## FONCTION markAllUndone()

### PREMIER TEST

**NOM :** statut de toutes les tâches : done: false<br>
**ID :** MAU01<br>

**Objectif :**<br>
Ce test a pour but de vérifier que toutes les taches sont marqué comme non-terminées.

**Etapes de test :**<br>
1. Création d'un tableau contenant des objets JSON : {label: "", done: true}.
2. Appel de la fonction markAllUndone() qui modifie les valeurs de done dans chaque objet à false.
3. Vérification que tous les statuts sont passés à "not completed" : done: false.

**Résultat attendu :**<br>
Toutes les taches sont mises à jour pour indiquer qu'elles ne sont pas terminées : boolean.
