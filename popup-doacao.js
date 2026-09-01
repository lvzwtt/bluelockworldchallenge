document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       POP-UP SOMENTE NA PÁGINA INICIAL
       ===================================================== */

    const paginaAtual =
        window.location.pathname.split("/").pop() || "index.html";

    if (paginaAtual !== "index.html") {
        return;
    }


    /* =====================================================
       VERIFICA SE JÁ FOI MOSTRADO
       ===================================================== */

    const popupJaMostrado =
        localStorage.getItem("worldChallengeDonationPopupShown");

    if (popupJaMostrado === "true") {
        return;
    }


    /* =====================================================
       CRIA O POP-UP
       ===================================================== */

    const popup = document.createElement("div");

    popup.className = "donation-popup";


    popup.innerHTML = `

        <div class="donation-popup-box">


            <button
                class="donation-popup-close"
                aria-label="Fechar"
            >
                ×
            </button>


            <p class="eyebrow">
                BLUE LOCK: WORLD CHALLENGE
            </p>


            <h2>
                GOSTARIA DE APOIAR<br>
                <span>O PROJETO?</span>
            </h2>


            <p class="donation-popup-text">

                O Blue Lock: World Challenge é um projeto
                independente feito por fãs. Se você quiser
                contribuir para ajudar no desenvolvimento,
                tradução e manutenção do projeto,
                qualquer valor é bem-vindo.

            </p>


            <p class="donation-popup-note">

                A contribuição é totalmente opcional.
                O acesso à obra continua gratuito.

            </p>


            <a
                href="doacao.html"
                class="primary donation-popup-button"
            >
                APOIAR O PROJETO →
            </a>


        </div>

    `;


    document.body.appendChild(popup);


    /* =====================================================
       MOSTRA APÓS 15 SEGUNDOS
       ===================================================== */

    setTimeout(function () {

        popup.classList.add("show");

        localStorage.setItem(
            "worldChallengeDonationPopupShown",
            "true"
        );

    }, 15000);


    /* =====================================================
       FECHAR NO X
       ===================================================== */

    const closeButton =
        popup.querySelector(".donation-popup-close");


    closeButton.addEventListener("click", function () {

        popup.classList.remove("show");

    });


    /* =====================================================
       FECHAR CLICANDO FORA
       ===================================================== */

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {

            popup.classList.remove("show");

        }

    });

});
