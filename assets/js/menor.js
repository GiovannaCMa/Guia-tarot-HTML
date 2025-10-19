// COPAS
const copasS = [
  {
    num: 1,
    name: "Às de Copas",
    img: "https://www.astrolink.com.br/data/tarot/as-de-copas.jpg",
    keywords: ["Taça", "água", "pássaro", "ondas"],
    upright: `
      <p><strong>Taça Transbordante:</strong> Emoções puras, intuição, amor fluindo.</p>
      <p><strong>Água Fluindo:</strong> Renovação emocional, energia que se move sem obstáculos.</p>
      <p><strong>Pássaro ou Lírio:</strong> Inspiração, espiritualidade, pureza de sentimentos.</p>
      <p><strong>Ondas Suaves:</strong> Fluxo emocional natural, serenidade.</p>`,
  },
  {
    num: 2,
    name: "Dois de Copas",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-copas.jpg",
    keywords: ["Taças", "cisnes", "mãos"],
    upright: `
      <p><strong>Duas Taças Se Encontrando:</strong> União, parceria afetiva e equilíbrio emocional.</p>
      <p><strong>Cisnes ou Animais em Par:</strong> Amor recíproco, lealdade e harmonia.</p>
      <p><strong>Mão Tocando a Mão:</strong> Compromisso, conexão consciente.</p>`,
  },
  {
    num: 3,
    name: "Três de Copas",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-copas.jpg",
    keywords: ["Pessoas", "flores", "dança"],
    upright: `
      <p><strong>Três Pessoas Brindando:</strong> Celebração, amizade, comunidade.</p>
      <p><strong>Flores e Frutas:</strong> Fertilidade emocional, alegria compartilhada.</p>
      <p><strong>Dança Circular:</strong> União e fluxo harmonioso de sentimentos.</p>`,
  },
  {
    num: 4,
    name: "Quatro de Copas",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-copas.jpg",
    keywords: ["Pessoas", "taça", "nuvens"],
    upright: `
      <p><strong>Pessoa Sentada, Braços Cruzados:</strong> Reflexão, introspecção, possível tédio emocional.</p>
      <p><strong>Taça Oferecida pelo Céu:</strong> Oportunidade emocional ainda não percebida.</p>
      <p><strong>Nuvens ou Sombra Suave:</strong> Confusão ou indecisão.</p>`,
  },
  {
    num: 5,
    name: "Cinco de Copas",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-copas.jpg",
    keywords: ["Taças", "rio"],
    upright: `
      <p><strong>Três Taças Derramadas:</strong> Perdas, decepções, arrependimentos.</p>
      <p><strong>Duas Taças em Pé:</strong> O que ainda pode ser aproveitado, esperança residual.</p>
      <p><strong>Rio ou Ponte:</strong> Passagem emocional, superação de frustrações.</p>`,
  },
  {
    num: 6,
    name: "Seis de Copas",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-copas.jpg",
    keywords: ["Crianças", "água", "presentes"],
    upright: `
      <p><strong>Crianças Brincando com Flores:</strong> Nostalgia, lembranças afetivas.</p>
      <p><strong>Água Calma:</strong> Emoções doces, reconexão com a inocência.</p>
      <p><strong>Pequenos Presentes ou Doces:</strong> Generosidade e simplicidade de coração.</p>`,
  },
  {
    num: 7,
    name: "Sete de Copas",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-copas.jpg",
    keywords: ["Nuvens", "café", "espelho"],
    upright: `
      <p><strong>Nuvens com Diversas Taças e Objetos:</strong> Ilusões, escolhas múltiplas, tentação.</p>
      <p><strong>Borra de Café ou Água Misteriosa:</strong> Confusão emocional, sonhos e fantasias.</p>
      <p><strong>Espelho ou Reflexo:</strong> A necessidade de discernir realidade e desejo.</p>`,
  },
  {
    num: 8,
    name: "oito de Copas",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-copas.jpg",
    keywords: ["Pessoa", "lua", "montanhas"],
    upright: `
      <p><strong>Pessoa Deixando Taças para Trás:</strong> Abandono de situações que não servem mais.</p>
      <p><strong>Lua e Caminho:</strong> Jornada interna, busca por sentido emocional.</p>
      <p><strong>Montanhas ao Fundo:</strong> Superação, desafio interior.</p>`,
  },
  {
    num: 9,
    name: "Nove de Copas",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-copas.jpg",
    keywords: ["Pessoas", "decoração", "cortinas"],
    upright: `
      <p><strong>Pessoa Satisfeita Diante de Taças:</strong> Realização emocional, contentamento.</p>
      <p><strong>Decoração de Festas ou Frutas:</strong> Abundância afetiva e prazer emocional.</p>
      <p><strong>Cortinas ou Tapetes Luxuosos:</strong> Conforto e segurança emocional.</p>`,
  },
  {
    num: 10,
    name: "Dez de Copas",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-copas.jpg",
    keywords: ["Família", "água", "casa"],
    upright: `
      <p><strong>Família Feliz com Arco-Íris:</strong> Felicidade completa, harmonia familiar.</p>
      <p><strong>Água e Flores:</strong> Abundância emocional, realização compartilhada.</p>
      <p><strong>Casa ou Lar ao Fundo:</strong> Estabilidade, segurança e amor duradouro.</p>`,
  },
  {
    num: 11,
    name: "Valete de Copas",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-copas.jpg",
    keywords: ["Jovem", "cisne", "água"],
    upright: `
      <p><strong>Jovem com Taça:</strong> Mensageiro emocional, curiosidade afetiva.</p>
      <p><strong>Cisne Pequeno ou Pássaro:</strong> Gentileza, sensibilidade, intuição nascente.</p>
      <p><strong>Água Corrente:</strong> Exploração de sentimentos e comunicação afetiva.</p>`,
  },
  {
    num: 12,
    name: "Cavaleiro de Copas",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-copas.jpg",
    keywords: ["Cavaleiro", "água", "cores"],
    upright: `
      <p><strong>Cavaleiro Montado com Taça:</strong> Progresso afetivo, busca de romance ou aventura emocional.</p>
      <p><strong>Água ao Redor ou Lago:</strong> Emoções profundas e movimento intuitivo.</p>
      <p><strong>Cores Suaves:</strong> Sensibilidade, nobreza de sentimentos.</p>`,
  },
  {
    num: 13,
    name: "Rainha de Copas",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-copas.jpg",
    keywords: ["Mulher", "água", "roupas"],
    upright: `
      <p><strong>Mulher Sentada com Taça:</strong> Intuição, empatia, proteção emocional.</p>
      <p><strong>Cisne ou Água Tranquila:</strong> Profundidade emocional e equilíbrio.</p>
      <p><strong>Roupas Elegantes ou Coroa:</strong> Autoridade afetiva, maturidade emocional.</p>`,
  },
  {
    num: 14,
    name: "Rei de Copas",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-copas.jpg",
    keywords: ["Homem", "água", "peixes"],
    upright: `
      <p><strong>Homem com Taça e Cetro:</strong> Controle emocional, equilíbrio entre razão e sentimento.</p>
      <p><strong>Água e Navio:</strong> Navegação segura pelos sentimentos próprios e alheios.</p>
      <p><strong>Peixe ou Animais Aquáticos:</strong> Abundância, fluidez e sensibilidade madura.</p>`,
  },
];

