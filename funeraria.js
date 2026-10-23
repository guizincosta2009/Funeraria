// ==========================================
// FUNERÁRIA CONTAGEM - JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // BOTÃO WHATSAPP
    // ==========================================
    const botaoWhatsapp = document.querySelector(".botao-whatsapp");

    if (botaoWhatsapp) {
        botaoWhatsapp.addEventListener("click", function (event) {
            event.preventDefault();

            const confirmar = confirm(
                "Você será direcionado para o WhatsApp da Funerária Contagem.\n\nDeseja continuar?"
            );

            if (confirmar) {
                const mensagem = encodeURIComponent(
                    "Olá, preciso de atendimento da Funerária Contagem."
                );
                window.open(
                    "https://wa.me/5531991152520?text=" + mensagem,
                    "_blank"
                );
            }
        });
    }

    // ==========================================
    // ANIMAÇÃO DOS ELEMENTOS GERAIS
    // ==========================================
    const elementos = document.querySelectorAll(
        ".logo-topo, .telefone, .endereco, .conteudo-centralizado > iframe, .botao-whatsapp"
    );

    elementos.forEach(function (elemento, index) {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(25px)";
        elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        setTimeout(function () {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }, 150 + index * 120);

        // Depois da animação, devolve o controle ao CSS
        // (assim os efeitos de hover continuam funcionando)
        setTimeout(function () {
            elemento.style.opacity = "";
            elemento.style.transform = "";
            elemento.style.transition = "";
        }, 150 + index * 120 + 900);
    });

    // ==========================================
    // ANIMAÇÃO DOS VALORES
    // ==========================================
    const valores = document.querySelectorAll(".lista-valores li");

    valores.forEach(function (valor, index) {
        setTimeout(function () {
            valor.classList.add("apareceu");
        }, 600 + index * 250);
    });

    // ==========================================
    // EFEITO NO TELEFONE
    // ==========================================
    const telefone = document.querySelector(".telefone");

    if (telefone) {
        telefone.addEventListener("click", function () {
            window.location.href = "tel:+5531991152520";
        });
        telefone.title = "Clique para ligar";
    }

    // ==========================================
    // EFEITO NO ENDEREÇO
    // ==========================================
    const endereco = document.querySelector(".endereco");

    if (endereco) {
        endereco.addEventListener("click", function () {
            window.open(
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent("R. Mal. Costa e Silva, 410 - Jk, Contagem - MG, 32310-080"),
                "_blank"
            );
        });
        endereco.title = "Clique para abrir o Google Maps";
    }

    // ==========================================
    // MENSAGEM NO CONSOLE
    // ==========================================
    console.log("================================");
    console.log("Funerária Contagem");
    console.log("Site carregado com sucesso!");
    console.log("Atendimento disponível 24 horas.");
    console.log("================================");

});

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================
window.addEventListener("scroll", function () {
    const botaoTopo = document.getElementById("botaoTopo");

    if (!botaoTopo) {
        return;
    }

    if (window.scrollY > 300) {
        botaoTopo.classList.add("mostrar");
    } else {
        botaoTopo.classList.remove("mostrar");
    }
});

// ==========================================
// FUNÇÃO VOLTAR AO TOPO
// ==========================================
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
