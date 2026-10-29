// URL de l'API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fonction asynchrone pour récupérer les utilisateurs
export async function getUsers() {
    try {
        const response = await fetch(API_URL);
        // Vérifier si la réponse HTTP est correcte
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        // Convertir la réponse JSON en tableau JavaScript
        const users = await response.json();
        return users;
    } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        throw error;
    }
}