// OUROS
const ourosS = [
  {
    num: 1,
    name: "Às de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/as-de-ouros.jpg",
    keywords: ["Mão", "jardim", "portal"],
    upright: `
      <p><strong>Mão Oferecendo Moeda Dourada:</strong> Oportunidade material, prosperidade, início promissor.</p>
      <p><strong>Jardim Florido:</strong> Crescimento, fertilidade, energia de abundância.</p>
      <p><strong>Portal ao Fundo:</strong> Caminho aberto para conquistas concretas.</p>`,
  },
  {
    num: 2,
    name: "Dois de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-ouros.jpg",
    keywords: ["Moedas", "mar", "infinito"],
    upright: `
      <p><strong>Figura Equilibrando Duas Moedas:</strong> Adaptabilidade, equilíbrio entre finanças e emoções.</p>
      <p><strong>Mar Agitado ao Fundo:</strong> Instabilidade controlada, desafios externos.</p>
      <p><strong>Símbolo do Infinito Ligando as Moedas:</strong> Ciclos contínuos de ganho e gasto.</p>`,
  },
  {
    num: 3,
    name: "Três de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-ouros.jpg",
    keywords: ["Arquitetura", "cadetral", "planos"],
    upright: `
      <p><strong>Construtores e Arquiteto:</strong> Trabalho em equipe, cooperação e talento reconhecido.</p>
      <p><strong>Catedral em Construção:</strong> Desenvolvimento de algo sólido e duradouro.</p>
      <p><strong>Planos e Ferramentas:</strong> Técnica, disciplina e propósito claro.</p>`,
  },
  {
    num: 4,
    name: "Quatro de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-ouros.jpg",
    keywords: ["Homem", "trono", "moedas"],
    upright: `
      <p><strong>Homem Segurando Moedas Firmemente:</strong> Apego, segurança financeira, medo de perder.</p>
      <p><strong>Trono ou Cidade ao Fundo:</strong> Desejo de estabilidade e controle material.</p>
      <p><strong>Moedas nos Pés e Cabeça:</strong> Foco excessivo no dinheiro ou status.</p>`,
  },
  {
    num: 5,
    name: "Cinco de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-ouros.jpg",
    keywords: ["Pesooas", "vitral", "neve"],
    upright: `
      <p><strong>Duas Pessoas no Frio:</strong> Dificuldades materiais, sensação de abandono.</p>
      <p><strong>Vitral Iluminado:</strong> Ajuda espiritual ou apoio próximo, mesmo não percebido.</p>
      <p><strong>Neve e Muletas:</strong> Desgaste físico ou emocional ligado à carência.</p>`,
  },
  {
    num: 6,
    name: "Seis de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-ouros.jpg",
    keywords: ["Homem", "balança", "mendigos"],
    upright: `
      <p><strong>Homem Distribuindo Moedas:</strong> Generosidade, equilíbrio entre dar e receber.</p>
      <p><strong>Balança na Mão:</strong> Justiça, reciprocidade e discernimento no auxílio.</p>
      <p><strong>Mendigos Abaixo:</strong> Relações de poder, caridade e compaixão prática.</p>`,
  },
  {
    num: 7,
    name: "Sete de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-ouros.jpg",
    keywords: ["Homem", "plantas", "expressão"],
    upright: `
      <p><strong>Homem Observando as Moedas Crescendo:</strong> Paciência, planejamento, resultados a longo prazo.</p>
      <p><strong>Plantas e Videiras:</strong> Trabalho cultivado com cuidado e atenção.</p>
      <p><strong>Expressão Pensativa:</strong> Avaliação de progresso e investimento.</p>`,
  },
  {
    num: 8,
    name: "Oito de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-ouros.jpg",
    keywords: ["trabalho", "bancada", "moedas"],
    upright: `
      <p><strong>Artesão Talhando Moedas:</strong> Dedicação, aprendizado e aperfeiçoamento contínuo.</p>
      <p><strong>Bancada de Trabalho:</strong> Esforço consciente, domínio técnico.</p>
      <p><strong>Moedas Alinhadas na Parede:</strong> Reconhecimento progressivo e construção de reputação.</p>`,
  },
  {
    num: 9,
    name: "Nove de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-ouros.jpg",
    keywords: ["Mulher", "falcão", "natureza"],
    upright: `
      <p><strong>Mulher em Jardim com Uvas:</strong> Autossuficiência, prazer pelo próprio sucesso.</p>
      <p><strong>Falcão no Braço:</strong> Controle refinado, sabedoria e nobreza.</p>
      <p><strong>Natureza Abundante:</strong> Conforto, elegância e segurança conquistada.</p>`,
  },
  {
    num: 10,
    name: "Dez de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-ouros.jpg",
    keywords: ["família", "arco", "brasões"],
    upright: `
      <p><strong>Família Diante do Portão:</strong> Legado, estabilidade e prosperidade transmitida.</p>
      <p><strong>Arco Decorado e Cachorro:</strong> Lealdade, proteção e continuidade.</p>
      <p><strong>Brasões e Castelos:</strong> Realização material plena, tradição.</p>`,
  },
  {
    num: 11,
    name: "Valete de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-ouros.jpg",
    keywords: ["jovem", "campo", "postura"],
    upright: `
      <p><strong>Jovem Observando a Moeda:</strong> Dedicação ao aprendizado, curiosidade prática.</p>
      <p><strong>Campo Verdejante:</strong> Potencial fértil, início de um novo projeto.</p>
      <p><strong>Postura Atenta:</strong> Concentração, responsabilidade crescente.</p>`,
  },
  {
    num: 12,
    name: "Cavaleiro de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-ouros.jpg",
    keywords: ["cavaleiro", "cavalo", "campo"],
    upright: `
      <p><strong>Cavaleiro Parado com Moeda na Mão:</strong> Perseverança, rotina, comprometimento.</p>
      <p><strong>Cavalo Estático:</strong> Cautela e paciência antes de agir.</p>
      <p><strong>Campo e Solo Fértil:</strong> Avanço constante, crescimento seguro.</p>`,
  },
  {
    num: 13,
    name: "Rainha de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-ouros.jpg",
    keywords: ["Mulher", "trono", "vestes"],
    upright: `
      <p><strong>Rainha Segurando Moeda:</strong> Cuidado prático, nutrição material e emocional.</p>
      <p><strong>Trono Cercado por Flores e Coelhos:</strong> Fertilidade, conforto e generosidade.</p>
      <p><strong>Vestes Verdes e Douradas:</strong> Conexão com a Terra e segurança abundante.</p>`,
  },
  {
    num: 14,
    name: "Rei de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-ouros.jpg",
    keywords: ["Homem", "touro", "castelo"],
    upright: `
      <p><strong>Rei Sentado com Moeda e Cetro:</strong> Sucesso material, liderança prática e confiável.</p>
      <p><strong>Touro ou Videira no Trono:</strong> Força, estabilidade e prazer pela vida.</p>
      <p><strong>Castelo e Jardim ao Fundo:</strong> Segurança construída pelo próprio esforço.</p>`,
  },
];

