// Afficher les utilisateurs dans la galerie
export function displayUsers(users) {
    const gallery = document.getElementById("gallery");
    // Nettoyer la galerie avant l'affichage
    gallery.replaceChildren();

    // Créer une carte pour chaque utilisateur
    users.forEach(user => {
        const card = document.createElement("article");
        card.className = "card";

        // Création de l'avatar
        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = `https://i.pravatar.cc/150?u=${user.id}`;
        avatar.alt = `Avatar de ${user.name}`;
        avatar.loading = "lazy";

        // En cas d'échec de chargement de l'image
        avatar.addEventListener("error", () => {
            avatar.hidden = true;
        }, { once: true });

        // Nom de l'utilisateur
        const name = document.createElement("h3");
        name.textContent = user.name;

        // Adresse e-mail
        const email = document.createElement("p");
        email.className = "email";
        email.textContent = user.email;

        // Téléphone
        const phone = document.createElement("p");
        phone.textContent = `Téléphone: ${user.phone}`;

        // Site web
        const website = document.createElement("p");
        website.textContent = `Site web: ${user.website}`;

        // Ajouter les éléments à la carte
        card.append(avatar, name, email, phone, website);

        // Ajouter la carte à la galerie
        gallery.appendChild(card);
    });
}

// Afficher un message d'état
export function displayMessage(message) {
    const status = document.getElementById("status");
    status.textContent = message;
}