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




        // language 1 = HTML

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



    // language 2 = nodejs

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




    // language 3 = python

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


    


    // language 4 = Angular

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




    // language 5 = Django

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





    // language 6 = Flask

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





    // language 7 = Go

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






    // language 8 = Java

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






    // language 9 = Javascript

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







    // language 10 = PHP

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




    // language 11 = React

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





    // language 12 = vue

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





    // language 13 = c

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




    // language 14 = c++

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







    // language 15 = Bash

    if (language === "bash") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Bash setup/setup-bash-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Bash setup/setup-bash-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Bash setup/setup-bash-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Bash setup/setup-bash-linux.html";
            return;
        }
    }








    // language 16 = CSS

    if (language === "css") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "CSS setup/setup-css-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "CSS setup/setup-css-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "CSS setup/setup-css-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "CSS setup/setup-css-linux.html";
            return;
        }
    }









    // language 17 = Kotlin

    if (language === "kotlin") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Kotlin setup/setup-kotlin-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Kotlin setup/setup-kotlin-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Kotlin setup/setup-kotlin-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Kotlin setup/setup-kotlin-linux.html";
            return;
        }
    }









    // language 18 = R

    if (language === "r") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "R setup/setup-r-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "R setup/setup-r-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "R setup/setup-r-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "R setup/setup-r-linux.html";
            return;
        }
    }








    // language 19 = Ruby

    if (language === "ruby") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Ruby setup/setup-ruby-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Ruby setup/setup-ruby-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Ruby setup/setup-ruby-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Ruby setup/setup-ruby-linux.html";
            return;
        }
    }










    // language 20 = Rust

    if (language === "rust") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Rust/setup-rust-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Rust/setup-rust-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Rust/setup-rust-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Rust setup/setup-rust-linux.html";
            return;
        }
    }










    // language 21 = Swift

    if (language === "swift") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "Swift setup/setup-swift-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "Swift setup/setup-swift-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "Swift setup/setup-swift-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "Swift setup/setup-swift-linux.html";
            return;
        }
    }










    // language 22 = TensorFlow

    if (language === "tensorflow") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "TensorFlow setup/setup-tensorflow-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "TensorFlow setup/setup-tensorflow-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "TensorFlow setup/setup-tensorflow-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "TensorFlow setup/setup-tensorflow-linux.html";
            return;
        }
    }











    // language 23 = TypeScript

    if (language === "typeScript") {

        // Windows (10 / 11)
        if (os === "windows") {
            window.location.href = "TypeScript setup/setup-typescript-win.html";
            return;
        }

        // macOS
        if (os === "mac") {
            window.location.href = "TypeScript setup/setup-typescript-mac.html";
            return;
        }

        // ChromeOS (treated separately but same setup)
        if (os === "chromeos") {
            window.location.href = "TypeScript setup/setup-typescript-linux.html";
            return;
        }

        // All Linux distributions
        if (os === "linux") {
            window.location.href = "TypeScript setup/setup-typescript-linux.html";
            return;
        }
    }










    // ===============================
    // FUTURE LANGUAGES GO HERE
    // ===============================
    // if (language === "python") { ... }
}