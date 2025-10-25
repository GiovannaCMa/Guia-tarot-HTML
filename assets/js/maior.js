//SIGNIFICADOS

// estado global de reverso
const SHOW_REVERSED = { state: false };

const significados = [
  {
    num: 0,
    name: "O Louco",
    keywords: ["início", "liberdade", "risco"],
    upright: "Início de jornada, espontaneidade, salto de fé.",
    reversed: "Impulsividade, falta de direção, imprudência.",
  },{
    num: "I",
    name: "O Mago",
    keywords: ["ação", "foco", "criação"],
    upright:
      "Habilidade, iniciativa, utilizar recursos para manifestar objetivos.",
    reversed: "Manipulação, falta de ação, dispersão.",
  },{
    num: "II",
    name: "A Sacerdotisa",
    keywords: ["intuição", "mistério", "secreto"],
    upright: "Intuição, conhecimento interior, mistério.",
    reversed: "Bloqueio intuitivo, segredo revelado, desconexão.",
  },{
    num: "III",
    name: "A Imperatriz",
    keywords: ["nutrição", "criatividade", "abundância"],
    upright: "Fertilidade, cuidado, criatividade e conforto material.",
    reversed: "Dependência, estagnação criativa, excessos.",
  },{
    num: "IV",
    name: "O Imperador",
    keywords: ["estrutura", "autoridade", "ordem"],
    upright: "Estabilidade, liderança, regras e estratégia.",
    reversed: "Rigidez, autoritarismo, controle excessivo.",
  },{
    num: "V",
    name: "O Hierofante",
    keywords: ["tradição", "ensino", "valores"],
    upright: "Tradição, ensino, orientação espiritual ou institucional.",
    reversed: "Conformismo, questionar crenças, dogmatismo.",
  },{
    num: "VI",
    name: "Os Amantes",
    keywords: ["amor", "escolha", "parceria"],
    upright: "Parcerias, decisões significativas, harmonia.",
    reversed: "Indecisão, conflitos em relacionamentos, escolhas difíceis.",
  },{
    num: "VII",
    name: "O Carro",
    keywords: ["vontade", "vitória", "direção"],
    upright: "Determinação, conquista, controlar forças opostas.",
    reversed: "Perda de direção, arrogância, fracasso momentâneo.",
  },{
    num: "VIII",
    name: "A Força",
    keywords: ["coragem", "compaixão", "domínio"],
    upright: "Força interior, coragem, paciência e gentileza.",
    reversed: "Medo, insegurança, agressividade contida.",
  },{
    num: "IX",
    name: "O Eremita",
    keywords: ["introspecção", "busca", "sabedoria"],
    upright: "Retiro, procura de sentido, sabedoria aumentada.",
    reversed: "Isolamento, solidão excessiva, perda de rumo.",
  },{
    num: "X",
    name: "Roda da Fortuna",
    keywords: ["ciclo", "sorte", "mudança"],
    upright: "Mudança de ciclo, destino, eventos que alteram o rumo.",
    reversed: "Resistência à mudança, ciclos repetidos, azar temporário.",
  },{
    num: "XI",
    name: "A Justiça",
    keywords: ["equilíbrio", "verdade", "lei"],
    upright: "Justiça, responsabilidade, decisões equilibradas.",
    reversed: "Injustiça, parcialidade, consequências ignoradas.",
  },{
    num: "XII",
    name: "O Enforcado",
    keywords: ["sacrifício", "perspectiva", "pausa"],
    upright: "Suspensão voluntária, nova perspectiva, entrega.",
    reversed: "Teimosia, estagnação, sacrifício sem propósito.",
  },{
    num: "XIII",
    name: "A Morte",
    keywords: ["fim", "transformação", "renovação"],
    upright: "Transformação profunda, fim necessário para renovação.",
    reversed: "Resistência à mudança, estagnação prolongada.",
  },{
    num: "XIV",
    name: "A Temperança",
    keywords: ["equilíbrio", "cura", "moderação"],
    upright: "Moderação, cura, integração de opostos.",
    reversed: "Desequilíbrio, impaciência, excessos.",
  },{
    num: "XV",
    name: "O Diabo",
    keywords: ["apego", "sombra", "materialismo"],
    upright: "Apego, vícios, enfrentar a sombra pessoal.",
    reversed: "Libertação, reconhecimento de padrões, afastamento de vícios.",
  },{
    num: "XVI",
    name: "A Torre",
    keywords: ["ruptura", "revelação", "choque"],
    upright: "Ruína súbita, revelação necessária, mudança forçada.",
    reversed: "Evitar desastre, reconstrução lenta, temor de perda.",
  },{
    num: "XVII",
    name: "A Estrela",
    keywords: ["esperança", "cura", "inspiração"],
    upright: "Esperança renovada, cura emocional, orientação espiritual.",
    reversed: "Desânimo, perda de fé, foco interno fraco.",
  },{
    num: "XVIII",
    name: "A Lua",
    keywords: ["ilusões", "inconsciente", "sonhos"],
    upright: "Intuição profunda, mistérios, confrontar medos.",
    reversed: "Confusão, engano, ansiedade exacerbada.",
  },{
    num: "XIX",
    name: "O Sol",
    keywords: ["clareza", "sucesso", "alegria"],
    upright: "Sucesso, alegria, vitalidade e clareza.",
    reversed: "Pequenas decepções, excesso de confiança, moderação faltante.",
  },{
    num: "XX",
    name: "O Julgamento",
    keywords: ["renascimento", "avaliação", "chamada"],
    upright: "Chamado, avaliação de vida, renascimento espiritual.",
    reversed: "Autocrítica dura, não aceitação, estagnação moral.",
  },{
    num: "XXI",
    name: "O Mundo",
    keywords: ["conclusão", "integração", "realização"],
    upright: "Ciclo completo, realização e integração do aprendizado.",
    reversed: "Fim adiado, metas não concluídas, necessidade de revisão.",
  },];

