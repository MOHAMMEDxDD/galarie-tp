import { getUsers } from "./api.js";
import { displayUsers, displayMessage } from "./ui.js";

async function init() {
    try {
        displayMessage("Chargement des utilisateurs...");
        const users = await getUsers();
        displayUsers(users);
        displayMessage(`${users.length} utilisateurs chargés avec succès.`);
    } catch (error) {
        displayMessage("Impossible de charger les utilisateurs. Vérifiez votre connexion.");
        console.error(error);
    }
}

init();