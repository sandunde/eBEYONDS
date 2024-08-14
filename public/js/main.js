const translations = {
    en: {
        welcome: "Welcome to \n our company...",
        intro:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et magna aliquyam erat,",
        about: "About Us",
        latest: "Latest News",
        testimonial: "Testimonials",
        contact: "Contact Us",
        read: "Read",
    },
    fr: {
        welcome: "Bienvenue sur \n notre site Web...",
        intro:
            "Ceci est une page de destination simple avec un sélecteur de langue.",
        about: "À propos de nous",
        latest: "Dernières nouvelles",
        testimonial: "Témoignages",
        contact: "Contactez-nous",
        read: "Lire",
    },
    es: {
        welcome: "Bienvenido a \n nuestro sitio web...",
        intro: "Esta es una página de destino simple con un selector de idioma.",
        about: "Sobre nosotros",
        latest: "Últimas noticias",
        testimonial: "Testimonios",
        contact: "Contáctanos",
        read: "Leer",
    },
};

function updateLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach((element) => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[lang][key];
    });
}

document
    .getElementById("languageSwitcher")
    .addEventListener("change", function () {
        const selectedLang = this.value;
        localStorage.setItem("preferredLanguage", selectedLang);
        updateLanguage(selectedLang);
    });

document.addEventListener("DOMContentLoaded", () => {
    const preferredLanguage = localStorage.getItem("preferredLanguage") || "en";
    document.getElementById("languageSwitcher").value = preferredLanguage;
    updateLanguage(preferredLanguage);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
