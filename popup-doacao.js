document.addEventListener("DOMContentLoaded", function () {

    const TEMPO_PARA_APARECER = 3 * 60 * 1000;
    const INTERVALO_ENTRE_EXIBICOES = 5 * 60 * 1000;


    const ultimaExibicao =
        localStorage.getItem("worldChallengeDonationPopup");

    const agora = Date.now();


    if (
        ultimaExibicao &&
        agora - Number(ultimaExibicao) < INTERVALO_ENTRE_EXIBICOES
    ) {
        return;
    }


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


    setTimeout(function () {

        popup.classList.add("show");

        localStorage.setItem(
            "worldChallengeDonationPopup",
            Date.now().toString()
        );

    }, TEMPO_PARA_APARECER);


    const closeButton =
        popup.querySelector(".donation-popup-close");


    closeButton.addEventListener("click", function () {

        popup.classList.remove("show");

    });


    popup.addEventListener("click", function (event) {

        if (event.target === popup) {

            popup.classList.remove("show");

        }

    });

});
