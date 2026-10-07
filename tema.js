/* =========================================================
   ALTERNADOR DE TEMA (escuro / claro)
   Guarda a escolha no navegador e aplica em todas as paginas.
   ========================================================= */

(function () {

    var CHAVE = "worldChallengeTema";

    function aplicar(tema) {

        if (tema === "claro") {
            document.body.classList.add("tema-claro");
        } else {
            document.body.classList.remove("tema-claro");
        }

        var botoes = document.querySelectorAll("[data-tema-toggle]");

        for (var i = 0; i < botoes.length; i++) {

            botoes[i].textContent = tema === "claro" ? "☾" : "☀";
            botoes[i].setAttribute(
                "title",
                tema === "claro" ? "Ativar modo escuro" : "Ativar modo claro"
            );

        }

    }

    /* aplica o tema salvo o quanto antes */
    var salvo = localStorage.getItem(CHAVE) || "escuro";

    if (document.body) {
        aplicar(salvo);
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            aplicar(salvo);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {

        aplicar(salvo);

        var botoes = document.querySelectorAll("[data-tema-toggle]");

        for (var i = 0; i < botoes.length; i++) {

            botoes[i].addEventListener("click", function () {

                var atual = document.body.classList.contains("tema-claro")
                    ? "escuro"
                    : "claro";

                localStorage.setItem(CHAVE, atual);

                aplicar(atual);

            });

        }

    });

})();