const cardsEl = document.getElementById("cards");
const backdrop = document.getElementById("backdrop");

const modalNumEl = document.getElementById("modalNum");
const modalTitleEl = document.getElementById("modalTitle");
const modalKeywordsEl = document.getElementById("modalKeywords");
const modalUprightEl = document.getElementById("modalUpright");
const modalReversedEl = document.getElementById("modalReversed");
const modalMoreEl = document.getElementById("modalMore");

const btnClose = document.getElementById("btnClose");
const btnToggleReversedModal = document.getElementById(
  "btnToggleReversedModal"
);
const toggleReversed = document.getElementById("toggleReversed");
const reversedStateEl = document.getElementById("reversedState");

// checagem mínima
if (!cardsEl) {
  console.warn(
    'maior.js: elemento #cards não encontrado. Adicione <div id="cards" class="grid"></div> ao HTML.'
  );
} else {
  // renderiza os cards
  function render(list) {
    cardsEl.innerHTML = "";
    list.forEach((a) => {
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `
        <div class="num">${a.num}</div>
        <div class="title">${a.name}</div>
        <div class="keywords">${a.keywords.join(" • ")}</div>
      `;
      el.addEventListener("click", () => openModal(a));
      cardsEl.appendChild(el);
    });
  }

  // abre modal com dados do arcano
  function openModal(a) {
    if (modalNumEl) modalNumEl.textContent = a.num;
    if (modalTitleEl) modalTitleEl.textContent = a.name;
    if (modalKeywordsEl) modalKeywordsEl.textContent = a.keywords.join(", ");
    if (modalUprightEl) modalUprightEl.textContent = a.upright;
    if (modalReversedEl) modalReversedEl.textContent = a.reversed;
    if (modalMoreEl) modalMoreEl.textContent = a.keywords.join(", ");

    if (backdrop) backdrop.style.display = "flex";
    if (modalReversedEl)
      modalReversedEl.style.display = SHOW_REVERSED.state ? "block" : "none";
    if (reversedStateEl)
      reversedStateEl.textContent = SHOW_REVERSED.state ? "ON" : "OFF";
  }

  // fechar modal (botão)
  if (btnClose)
    btnClose.addEventListener("click", () => {
      if (backdrop) backdrop.style.display = "none";
    });

  // fechar clicando fora
  if (backdrop)
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.style.display = "none";
    });

  // toggles de reverso
  function setReversed(state) {
    SHOW_REVERSED.state = !!state;
    if (reversedStateEl)
      reversedStateEl.textContent = SHOW_REVERSED.state ? "ON" : "OFF";
    if (modalReversedEl)
      modalReversedEl.style.display = SHOW_REVERSED.state ? "block" : "none";
  }

  if (toggleReversed)
    toggleReversed.addEventListener("click", () =>
      setReversed(!SHOW_REVERSED.state)
    );
  if (btnToggleReversedModal)
    btnToggleReversedModal.addEventListener("click", () =>
      setReversed(!SHOW_REVERSED.state)
    );
  render(significados);
}

// SIMBOLOGIA — ARCANOS MAIORES

