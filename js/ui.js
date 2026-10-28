export function displayUsers(users) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement("article");
        card.className = "card";

        const avatar = document.createElement("img");
        avatar.className = "avatar";
        avatar.src = `https://i.pravatar.cc/150?u=${user.id}`;
        avatar.alt = `Avatar de ${user.name}`;

        const name = document.createElement("h3");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = user.email;

        const phone = document.createElement("p");
        phone.textContent = `Tél: ${user.phone}`;

        const website = document.createElement("p");
        website.textContent = `Web: ${user.website}`;

        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(website);

        gallery.appendChild(card);
    });
}

export function displayMessage(message) {
    const status = document.getElementById("status");
    status.textContent = message;
}