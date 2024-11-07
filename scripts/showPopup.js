let desenvolvimento_web = "O desenvolvimento web é o processo de criar, construir e manter sites e aplicações para a internet. Ele envolve diversas áreas, como design, programação e otimização, utilizando linguagens como HTML, CSS, JavaScript e frameworks para criar experiências interativas e funcionais. O objetivo é garantir que o site seja acessível, responsivo e ofereça uma navegação fluida para os usuários."

let ciencia_de_dados = "A ciência de dados é o campo que envolve a coleta, análise e interpretação de grandes volumes de dados para extrair insights e tomar decisões informadas. Utilizando técnicas de estatística, aprendizado de máquina e visualização de dados, os cientistas de dados transformam dados brutos em informações valiosas, aplicáveis a diversas áreas como negócios, saúde, finanças e tecnologia."

let analise_de_dados = "A análise de dados é o processo de examinar e interpretar conjuntos de dados para identificar padrões, tendências e insights que podem apoiar a tomada de decisões. Utilizando métodos estatísticos e ferramentas específicas, a análise de dados ajuda a transformar informações brutas em conhecimento útil para resolver problemas e otimizar processos em diversas áreas."

let aprendizado_de_maquina = "O aprendizado de máquina é uma área da inteligência artificial que permite que sistemas aprendam e melhorem seu desempenho automaticamente a partir de dados, sem a necessidade de programação explícita. Utilizando algoritmos e modelos estatísticos, o aprendizado de máquina identifica padrões e faz previsões ou tomadas de decisão com base em grandes volumes de dados."

let inteligencia_artificial = "A inteligência artificial (IA) é o campo da ciência da computação dedicado ao desenvolvimento de sistemas que imitam funções cognitivas humanas, como aprendizado, raciocínio e tomada de decisões. A IA utiliza algoritmos, aprendizado de máquina e processamento de dados para resolver problemas complexos, automatizar tarefas e melhorar a eficiência em diversas áreas, como saúde, finanças e tecnologia."

let scripting = "Scripting é a prática de escrever pequenos programas ou scripts para automatizar tarefas repetitivas ou manipular dados de forma eficiente. Usando linguagens como Python, Bash ou JavaScript, os scripts podem simplificar processos, melhorar a produtividade e integrar sistemas. Ferramentas de scripting incluem editores de código, depuradores e bibliotecas específicas que facilitam a criação e execução desses programas."

function showPopup(aplicacao) {
    // Cria a caixa de popup
    const popupBox = document.createElement("div");
    popupBox.classList.add("popup-box");

    // Adiciona o texto dentro da caixa
    const text = document.createElement("p");
    if (aplicacao == "dev"){
        text.textContent = desenvolvimento_web;
    }
    if (aplicacao == "ciencia"){
        text.textContent = ciencia_de_dados;
    }
    if (aplicacao == "analise"){
        text.textContent = analise_de_dados;
    }
    if (aplicacao == "aprendizado"){
        text.textContent = aprendizado_de_maquina;
    }
    if (aplicacao == "ia"){
        text.textContent = inteligencia_artificial;
    }
    if (aplicacao == "scripting"){
        text.textContent = scripting;
    }

    popupBox.appendChild(text);

    // Cria o botão de fechar
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-btn");
    closeButton.textContent = "X";
    closeButton.onclick = function() {
        document.body.removeChild(popupBox); // Remove a caixa ao clicar no botão de fechar
    };
    popupBox.appendChild(closeButton);

    // Adiciona a caixa ao corpo do documento
    document.body.appendChild(popupBox);

    // Posiciona a caixa no centro da tela
    popupBox.style.left = `${(window.innerWidth - popupBox.offsetWidth) / 2}px`;
    popupBox.style.top = `${(window.innerHeight - popupBox.offsetHeight) / 2}px`;
}    