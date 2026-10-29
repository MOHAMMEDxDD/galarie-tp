// Importer les fonctions des autres modules
import { getUsers } from "./api.js";
import { displayUsers, displayMessage } from "./ui.js";

// Fonction principale
async function init() {
    try {
        // Afficher le message de chargement
        displayMessage("Chargement des utilisateurs...");

        // Récupérer les données depuis l'API
        const users = await getUsers();

        // Afficher les cartes
        displayUsers(users);

        // Mettre à jour le message d'état
        displayMessage(`${users.length} utilisateurs chargés avec succès.`);
    } catch (error) {
        // Afficher un message en cas d'erreur
        displayMessage("Impossible de charger les utilisateurs. Vérifiez votre connexion et réessayez.");
        console.error(error);
    }
}

// Lancer l'application
init();