const simbologia = [
  {
    num: 0,
    name: "O Louco",
    img: "https://www.astrolink.com.br/data/tarot/o-louco.jpg",
    keywords: ["Abismo", "trouxa", "rosa", "cão"],
    upright: `
      <p><strong>O Abismo/Precipício:</strong> O desconhecido, o salto de fé, o perigo 
      (ou oportunidade) que o Louco não está vendo porque está olhando para cima.</p>
      <p><strong>A Trouxa na Varinha:</strong> Contém todas as experiências das vidas 
      passadas ou o mínimo essencial (o que ele realmente precisa, não o que ele pensa que precisa).</p>
      <p><strong>A Rosa Branca:</strong> Inocência, pureza de intenção.</p>
      <p><strong>O Cão Branco:</strong> O instinto, o subconsciente, ou um amigo 
      fiel que está latindo avisando do perigo (a voz da prudência que ele ignora).</p>`,
  },{
    num: "I",
    name: "O Mago",
    img: "https://www.astrolink.com.br/data/tarot/o-mago.jpg",
    keywords: ["Mesa", "uróboros", "mãos"],
    upright: `
      <p><strong>Mesa com os Quatro Naipes (elementos):</strong> Taça, Espada, Moeda e Bastão. 
      Representam os quatro elementos (Água, Ar, Terra e Fogo) e os quatro aspectos da manifestação 
      (Emoção, Mente, Matéria e Vontade).</p>
      <p><strong>O Uróboros (Cinto):</strong> A serpente que morde o próprio rabo, simbolizando o 
      ciclo de auto-criação e a eternidade.</p>
      <p><strong>Mão Apontando:</strong> Uma para o céu (ideia/potencial), outra para a terra 
      (manifestação/ação).</p>`,
  },{
    num: "II",
    name: "A Sacerdotisa",
    img: "https://www.astrolink.com.br/data/tarot/a-sacerdotisa.jpg",
    keywords: ["Véu", "pilares", "pergaminho"],
    upright: `
      <p><strong>O Véu:</strong> O limiar entre o consciente e o inconsciente, o visível e o oculto.</p>
      <p><strong>Pilares B e J (Boaz e Jachin):</strong> Os opostos complementares (luz/sombra, masculino
      /feminino) que devem ser equilibrados.</p>
      <p><strong>Pergaminho (Tora):</strong> O conhecimento esotérico, a sabedoria que é acessível, mas 
      que exige silêncio para ser lida.</p>`,
  },{
    num: "III",
    name: "A Imperatriz",
    img: "https://www.astrolink.com.br/data/tarot/a-imperatriz.jpg",
    keywords: ["Coroa", "campo", "escudo"],
    upright: `
      <p><strong>Coroa de Estrelas:</strong> A conexão com o divino e o cosmos.</p>
      <p><strong>Campo de Trigo e Água:</strong> Fartura, abundância material e emocional.</p>
      <p><strong>Escudo com o Símbolo de Vênus:</strong> Amor, beleza e criatividade. O trono de almofadas é puro conforto.</p>`,
  },{
    num: "IV",
    name: "O Imperador",
    img: "https://www.astrolink.com.br/data/tarot/o-imperador.jpg",
    keywords: ["Armadura", "orbe e o cetro", "montanhas"],
    upright: `
      <p><strong>Armadura de Ferro:</strong> Rigidez, ordem, a necessidade de proteção e controle.</p>
      <p><strong>O Orbe e o Cetro:</strong> Símbolos de poder e domínio sobre o reino.</p>
      <p><strong>Montanhas Áridas:</strong> O foco na estrutura em detrimento da emoção (o terreno sólido, mas inóspito).</p>`,
  },{
    num: "V",
    name: "O Hierofante",
    img: "https://www.astrolink.com.br/data/tarot/o-papa.jpg",
    keywords: ["Tiaras", "discípulos", "chaves"],
    upright: `
      <p><strong>Três Tiaras (Tríplice Coroa):</strong> Rigidez, ordem, a necessidade de proteção e controle.</p>
      <p><strong>Os Discípulos Ajoelhados:</strong> Símbolos de poder e domínio sobre o reino.</p>
      <p><strong>Chaves Cruzadas:</strong> O foco na estrutura em detrimento da emoção (o terreno sólido, mas inóspito).</p>`,
  },{
    num: "VI",
    name: "Os Amantes",
    img: "https://www.astrolink.com.br/data/tarot/os-enamorados.jpg",
    keywords: ["Anjo", "pessoas", "árvores"],
    upright: `
      <p><strong>Anjo:</strong> A voz da consciência, o chamado superior que guia a escolha.</p>
      <p><strong>Duas Pessoas (homem e mulher):</strong> O dilema, a união de opostos e a dualidade da vida.</p>
      <p><strong>Árvores:</strong> A Árvore do Conhecimento do Bem e do Mal e a Árvore da Vida, simbolizando as opções morais e o potencial.</p>`,
  },{
    num: "VII",
    name: "O Carro",
    img: "https://www.astrolink.com.br/data/tarot/o-carro.jpg",
    keywords: ["Pilares", "dossel", "tetragrama"],
    upright: `
      <p><strong>Dois Pilares/Esfinges:</strong> Novamente os opostos, mas aqui, controlados pelo condutor. Preto e branco, ação e reação.</p>
      <p><strong>Dossel Estrelado:</strong> O Carro está sob a proteção das leis universais, mas o condutor precisa de foco.</p>
      <p><strong>Símbolo Alquímico (Tetragrama):</strong> Vitória e determinação pessoal.</p>`,
  },{
    num: "VIII",
    name: "A Força",
    img: "https://www.astrolink.com.br/data/tarot/a-forca.jpg",
    keywords: ["Mulher e leão", "infinito", "flores"],
    upright: `
      <p><strong>A Mulher e o Leão:</strong> A coragem calma que domina os instintos com gentileza.</p>
      <p><strong>O Infinito sobre a cabeça:</strong> O domínio espiritual sobre o impulso físico.</p>
      <p><strong>As Flores:</strong> A doçura e a harmonia interior.</p>`,
  },{
    num: "IX",
    name: "O Eremita",
    img: "https://www.astrolink.com.br/data/tarot/o-eremita.jpg",
    keywords: ["Lanterna", "cajado", "montanha"],
    upright: `
      <p><strong>A Lanterna (Luz Oculta):</strong> A sabedoria interior. Ele só ilumina o próximo passo, 
      não o caminho todo, exigindo confiança.</p>
      <p><strong>O Cajado:</strong> O apoio para o caminho e o guia da vontade.</p>
      <p><strong>O Topo da Montanha:</strong> O distanciamento do mundo, a solidão necessária para a busca.</p>`,
  },{
    num: "X",
    name: "A Roda da Fortuna",
    img: "https://www.astrolink.com.br/data/tarot/a-roda-da-fortuna.jpg",
    keywords: ["Animais", "Hebraicos e Alquímicos", "montanhas"],
    upright: `
      <p><strong>Figuras Animais (Esfinge, Tifão):</strong> Os ciclos da vida (subida, descida e estagnação).</p>
      <p><strong>Hebraicos e Alquímicos (T-A-R-O/R-O-T-A):</strong> O poder de Deus/destino em ação.</p>
      <p><strong>Montanhas Áridas:</strong> A impermanência e os ciclos kármicos.</p>`,
  },{
    num: "XI",
    name: "A Justiça",
    img: "https://www.astrolink.com.br/data/tarot/a-justica.jpg",
    keywords: ["Espada", "balança", "manto"],
    upright: `
      <p><strong>Espada Erguida:</strong> O poder de discernir, de cortar as ilusões e de tomar decisões justas.</p>
      <p><strong>A Balança:</strong> O equilíbrio e a imparcialidade das ações.</p>
      <p><strong>O Manto Vermelho (Paixão):</strong> O uso da mente e da verdade acima das paixões.</p>`,
  },{
    num: "XII",
    name: "O Enforcado",
    img: "https://www.astrolink.com.br/data/tarot/o-enforcado.jpg",
    keywords: ["Posição", "árvore", "auréola"],
    upright: `
      <p><strong>A Posição Invertida:</strong> Uma nova perspectiva e a inversão de valores mundanos.</p>
      <p><strong>A Árvore (Cruz):</strong> O sacrifício, a suspensão da ação.</p>
      <p><strong>A Auréola:</strong> Apesar da posição desconfortável, há consciência e iluminação espiritual.</p>`,
  },{
    num: "XIII",
    name: "A Morte",
    img: "https://www.astrolink.com.br/data/tarot/a-morte.jpg",
    keywords: ["Esqueleto", "cores", "bandeira"],
    upright: `
      <p><strong>O Esqueleto com a Foice:</strong> O fim da forma, a colheita do que não serve mais.</p>
      <p><strong>Cores (Preto e Branco):</strong> A certeza de que o fim e o começo são um só.</p>
      <p><strong>A Bandeira com a Rosa:</strong> Promessa de vida eterna/novo ciclo após a transformação.</p>`,
  },{
    num: "XIV",
    name: "A Temperança",
    img: "https://www.astrolink.com.br/data/tarot/a-temperanca.jpg",
    keywords: ["Anjos", "pés", "jarras"],
    upright: `
      <p><strong>Anjo com Asas:</strong> União dos opostos, controlados com equilíbrio. Preto e branco, ação e reação.</p>
      <p><strong>Pés na Água e na Terra:</strong> Harmonia entre emoção e realidade, equilíbrio nas ações.</p>
      <p><strong>Jarras:</strong> Vitória, fluidez e determinação pessoal.</p>`,
  },{
    num: "XV",
    name: "O Diabo",
    img: "https://www.astrolink.com.br/data/tarot/o-diabo.jpg",
    keywords: ["Corrente", "Figuras Nuas"],
    upright: `
      <p><strong>A Corrente Frouxa:</strong> As correntes são autoimpostas. O indivíduo é livre para tirá-las a qualquer momento.</p>
      <p><strong>Figuras Nuas (Com e sem Chifres):</strong> Representam instintos, vícios e dependência da matéria (dinheiro, poder).</p>`,
  },{
    num: "XVI",
    name: "A Torre",
    img: "https://www.astrolink.com.br/data/tarot/a-torre.jpg",
    keywords: ["Raio", "caindo", "coroa"],
    upright: `
      <p><strong>O Raio:</strong> Um relâmpago de verdade ou insight súbito que destrói falsas estruturas.</p>
      <p><strong>As Figuras Caindo:</strong> Colapso do ego e das crenças rígidas.</p>
      <p><strong>A Coroa Cuspida:</strong> Queda da arrogância e do controle ilusório.</p>`,
  },{
    num: "XVII",
    name: "A Estrela",
    img: "https://www.astrolink.com.br/data/tarot/a-estrela.jpg",
    keywords: ["Mulher", "estrelas", "água"],
    upright: `
      <p><strong>Mulher Nua (Pureza):</strong> Vulnerabilidade e essência verdadeira.</p>
      <p><strong>Sete Estrelas Pequenas e Uma Grande:</strong> Esperança guiada pelo propósito maior e conexão com o cosmos.</p>
      <p><strong>Água Sendo Derrubada:</strong> Cura e nutrição da vida e do inconsciente.</p>`,
  },{
    num: "XVIII",
    name: "A Lua",
    img: "https://www.astrolink.com.br/data/tarot/a-lua.jpg",
    keywords: ["Caminho", "cães", "luar"],
    upright: `
      <p><strong>O Caminho que Leva ao Desconhecido:</strong> Intuição e inconsciente, cheio de incertezas.</p>
      <p><strong>Cães Uivando e Lagosta:</strong> Medos subconscientes e necessidade de dominar instintos inferiores.</p>
      <p><strong>O Luar:</strong> Luz refletida, ilusão e mistério a ser desvendado.</p>`,
  },{
    num: "XIX",
    name: "O Sol",
    img: "https://www.astrolink.com.br/data/tarot/o-sol.jpg",
    keywords: ["Criança", "muro", "girassóis"],
    upright: `
      <p><strong>A Criança Nua (Pureza):</strong> Inocência e alegria restauradas.</p>
      <p><strong>O Muro:</strong> Limite da jornada, a forma que o espírito assume.</p>
      <p><strong>Girassóis:</strong> Símbolo de vitalidade e luz, energia positiva.</p>`,
  },{
    num: "XX",
    name: "O Julgamento",
    img: "https://www.astrolink.com.br/data/tarot/o-julgamento.jpg",
    keywords: ["Anjo", "trombeta", "ressurreição"],
    upright: `
      <p><strong>O Anjo Tocando a Trombeta:</strong> Chamado para despertar da consciência.</p>
      <p><strong>As Figuras Levantando dos Túmulos:</strong> Renascimento espiritual e ressurreição da alma.</p>
      <p><strong>Montanhas Azuis:</strong> Superação dos desafios e consciência elevada.</p>`,
  },{
    num: "XXI",
    name: "O Mundo",
    img: "https://www.astrolink.com.br/data/tarot/o-mundo.jpg",
    keywords: ["Guirlanda", "figuras", "montanhas"],
    upright: `
      <p><strong>A Guirlanda (Coroa):</strong> Sucesso e totalidade.</p>
      <p><strong>As Figuras:</strong> Representam os quatro elementos, os evangelistas e a estabilidade universal.</p>
      <p><strong>Montanhas Azuis:</strong> Superação dos desafios e consciência elevada.</p>`,
  },];