// ESPADAS
const espadasS = [
  {
    num: 1,
    name: "Às de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/as-de-espadas.jpg",
    keywords: ["Espada", "nuvens", "montanhas"],
    upright: `
      <p><strong>Espada Erguida com Coroa:</strong> Clareza mental, verdade, triunfo pela razão.</p>
      <p><strong>Nuvens e Raios:</strong> Revelação repentina, poder intelectual.</p>
      <p><strong>Montanhas ao Fundo:</strong> Desafios superáveis pela lucidez.</p>`,
  },
  {
    num: 2,
    name: "Dois de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-espadas.jpg",
    keywords: ["Venda", "lua", "cruzamento"],
    upright: `
      <p><strong>Mulher Vendada com Duas Espadas Cruzadas:</strong> Indecisão, equilíbrio precário, negação.</p>
      <p><strong>Lua e Água ao Fundo:</strong> Intuição reprimida, sentimentos ocultos.</p>
      <p><strong>Cruzamento das Espadas:</strong> Conflito interno entre mente e coração.</p>`,
  },
  {
    num: 3,
    name: "Três de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-espadas.jpg",
    keywords: ["Coração", "chuva", "simetria"],
    upright: `
      <p><strong>Coração Atingido por Três Espadas:</strong> Dor, perda, separação ou decepção emocional.</p>
      <p><strong>Chuva e Céu Cinzento:</strong> Purificação após o sofrimento.</p>
      <p><strong>Simetria na Imagem:</strong> Clareza e aprendizado que vêm da dor.</p>`,
  },
  {
    num: 4,
    name: "Quatro de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-espadas.jpg",
    keywords: ["Figura", "vitral", "espadas"],
    upright: `
      <p><strong>Figura Deitada em Descanso:</strong> Recuperação, pausa necessária, introspecção.</p>
      <p><strong>Vitral de Igreja:</strong> Proteção espiritual durante o recolhimento.</p>
      <p><strong>Espadas Pendentes:</strong> Problemas em espera, mente em repouso.</p>`,
  },
  {
    num: 5,
    name: "Cinco de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-espadas.jpg",
    keywords: ["Homem", "céu", "mar"],
    upright: `
      <p><strong>Homem Segurando Espadas com Outros Indo Embora:</strong> Vitória sem honra, tensão e orgulho.</p>
      <p><strong>Céu Cinzento e Vento:</strong> Consequências mentais de um embate.</p>
      <p><strong>Mar ao Fundo:</strong> Reflexão sobre perdas e ganhos.</p>`,
  },
  {
    num: 6,
    name: "Seis de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-espadas.jpg",
    keywords: ["Pessoas", "água", "espadas"],
    upright: `
      <p><strong>Pessoas Num Barco:</strong> Transição, mudança de ambiente ou mentalidade.</p>
      <p><strong>Água Suave e Horizonte:</strong> Passagem para tempos mais calmos.</p>
      <p><strong>Espadas no Barco:</strong> Experiências e pensamentos levados consigo.</p>`,
  },
  {
    num: 7,
    name: "Sete de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-espadas.jpg",
    keywords: ["Homem", "acompamete", "olhar"],
    upright: `
      <p><strong>Homem Carregando Espadas:</strong> Astúcia, tática, agir com discrição.</p>
      <p><strong>Acampamento ao Fundo:</strong> Situações que exigem cuidado e sigilo.</p>
      <p><strong>Olhar Para Trás:</strong> Cautela, risco de ser descoberto.</p>`,
  },
  {
    num: 8,
    name: "Oito de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-espadas.jpg",
    keywords: ["Mulher", "espadas", "água"],
    upright: `
      <p><strong>Mulher Vendada e Amarrada:</strong> Sentimento de aprisionamento, limitação mental.</p>
      <p><strong>Espadas ao Redor:</strong> Barreiras criadas pela própria mente.</p>
      <p><strong>Água nos Pés:</strong> Emoções presentes, mas contidas.</p>`,
  },
  {
    num: 9,
    name: "Nove de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-espadas.jpg",
    keywords: ["Pessoa", "parede", "cobertor"],
    upright: `
      <p><strong>Pessoa Sentada na Cama:</strong> Ansiedade, culpa, preocupação ou arrependimento.</p>
      <p><strong>Espadas na Parede:</strong> Pensamentos repetitivos e angustiantes.</p>
      <p><strong>Cobertor Bordado:</strong> Proteção emocional, mesmo diante do medo.</p>`,
  },
  {
    num: 10,
    name: "Dez de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-espadas.jpg",
    keywords: ["Figura", "sol", "mar"],
    upright: `
      <p><strong>Figura Caída com Dez Espadas nas Costas:</strong> Fim doloroso, rendição, liberação de algo.</p>
      <p><strong>Sol Nascendo ao Fundo:</strong> Renascimento, nova consciência após o colapso.</p>
      <p><strong>Mar Calmo:</strong> Aceitação do inevitável e início de cura.</p>`,
  },
  {
    num: 11,
    name: "Valete de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-espadas.jpg",
    keywords: ["Jovem", "vento", "postura"],
    upright: `
      <p><strong>Jovem com Espada Erguida:</strong> Curiosidade mental, vigilância e energia analítica.</p>
      <p><strong>Vento Forte e Céu Aberto:</strong> Comunicação rápida, novas ideias.</p>
      <p><strong>Postura Atenta:</strong> Alerta e prudência diante de desafios intelectuais.</p>`,
  },
  {
    num: 12,
    name: "Cavaleiro de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-espadas.jpg",
    keywords: ["Cavaleiro", "nuvens", "cavalo"],
    upright: `
      <p><strong>Cavaleiro Correndo com Espada em Punho:</strong> Ação impetuosa, coragem, tomada de iniciativa.</p>
      <p><strong>Nuvens e Vento:</strong> Movimento rápido e raciocínio afiado.</p>
      <p><strong>Cavalo Branco:</strong> Intenção pura, mas sem reflexão.</p>`,
  },
  {
    num: 13,
    name: "Rainha de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-espadas.jpg",
    keywords: ["Mulher", "nuvens", "mão"],
    upright: `
      <p><strong>Rainha Sentada com Espada Erguida:</strong> Clareza mental, sinceridade e discernimento.</p>
      <p><strong>Nuvens e Céu Claro:</strong> Sabedoria adquirida pela experiência.</p>
      <p><strong>Mão Estendida:</strong> Abertura racional, mas seletiva.</p>`,
  },
  {
    num: 14,
    name: "Rei de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-espadas.jpg",
    keywords: ["Homem", "céu", "roupas"],
    upright: `
      <p><strong>Rei com Espada Vertical:</strong> Lógica, verdade, poder intelectual e liderança justa.</p>
      <p><strong>Céu Azul e Borboletas no Trono:</strong> Clareza de pensamento e transformação.</p>
      <p><strong>Roupas Azuis e Roxas:</strong> Sabedoria espiritual e racionalidade equilibrada.</p>`,
  },
];

