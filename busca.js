/* =========================================================
   BUSCA DE CAPITULOS
   Filtra a lista de capitulos por nome ou numero.
   Nao interfere em nenhum outro script do site.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("buscaForm");
    var campo = document.getElementById("buscaCampo");
    var resultado = document.getElementById("buscaResultado");

    if (!form || !campo) {
        return;
    }

    var itens = document.querySelectorAll("[data-capitulo]");

    function limpar() {
        for (var i = 0; i < itens.length; i++) {
            itens[i].style.display = "";
        }
        if (resultado) {
            resultado.classList.remove("show");
        }
    }

    form.addEventListener("submit", function (evento) {

        evento.preventDefault();

        var termo = campo.value.trim().toLowerCase();

        if (!termo) {
            limpar();
            return;
        }

        var achou = 0;

        for (var i = 0; i < itens.length; i++) {

            var texto = (itens[i].getAttribute("data-capitulo") || "").toLowerCase();

            if (texto.indexOf(termo) !== -1) {
                itens[i].style.display = "";
                achou++;
            } else {
                itens[i].style.display = "none";
            }

        }

        if (resultado) {

            resultado.classList.add("show");

            if (achou === 0) {
                resultado.innerHTML = "Nenhum capítulo encontrado para <strong>" + campo.value + "</strong>.";
            } else {
                resultado.innerHTML = achou + " capítulo(s) encontrado(s). <a href=\"#\" id=\"limparBusca\">Limpar busca</a>";
            }

        }

        var botaoLimpar = document.getElementById("limparBusca");

        if (botaoLimpar) {

            botaoLimpar.addEventListener("click", function (e) {
                e.preventDefault();
                campo.value = "";
                limpar();
            });

        }

    });

    /* limpa a busca ao esvaziar o campo */
    campo.addEventListener("input", function () {
        if (!campo.value.trim()) {
            limpar();
        }
    });

});
