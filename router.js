// ===============================
// CENTRAL ROUTER FILE
// ===============================

// LANGUAGE SELECTION
document.addEventListener("click", (e) => {
    const langCard = e.target.closest(".language-card[data-language]");
    if (langCard) {
        const language = langCard.dataset.language;
        localStorage.setItem("selectedLanguage", language);
        window.location.href = "main.html";
    }
});

// OS SELECTION
document.addEventListener("click", (e) => {
    const osCard = e.target.closest(".language-card[data-os]");
    if (osCard) {
        const os = osCard.dataset.os;
        localStorage.setItem("selectedOS", os);
        routeUser();
    }
});

// ===============================
// ROUTING LOGIC
// ===============================
function routeUser() {
    const language = localStorage.getItem("selectedLanguage");
    const os = localStorage.getItem("selectedOS");

    if (!language || !os) return;

    // ===============================
    // HTML ROUTES
    // ===============================
    if (language === "html") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "HTML setup/setup-html-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "HTML setup/setup-html-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "HTML setup/setup-html-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "HTML setup/setup-html-linux.html";
            return;
        }



    }

            if (language === "nodejs") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Nodejs setup/setup-nodejs-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Nodejs setup/setup-nodejs-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Nodejs setup/setup-nodejs-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Nodejs setup/setup-nodejs-linux.html";
            return;
        }








    }

    // ===============================
    // FUTURE LANGUAGES GO HERE
    // ===============================
    // if (language === "python") { ... }
}