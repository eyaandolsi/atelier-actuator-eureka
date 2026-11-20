<div align="center">

#  Observabilité des microservices

### Spring Boot Actuator + Eureka

**Atelier · Architecture Web Distribuée · ESPRIT · 2026-2027**


</div>

---

## 👥 Équipe

| Membre|
|---|
| Eya Andolsi|
| Abrar Abidi|
| Maysa Ferjeni| 
| Rayen Gmati| 
| Aya Chagra| 

---

## 📖 Présentation

Ce projet est une architecture **microservices** dont les services sont enregistrés dans un annuaire **Eureka**.

Le problème de départ : Eureka ne reçoit qu'un *heartbeat* (« je suis vivant »). Si la base de données d'un service tombe, le processus tourne toujours, l'instance reste **UP** et les autres services continuent de l'appeler.

L'objectif de l'atelier est de rendre les services **observables** : exposer leur vraie santé, des informations et des métriques, et faire remonter cet état dans Eureka pour qu'une instance malade soit détectée.

---

## 🎯 Ce que fait cet atelier

1. **Ajouter Spring Boot Actuator** aux microservices Java (Candidat, Candidature, Job) et choisir les endpoints exposés.
2. **Lire et interpréter** les endpoints `/actuator/health`, `/actuator/info` et `/actuator/metrics`.
3. **Publier la santé dans Eureka** : le service passe **DOWN** dans le dashboard quand un de ses composants (par exemple MySQL) est en panne.
4. **Simuler une panne** de la base de données et observer le passage UP → DOWN → UP.
5. **Exposer `/health` et `/info`** pour les services non-Java : Meeting (Node.js) et Notification (Python), et les déclarer à Eureka.

---

## 🏗️ Architecture

| Microservice | Port | Technologie | Rôle dans l'atelier |
|---|:---:|---|---|
| Eureka Server | 8761 | Spring Cloud | Annuaire, dashboard d'observation |
| Candidat | 8081 | Spring Boot (H2) | Actuator, `/info` |
| Job | 8082 | Spring Boot (MySQL) | Actuator, santé de la base |
| Meeting | 8083 | Node.js / Express | Routes `/health` et `/info` |
| Notification | 8084 | Python / FastAPI | Routes `/health` et `/info` |
| Candidature | 8085 | Spring Boot (MySQL) | Actuator, `/info` |

---

## 🔌 Endpoints Actuator

| Endpoint | Rôle |
|---|---|
| `/actuator/health` | État du service et de ses composants (db, diskSpace, ping…) |
| `/actuator/info` | Informations sur l'application (nom, version, description) |
| `/actuator/metrics` | Métriques : mémoire, threads, requêtes HTTP… |
| `/actuator/loggers` | Consulter et modifier le niveau des logs sans redémarrer |

Statuts de santé possibles :

| Statut | Signification |
|---|---|
| `UP` | le service fonctionne |
| `DOWN` | le service ou un composant est en panne (HTTP 503) |
| `OUT_OF_SERVICE` | le service est retiré volontairement |
| `UNKNOWN` | l'état ne peut pas être déterminé |

---

## 🚀 Lancer le projet

**Ordre de démarrage :**

```
MySQL → Eureka Server → Candidat → Candidature → Job → Meeting → Notification
```

- Services Spring Boot : lancer chaque application depuis IntelliJ (ou `mvn spring-boot:run`).
- Meeting : `npm install` puis `npm start`.
- Notification : `pip install -r requirements.txt` puis `uvicorn app.main:app --port 8084`.

Dashboard Eureka : <http://localhost:8761>

---

## 📚 Compétences visées

- Comprendre la différence entre **heartbeat** et **santé réelle**
- Configurer **Spring Boot Actuator**
- Relier la santé d'un service au **registre Eureka**
- Intégrer un service **non-Java** à Eureka (Node.js, Python)
- Diagnostiquer une panne à partir des endpoints d'observabilité

---

<div align="center">

Réalisé par l'équipe · ESPRIT 2026-2027

</div>