// PAUS
const pausS = [
  {
    num: 1,
    name: "Às de Paus",
    img: "https://www.astrolink.com.br/data/tarot/as-de-paus.jpg",
    keywords: ["Bastão", "folhas", "paisagem"],
    upright: `
      <p><strong>Mão Segurando o Bastão:</strong> Inspiração, oportunidade criativa, início cheio de energia.</p>
      <p><strong>Folhas Verdes:</strong> Vitalidade, crescimento e força vital.</p>
      <p><strong>Paisagem ao Fundo:</strong> Potencial para manifestar ideias no mundo real.</p>`,
  },
  {
    num: 2,
    name: "Dois de Paus",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-paus.jpg",
    keywords: ["Globo", "castelo", "bastões"],
    upright: `
      <p><strong>Homem com Globo nas Mãos:</strong> Planejamento, visão de futuro, controle e ambição.</p>
      <p><strong>Castelo:</strong> Segurança e base sólida para expandir.</p>
      <p><strong>Bastões de Apoio:</strong> Dualidade entre estabilidade e desejo de avanço.</p>`,
  },
  {
    num: 3,
    name: "Três de Paus",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-paus.jpg",
    keywords: ["Figura", "navios", "bastões"],
    upright: `
      <p><strong>Figura Observando o Horizonte:</strong> Expectativa positiva, progresso, expansão de horizontes.</p>
      <p><strong>Navios:</strong> Resultados chegando, frutos do esforço anterior.</p>
      <p><strong>Bastões Firmes:</strong> Estrutura e visão sustentadas pela confiança.</p>`,
  },
  {
    num: 4,
    name: "Quatro de Paus",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-paus.jpg",
    keywords: ["Arco", "castelo", "bastoẽs"],
    upright: `
      <p><strong>Arco de Flores e Pessoas Celebrando:</strong> Harmonia, sucesso e alegria compartilhada.</p>
      <p><strong>Castelo ao Fundo:</strong> Estabilidade e prosperidade alcançada.</p>
      <p><strong>Bastões Erguidos:</strong> Símbolo de união e realização.</p>`,
  },
  {
    num: 5,
    name: "Cinco de Paus",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-paus.jpg",
    keywords: ["Jovem", "movimento", "vencedor"],
    upright: `
      <p><strong>Jovens Lutando com Bastões:</strong> Competição saudável, desafios e confronto de ideias.</p>
      <p><strong>Movimento Caótico:</strong> Energia dispersa, mas cheia de potencial criativo.</p>
      <p><strong>Sem Vencedor Claro:</strong> O conflito como aprendizado.</p>`,
  },
  {
    num: 6,
    name: "Seis de Paus",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-paus.jpg",
    keywords: ["Homem", "multirão", "bastão"],
    upright: `
      <p><strong>Cavaleiro com Coroa de Louros:</strong> Sucesso, reconhecimento público, triunfo merecido.</p>
      <p><strong>Multidão ao Fundo:</strong> Apoio e admiração dos outros.</p>
      <p><strong>Bastão Ornado:</strong> Glória alcançada com mérito e esforço.</p>`,
  },
  {
    num: 7,
    name: "Sete de Paus",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-paus.jpg",
    keywords: ["Homem", "postura", "terreno"],
    upright: `
      <p><strong>Homem Defendendo-se com um Bastão:</strong> Persistência, resistência diante da pressão.</p>
      <p><strong>Postura Elevada:</strong> Vantagem moral e determinação.</p>
      <p><strong>Terreno Irregular:</strong> Luta por manter o que foi conquistado.</p>`,
  },
  {
    num: 8,
    name: "Oito de Paus",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-paus.jpg",
    keywords: ["Bastões", "céu", "passagem"],
    upright: `
      <p><strong>Bastões Voando pelo Ar:</strong> Ações rápidas, mensagens, progresso acelerado.</p>
      <p><strong>Céu Claro:</strong> Ausência de obstáculos — fluxo natural das coisas.</p>
      <p><strong>Paisagem Aberta:</strong> Liberdade e movimento após um período de espera.</p>`,
  },
  {
    num: 9,
    name: "Nove de Paus",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-paus.jpg",
    keywords: ["Homem", "Bastões", "olhar"],
    upright: `
      <p><strong>Homem Ferido Segurando um Bastão:</strong> Perseverança, resistência mesmo após dificuldades.</p>
      <p><strong>Oito Bastões Atrás:</strong> Proteção das conquistas e vigilância constante.</p>
      <p><strong>Olhar Atento:</strong> Cautela, mas também força e experiência.</p>`,
  },
  {
    num: 10,
    name: "Dez de Paus",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-paus.jpg",
    keywords: ["Homem", "cidade", "postura"],
    upright: `
      <p><strong>Homem Carregando Dez Bastões:</strong> Sobrecarga, exaustão, final de um ciclo de trabalho intenso.</p>
      <p><strong>Cidade ao Fundo:</strong> O objetivo está próximo, mas exige esforço final.</p>
      <p><strong>Postura Curvada:</strong> Fardo necessário para a conclusão.</p>`,
  },
  {
    num: 11,
    name: "Valete de Paus",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-paus.jpg",
    keywords: ["Jovem", "paisagem", "postura"],
    upright: `
      <p><strong>Jovem com Bastão em Pé:</strong> Novas ideias, entusiasmo e curiosidade.</p>
      <p><strong>Paisagem Desértica:</strong> Começo simples, mas cheio de potencial.</p>
      <p><strong>Postura Confiante:</strong> Prontidão para agir e aprender.</p>`,
  },
  {
    num: 12,
    name: "Cavaleiro de Paus",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-paus.jpg",
    keywords: ["Cavaleiro", "chamas", "cavalo"],
    upright: `
      <p><strong>Cavaleiro Galopando com Bastão Erguido:</strong> Movimento, coragem, desejo de explorar.</p>
      <p><strong>Chamas e Areia:</strong> Energia ardente e impetuosa.</p>
      <p><strong>Cavalo Vermelho:</strong> Fogo interior e busca por propósito.</p>`,
  },
  {
    num: 13,
    name: "Rainha de Paus",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-paus.jpg",
    keywords: ["Mulher", "girassóis", "postura"],
    upright: `
      <p><strong>Rainha com Gato Preto aos Pés:</strong> Confiança, magnetismo, poder pessoal e mistério.</p>
      <p><strong>Girassóis e Bastão Florido:</strong> Calor, generosidade e criatividade florescente.</p>
      <p><strong>Postura Solar:</strong> Equilíbrio entre ação e intuição.</p>`,
  },
  {
    num: 14,
    name: "Rei de Paus",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-paus.jpg",
    keywords: ["Homem", "manto", "salamandra"],
    upright: `
      <p><strong>Rei com Bastão e Salamandra:</strong> Liderança visionária, domínio e coragem criativa.</p>
      <p><strong>Manto Laranja e Trono Decorado:</strong> Energia, paixão e confiança.</p>
      <p><strong>Salamandra que Morde a Cauda:</strong> Domínio sobre o fogo interior e os ciclos de criação.</p>`,
  },
];