const cardsS = document.getElementById("cards-s");
const backdropS = document.getElementById("backdrop-s");
const modalNumS = document.getElementById("modalNum-s");
const modalTitleS = document.getElementById("modalTitle-s");
const modalKeywordsS = document.getElementById("modalKeywords-s");
const modalUprightS = document.getElementById("modalUpright-s");
const modalImgS = document.getElementById("modalImg-s");
const btnCloseS = document.getElementById("btnClose-s");

function renderSimbologias(list) {
  if (!cardsS) return;

  cardsS.innerHTML = "";
  list.forEach((a) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${a.img}" alt="${a.name}" style="width:100%;border-radius:8px">
      <h3>${a.name}</h3>
      <p class="muted">${a.keywords.join(", ")}</p>
    `;
    card.addEventListener("click", () => openModalS(a));
    cardsS.appendChild(card);
  });
}

function openModalS(a) {
  modalNumS.textContent = a.num;
  modalTitleS.textContent = a.name;
  modalKeywordsS.textContent = a.keywords.join(", ");
  modalUprightS.innerHTML = a.upright; // 👈 aqui é a troca principal
  modalImgS.src = a.img;
  backdropS.style.display = "flex";
}

function closeModalS() {
  backdropS.style.display = "none";
}

btnCloseS.addEventListener("click", closeModalS);
backdropS.addEventListener("click", (e) => {
  if (e.target === backdropS) closeModalS();
});
renderSimbologias(simbologia);

// ÁREAS DA VIDA

const areas = [
  {
    numero: 0,
    nome: "O Louco",
    areas: {
      amor: "Novos encontros, relacionamentos livres, amizade sincera",
      carreira:
        "Projetos iniciantes, explorar novas oportunidades, criatividade",
      financas: "Evite riscos financeiros, planeje antes de agir",
      saude: "Cuide da vitalidade, evite excessos físicos e mentais",
      espiritualidade: "Abra-se ao desconhecido, confie na intuição",
      crescimento: "Aprender com experiências, ser espontâneo",
      sorte: "Momento de oportunidades inesperadas",
      desafios: "Imprudência, falta de planejamento",
    },
    conselhos: [
      "Confie na sua intuição.",
      "Não tenha medo de começar algo novo.",
      "Permita-se ser espontâneo, mas observe os riscos.",
    ],
  },{
    numero: "I",
    nome: "O Mago",
    areas: {
      amor: "Iniciar relacionamentos com confiança, comunicação clara",
      carreira: "Usar habilidades para liderança, criar oportunidades",
      financas: "Bom momento para investimentos calculados",
      saude: "Energia alta, foco em saúde física e mental",
      espiritualidade: "Manifestar intenções, foco e disciplina",
      crescimento: "Aprender a transformar ideias em realidade",
      sorte: "Ações assertivas atraem bons resultados",
      desafios: "Manipulação, ilusões, sobrecarga de responsabilidades",
    },
    conselhos: [
      "Use seus talentos com sabedoria.",
      "Transforme ideias em ações concretas.",
      "Mantenha foco e disciplina para alcançar resultados.",
    ],
  },{
    numero: "II",
    nome: "A Sacerdotisa",
    areas: {
      amor: "Intuição nos relacionamentos, conexão profunda",
      carreira: "Aguarde antes de agir, observe sinais",
      financas: "Planejamento e cautela, não arrisque impulsivamente",
      saude: "Cuide da mente, meditação ajuda",
      espiritualidade: "Confie na intuição e no inconsciente",
      crescimento: "Aprender a ouvir a voz interior",
      sorte: "Boas oportunidades se observadas com calma",
      desafios: "Segredos e dúvidas internas",
    },
    conselhos: [
      "Ouça sua intuição.",
      "Reflita antes de agir.",
      "Confie no seu conhecimento interno.",
    ],
  },{
    numero: "III",
    nome: "A Imperatriz",
    areas: {
      amor: "Relacionamentos afetivos e acolhedores",
      carreira: "Criatividade, cuidar de projetos que florescem",
      financas: "Período de prosperidade, bons investimentos",
      saude: "Energia vital em alta, cuide da alimentação",
      espiritualidade: "Conexão com a abundância e natureza",
      crescimento: "Aprender a nutrir e cuidar de si e dos outros",
      sorte: "Boa sorte em projetos criativos",
      desafios: "Não ser possessivo ou controlador",
    },
    conselhos: [
      "Cultive a paciência e a criatividade.",
      "Valorize o cuidado com si e com os outros.",
      "Permita-se prosperar.",
    ],
  },{
    numero: "IV",
    nome: "O Imperador",
    areas: {
      amor: "Relacionamentos estáveis e estruturados",
      carreira: "Liderança, disciplina, planejamento",
      financas: "Controle financeiro e organização",
      saude: "Força física e disciplina para bem-estar",
      espiritualidade: "Aprender a estruturar a própria vida",
      crescimento: "Assumir responsabilidades com firmeza",
      sorte: "Sucesso por planejamento e esforço",
      desafios: "Rigidez, inflexibilidade",
    },
    conselhos: [
      "Seja organizado e responsável.",
      "Use sua autoridade com justiça.",
      "Planeje antes de agir.",
    ],
  },{
    numero: "V",
    nome: "O Hierofante",
    areas: {
      amor: "Relacionamentos baseados em valores e tradição",
      carreira: "Aprendizado com mentores, instituições",
      financas: "Siga regras e padrões financeiros",
      saude: "Harmonia e equilíbrio mental",
      espiritualidade: "Conectar-se com tradições e ensinamentos",
      crescimento: "Aprender com quem já trilhou o caminho",
      sorte: "Benefício de boas práticas e educação",
      desafios: "Dogmatismo e excesso de convenção",
    },
    conselhos: [
      "Aprenda com quem tem mais experiência.",
      "Valorize valores e tradições que fazem sentido.",
      "Siga a ética em suas ações.",
    ],
  },{
    numero: "VI",
    nome: "Os Amantes",
    areas: {
      amor: "Amor verdadeiro, escolhas afetivas",
      carreira: "Decisões importantes, parcerias",
      financas: "Escolhas financeiras que impactam o futuro",
      saude: "Harmonia emocional influencia a saúde",
      espiritualidade: "Seguir o coração com consciência",
      crescimento: "Aprender a fazer escolhas com coragem",
      sorte: "Oportunidades através de decisões acertadas",
      desafios: "Dilemas e indecisões",
    },
    conselhos: [
      "Siga seu coração, mas seja consciente.",
      "Avalie prós e contras antes de decidir.",
      "Honestidade consigo e com os outros.",
    ],
  },{
    numero: "VII",
    nome: "O Carro",
    areas: {
      amor: "Relacionamentos que avançam com determinação",
      carreira: "Sucesso através de disciplina e foco",
      financas: "Controle e ação para bons resultados",
      saude: "Energia para superar desafios",
      espiritualidade: "Força de vontade para evoluir",
      crescimento: "Persistência e autocontrole",
      sorte: "Vitórias em caminhos planejados",
      desafios: "Impulsividade e orgulho excessivo",
    },
    conselhos: [
      "Mantenha foco e determinação.",
      "Use sua força para avançar nos objetivos.",
      "Controle a impulsividade.",
    ],
  },{
    numero: "VIII",
    nome: "A Força",
    areas: {
      amor: "Relacionamentos baseados em paciência e compaixão",
      carreira: "Sucesso com gentileza e perseverança",
      financas: "Tomada de decisão equilibrada",
      saude: "Saúde física e emocional equilibradas",
      espiritualidade: "Domínio interno, coragem suave",
      crescimento: "Aprender a lidar com desafios com paciência",
      sorte: "Momentos favoráveis através da calma",
      desafios: "Impulsividade, agressividade",
    },
    conselhos: [
      "Aja com coragem e gentileza.",
      "Domine seus medos internos.",
      "Seja paciente e persistente.",
    ],
  },{
    numero: "IX",
    nome: "O Eremita",
    areas: {
      amor: "Momento de reflexão antes de agir",
      carreira: "Buscar conhecimento interno e orientação",
      financas: "Planejamento discreto e cauteloso",
      saude: "Meditação e introspecção ajudam",
      espiritualidade: "Conectar-se com a sabedoria interna",
      crescimento: "Aprender a ouvir e refletir",
      sorte: "Boas oportunidades surgem com estudo",
      desafios: "Isolamento e solidão excessiva",
    },
    conselhos: [
      "Reserve tempo para introspecção.",
      "Busque sabedoria interna.",
      "Não tenha pressa em decisões importantes.",
    ],
  },{
    numero: "X",
    nome: "A Roda da Fortuna",
    areas: {
      amor: "Mudanças inesperadas nos relacionamentos",
      carreira: "Oportunidades surgem, esteja atento",
      financas: "Oscilações financeiras possíveis",
      saude: "Adapte-se às mudanças do corpo e mente",
      espiritualidade: "Entender ciclos da vida",
      crescimento: "Aprender a lidar com mudanças",
      sorte: "Altos e baixos, sorte favorável se aproveitar o momento",
      desafios: "Resistência às mudanças",
    },
    conselhos: [
      "Aceite o fluxo da vida.",
      "Aproveite as oportunidades que surgem.",
      "Esteja preparado para mudanças.",
    ],
  },{
    numero: "XI",
    nome: "A Justiça",
    areas: {
      amor: "Relacionamentos equilibrados e justos",
      carreira: "Decisões éticas e ponderadas",
      financas: "Equilíbrio e planejamento financeiro",
      saude: "Harmonia mental e emocional",
      espiritualidade: "Ação baseada em valores e ética",
      crescimento: "Aprender responsabilidade e integridade",
      sorte: "Retorno proporcional às ações",
      desafios: "Injustiça ou decisões precipitadas",
    },
    conselhos: [
      "Seja justo em suas ações.",
      "Pese as consequências antes de decidir.",
      "Busque equilíbrio e verdade.",
    ],
  },{
    numero: "XII",
    nome: "O Enforcado",
    areas: {
      amor: "Momento de pausa e reflexão nos relacionamentos",
      carreira: "Rever estratégias e esperar o momento certo",
      financas: "Evite decisões impulsivas",
      saude: "Reflita sobre hábitos e padrões prejudiciais",
      espiritualidade: "Aprender a ver por outra perspectiva",
      crescimento: "Aceitar sacrifícios temporários",
      sorte: "Benefícios podem vir com paciência",
      desafios: "Estagnação e indecisão",
    },
    conselhos: [
      "Veja a situação de outro ângulo.",
      "Aceite pausas e sacrifícios necessários.",
      "Não force resultados imediatos.",
    ],
  },{
    numero: "XIII",
    nome: "A Morte",
    areas: {
      amor: "Transformações profundas nos relacionamentos",
      carreira: "Fim de ciclos e novos começos",
      financas: "Mudanças importantes, adaptação necessária",
      saude: "Renovação de hábitos e atitudes",
      espiritualidade: "Aceitar transformação e renascimento",
      crescimento: "Aprender a deixar ir o que não serve mais",
      sorte: "Mudanças trazem oportunidades",
      desafios: "Medo de mudanças e resistência",
    },
    conselhos: [
      "Aceite mudanças e transforme-se.",
      "Deixe o que não serve para trás.",
      "Renove sua vida com consciência.",
    ],
  },{
    numero: "XIV",
    nome: "A Temperança",
    areas: {
      amor: "Equilíbrio e harmonia nos relacionamentos",
      carreira: "Colaboração e paciência nos projetos",
      financas: "Gestão equilibrada e planejada",
      saude: "Moderação e cuidado com corpo e mente",
      espiritualidade: "Integração e equilíbrio interior",
      crescimento: "Aprender a harmonizar opostos",
      sorte: "Boas oportunidades com equilíbrio",
      desafios: "Excessos ou falta de moderação",
    },
    conselhos: [
      "Busque equilíbrio em todas as áreas.",
      "Harmonize opostos em sua vida.",
      "Seja paciente e moderado.",
    ],
  },{
    numero: "XV",
    nome: "O Diabo",
    areas: {
      amor: "Relacionamentos intensos, mas desafiadores",
      carreira: "Tentação de atalhos, cuidado com ética",
      financas: "Cautela com dívidas e impulsos",
      saude: "Evite vícios e excessos",
      espiritualidade: "Reconhecer amarras e limitações",
      crescimento: "Aprender a lidar com desejos e medos",
      sorte: "Evite decisões precipitadas",
      desafios: "Ilusões e dependências",
    },
    conselhos: [
      "Identifique suas limitações e vícios.",
      "Evite atalhos fáceis.",
      "Seja consciente de suas escolhas.",
    ],
  },{
    numero: "XVI",
    nome: "A Torre",
    areas: {
      amor: "Ruídos e mudanças bruscas nos relacionamentos",
      carreira: "Mudanças inesperadas e desafios",
      financas: "Perdas e surpresas financeiras",
      saude: "Situações inesperadas exigem atenção",
      espiritualidade: "Aprender com crises e mudanças",
      crescimento: "Aceitar transformações repentinas",
      sorte: "Oportunidades surgem após crises",
      desafios: "Colapsos e rupturas",
    },
    conselhos: [
      "Prepare-se para mudanças inesperadas.",
      "Aprenda com crises.",
      "Não resista a transformações necessárias.",
    ],
  },{
    numero: "XVII",
    nome: "A Estrela",
    areas: {
      amor: "Esperança e harmonia nos relacionamentos",
      carreira: "Projetos inspiradores e criativos",
      financas: "Oportunidades financeiras favoráveis",
      saude: "Recuperação e bem-estar",
      espiritualidade: "Conexão com fé e esperança",
      crescimento: "Aprender a ter confiança no futuro",
      sorte: "Momento de sorte e inspiração",
      desafios: "Desânimo ou falta de fé",
    },
    conselhos: [
      "Mantenha a esperança.",
      "Inspire-se em seus sonhos.",
      "Confie no fluxo da vida.",
    ],
  },{
    numero: "XVIII",
    nome: "A Lua",
    areas: {
      amor: "Relacionamentos com incertezas, cuidado com ilusões",
      carreira: "Situações confusas, siga sua intuição",
      financas: "Evite decisões financeiras duvidosas",
      saude: "Cuidado com ansiedade e sono",
      espiritualidade: "Aprender a confiar na intuição",
      crescimento: "Enfrentar medos e ilusões pessoais",
      sorte: "Oportunidades podem ser enganosas",
      desafios: "Confusão e enganos",
    },
    conselhos: [
      "Confie na intuição, mas verifique os fatos.",
      "Não se iluda com aparências.",
      "Enfrente seus medos internos.",
    ],
  },{
    numero: "XIX",
    nome: "O Sol",
    areas: {
      amor: "Relacionamentos felizes e harmoniosos",
      carreira: "Sucesso, reconhecimento e vitórias",
      financas: "Período próspero e estável",
      saude: "Energia e vitalidade em alta",
      espiritualidade: "Clareza e conexão positiva",
      crescimento: "Aprender com alegria e confiança",
      sorte: "Boas oportunidades e sucesso",
      desafios: "Arrogância ou excesso de confiança",
    },
    conselhos: [
      "Celebre conquistas e momentos felizes.",
      "Mantenha otimismo e clareza.",
      "Compartilhe alegria com os outros.",
    ],
  },{
    numero: "XX",
    nome: "O Julgamento",
    areas: {
      amor: "Renovação nos relacionamentos, reconciliações",
      carreira: "Novos caminhos profissionais, escolhas conscientes",
      financas: "Reavaliação financeira e oportunidades",
      saude: "Renovação de hábitos saudáveis",
      espiritualidade: "Reflexão e despertar espiritual",
      crescimento: "Aprender com experiências passadas",
      sorte: "Oportunidades surgem com decisões corretas",
      desafios: "Negligência ou arrependimentos",
    },
    conselhos: [
      "Reflita sobre suas escolhas.",
      "Aceite o passado e renove-se.",
      "Tome decisões conscientes.",
    ],
  },{
    numero: "XXI",
    nome: "O Mundo",
    areas: {
      amor: "Relacionamentos completos e satisfatórios",
      carreira: "Conquista de metas e reconhecimento",
      financas: "Estabilidade e sucesso financeiro",
      saude: "Bem-estar físico e mental equilibrado",
      espiritualidade: "Conexão plena e realização",
      crescimento: "Aprender a integrar experiências",
      sorte: "Realizações e boas oportunidades",
      desafios: "Complacência ou falta de foco",
    },
    conselhos: [
      "Celebre suas conquistas.",
      "Integre experiências e siga confiante.",
      "Mantenha foco em novos objetivos.",
    ],
  },];

const container = document.getElementById("areas-vida");

areas.forEach((carta) => {
  const div = document.createElement("div");
  div.classList.add("carta");

  const titulo = document.createElement("h2");
  titulo.innerHTML = `<span class="titulo-arcano">${carta.numero} - ${carta.nome}</span>`;
  div.appendChild(titulo);

  const lista = document.createElement("ul");
  for (const [area, desc] of Object.entries(carta.areas)) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${
      area.charAt(0).toUpperCase() + area.slice(1)
    }:</strong> ${desc}`;
    lista.appendChild(li);
  }
  div.appendChild(lista);

  const conselhosDiv = document.createElement("div");
  conselhosDiv.classList.add("conselhos");
  conselhosDiv.innerHTML = `<strong>Conselhos:</strong> ${carta.conselhos.join(
    " | "
  )}`;
  div.appendChild(conselhosDiv);

  container.appendChild(div);
});
