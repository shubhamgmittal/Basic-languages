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



    // language 1 = nodejs

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




    // language 2 = python

    if (language === "python") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Python setup/setup-python-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Python setup/setup-python-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Python setup/setup-python-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Python setup/setup-python-linux.html";
            return;
        }
    }


    


    // language 3 = Angular

    if (language === "angular") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Angular setup/setup-angular-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Angular setup/setup-angular-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Angular setup/setup-angular-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Angular setup/setup-angular-linux.html";
            return;
        }
    }




    // language 4 = Django

    if (language === "django") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Django setup/setup-django-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Django setup/setup-django-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Django setup/setup-django-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Django setup/setup-django-linux.html";
            return;
        }
    }





    // language 5 = Flask

    if (language === "flask") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Flask setup/setup-flask-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Flask setup/setup-flask-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Flask setup/setup-flask-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Flask setup/setup-flask-linux.html";
            return;
        }
    }





    // language 5 = Go

    if (language === "go") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Go setup/setup-go-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Go setup/setup-go-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Go setup/setup-go-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Go setup/setup-go-linux.html";
            return;
        }
    }






    // language 6 = Java

    if (language === "java") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Java setup/setup-java-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Java setup/setup-java-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Java setup/setup-java-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Java setup/setup-java-linux.html";
            return;
        }
    }






    // language 7 = Javascript

    if (language === "javascript") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "JavaScript setup/setup-javascript-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "JavaScript setup/setup-javascript-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "JavaScript setup/setup-javascript-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "JavaScript setup/setup-javascript-linux.html";
            return;
        }
    }






    // language 8 = Nodejs

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






    // language 9 = PHP

    if (language === "php") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "PHP setup/setup-php-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "PHP setup/setup-php-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "PHP setup/setup-php-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "PHP setup/setup-php-linux.html";
            return;
        }
    }




    // language 10 = React

    if (language === "react") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "React setup/setup-reactjs-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "React setup/setup-reactjs-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "React setup/setup-reactjs-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "React setup/setup-reactjs-linux.html";
            return;
        }
    }





    // language 11 = vue

    if (language === "vue") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "vue setup/setup-vue-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "vue setup/setup-vue-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "vue setup/setup-vue-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "vue setup/setup-vue-linux.html";
            return;
        }
    }





    // language 12 = c

    if (language === "c") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "C setup/setup-c-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "C setup/setup-c-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "C setup/setup-c-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "C setup/setup-c-linux.html";
            return;
        }
    }




    // language 13 = c++

    if (language === "cpp") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "cpp setup/setup-cpp-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "cpp setup/setup-cpp-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "cpp setup/setup-cpp-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "cpp setup/setup-cpp-linux.html";
            return;
        }
    }





    // ===============================
    // FUTURE LANGUAGES GO HERE
    // ===============================
    // if (language === "python") { ... }
}