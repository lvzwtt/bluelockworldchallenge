/* =========================================================
   BLUE LOCK: WORLD CHALLENGE
   BARRA DE LEITURA
   ---------------------------------------------------------
   Esconde as barras de navegacao do leitor ao rolar para
   baixo e traz de volta ao rolar para cima.
   Nao interfere em nenhum outro script do site.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const barras = document.querySelectorAll(
        ".reader-navigation"
    );

    if (!barras.length) {
        return;
    }

    let ultimoScroll = window.pageYOffset;
    let travado = false;

    const LIMITE = 80;   /* px minimos para comecar a esconder */
    const DELTA  = 6;    /* px de movimento para reagir */

    window.addEventListener("scroll", function () {

        if (travado) {
            return;
        }

        travado = true;

        window.requestAnimationFrame(function () {

            const atual = window.pageYOffset;
            const descendo = atual > ultimoScroll;
            const passouDoTopo = atual > LIMITE;

            if (descendo && passouDoTopo) {

                barras.forEach(function (barra) {
                    barra.classList.add("is-hidden");
                });

            } else {

                barras.forEach(function (barra) {
                    barra.classList.remove("is-hidden");
                });

            }

            ultimoScroll = atual;
            travado = false;

        });

    }, { passive: true });

});