// === ELEMENTOS ===
const cardsS = document.getElementById("cards-s");
const buttonsS = document.querySelectorAll(".suit-btn");

const backdropS = document.getElementById("backdrop-s");
const modalImgS = document.getElementById("modalImg-s");
const modalNumS = document.getElementById("modalNum-s");
const modalTitleS = document.getElementById("modalTitle-s");
const modalKeywordsS = document.getElementById("modalKeywords-s");
const modalUprightS = document.getElementById("modalUpright-s");
const btnCloseS = document.getElementById("btnClose-s");

// Junta todos os Arcanos Menores
const simbologia = [...copasS, ...ourosS, ...espadasS, ...pausS];

// === FUNÇÃO: Renderizar Simbologias ===
function renderSimbologias(list) {
  if (!cardsS) return;

  cardsS.innerHTML = "";
  list.forEach((carta) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${carta.img}" alt="${
      carta.name
    }" style="width:100%;border-radius:8px">
      <h3>${carta.name}</h3>
      <p class="muted">${
        Array.isArray(carta.keywords)
          ? carta.keywords.join(", ")
          : carta.keywords
      }</p>
    `;

    // Ao clicar na carta, abre modal
    card.addEventListener("click", () => openModalS(carta));
    cardsS.appendChild(card);
  });
}

// === FUNÇÃO: Abrir modal ===
function openModalS(carta) {
  if (!carta) return;

  modalImgS.src = carta.img;
  modalNumS.textContent = carta.num || "";
  modalTitleS.textContent = carta.name || "";
  modalKeywordsS.textContent = Array.isArray(carta.keywords)
    ? carta.keywords.join(", ")
    : carta.keywords || "";
  modalUprightS.innerHTML = carta.upright || "";
  backdropS.style.display = "flex";
}

// === FECHAR MODAL ===
btnCloseS.addEventListener("click", () => (backdropS.style.display = "none"));
backdropS.addEventListener("click", (e) => {
  if (e.target === backdropS) backdropS.style.display = "none";
});

// === FILTRAR POR NAIPE ===
buttonsS.forEach((btn) => {
  btn.addEventListener("click", () => {
    const suit = btn.dataset.suit;
    let list;

    switch (suit) {
      case "copas":
        list = copasS;
        break;
      case "ouros":
        list = ourosS;
        break;
      case "espadas":
        list = espadasS;
        break;
      case "paus":
        list = pausS;
        break;
      default:
        list = simbologia; // todos
    }

    renderSimbologias(list);
  });
});

// === MOSTRA TODOS AO CARREGAR ===
renderSimbologias(simbologia);

//SIGNIFICADOS

// estado global de reverso
const SHOW_REVERSED = { state: false };

const copas = [
  {
    num: 1,
    name: "Ás de Copas",
    keywords: ["início emocional", "intuição", "amor"],
    upright:
      "Novos começos emocionais, sentimentos puros, abertura para o amor e a intuição.",
    reversed:
      "Bloqueio emocional, falta de conexão com os sentimentos, desapego.",
  },
  {
    num: 2,
    name: "Dois de Copas",
    keywords: ["parceria", "amor", "harmonia"],
    upright: "União, parceria equilibrada, atração emocional e sintonia.",
    reversed: "Desentendimentos, desequilíbrio em relações, afastamento.",
  },
  {
    num: 3,
    name: "Três de Copas",
    keywords: ["celebração", "amizade", "alegria"],
    upright: "Festividades, apoio de amigos, momentos felizes compartilhados.",
    reversed: "Isolamento, desentendimentos em grupo, superficialidade.",
  },
  {
    num: 4,
    name: "Quatro de Copas",
    keywords: ["reflexão", "tédio", "insatisfação"],
    upright:
      "Momento de introspecção, avaliação emocional, necessidade de foco interno.",
    reversed: "Abertura para novas oportunidades, despertar emocional, ação.",
  },
  {
    num: 5,
    name: "Cinco de Copas",
    keywords: ["perda", "tristeza", "luto"],
    upright: "Decepção emocional, arrependimento, foco no que foi perdido.",
    reversed: "Aceitação, aprendizado com perdas, seguir em frente.",
  },
  {
    num: 6,
    name: "Seis de Copas",
    keywords: ["memórias", "nostalgia", "infância"],
    upright: "Recordações afetivas, nostalgia, reencontros, ternura.",
    reversed: "Apego ao passado, dificuldade de avançar, ilusões nostálgicas.",
  },
  {
    num: 7,
    name: "Sete de Copas",
    keywords: ["opções", "ilusão", "fantasia"],
    upright: "Várias escolhas emocionais, sonhos, necessidade de clareza.",
    reversed: "Confusão, decisões erradas, ilusões desfeitas.",
  },
  {
    num: 8,
    name: "Oito de Copas",
    keywords: ["abandono", "desapego", "busca interior"],
    upright:
      "Deixar para trás relações ou situações que não servem mais, busca por algo maior.",
    reversed: "Medo de mudança, apego, dificuldade de seguir em frente.",
  },
  {
    num: 9,
    name: "Nove de Copas",
    keywords: ["realização", "satisfação", "bem-estar"],
    upright: "Desejos realizados, contentamento emocional, prazer.",
    reversed: "Falsas satisfações, egoísmo, insatisfação temporária.",
  },
  {
    num: 10,
    name: "Dez de Copas",
    keywords: ["felicidade", "harmonia familiar", "pleno amor"],
    upright: "Alegria familiar, paz emocional, relacionamentos duradouros.",
    reversed:
      "Desarmonia familiar, expectativas não cumpridas, conflitos emocionais.",
  },
  {
    num: 11,
    name: "Valete de Copas",
    keywords: ["mensageiro", "curiosidade", "emoção"],
    upright:
      "Mensagem afetiva, começo de relacionamentos, curiosidade emocional.",
    reversed:
      "Imaturidade emocional, imprevistos nos sentimentos, ingenuidade.",
  },
  {
    num: 12,
    name: "Cavaleiro de Copas",
    keywords: ["romance", "proposta", "paixão"],
    upright: "Movimento emocional, busca de romance ou ideal emocional.",
    reversed: "Exagero emocional, idealização, desilusões amorosas.",
  },
  {
    num: 13,
    name: "Rainha de Copas",
    keywords: ["intuição", "empatia", "cuidado"],
    upright: "Compaixão, sensibilidade, domínio interno das emoções.",
    reversed:
      "Dependência emocional, excesso de sensibilidade, manipulação emocional.",
  },
  {
    num: 14,
    name: "Rei de Copas",
    keywords: ["equilíbrio", "autoridade emocional", "sabedoria"],
    upright:
      "Controle emocional, equilíbrio entre razão e sentimento, liderança afetiva.",
    reversed: "Instabilidade emocional, manipulação, descontrole afetivo.",
  },
];

const ouros = [
  {
    num: 1,
    name: "Ás de Ouros",
    keywords: ["novo começo", "prosperidade", "oportunidade"],
    upright: "Início de projeto material, oportunidade financeira ou prática.",
    reversed: "Perda de oportunidade, instabilidade financeira, atraso.",
  },
  {
    num: 2,
    name: "Dois de Ouros",
    keywords: ["equilíbrio", "flexibilidade", "adaptabilidade"],
    upright:
      "Gerenciar múltiplas tarefas, equilíbrio entre recursos, flexibilidade.",
    reversed:
      "Desorganização, desequilíbrio financeiro ou material, sobrecarga.",
  },
  {
    num: 3,
    name: "Três de Ouros",
    keywords: ["colaboração", "trabalho em equipe", "habilidade"],
    upright:
      "Sucesso através da colaboração, reconhecimento de habilidades, cooperação.",
    reversed:
      "Falta de cooperação, subestimação de talentos, conflitos no trabalho.",
  },
  {
    num: 4,
    name: "Quatro de Ouros",
    keywords: ["estabilidade", "segurança", "retenção"],
    upright:
      "Segurança financeira, estabilidade material, preservação de recursos.",
    reversed: "Apego excessivo, avareza, medo de perder.",
  },
  {
    num: 5,
    name: "Cinco de Ouros",
    keywords: ["perda", "dificuldade", "escassez"],
    upright:
      "Período de dificuldades financeiras ou materiais, sensação de exclusão.",
    reversed: "Recuperação, apoio, superação de dificuldades.",
  },
  {
    num: 6,
    name: "Seis de Ouros",
    keywords: ["generosidade", "equilíbrio", "ajuda"],
    upright: "Doação, troca justa, equilíbrio entre dar e receber.",
    reversed: "Desequilíbrio, exploração, egoísmo ou dependência.",
  },
  {
    num: 7,
    name: "Sete de Ouros",
    keywords: ["paciente", "trabalho árduo", "avaliação"],
    upright: "Reflexão sobre resultados, paciência, avaliação de esforços.",
    reversed: "Frustração, falta de progresso, impaciência.",
  },
  {
    num: 8,
    name: "Oito de Ouros",
    keywords: ["aprendizado", "aperfeiçoamento", "dedicação"],
    upright: "Aperfeiçoamento de habilidades, dedicação e prática constante.",
    reversed: "Falta de foco, trabalho mal feito, desmotivação.",
  },
  {
    num: 9,
    name: "Nove de Ouros",
    keywords: ["independência", "conquista", "autossuficiência"],
    upright: "Realização pessoal e financeira, independência, conforto.",
    reversed: "Vaidade, dependência, excesso de materialismo.",
  },
  {
    num: 10,
    name: "Dez de Ouros",
    keywords: ["legado", "prosperidade", "família"],
    upright:
      "Segurança familiar, estabilidade duradoura, prosperidade compartilhada.",
    reversed: "Perdas materiais, conflitos familiares, instabilidade.",
  },
  {
    num: 11,
    name: "Valete de Ouros",
    keywords: ["mensageiro", "aprendizado", "novas oportunidades"],
    upright: "Aprendizado prático, início de estudos ou projetos materiais.",
    reversed: "Imaturidade, distração, negligência financeira.",
  },
  {
    num: 12,
    name: "Cavaleiro de Ouros",
    keywords: ["trabalho", "responsabilidade", "perseverança"],
    upright: "Trabalho constante, confiabilidade, dedicação.",
    reversed: "Rigidez, teimosia, lentidão excessiva.",
  },
  {
    num: 13,
    name: "Rainha de Ouros",
    keywords: ["abundância", "cuidado", "praticidade"],
    upright:
      "Generosidade prática, estabilidade, habilidade em recursos e finanças.",
    reversed: "Excessivo apego material, egoísmo, insegurança financeira.",
  },
  {
    num: 14,
    name: "Rei de Ouros",
    keywords: ["autoridade", "sucesso", "domínio material"],
    upright: "Liderança confiável, sucesso financeiro, sabedoria prática.",
    reversed: "Ganância, abuso de poder, falha na gestão de recursos.",
  },
];

const espadas = [
  {
    num: 1,
    name: "Ás de Espadas",
    keywords: ["clareza", "verdade", "decisão"],
    upright: "Novo começo intelectual, clareza mental, corte de ilusões.",
    reversed: "Confusão, engano, dificuldade de decisão.",
  },
  {
    num: 2,
    name: "Dois de Espadas",
    keywords: ["dilema", "equilíbrio", "decisão"],
    upright:
      "Escolha difícil, necessidade de ponderação, equilíbrio entre opções.",
    reversed: "Indecisão, atraso em decisões, conflito interno.",
  },
  {
    num: 3,
    name: "Três de Espadas",
    keywords: ["dor", "coração partido", "tristeza"],
    upright: "Separação, decepção emocional, sofrimento.",
    reversed: "Superação da dor, recuperação emocional, perdão.",
  },
  {
    num: 4,
    name: "Quatro de Espadas",
    keywords: ["repouso", "recuperação", "introspecção"],
    upright: "Pausa necessária, recuperação mental ou emocional, reflexão.",
    reversed: "Incapacidade de descansar, estresse, tensão acumulada.",
  },
  {
    num: 5,
    name: "Cinco de Espadas",
    keywords: ["conflito", "derrota", "tensão"],
    upright: "Conflitos, desentendimentos, vitórias duvidosas.",
    reversed: "Reconciliação, resolução de conflitos, aprendizado com perdas.",
  },
  {
    num: 6,
    name: "Seis de Espadas",
    keywords: ["transição", "viagem", "superação"],
    upright: "Mudança necessária, transição, afastamento de problemas.",
    reversed: "Dificuldade de se desapegar, estagnação, medo da mudança.",
  },
  {
    num: 7,
    name: "Sete de Espadas",
    keywords: ["estratégia", "astúcia", "discrição"],
    upright: "Planejamento cuidadoso, ações estratégicas, segredo.",
    reversed: "Engano descoberto, traição, falta de honestidade.",
  },
  {
    num: 8,
    name: "Oito de Espadas",
    keywords: ["restrição", "medo", "limitação"],
    upright: "Sentimento de aprisionamento, bloqueios mentais, limitação.",
    reversed: "Libertação, superação de medos, clareza mental.",
  },
  {
    num: 9,
    name: "Nove de Espadas",
    keywords: ["ansiedade", "preocupação", "pesadelos"],
    upright: "Ansiedade, medo, preocupação excessiva.",
    reversed: "Alívio, superação de preocupações, clareza emocional.",
  },
  {
    num: 10,
    name: "Dez de Espadas",
    keywords: ["fim doloroso", "trauma", "conclusão"],
    upright: "Fim doloroso, perda, conclusão inevitável.",
    reversed: "Recuperação, alívio gradual, nova perspectiva.",
  },
  {
    num: 11,
    name: "Valete de Espadas",
    keywords: ["mensageiro", "curiosidade", "inteligência"],
    upright: "Mensagem mental, aprendizado, observação e vigilância.",
    reversed: "Fofoca, mal-entendidos, imaturidade intelectual.",
  },
  {
    num: 12,
    name: "Cavaleiro de Espadas",
    keywords: ["ação rápida", "determinação", "coragem"],
    upright: "Movimento decisivo, busca por justiça ou verdade, coragem.",
    reversed: "Impulsividade, agressividade, decisões precipitadas.",
  },
  {
    num: 13,
    name: "Rainha de Espadas",
    keywords: ["sabedoria", "clareza", "independência"],
    upright: "Mente clara, julgamento justo, independência intelectual.",
    reversed: "Frieza emocional, crítica excessiva, manipulação verbal.",
  },
  {
    num: 14,
    name: "Rei de Espadas",
    keywords: ["autoridade", "justiça", "racionalidade"],
    upright: "Liderança justa, clareza de pensamento, autoridade ética.",
    reversed: "Tirania, inflexibilidade, abuso do poder intelectual.",
  },
];

const paus = [
  {
    num: 1,
    name: "Ás de Paus",
    keywords: ["energia", "ação", "inspiração"],
    upright: "Novo começo, iniciativa, entusiasmo e criatividade.",
    reversed: "Bloqueio de energia, procrastinação, falta de motivação.",
  },
  {
    num: 2,
    name: "Dois de Paus",
    keywords: ["planejamento", "decisão", "direção"],
    upright: "Escolhas estratégicas, visão futura, planejamento.",
    reversed: "Indecisão, falta de direção, atraso em planos.",
  },
  {
    num: 3,
    name: "Três de Paus",
    keywords: ["expansão", "oportunidade", "viagem"],
    upright: "Crescimento, exploração de novos caminhos, visão ampla.",
    reversed: "Atrasos, expectativas frustradas, obstáculos externos.",
  },
  {
    num: 4,
    name: "Quatro de Paus",
    keywords: ["estabilidade", "celebração", "sucesso"],
    upright: "Harmonia, conquistas compartilhadas, celebrações.",
    reversed: "Instabilidade, conflitos familiares, atraso em comemorações.",
  },
  {
    num: 5,
    name: "Cinco de Paus",
    keywords: ["competição", "conflito", "desafio"],
    upright: "Competição saudável, desafios estimulantes, disputa de ideias.",
    reversed: "Conflitos desnecessários, rivalidade exagerada, tensão.",
  },
  {
    num: 6,
    name: "Seis de Paus",
    keywords: ["vitória", "reconhecimento", "sucesso"],
    upright: "Reconhecimento público, conquistas celebradas, êxito.",
    reversed: "Fracasso momentâneo, falta de reconhecimento, desânimo.",
  },
  {
    num: 7,
    name: "Sete de Paus",
    keywords: ["defesa", "coragem", "posição"],
    upright:
      "Defender suas posições, perseverança, coragem diante da oposição.",
    reversed: "Falta de confiança, insegurança, rendição.",
  },
  {
    num: 8,
    name: "Oito de Paus",
    keywords: ["movimento", "rapidez", "comunicação"],
    upright: "Progresso rápido, ação decisiva, comunicação eficaz.",
    reversed: "Atrasos, obstáculos, frustração em planos.",
  },
  {
    num: 9,
    name: "Nove de Paus",
    keywords: ["resistência", "preparação", "persistência"],
    upright: "Defesa, experiência adquirida, resistência a desafios.",
    reversed: "Cansaço, fraqueza, falta de preparação.",
  },
  {
    num: 10,
    name: "Dez de Paus",
    keywords: ["peso", "responsabilidade", "carga"],
    upright: "Sobrecarga, responsabilidades acumuladas, esforço intenso.",
    reversed: "Alívio, delegação, diminuição de pressão.",
  },
  {
    num: 11,
    name: "Valete de Paus",
    keywords: ["mensageiro", "curiosidade", "aventura"],
    upright: "Energia jovem, entusiasmo, exploração de novos projetos.",
    reversed: "Impulsividade, inexperiência, dispersão.",
  },
  {
    num: 12,
    name: "Cavaleiro de Paus",
    keywords: ["ação", "coragem", "viagem"],
    upright: "Movimento rápido, busca de objetivos, paixão pela ação.",
    reversed: "Impulsividade, imprudência, precipitação.",
  },
  {
    num: 13,
    name: "Rainha de Paus",
    keywords: ["liderança", "criatividade", "confiança"],
    upright: "Carisma, energia positiva, domínio da criatividade.",
    reversed: "Controle excessivo, arrogância, impaciência.",
  },
  {
    num: 14,
    name: "Rei de Paus",
    keywords: ["autoridade", "iniciativa", "visão"],
    upright: "Liderança inspiradora, visão estratégica, coragem.",
    reversed: "Tirania, arrogância, falta de visão clara.",
  },
];

const significados = [...copas, ...ouros, ...espadas, ...paus];

const cardsEl = document.getElementById("cards");
const backdrop = document.getElementById("backdrop");
const buttons = document.querySelectorAll(".suit-btn");

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

  // === FILTRAR POR NAIPE ===
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const suits = btn.dataset.suit;
      let list;

      switch (suits) {
        case "copas":
          list = copas;
          break;
        case "ouros":
          list = ouros;
          break;
        case "espadas":
          list = espadas;
          break;
        case "paus":
          list = paus;
          break;
        default:
          list = significados; // todos
      }

      render(list);
    });
  });

  render(significados);
}
