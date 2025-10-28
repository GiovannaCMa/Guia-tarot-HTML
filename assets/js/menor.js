//SIMBOLOGIA
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
  },{
    num: 2,
    name: "Dois de Copas",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-copas.jpg",
    keywords: ["Taças", "cisnes", "mãos"],
    upright: `
      <p><strong>Duas Taças Se Encontrando:</strong> União, parceria afetiva e equilíbrio emocional.</p>
      <p><strong>Cisnes ou Animais em Par:</strong> Amor recíproco, lealdade e harmonia.</p>
      <p><strong>Mão Tocando a Mão:</strong> Compromisso, conexão consciente.</p>`,
  },{
    num: 3,
    name: "Três de Copas",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-copas.jpg",
    keywords: ["Pessoas", "flores", "dança"],
    upright: `
      <p><strong>Três Pessoas Brindando:</strong> Celebração, amizade, comunidade.</p>
      <p><strong>Flores e Frutas:</strong> Fertilidade emocional, alegria compartilhada.</p>
      <p><strong>Dança Circular:</strong> União e fluxo harmonioso de sentimentos.</p>`,
  },{
    num: 4,
    name: "Quatro de Copas",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-copas.jpg",
    keywords: ["Pessoas", "taça", "nuvens"],
    upright: `
      <p><strong>Pessoa Sentada, Braços Cruzados:</strong> Reflexão, introspecção, possível tédio emocional.</p>
      <p><strong>Taça Oferecida pelo Céu:</strong> Oportunidade emocional ainda não percebida.</p>
      <p><strong>Nuvens ou Sombra Suave:</strong> Confusão ou indecisão.</p>`,
  },{
    num: 5,
    name: "Cinco de Copas",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-copas.jpg",
    keywords: ["Taças", "rio"],
    upright: `
      <p><strong>Três Taças Derramadas:</strong> Perdas, decepções, arrependimentos.</p>
      <p><strong>Duas Taças em Pé:</strong> O que ainda pode ser aproveitado, esperança residual.</p>
      <p><strong>Rio ou Ponte:</strong> Passagem emocional, superação de frustrações.</p>`,
  },{
    num: 6,
    name: "Seis de Copas",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-copas.jpg",
    keywords: ["Crianças", "água", "presentes"],
    upright: `
      <p><strong>Crianças Brincando com Flores:</strong> Nostalgia, lembranças afetivas.</p>
      <p><strong>Água Calma:</strong> Emoções doces, reconexão com a inocência.</p>
      <p><strong>Pequenos Presentes ou Doces:</strong> Generosidade e simplicidade de coração.</p>`,
  },{
    num: 7,
    name: "Sete de Copas",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-copas.jpg",
    keywords: ["Nuvens", "café", "espelho"],
    upright: `
      <p><strong>Nuvens com Diversas Taças e Objetos:</strong> Ilusões, escolhas múltiplas, tentação.</p>
      <p><strong>Borra de Café ou Água Misteriosa:</strong> Confusão emocional, sonhos e fantasias.</p>
      <p><strong>Espelho ou Reflexo:</strong> A necessidade de discernir realidade e desejo.</p>`,
  },{
    num: 8,
    name: "oito de Copas",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-copas.jpg",
    keywords: ["Pessoa", "lua", "montanhas"],
    upright: `
      <p><strong>Pessoa Deixando Taças para Trás:</strong> Abandono de situações que não servem mais.</p>
      <p><strong>Lua e Caminho:</strong> Jornada interna, busca por sentido emocional.</p>
      <p><strong>Montanhas ao Fundo:</strong> Superação, desafio interior.</p>`,
  },{
    num: 9,
    name: "Nove de Copas",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-copas.jpg",
    keywords: ["Pessoas", "decoração", "cortinas"],
    upright: `
      <p><strong>Pessoa Satisfeita Diante de Taças:</strong> Realização emocional, contentamento.</p>
      <p><strong>Decoração de Festas ou Frutas:</strong> Abundância afetiva e prazer emocional.</p>
      <p><strong>Cortinas ou Tapetes Luxuosos:</strong> Conforto e segurança emocional.</p>`,
  },{
    num: 10,
    name: "Dez de Copas",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-copas.jpg",
    keywords: ["Família", "água", "casa"],
    upright: `
      <p><strong>Família Feliz com Arco-Íris:</strong> Felicidade completa, harmonia familiar.</p>
      <p><strong>Água e Flores:</strong> Abundância emocional, realização compartilhada.</p>
      <p><strong>Casa ou Lar ao Fundo:</strong> Estabilidade, segurança e amor duradouro.</p>`,
  },{
    num: 11,
    name: "Valete de Copas",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-copas.jpg",
    keywords: ["Jovem", "cisne", "água"],
    upright: `
      <p><strong>Jovem com Taça:</strong> Mensageiro emocional, curiosidade afetiva.</p>
      <p><strong>Cisne Pequeno ou Pássaro:</strong> Gentileza, sensibilidade, intuição nascente.</p>
      <p><strong>Água Corrente:</strong> Exploração de sentimentos e comunicação afetiva.</p>`,
  },{
    num: 12,
    name: "Cavaleiro de Copas",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-copas.jpg",
    keywords: ["Cavaleiro", "água", "cores"],
    upright: `
      <p><strong>Cavaleiro Montado com Taça:</strong> Progresso afetivo, busca de romance ou aventura emocional.</p>
      <p><strong>Água ao Redor ou Lago:</strong> Emoções profundas e movimento intuitivo.</p>
      <p><strong>Cores Suaves:</strong> Sensibilidade, nobreza de sentimentos.</p>`,
  },{
    num: 13,
    name: "Rainha de Copas",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-copas.jpg",
    keywords: ["Mulher", "água", "roupas"],
    upright: `
      <p><strong>Mulher Sentada com Taça:</strong> Intuição, empatia, proteção emocional.</p>
      <p><strong>Cisne ou Água Tranquila:</strong> Profundidade emocional e equilíbrio.</p>
      <p><strong>Roupas Elegantes ou Coroa:</strong> Autoridade afetiva, maturidade emocional.</p>`,
  },{
    num: 14,
    name: "Rei de Copas",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-copas.jpg",
    keywords: ["Homem", "água", "peixes"],
    upright: `
      <p><strong>Homem com Taça e Cetro:</strong> Controle emocional, equilíbrio entre razão e sentimento.</p>
      <p><strong>Água e Navio:</strong> Navegação segura pelos sentimentos próprios e alheios.</p>
      <p><strong>Peixe ou Animais Aquáticos:</strong> Abundância, fluidez e sensibilidade madura.</p>`,
  },];
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
  },{
    num: 2,
    name: "Dois de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-ouros.jpg",
    keywords: ["Moedas", "mar", "infinito"],
    upright: `
      <p><strong>Figura Equilibrando Duas Moedas:</strong> Adaptabilidade, equilíbrio entre finanças e emoções.</p>
      <p><strong>Mar Agitado ao Fundo:</strong> Instabilidade controlada, desafios externos.</p>
      <p><strong>Símbolo do Infinito Ligando as Moedas:</strong> Ciclos contínuos de ganho e gasto.</p>`,
  },{
    num: 3,
    name: "Três de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-ouros.jpg",
    keywords: ["Arquitetura", "cadetral", "planos"],
    upright: `
      <p><strong>Construtores e Arquiteto:</strong> Trabalho em equipe, cooperação e talento reconhecido.</p>
      <p><strong>Catedral em Construção:</strong> Desenvolvimento de algo sólido e duradouro.</p>
      <p><strong>Planos e Ferramentas:</strong> Técnica, disciplina e propósito claro.</p>`,
  },{
    num: 4,
    name: "Quatro de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-ouros.jpg",
    keywords: ["Homem", "trono", "moedas"],
    upright: `
      <p><strong>Homem Segurando Moedas Firmemente:</strong> Apego, segurança financeira, medo de perder.</p>
      <p><strong>Trono ou Cidade ao Fundo:</strong> Desejo de estabilidade e controle material.</p>
      <p><strong>Moedas nos Pés e Cabeça:</strong> Foco excessivo no dinheiro ou status.</p>`,
  },{
    num: 5,
    name: "Cinco de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-ouros.jpg",
    keywords: ["Pesooas", "vitral", "neve"],
    upright: `
      <p><strong>Duas Pessoas no Frio:</strong> Dificuldades materiais, sensação de abandono.</p>
      <p><strong>Vitral Iluminado:</strong> Ajuda espiritual ou apoio próximo, mesmo não percebido.</p>
      <p><strong>Neve e Muletas:</strong> Desgaste físico ou emocional ligado à carência.</p>`,
  },{
    num: 6,
    name: "Seis de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-ouros.jpg",
    keywords: ["Homem", "balança", "mendigos"],
    upright: `
      <p><strong>Homem Distribuindo Moedas:</strong> Generosidade, equilíbrio entre dar e receber.</p>
      <p><strong>Balança na Mão:</strong> Justiça, reciprocidade e discernimento no auxílio.</p>
      <p><strong>Mendigos Abaixo:</strong> Relações de poder, caridade e compaixão prática.</p>`,
  },{
    num: 7,
    name: "Sete de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-ouros.jpg",
    keywords: ["Homem", "plantas", "expressão"],
    upright: `
      <p><strong>Homem Observando as Moedas Crescendo:</strong> Paciência, planejamento, resultados a longo prazo.</p>
      <p><strong>Plantas e Videiras:</strong> Trabalho cultivado com cuidado e atenção.</p>
      <p><strong>Expressão Pensativa:</strong> Avaliação de progresso e investimento.</p>`,
  },{
    num: 8,
    name: "Oito de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-ouros.jpg",
    keywords: ["trabalho", "bancada", "moedas"],
    upright: `
      <p><strong>Artesão Talhando Moedas:</strong> Dedicação, aprendizado e aperfeiçoamento contínuo.</p>
      <p><strong>Bancada de Trabalho:</strong> Esforço consciente, domínio técnico.</p>
      <p><strong>Moedas Alinhadas na Parede:</strong> Reconhecimento progressivo e construção de reputação.</p>`,
  },{
    num: 9,
    name: "Nove de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-ouros.jpg",
    keywords: ["Mulher", "falcão", "natureza"],
    upright: `
      <p><strong>Mulher em Jardim com Uvas:</strong> Autossuficiência, prazer pelo próprio sucesso.</p>
      <p><strong>Falcão no Braço:</strong> Controle refinado, sabedoria e nobreza.</p>
      <p><strong>Natureza Abundante:</strong> Conforto, elegância e segurança conquistada.</p>`,
  },{
    num: 10,
    name: "Dez de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-ouros.jpg",
    keywords: ["família", "arco", "brasões"],
    upright: `
      <p><strong>Família Diante do Portão:</strong> Legado, estabilidade e prosperidade transmitida.</p>
      <p><strong>Arco Decorado e Cachorro:</strong> Lealdade, proteção e continuidade.</p>
      <p><strong>Brasões e Castelos:</strong> Realização material plena, tradição.</p>`,
  },{
    num: 11,
    name: "Valete de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-ouros.jpg",
    keywords: ["jovem", "campo", "postura"],
    upright: `
      <p><strong>Jovem Observando a Moeda:</strong> Dedicação ao aprendizado, curiosidade prática.</p>
      <p><strong>Campo Verdejante:</strong> Potencial fértil, início de um novo projeto.</p>
      <p><strong>Postura Atenta:</strong> Concentração, responsabilidade crescente.</p>`,
  },{
    num: 12,
    name: "Cavaleiro de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-ouros.jpg",
    keywords: ["cavaleiro", "cavalo", "campo"],
    upright: `
      <p><strong>Cavaleiro Parado com Moeda na Mão:</strong> Perseverança, rotina, comprometimento.</p>
      <p><strong>Cavalo Estático:</strong> Cautela e paciência antes de agir.</p>
      <p><strong>Campo e Solo Fértil:</strong> Avanço constante, crescimento seguro.</p>`,
  },{
    num: 13,
    name: "Rainha de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-ouros.jpg",
    keywords: ["Mulher", "trono", "vestes"],
    upright: `
      <p><strong>Rainha Segurando Moeda:</strong> Cuidado prático, nutrição material e emocional.</p>
      <p><strong>Trono Cercado por Flores e Coelhos:</strong> Fertilidade, conforto e generosidade.</p>
      <p><strong>Vestes Verdes e Douradas:</strong> Conexão com a Terra e segurança abundante.</p>`,
  },{
    num: 14,
    name: "Rei de Ouros",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-ouros.jpg",
    keywords: ["Homem", "touro", "castelo"],
    upright: `
      <p><strong>Rei Sentado com Moeda e Cetro:</strong> Sucesso material, liderança prática e confiável.</p>
      <p><strong>Touro ou Videira no Trono:</strong> Força, estabilidade e prazer pela vida.</p>
      <p><strong>Castelo e Jardim ao Fundo:</strong> Segurança construída pelo próprio esforço.</p>`,
  },];
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
  },{
    num: 2,
    name: "Dois de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-espadas.jpg",
    keywords: ["Venda", "lua", "cruzamento"],
    upright: `
      <p><strong>Mulher Vendada com Duas Espadas Cruzadas:</strong> Indecisão, equilíbrio precário, negação.</p>
      <p><strong>Lua e Água ao Fundo:</strong> Intuição reprimida, sentimentos ocultos.</p>
      <p><strong>Cruzamento das Espadas:</strong> Conflito interno entre mente e coração.</p>`,
  },{
    num: 3,
    name: "Três de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-espadas.jpg",
    keywords: ["Coração", "chuva", "simetria"],
    upright: `
      <p><strong>Coração Atingido por Três Espadas:</strong> Dor, perda, separação ou decepção emocional.</p>
      <p><strong>Chuva e Céu Cinzento:</strong> Purificação após o sofrimento.</p>
      <p><strong>Simetria na Imagem:</strong> Clareza e aprendizado que vêm da dor.</p>`,
  },{
    num: 4,
    name: "Quatro de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-espadas.jpg",
    keywords: ["Figura", "vitral", "espadas"],
    upright: `
      <p><strong>Figura Deitada em Descanso:</strong> Recuperação, pausa necessária, introspecção.</p>
      <p><strong>Vitral de Igreja:</strong> Proteção espiritual durante o recolhimento.</p>
      <p><strong>Espadas Pendentes:</strong> Problemas em espera, mente em repouso.</p>`,
  },{
    num: 5,
    name: "Cinco de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-espadas.jpg",
    keywords: ["Homem", "céu", "mar"],
    upright: `
      <p><strong>Homem Segurando Espadas com Outros Indo Embora:</strong> Vitória sem honra, tensão e orgulho.</p>
      <p><strong>Céu Cinzento e Vento:</strong> Consequências mentais de um embate.</p>
      <p><strong>Mar ao Fundo:</strong> Reflexão sobre perdas e ganhos.</p>`,
  },{
    num: 6,
    name: "Seis de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-espadas.jpg",
    keywords: ["Pessoas", "água", "espadas"],
    upright: `
      <p><strong>Pessoas Num Barco:</strong> Transição, mudança de ambiente ou mentalidade.</p>
      <p><strong>Água Suave e Horizonte:</strong> Passagem para tempos mais calmos.</p>
      <p><strong>Espadas no Barco:</strong> Experiências e pensamentos levados consigo.</p>`,
  },{
    num: 7,
    name: "Sete de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-espadas.jpg",
    keywords: ["Homem", "acompamete", "olhar"],
    upright: `
      <p><strong>Homem Carregando Espadas:</strong> Astúcia, tática, agir com discrição.</p>
      <p><strong>Acampamento ao Fundo:</strong> Situações que exigem cuidado e sigilo.</p>
      <p><strong>Olhar Para Trás:</strong> Cautela, risco de ser descoberto.</p>`,
  },{
    num: 8,
    name: "Oito de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-espadas.jpg",
    keywords: ["Mulher", "espadas", "água"],
    upright: `
      <p><strong>Mulher Vendada e Amarrada:</strong> Sentimento de aprisionamento, limitação mental.</p>
      <p><strong>Espadas ao Redor:</strong> Barreiras criadas pela própria mente.</p>
      <p><strong>Água nos Pés:</strong> Emoções presentes, mas contidas.</p>`,
  },{
    num: 9,
    name: "Nove de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-espadas.jpg",
    keywords: ["Pessoa", "parede", "cobertor"],
    upright: `
      <p><strong>Pessoa Sentada na Cama:</strong> Ansiedade, culpa, preocupação ou arrependimento.</p>
      <p><strong>Espadas na Parede:</strong> Pensamentos repetitivos e angustiantes.</p>
      <p><strong>Cobertor Bordado:</strong> Proteção emocional, mesmo diante do medo.</p>`,
  },{
    num: 10,
    name: "Dez de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-espadas.jpg",
    keywords: ["Figura", "sol", "mar"],
    upright: `
      <p><strong>Figura Caída com Dez Espadas nas Costas:</strong> Fim doloroso, rendição, liberação de algo.</p>
      <p><strong>Sol Nascendo ao Fundo:</strong> Renascimento, nova consciência após o colapso.</p>
      <p><strong>Mar Calmo:</strong> Aceitação do inevitável e início de cura.</p>`,
  },{
    num: 11,
    name: "Valete de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-espadas.jpg",
    keywords: ["Jovem", "vento", "postura"],
    upright: `
      <p><strong>Jovem com Espada Erguida:</strong> Curiosidade mental, vigilância e energia analítica.</p>
      <p><strong>Vento Forte e Céu Aberto:</strong> Comunicação rápida, novas ideias.</p>
      <p><strong>Postura Atenta:</strong> Alerta e prudência diante de desafios intelectuais.</p>`,
  },{
    num: 12,
    name: "Cavaleiro de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-espadas.jpg",
    keywords: ["Cavaleiro", "nuvens", "cavalo"],
    upright: `
      <p><strong>Cavaleiro Correndo com Espada em Punho:</strong> Ação impetuosa, coragem, tomada de iniciativa.</p>
      <p><strong>Nuvens e Vento:</strong> Movimento rápido e raciocínio afiado.</p>
      <p><strong>Cavalo Branco:</strong> Intenção pura, mas sem reflexão.</p>`,
  },{
    num: 13,
    name: "Rainha de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-espadas.jpg",
    keywords: ["Mulher", "nuvens", "mão"],
    upright: `
      <p><strong>Rainha Sentada com Espada Erguida:</strong> Clareza mental, sinceridade e discernimento.</p>
      <p><strong>Nuvens e Céu Claro:</strong> Sabedoria adquirida pela experiência.</p>
      <p><strong>Mão Estendida:</strong> Abertura racional, mas seletiva.</p>`,
  },{
    num: 14,
    name: "Rei de Espadas",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-espadas.jpg",
    keywords: ["Homem", "céu", "roupas"],
    upright: `
      <p><strong>Rei com Espada Vertical:</strong> Lógica, verdade, poder intelectual e liderança justa.</p>
      <p><strong>Céu Azul e Borboletas no Trono:</strong> Clareza de pensamento e transformação.</p>
      <p><strong>Roupas Azuis e Roxas:</strong> Sabedoria espiritual e racionalidade equilibrada.</p>`,
  },];
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
  },{
    num: 2,
    name: "Dois de Paus",
    img: "https://www.astrolink.com.br/data/tarot/dois-de-paus.jpg",
    keywords: ["Globo", "castelo", "bastões"],
    upright: `
      <p><strong>Homem com Globo nas Mãos:</strong> Planejamento, visão de futuro, controle e ambição.</p>
      <p><strong>Castelo:</strong> Segurança e base sólida para expandir.</p>
      <p><strong>Bastões de Apoio:</strong> Dualidade entre estabilidade e desejo de avanço.</p>`,
  },{
    num: 3,
    name: "Três de Paus",
    img: "https://www.astrolink.com.br/data/tarot/tres-de-paus.jpg",
    keywords: ["Figura", "navios", "bastões"],
    upright: `
      <p><strong>Figura Observando o Horizonte:</strong> Expectativa positiva, progresso, expansão de horizontes.</p>
      <p><strong>Navios:</strong> Resultados chegando, frutos do esforço anterior.</p>
      <p><strong>Bastões Firmes:</strong> Estrutura e visão sustentadas pela confiança.</p>`,
  },{
    num: 4,
    name: "Quatro de Paus",
    img: "https://www.astrolink.com.br/data/tarot/quatro-de-paus.jpg",
    keywords: ["Arco", "castelo", "bastoẽs"],
    upright: `
      <p><strong>Arco de Flores e Pessoas Celebrando:</strong> Harmonia, sucesso e alegria compartilhada.</p>
      <p><strong>Castelo ao Fundo:</strong> Estabilidade e prosperidade alcançada.</p>
      <p><strong>Bastões Erguidos:</strong> Símbolo de união e realização.</p>`,
  },{
    num: 5,
    name: "Cinco de Paus",
    img: "https://www.astrolink.com.br/data/tarot/cinco-de-paus.jpg",
    keywords: ["Jovem", "movimento", "vencedor"],
    upright: `
      <p><strong>Jovens Lutando com Bastões:</strong> Competição saudável, desafios e confronto de ideias.</p>
      <p><strong>Movimento Caótico:</strong> Energia dispersa, mas cheia de potencial criativo.</p>
      <p><strong>Sem Vencedor Claro:</strong> O conflito como aprendizado.</p>`,
  },{
    num: 6,
    name: "Seis de Paus",
    img: "https://www.astrolink.com.br/data/tarot/seis-de-paus.jpg",
    keywords: ["Homem", "multirão", "bastão"],
    upright: `
      <p><strong>Cavaleiro com Coroa de Louros:</strong> Sucesso, reconhecimento público, triunfo merecido.</p>
      <p><strong>Multidão ao Fundo:</strong> Apoio e admiração dos outros.</p>
      <p><strong>Bastão Ornado:</strong> Glória alcançada com mérito e esforço.</p>`,
  },{
    num: 7,
    name: "Sete de Paus",
    img: "https://www.astrolink.com.br/data/tarot/sete-de-paus.jpg",
    keywords: ["Homem", "postura", "terreno"],
    upright: `
      <p><strong>Homem Defendendo-se com um Bastão:</strong> Persistência, resistência diante da pressão.</p>
      <p><strong>Postura Elevada:</strong> Vantagem moral e determinação.</p>
      <p><strong>Terreno Irregular:</strong> Luta por manter o que foi conquistado.</p>`,
  },{
    num: 8,
    name: "Oito de Paus",
    img: "https://www.astrolink.com.br/data/tarot/oito-de-paus.jpg",
    keywords: ["Bastões", "céu", "passagem"],
    upright: `
      <p><strong>Bastões Voando pelo Ar:</strong> Ações rápidas, mensagens, progresso acelerado.</p>
      <p><strong>Céu Claro:</strong> Ausência de obstáculos — fluxo natural das coisas.</p>
      <p><strong>Paisagem Aberta:</strong> Liberdade e movimento após um período de espera.</p>`,
  },{
    num: 9,
    name: "Nove de Paus",
    img: "https://www.astrolink.com.br/data/tarot/nove-de-paus.jpg",
    keywords: ["Homem", "Bastões", "olhar"],
    upright: `
      <p><strong>Homem Ferido Segurando um Bastão:</strong> Perseverança, resistência mesmo após dificuldades.</p>
      <p><strong>Oito Bastões Atrás:</strong> Proteção das conquistas e vigilância constante.</p>
      <p><strong>Olhar Atento:</strong> Cautela, mas também força e experiência.</p>`,
  },{
    num: 10,
    name: "Dez de Paus",
    img: "https://www.astrolink.com.br/data/tarot/dez-de-paus.jpg",
    keywords: ["Homem", "cidade", "postura"],
    upright: `
      <p><strong>Homem Carregando Dez Bastões:</strong> Sobrecarga, exaustão, final de um ciclo de trabalho intenso.</p>
      <p><strong>Cidade ao Fundo:</strong> O objetivo está próximo, mas exige esforço final.</p>
      <p><strong>Postura Curvada:</strong> Fardo necessário para a conclusão.</p>`,
  },{
    num: 11,
    name: "Valete de Paus",
    img: "https://www.astrolink.com.br/data/tarot/valete-de-paus.jpg",
    keywords: ["Jovem", "paisagem", "postura"],
    upright: `
      <p><strong>Jovem com Bastão em Pé:</strong> Novas ideias, entusiasmo e curiosidade.</p>
      <p><strong>Paisagem Desértica:</strong> Começo simples, mas cheio de potencial.</p>
      <p><strong>Postura Confiante:</strong> Prontidão para agir e aprender.</p>`,
  },{
    num: 12,
    name: "Cavaleiro de Paus",
    img: "https://www.astrolink.com.br/data/tarot/cavaleiro-de-paus.jpg",
    keywords: ["Cavaleiro", "chamas", "cavalo"],
    upright: `
      <p><strong>Cavaleiro Galopando com Bastão Erguido:</strong> Movimento, coragem, desejo de explorar.</p>
      <p><strong>Chamas e Areia:</strong> Energia ardente e impetuosa.</p>
      <p><strong>Cavalo Vermelho:</strong> Fogo interior e busca por propósito.</p>`,
  },{
    num: 13,
    name: "Rainha de Paus",
    img: "https://www.astrolink.com.br/data/tarot/rainha-de-paus.jpg",
    keywords: ["Mulher", "girassóis", "postura"],
    upright: `
      <p><strong>Rainha com Gato Preto aos Pés:</strong> Confiança, magnetismo, poder pessoal e mistério.</p>
      <p><strong>Girassóis e Bastão Florido:</strong> Calor, generosidade e criatividade florescente.</p>
      <p><strong>Postura Solar:</strong> Equilíbrio entre ação e intuição.</p>`,
  },{
    num: 14,
    name: "Rei de Paus",
    img: "https://www.astrolink.com.br/data/tarot/rei-de-paus.jpg",
    keywords: ["Homem", "manto", "salamandra"],
    upright: `
      <p><strong>Rei com Bastão e Salamandra:</strong> Liderança visionária, domínio e coragem criativa.</p>
      <p><strong>Manto Laranja e Trono Decorado:</strong> Energia, paixão e confiança.</p>
      <p><strong>Salamandra que Morde a Cauda:</strong> Domínio sobre o fogo interior e os ciclos de criação.</p>`,
  },];

const cardsS = document.getElementById("cards-s");
const buttonsS = document.querySelectorAll(".suit-btn");

const backdropS = document.getElementById("backdrop-s");
const modalImgS = document.getElementById("modalImg-s");
const modalNumS = document.getElementById("modalNum-s");
const modalTitleS = document.getElementById("modalTitle-s");
const modalKeywordsS = document.getElementById("modalKeywords-s");
const modalUprightS = document.getElementById("modalUpright-s");
const btnCloseS = document.getElementById("btnClose-s");

const simbologia = [...copasS, ...ourosS, ...espadasS, ...pausS];

//FUNÇÃO: Renderizar Simbologias
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
//FUNÇÃO: Abrir modal
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
//FECHAR MODAL
btnCloseS.addEventListener("click", () => (backdropS.style.display = "none"));
backdropS.addEventListener("click", (e) => {
  if (e.target === backdropS) backdropS.style.display = "none";
});
//FILTRAR POR NAIPE
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
//MOSTRA TODOS AO CARREGAR
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
  },{
    num: 2,
    name: "Dois de Copas",
    keywords: ["parceria", "amor", "harmonia"],
    upright: "União, parceria equilibrada, atração emocional e sintonia.",
    reversed: "Desentendimentos, desequilíbrio em relações, afastamento.",
  },{
    num: 3,
    name: "Três de Copas",
    keywords: ["celebração", "amizade", "alegria"],
    upright: "Festividades, apoio de amigos, momentos felizes compartilhados.",
    reversed: "Isolamento, desentendimentos em grupo, superficialidade.",
  },{
    num: 4,
    name: "Quatro de Copas",
    keywords: ["reflexão", "tédio", "insatisfação"],
    upright:
      "Momento de introspecção, avaliação emocional, necessidade de foco interno.",
    reversed: "Abertura para novas oportunidades, despertar emocional, ação.",
  },{
    num: 5,
    name: "Cinco de Copas",
    keywords: ["perda", "tristeza", "luto"],
    upright: "Decepção emocional, arrependimento, foco no que foi perdido.",
    reversed: "Aceitação, aprendizado com perdas, seguir em frente.",
  },{
    num: 6,
    name: "Seis de Copas",
    keywords: ["memórias", "nostalgia", "infância"],
    upright: "Recordações afetivas, nostalgia, reencontros, ternura.",
    reversed: "Apego ao passado, dificuldade de avançar, ilusões nostálgicas.",
  },{
    num: 7,
    name: "Sete de Copas",
    keywords: ["opções", "ilusão", "fantasia"],
    upright: "Várias escolhas emocionais, sonhos, necessidade de clareza.",
    reversed: "Confusão, decisões erradas, ilusões desfeitas.",
  },{
    num: 8,
    name: "Oito de Copas",
    keywords: ["abandono", "desapego", "busca interior"],
    upright:
      "Deixar para trás relações ou situações que não servem mais, busca por algo maior.",
    reversed: "Medo de mudança, apego, dificuldade de seguir em frente.",
  },{
    num: 9,
    name: "Nove de Copas",
    keywords: ["realização", "satisfação", "bem-estar"],
    upright: "Desejos realizados, contentamento emocional, prazer.",
    reversed: "Falsas satisfações, egoísmo, insatisfação temporária.",
  },{
    num: 10,
    name: "Dez de Copas",
    keywords: ["felicidade", "harmonia familiar", "pleno amor"],
    upright: "Alegria familiar, paz emocional, relacionamentos duradouros.",
    reversed:
      "Desarmonia familiar, expectativas não cumpridas, conflitos emocionais.",
  },{
    num: 11,
    name: "Valete de Copas",
    keywords: ["mensageiro", "curiosidade", "emoção"],
    upright:
      "Mensagem afetiva, começo de relacionamentos, curiosidade emocional.",
    reversed:
      "Imaturidade emocional, imprevistos nos sentimentos, ingenuidade.",
  },{
    num: 12,
    name: "Cavaleiro de Copas",
    keywords: ["romance", "proposta", "paixão"],
    upright: "Movimento emocional, busca de romance ou ideal emocional.",
    reversed: "Exagero emocional, idealização, desilusões amorosas.",
  },{
    num: 13,
    name: "Rainha de Copas",
    keywords: ["intuição", "empatia", "cuidado"],
    upright: "Compaixão, sensibilidade, domínio interno das emoções.",
    reversed:
      "Dependência emocional, excesso de sensibilidade, manipulação emocional.",
  },{
    num: 14,
    name: "Rei de Copas",
    keywords: ["equilíbrio", "autoridade emocional", "sabedoria"],
    upright:
      "Controle emocional, equilíbrio entre razão e sentimento, liderança afetiva.",
    reversed: "Instabilidade emocional, manipulação, descontrole afetivo.",
  },];
const ouros = [
  {
    num: 1,
    name: "Ás de Ouros",
    keywords: ["novo começo", "prosperidade", "oportunidade"],
    upright: "Início de projeto material, oportunidade financeira ou prática.",
    reversed: "Perda de oportunidade, instabilidade financeira, atraso.",
  },{
    num: 2,
    name: "Dois de Ouros",
    keywords: ["equilíbrio", "flexibilidade", "adaptabilidade"],
    upright:
      "Gerenciar múltiplas tarefas, equilíbrio entre recursos, flexibilidade.",
    reversed:
      "Desorganização, desequilíbrio financeiro ou material, sobrecarga.",
  },{
    num: 3,
    name: "Três de Ouros",
    keywords: ["colaboração", "trabalho em equipe", "habilidade"],
    upright:
      "Sucesso através da colaboração, reconhecimento de habilidades, cooperação.",
    reversed:
      "Falta de cooperação, subestimação de talentos, conflitos no trabalho.",
  },{
    num: 4,
    name: "Quatro de Ouros",
    keywords: ["estabilidade", "segurança", "retenção"],
    upright:
      "Segurança financeira, estabilidade material, preservação de recursos.",
    reversed: "Apego excessivo, avareza, medo de perder.",
  },{
    num: 5,
    name: "Cinco de Ouros",
    keywords: ["perda", "dificuldade", "escassez"],
    upright:
      "Período de dificuldades financeiras ou materiais, sensação de exclusão.",
    reversed: "Recuperação, apoio, superação de dificuldades.",
  },{
    num: 6,
    name: "Seis de Ouros",
    keywords: ["generosidade", "equilíbrio", "ajuda"],
    upright: "Doação, troca justa, equilíbrio entre dar e receber.",
    reversed: "Desequilíbrio, exploração, egoísmo ou dependência.",
  },{
    num: 7,
    name: "Sete de Ouros",
    keywords: ["paciente", "trabalho árduo", "avaliação"],
    upright: "Reflexão sobre resultados, paciência, avaliação de esforços.",
    reversed: "Frustração, falta de progresso, impaciência.",
  },{
    num: 8,
    name: "Oito de Ouros",
    keywords: ["aprendizado", "aperfeiçoamento", "dedicação"],
    upright: "Aperfeiçoamento de habilidades, dedicação e prática constante.",
    reversed: "Falta de foco, trabalho mal feito, desmotivação.",
  },{
    num: 9,
    name: "Nove de Ouros",
    keywords: ["independência", "conquista", "autossuficiência"],
    upright: "Realização pessoal e financeira, independência, conforto.",
    reversed: "Vaidade, dependência, excesso de materialismo.",
  },{
    num: 10,
    name: "Dez de Ouros",
    keywords: ["legado", "prosperidade", "família"],
    upright:
      "Segurança familiar, estabilidade duradoura, prosperidade compartilhada.",
    reversed: "Perdas materiais, conflitos familiares, instabilidade.",
  },{
    num: 11,
    name: "Valete de Ouros",
    keywords: ["mensageiro", "aprendizado", "novas oportunidades"],
    upright: "Aprendizado prático, início de estudos ou projetos materiais.",
    reversed: "Imaturidade, distração, negligência financeira.",
  },{
    num: 12,
    name: "Cavaleiro de Ouros",
    keywords: ["trabalho", "responsabilidade", "perseverança"],
    upright: "Trabalho constante, confiabilidade, dedicação.",
    reversed: "Rigidez, teimosia, lentidão excessiva.",
  },{
    num: 13,
    name: "Rainha de Ouros",
    keywords: ["abundância", "cuidado", "praticidade"],
    upright:
      "Generosidade prática, estabilidade, habilidade em recursos e finanças.",
    reversed: "Excessivo apego material, egoísmo, insegurança financeira.",
  },{
    num: 14,
    name: "Rei de Ouros",
    keywords: ["autoridade", "sucesso", "domínio material"],
    upright: "Liderança confiável, sucesso financeiro, sabedoria prática.",
    reversed: "Ganância, abuso de poder, falha na gestão de recursos.",
  },];
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
  },{
    num: 2,
    name: "Dois de Paus",
    keywords: ["planejamento", "decisão", "direção"],
    upright: "Escolhas estratégicas, visão futura, planejamento.",
    reversed: "Indecisão, falta de direção, atraso em planos.",
  },{
    num: 3,
    name: "Três de Paus",
    keywords: ["expansão", "oportunidade", "viagem"],
    upright: "Crescimento, exploração de novos caminhos, visão ampla.",
    reversed: "Atrasos, expectativas frustradas, obstáculos externos.",
  },{
    num: 4,
    name: "Quatro de Paus",
    keywords: ["estabilidade", "celebração", "sucesso"],
    upright: "Harmonia, conquistas compartilhadas, celebrações.",
    reversed: "Instabilidade, conflitos familiares, atraso em comemorações.",
  },{
    num: 5,
    name: "Cinco de Paus",
    keywords: ["competição", "conflito", "desafio"],
    upright: "Competição saudável, desafios estimulantes, disputa de ideias.",
    reversed: "Conflitos desnecessários, rivalidade exagerada, tensão.",
  },{
    num: 6,
    name: "Seis de Paus",
    keywords: ["vitória", "reconhecimento", "sucesso"],
    upright: "Reconhecimento público, conquistas celebradas, êxito.",
    reversed: "Fracasso momentâneo, falta de reconhecimento, desânimo.",
  },{
    num: 7,
    name: "Sete de Paus",
    keywords: ["defesa", "coragem", "posição"],
    upright:
      "Defender suas posições, perseverança, coragem diante da oposição.",
    reversed: "Falta de confiança, insegurança, rendição.",
  },{
    num: 8,
    name: "Oito de Paus",
    keywords: ["movimento", "rapidez", "comunicação"],
    upright: "Progresso rápido, ação decisiva, comunicação eficaz.",
    reversed: "Atrasos, obstáculos, frustração em planos.",
  },{
    num: 9,
    name: "Nove de Paus",
    keywords: ["resistência", "preparação", "persistência"],
    upright: "Defesa, experiência adquirida, resistência a desafios.",
    reversed: "Cansaço, fraqueza, falta de preparação.",
  },{
    num: 10,
    name: "Dez de Paus",
    keywords: ["peso", "responsabilidade", "carga"],
    upright: "Sobrecarga, responsabilidades acumuladas, esforço intenso.",
    reversed: "Alívio, delegação, diminuição de pressão.",
  },{
    num: 11,
    name: "Valete de Paus",
    keywords: ["mensageiro", "curiosidade", "aventura"],
    upright: "Energia jovem, entusiasmo, exploração de novos projetos.",
    reversed: "Impulsividade, inexperiência, dispersão.",
  },{
    num: 12,
    name: "Cavaleiro de Paus",
    keywords: ["ação", "coragem", "viagem"],
    upright: "Movimento rápido, busca de objetivos, paixão pela ação.",
    reversed: "Impulsividade, imprudência, precipitação.",
  },{
    num: 13,
    name: "Rainha de Paus",
    keywords: ["liderança", "criatividade", "confiança"],
    upright: "Carisma, energia positiva, domínio da criatividade.",
    reversed: "Controle excessivo, arrogância, impaciência.",
  },{
    num: 14,
    name: "Rei de Paus",
    keywords: ["autoridade", "iniciativa", "visão"],
    upright: "Liderança inspiradora, visão estratégica, coragem.",
    reversed: "Tirania, arrogância, falta de visão clara.",
  },];

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
const btnToggleReversedModal = document.getElementById("btnToggleReversedModal");
const toggleReversed = document.getElementById("toggleReversed");
const reversedStateEl = document.getElementById("reversedState");

// checagem mínima
if (!cardsEl) {
  console.warn(
    'maior.js: elemento #cards não encontrado. Adicione <div id="cards" class="grid"></div> ao HTML.'
  );
} else {
  
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

  if (btnClose)
    btnClose.addEventListener("click", () => {
      if (backdrop) backdrop.style.display = "none";
    });

  if (backdrop)
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) backdrop.style.display = "none";
    });

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

const copasA = [
  {
    numero: 1,
    nome: "Ás de Copas",
    areas: {
      amor: "Novo amor, sentimentos sinceros e intensos",
      carreira: "Novos começos com entusiasmo emocional",
      financas: "Ganhos que trazem satisfação pessoal",
      saude: "Equilíbrio emocional e vitalidade",
      espiritualidade: "Abertura do coração, conexão divina",
      crescimento: "Aceitar novas emoções e oportunidades",
      sorte: "Boas notícias e energia positiva",
      desafios: "Medo de se abrir emocionalmente",},
    conselhos: [
      "Confie nos novos começos emocionais.",
      "Expresse seus sentimentos livremente.",
      "Deixe o amor fluir naturalmente.",
    ]},{
    numero: 2,
    nome: "Dois de Copas",
    areas: {
      amor: "União, reciprocidade e harmonia no amor",
      carreira: "Parcerias equilibradas e produtivas",
      financas: "Acordos financeiros positivos",
      saude: "Bem-estar através de boas relações",
      espiritualidade: "Conexão de alma e empatia profunda",
      crescimento: "Aprender a se abrir para o outro",
      sorte: "Sorte nas parcerias e relacionamentos",
      desafios: "Dependência emocional ou desequilíbrio",},
    conselhos: [
      "Busque harmonia nas relações.",
      "Valorize o apoio mútuo.",
      "Comunique-se com sinceridade.",
    ]},{
    numero: 3,
    nome: "Três de Copas",
    areas: {
      amor: "Celebrações, reencontros e alegria compartilhada",
      carreira: "Trabalho em equipe, ambiente agradável",
      financas: "Ganhos compartilhados, bônus ou celebrações",
      saude: "Recuperação com apoio de amigos",
      espiritualidade: "Gratidão e conexão com a alegria divina",
      crescimento: "Aprender a celebrar as vitórias",
      sorte: "Boa sorte em eventos e encontros sociais",
      desafios: "Excessos, dispersão emocional",},
    conselhos: [
      "Aproveite os bons momentos com quem ama.",
      "Celebre pequenas conquistas.",
      "A alegria atrai abundância.",
    ]},{
    numero: 4,
    nome: "Quatro de Copas",
    areas: {
      amor: "Desinteresse temporário ou tédio emocional",
      carreira: "Falta de motivação no trabalho",
      financas: "Estagnação financeira ou descontentamento",
      saude: "Apatia e desânimo emocional",
      espiritualidade: "Necessidade de reconexão interior",
      crescimento: "Reconhecer o valor do que já se tem",
      sorte: "Oportunidades estão próximas, olhe com atenção",
      desafios: "Negatividade e indiferença emocional",},
    conselhos: [
      "Evite se fechar ao novo.",
      "Valorize o que já conquistou.",
      "Permita-se sentir novamente.",
    ]},{
    numero: 5,
    nome: "Cinco de Copas",
    areas: {
      amor: "Decepção ou arrependimento, mas nem tudo está perdido",
      carreira: "Fracassos temporários, aprendizado emocional",
      financas: "Perdas financeiras, necessidade de resiliência",
      saude: "Cansaço emocional ou tristeza",
      espiritualidade: "Aceitar o passado e seguir em frente",
      crescimento: "Aprender com as decepções e curar feridas",
      sorte: "Mudanças após uma fase difícil",
      desafios: "Ficar preso ao passado e à dor", },
    conselhos: [
      "Olhe para o que ainda resta de positivo.",
      "Aceite e transforme a dor em sabedoria.",
      "Recomece com fé e compaixão.",
    ]},{
    numero: 6,
    nome: "Seis de Copas",
    areas: {
      amor: "Nostalgia, reencontros ou amor do passado",
      carreira: "Projetos ligados a lembranças ou causas afetivas",
      financas: "Ajuda de pessoas conhecidas, heranças ou apoio",
      saude: "Emoções equilibradas e conforto emocional",
      espiritualidade: "Reconciliação e perdão",
      crescimento: "Valorizar as origens e memórias afetivas",
      sorte: "Boa sorte vinda do passado",
      desafios: "Viver preso a lembranças antigas",},
    conselhos: [
      "Reviva o passado com carinho, mas siga em frente.",
      "Reconecte-se com quem te faz bem.",
      "Valorize as boas lembranças sem se prender nelas.",
    ]},{
    numero: 7,
    nome: "Sete de Copas",
    areas: {
      amor: "Muitas opções ou ilusões amorosas",
      carreira: "Sonhos e planos ainda indefinidos",
      financas: "Cuidado com ilusões financeiras",
      saude: "Atenção a exageros e distrações",
      espiritualidade: "Clareza mental antes de escolher o caminho",
      crescimento: "Discernir entre sonho e realidade",
      sorte: "Sorte vem com foco e realismo",
      desafios: "Confusão, fantasias e falta de direção",},
    conselhos: [
      "Escolha com o coração e com a razão.",
      "Evite ilusões e mantenha o foco.",
      "Nem tudo que brilha é ouro.",
    ]},{
    numero: 8,
    nome: "Oito de Copas",
    areas: {
      amor: "Despedida, fim de ciclo ou afastamento necessário",
      carreira: "Mudança de rumo por insatisfação emocional",
      financas: "Deixar para trás o que não traz realização",
      saude: "Buscar equilíbrio emocional e descanso",
      espiritualidade: "Caminho de autodescoberta e evolução",
      crescimento: "Aprender a soltar o que já cumpriu seu papel",
      sorte: "Boas mudanças após o desapego",
      desafios: "Dificuldade em se desapegar", },
    conselhos: [
      "Siga o que seu coração pede, mesmo que doa.",
      "Encerrar ciclos é um ato de coragem.",
      "O que vem a seguir é mais alinhado à sua alma.",
    ]},{
    numero: 9,
    nome: "Nove de Copas",
    areas: {
      amor: "Satisfação emocional, prazer e harmonia",
      carreira: "Reconhecimento e realização pessoal",
      financas: "Abundância e prosperidade emocional",
      saude: "Bem-estar e equilíbrio geral",
      espiritualidade: "Gratidão e conexão com o prazer de viver",
      crescimento: "Aprender a valorizar as conquistas",
      sorte: "Momento de boa sorte e realizações",
      desafios: "Excesso de conforto ou vaidade",},
    conselhos: [
      "Aproveite o momento presente.",
      "Seja grato pelo que já conquistou.",
      "Compartilhe sua alegria com os outros.",
    ]},{
    numero: 10,
    nome: "Dez de Copas",
    areas: {
      amor: "Relacionamento pleno, união familiar e felicidade",
      carreira: "Sucesso coletivo e ambiente harmonioso",
      financas: "Estabilidade financeira e emocional",
      saude: "Bem-estar emocional e vitalidade equilibrada",
      espiritualidade: "Gratidão pela plenitude da vida",
      crescimento: "Realização através do amor e união",
      sorte: "Fase de plenitude e contentamento",
      desafios: "Manter o equilíbrio e evitar idealizações",},
    conselhos: [
      "Aprecie a harmonia que conquistou.",
      "Cuide das relações que sustentam sua felicidade.",
      "Compartilhe amor e generosidade.",
    ]},{
    numero: 11,
    nome: "Pajem de Copas",
    areas: {
      amor: "Novas paixões, mensagens amorosas, sensibilidade",
      carreira: "Projetos criativos em fase inicial",
      financas: "Pequenos ganhos ou oportunidades inesperadas",
      saude: "Cuide das emoções, sensibilidade aflorada",
      espiritualidade: "Inspiração e abertura do coração",
      crescimento: "Aprender com as emoções e a empatia",
      sorte: "Boas notícias vindas do afeto",
      desafios: "Imaturidade emocional ou ilusões românticas",},
    conselhos: [
      "Mantenha o coração aberto e curioso.",
      "Aprenda com suas emoções.",
      "Deixe a sensibilidade guiar suas ações.",
    ]},{
    numero: 12,
    nome: "Cavaleiro de Copas",
    areas: {
      amor: "Romance, declarações e conquistas afetivas",
      carreira: "Trabalhos que envolvem criatividade e emoção",
      financas: "Propostas financeiras que exigem sensibilidade",
      saude: "Equilíbrio entre corpo e emoção",
      espiritualidade: "Busca por propósito através do amor",
      crescimento: "Seguir o coração com coragem",
      sorte: "Boas oportunidades guiadas pela intuição",
      desafios: "Idealismo excessivo ou fuga da realidade",},
    conselhos: [
      "Siga o que te inspira emocionalmente.",
      "Expresse seus sentimentos com coragem.",
      "Use o encanto de forma autêntica.",
    ]},{
    numero: 13,
    nome: "Rainha de Copas",
    areas: {
      amor: "Amor profundo, empatia e carinho genuíno",
      carreira: "Trabalhos ligados ao cuidado e à arte",
      financas: "Prosperidade por sensibilidade e intuição",
      saude: "Boa energia emocional, mas evite absorver demais",
      espiritualidade: "Alta conexão intuitiva e emocional",
      crescimento: "Aprender a equilibrar emoção e razão",
      sorte: "Proteção e intuição favorecidas",
      desafios: "Sensibilidade excessiva e instabilidade emocional",
    },
    conselhos: [
      "Cuide de si com o mesmo amor que dá aos outros.",
      "Confie na sua intuição.",
      "Use a empatia como força, não fraqueza.",
    ],
  },{
    numero: 14,
    nome: "Rei de Copas",
    areas: {
      amor: "Relacionamento maduro e equilibrado emocionalmente",
      carreira: "Liderança empática e sábia",
      financas: "Estabilidade financeira com sensatez",
      saude: "Equilíbrio emocional e mental",
      espiritualidade: "Sabedoria espiritual e compaixão",
      crescimento: "Domínio das emoções e maturidade afetiva",
      sorte: "Proteção emocional e estabilidade",
      desafios: "Reprimir emoções ou manipular sentimentos",},
    conselhos: [
      "Aja com compaixão e equilíbrio.",
      "Use sua sensibilidade como guia.",
      "Mantenha o controle emocional diante dos desafios.",
    ]}];

const ourosA = [
  {
    numero: 1,
    nome: "Ás de Ouros",
    areas: {
      amor: "Novos começos afetivos com estabilidade",
      carreira: "Oportunidades materiais e profissionais",
      financas: "Início de ganhos ou investimentos",
      saude: "Vitalidade e bem-estar",
      espiritualidade: "Conexão prática com a realidade",
      crescimento: "Plantar bases sólidas",
      sorte: "Sorte em assuntos financeiros",
      desafios: "Foco exagerado em aspectos materiais"},
    conselhos: [
      "Aproveite oportunidades de crescimento.",
      "Valorize segurança e planejamento.",
      "Seja paciente com resultados."
    ]},{
    numero: 2,
    nome: "Dois de Ouros",
    areas: {
      amor: "Equilíbrio em relacionamentos",
      carreira: "Gerenciar múltiplas responsabilidades",
      financas: "Administração de recursos",
      saude: "Equilibrar corpo e mente",
      espiritualidade: "Flexibilidade e adaptação",
      crescimento: "Aprender a lidar com mudanças",
      sorte: "Oportunidades com equilíbrio",
      desafios: "Dificuldade em manter estabilidade"},
    conselhos: [
      "Mantenha equilíbrio em todas áreas.",
      "Adapte-se às mudanças.",
      "Não sobrecarregue a si mesmo."
    ]},{
    numero: 3,
    nome: "Três de Ouros",
    areas: {
      amor: "Relacionamentos colaborativos",
      carreira: "Trabalho em equipe e reconhecimento",
      financas: "Ganhos através da cooperação",
      saude: "Saúde beneficiada por esforço conjunto",
      espiritualidade: "Aprender com mestres e experiências",
      crescimento: "Valorizar habilidades e talentos",
      sorte: "Oportunidades por esforço e cooperação",
      desafios: "Falta de reconhecimento ou dedicação"},
    conselhos: [
      "Valorize parcerias e colaborações.",
      "Aprimore habilidades.",
      "Trabalhe com dedicação."
    ]},{
    numero: 4,
    nome: "Quatro de Ouros",
    areas: {
      amor: "Estabilidade afetiva, mas possessividade",
      carreira: "Segurança profissional e financeira",
      financas: "Guardar recursos com cautela",
      saude: "Cuidado para não se fechar emocionalmente",
      espiritualidade: "Valorizar o que se tem",
      crescimento: "Aprender a equilibrar apego e liberdade",
      sorte: "Oportunidades com prudência",
      desafios: "Apego excessivo"},
    conselhos: [
      "Não se apegue excessivamente.",
      "Valorize conquistas sem rigidez.",
      "Compartilhe com consciência."
    ]},{
    numero: 5,
    nome: "Cinco de Ouros",
    areas: {
      amor: "Dificuldades ou perdas afetivas",
      carreira: "Desafios financeiros ou de status",
      financas: "Perdas ou restrições temporárias",
      saude: "Cuidado com fragilidade física ou emocional",
      espiritualidade: "Aprender resiliência",
      crescimento: "Aprender a lidar com perdas",
      sorte: "Oportunidades surgem após esforço",
      desafios: "Escassez ou sensação de exclusão"
    },
    conselhos: [
      "Mantenha esperança diante das dificuldades.",
      "Aprenda com limitações temporárias.",
      "Busque apoio quando necessário."
    ]},{
    numero: 6,
    nome: "Seis de Ouros",
    areas: {
      amor: "Relacionamentos equilibrados e generosos",
      carreira: "Reconhecimento e recompensas",
      financas: "Troca justa de recursos",
      saude: "Bem-estar equilibrado",
      espiritualidade: "Aprender a dar e receber",
      crescimento: "Generosidade e gratidão",
      sorte: "Oportunidades através de boas ações",
      desafios: "Desequilíbrio na doação ou recebimento"},
    conselhos: [
      "Pratique generosidade e gratidão.",
      "Equilibre dar e receber.",
      "Reconheça conquistas justas."
    ]},{
    numero: 7,
    nome: "Sete de Ouros",
    areas: {
      amor: "Relacionamentos em avaliação",
      carreira: "Planejamento a longo prazo",
      financas: "Resultados graduais de investimentos",
      saude: "Cuidado contínuo com hábitos",
      espiritualidade: "Reflexão sobre crescimento",
      crescimento: "Avaliar progresso antes de avançar",
      sorte: "Sorte através de paciência",
      desafios: "Impaciência ou pressa"},
    conselhos: [
      "Tenha paciência com resultados.",
      "Avalie esforços e progressos.",
      "Planeje antes de agir."
    ]},{
    numero: 8,
    nome: "Oito de Ouros",
    areas: {
      amor: "Dedicação ao relacionamento",
      carreira: "Aprimoramento e trabalho árduo",
      financas: "Crescimento por esforço contínuo",
      saude: "Disciplina em hábitos saudáveis",
      espiritualidade: "Aprender com prática e experiência",
      crescimento: "Foco em habilidades e aperfeiçoamento",
      sorte: "Oportunidades através da dedicação",
      desafios: "Perfeccionismo ou excesso de esforço"},
    conselhos: [
      "Dedique-se com disciplina.",
      "Aprimore habilidades constantemente.",
      "Seja paciente com resultados."
    ]},{
    numero: 9,
    nome: "Nove de Ouros",
    areas: {
      amor: "Relacionamentos maduros e estáveis",
      carreira: "Sucesso e reconhecimento profissional",
      financas: "Prosperidade e segurança financeira",
      saude: "Bem-estar e vitalidade",
      espiritualidade: "Apreciar conquistas e abundância",
      crescimento: "Aprender a valorizar conquistas",
      sorte: "Boas oportunidades através de esforço",
      desafios: "Vaidade ou complacência"},
    conselhos: [
      "Celebre conquistas pessoais.",
      "Valorize independência e estabilidade.",
      "Compartilhe sucesso de forma consciente."
    ]},{
    numero: 10,
    nome: "Dez de Ouros",
    areas: {
      amor: "Relacionamentos familiares e duradouros",
      carreira: "Estabilidade e legado profissional",
      financas: "Segurança financeira sólida",
      saude: "Bem-estar completo",
      espiritualidade: "Conexão com tradições e herança",
      crescimento: "Aprender sobre estabilidade e continuidade",
      sorte: "Oportunidades em projetos duradouros",
      desafios: "Complacência ou excesso de apego"},
    conselhos: [
      "Valorize estabilidade e família.",
      "Planeje a longo prazo.",
      "Mantenha consciência sobre herança e legado."
    ]},{
    numero: 11,
    nome: "Pajem de Ouros",
    areas: {
      amor: "Novos interesses afetivos",
      carreira: "Aprendizado e curiosidade profissional",
      financas: "Novas oportunidades de ganho",
      saude: "Energia crescente",
      espiritualidade: "Exploração e aprendizado",
      crescimento: "Aprender com iniciativa",
      sorte: "Boas notícias e oportunidades",
      desafios: "Inexperiência ou distração"},
    conselhos: [
      "Seja curioso e aberto a aprender.",
      "Aproveite novas oportunidades.",
      "Mantenha foco no desenvolvimento."
    ]},{
    numero: 12,
    nome: "Cavaleiro de Ouros",
    areas: {
      amor: "Relacionamentos confiáveis e consistentes",
      carreira: "Trabalho constante e produtivo",
      financas: "Ganhos seguros e planejamento",
      saude: "Rotina equilibrada",
      espiritualidade: "Praticidade e perseverança",
      crescimento: "Aprender com disciplina e paciência",
      sorte: "Sorte com esforço consistente",
      desafios: "Rigidez ou lentidão"},
    conselhos: [
      "Seja persistente e confiável.",
      "Planeje com disciplina.",
      "Valorize consistência."
    ]},{
    numero: 13,
    nome: "Rainha de Ouros",
    areas: {
      amor: "Afeto estável e cuidado mútuo",
      carreira: "Habilidade para gerir e prosperar",
      financas: "Prosperidade e administração sensata",
      saude: "Bem-estar e equilíbrio",
      espiritualidade: "Conexão prática com a vida",
      crescimento: "Aprender a nutrir e organizar",
      sorte: "Sorte em empreendimentos seguros",
      desafios: "Excesso de proteção ou materialismo"},
    conselhos: [
      "Cuide de si e dos outros.",
      "Use recursos com sabedoria.",
      "Valorize estabilidade e prosperidade."
    ]},{
    numero: 14,
    nome: "Rei de Ouros",
    areas: {
      amor: "Relacionamentos maduros e seguros",
      carreira: "Liderança estável e próspera",
      financas: "Gestão financeira sábia",
      saude: "Equilíbrio e vitalidade",
      espiritualidade: "Sabedoria prática",
      crescimento: "Aprender a liderar com responsabilidade",
      sorte: "Sorte com decisões acertadas",
      desafios: "Apego excessivo ou rigidez"},
    conselhos: [
      "Lidere com responsabilidade.",
      "Use sabedoria em decisões financeiras.",
      "Mantenha equilíbrio em todas áreas."
    ]}];


const espadasA = [
  {
    numero: 1,
    nome: "Ás de Espadas",
    areas: {
      amor: "Clareza nos sentimentos",
      carreira: "Novas ideias e oportunidades",
      financas: "Decisões financeiras importantes",
      saude: "Mente alerta e foco",
      espiritualidade: "Compreensão intelectual",
      crescimento: "Início de soluções",
      sorte: "Oportunidades mentais",
      desafios: "Cortar ilusões"},
    conselhos: [
      "Seja claro nas decisões.",
      "Use mente e lógica.",
      "Encare verdades."
    ]},{
    numero: 2,
    nome: "Dois de Espadas",
    areas: {
      amor: "Dilemas afetivos",
      carreira: "Escolhas difíceis",
      financas: "Decisões equilibradas necessárias",
      saude: "Conflito interno",
      espiritualidade: "Equilibrar mente e emoção",
      crescimento: "Aprender a decidir",
      sorte: "Sorte se ponderar",
      desafios: "Indecisão"
    },
    conselhos: [
      "Pese os prós e contras.",
      "Evite ignorar decisões importantes.",
      "Busque equilíbrio."
    ]},{
    numero: 3,
    nome: "Três de Espadas",
    areas: {
      amor: "Decepção ou separação",
      carreira: "Conflitos e desapontamentos",
      financas: "Perdas temporárias",
      saude: "Estresse emocional",
      espiritualidade: "Aceitar a dor",
      crescimento: "Aprender com frustrações",
      sorte: "Aprender antes de avançar",
      desafios: "Coração partido ou conflitos"},
    conselhos: [
      "Aceite a dor e siga em frente.",
      "Aprenda com desapontamentos.",
      "Não se feche para novas oportunidades."
    ]},{
    numero: 4,
    nome: "Quatro de Espadas",
    areas: {
      amor: "Pausa e reflexão",
      carreira: "Descanso necessário",
      financas: "Evitar decisões precipitadas",
      saude: "Recuperação e descanso",
      espiritualidade: "Meditação e introspecção",
      crescimento: "Tempo para reorganizar pensamentos",
      sorte: "Boas oportunidades após pausa",
      desafios: "Imobilidade"},
    conselhos: [
      "Reserve tempo para reflexão.",
      "Recarregue energias.",
      "Evite decisões precipitadas."
    ]},{
    numero: 5,
    nome: "Cinco de Espadas",
    areas: {
      amor: "Conflitos e desentendimentos",
      carreira: "Competição ou disputa",
      financas: "Perdas ocasionais",
      saude: "Stress mental",
      espiritualidade: "Aprender a lidar com derrotas",
      crescimento: "Evitar confrontos desnecessários",
      sorte: "Cuidado com a sorte em disputas",
      desafios: "Conflito e egoísmo"},
    conselhos: [
      "Evite conflitos desnecessários.",
      "Aprenda com derrotas.",
      "Mantenha integridade."
    ]},{
    numero: 6,
    nome: "Seis de Espadas",
    areas: {
      amor: "Superação de conflitos",
      carreira: "Mudança de direção",
      financas: "Transições financeiras",
      saude: "Recuperação emocional",
      espiritualidade: "Viagem interna ou aprendizado",
      crescimento: "Aprender a deixar ir",
      sorte: "Oportunidades ao mudar de direção",
      desafios: "Resistência a mudanças" },
    conselhos: [
      "Siga em frente.",
      "Deixe para trás o que não serve.",
      "Aceite transições."
    ]},{
    numero: 7,
    nome: "Sete de Espadas",
    areas: {
      amor: "Cautela ou desconfiança",
      carreira: "Planejamento estratégico",
      financas: "Cuidado com furtos ou perdas",
      saude: "Evitar enganos e negligência",
      espiritualidade: "Ser astuto e consciente",
      crescimento: "Aprender a agir com estratégia",
      sorte: "Sorte ao agir com cuidado",
      desafios: "Desonestidade ou enganos"},
    conselhos: [
      "Seja estratégico e cauteloso.",
      "Evite enganar ou ser enganado.",
      "Planeje ações com sabedoria."
    ]},{
    numero: 8,
    nome: "Oito de Espadas",
    areas: {
      amor: "Sentimentos de prisão emocional",
      carreira: "Bloqueios profissionais",
      financas: "Limitações temporárias",
      saude: "Sensação de impotência",
      espiritualidade: "Aprender a se libertar",
      crescimento: "Superar restrições mentais",
      sorte: "Sorte depende de ação",
      desafios: "Medos e limitações"},
    conselhos: [
      "Não se prenda a medos.",
      "Busque soluções.",
      "Liberte-se de limitações."
    ]},{
    numero: 9,
    nome: "Nove de Espadas",
    areas: {
      amor: "Ansiedade ou preocupação afetiva",
      carreira: "Estresse no trabalho",
      financas: "Preocupações financeiras",
      saude: "Insônia ou tensão",
      espiritualidade: "Aceitar preocupações sem se afogar nelas",
      crescimento: "Aprender a lidar com ansiedade",
      sorte: "Sorte se manter calma",
      desafios: "Preocupação excessiva"},
    conselhos: [
      "Controle a ansiedade.",
      "Busque apoio emocional.",
      "Não se sobrecarregue mentalmente."
    ]},{
    numero: 10,
    nome: "Dez de Espadas",
    areas: {
      amor: "Fim doloroso ou decepção",
      carreira: "Culminância de desafios",
      financas: "Perdas finais",
      saude: "Exaustão mental",
      espiritualidade: "Aceitar finais para renascer",
      crescimento: "Aprender com crises",
      sorte: "Oportunidade após superação",
      desafios: "Fim abrupto" },
    conselhos: [
      "Aceite finais.",
      "Recomece após desafios.",
      "Aprenda com situações difíceis."
    ]},{
    numero: 11,
    nome: "Pajem de Espadas",
    areas: {
      amor: "Curiosidade afetiva",
      carreira: "Aprendizado intelectual",
      financas: "Informações e oportunidades iniciais",
      saude: "Alerta mental",
      espiritualidade: "Busque conhecimento",
      crescimento: "Aprender através da análise",
      sorte: "Oportunidades ao observar",
      desafios: "Imaturidade ou dispersão"},
    conselhos: [
      "Seja curioso e investigativo.",
      "Aprenda com observação.",
      "Use mente de forma positiva."
    ]},{
    numero: 12,
    nome: "Cavaleiro de Espadas",
    areas: {
      amor: "Decisões rápidas ou bruscas",
      carreira: "Ação ágil e decisiva",
      financas: "Movimentos financeiros rápidos",
      saude: "Energia mental intensa",
      espiritualidade: "Agir com mente clara",
      crescimento: "Aprender a agir com rapidez e foco",
      sorte: "Sorte com ação determinada",
      desafios: "Impulsividade"},
    conselhos: [
      "Aja com clareza e decisão.",
      "Evite precipitação.",
      "Use energia de forma consciente."
    ]},{
    numero: 13,
    nome: "Rainha de Espadas",
    areas: {
      amor: "Relações justas e objetivas",
      carreira: "Liderança estratégica",
      financas: "Decisões prudentes",
      saude: "Equilíbrio mental",
      espiritualidade: "Sabedoria e discernimento",
      crescimento: "Aprender a separar emoção de razão",
      sorte: "Sorte com análise",
      desafios: "Frieza emocional"},
    conselhos: [
      "Use razão e discernimento.",
      "Seja justa em decisões.",
      "Equilibre emoção e lógica."
    ]},{
    numero: 14,
    nome: "Rei de Espadas",
    areas: {
      amor: "Relacionamentos claros e maduros",
      carreira: "Liderança estratégica",
      financas: "Controle financeiro e decisões sábias",
      saude: "Saúde mental equilibrada",
      espiritualidade: "Autoridade intelectual",
      crescimento: "Domínio da mente e justiça",
      sorte: "Sorte através da inteligência",
      desafios: "Autoritarismo ou rigidez"},
    conselhos: [
      "Lidere com sabedoria.",
      "Use justiça e clareza.",
      "Mantenha mente equilibrada."
    ]}];

const pausA = [
  {
    numero: 1,
    nome: "Ás de Paus",
    areas: {
      amor: "Novo entusiasmo amoroso",
      carreira: "Ideias e projetos iniciando",
      financas: "Oportunidades criativas",
      saude: "Energia física e mental elevada",
      espiritualidade: "Inspiração e motivação",
      crescimento: "Iniciar novos caminhos",
      sorte: "Sorte em novos empreendimentos",
      desafios: "Impulsividade"},
    conselhos: [
      "Aja com coragem.",
      "Inicie projetos com confiança.",
      "Use energia de forma positiva."
    ]},{
    numero: 2,
    nome: "Dois de Paus",
    areas: {
      amor: "Escolhas em relacionamentos",
      carreira: "Planejamento estratégico",
      financas: "Decisões financeiras ponderadas",
      saude: "Equilíbrio entre ação e descanso",
      espiritualidade: "Visão de futuro clara",
      crescimento: "Avaliar caminhos antes de agir",
      sorte: "Boas oportunidades se planejar",
      desafios: "Indecisão"},
    conselhos: [
      "Planeje antes de agir.",
      "Escolha com consciência.",
      "Mantenha foco em objetivos."
    ]},{
    numero: 3,
    nome: "Três de Paus",
    areas: {
      amor: "Relacionamentos com potencial de expansão",
      carreira: "Progresso em projetos iniciados",
      financas: "Retorno de investimentos",
      saude: "Boa energia para desafios",
      espiritualidade: "Acompanhar planos e visões",
      crescimento: "Perseverança e visão de futuro",
      sorte: "Oportunidades em crescimento",
      desafios: "Impaciência"},
    conselhos: [
      "Mantenha visão de longo prazo.",
      "Acompanhe o progresso com atenção.",
      "Seja paciente e perseverante."
    ]},{
    numero: 4,
    nome: "Quatro de Paus",
    areas: {
      amor: "Estabilidade e celebração afetiva",
      carreira: "Sucesso em equipe",
      financas: "Estabilidade financeira",
      saude: "Bem-estar equilibrado",
      espiritualidade: "Harmonia interior",
      crescimento: "Conquistar segurança antes de expandir",
      sorte: "Boa sorte em momentos de celebração",
      desafios: "Complacência"},
    conselhos: [
      "Celebre conquistas.",
      "Valorize estabilidade e segurança.",
      "Compartilhe alegria."
    ]},{
    numero: 5,
    nome: "Cinco de Paus",
    areas: {
      amor: "Desentendimentos ou competições afetivas",
      carreira: "Desafios e competição no trabalho",
      financas: "Disputas ou negociações difíceis",
      saude: "Energia dispersa ou estresse",
      espiritualidade: "Superar conflitos internos",
      crescimento: "Aprender a lidar com desafios",
      sorte: "Oportunidades surgem após esforço",
      desafios: "Conflitos e competição"},
    conselhos: [
      "Mantenha equilíbrio diante de conflitos.",
      "Use desafios para crescimento.",
      "Evite disputas desnecessárias."
    ]},{
    numero: 6,
    nome: "Seis de Paus",
    areas: {
      amor: "Reconhecimento e conquista emocional",
      carreira: "Sucesso e progresso",
      financas: "Retorno positivo",
      saude: "Energia equilibrada",
      espiritualidade: "Vitórias espirituais",
      crescimento: "Aprender a celebrar conquistas",
      sorte: "Boa sorte e reconhecimento",
      desafios: "Arrogância ou excesso de orgulho"},
    conselhos: [
      "Comemore conquistas.",
      "Compartilhe vitórias.",
      "Mantenha humildade."
    ]},{
    numero: 7,
    nome: "Sete de Paus",
    areas: {
      amor: "Defender sentimentos e relacionamentos",
      carreira: "Superar concorrência",
      financas: "Manter posições conquistadas",
      saude: "Resistência física e emocional",
      espiritualidade: "Persistência diante de desafios",
      crescimento: "Aprender a lutar pelo que importa",
      sorte: "Oportunidade após esforço",
      desafios: "Insegurança ou defensividade"},
    conselhos: [
      "Defenda suas posições.",
      "Seja firme e corajoso.",
      "Não desanime diante de desafios."
    ]},{
    numero: 8,
    nome: "Oito de Paus",
    areas: {
      amor: "Rapidez em relacionamentos ou notícias afetivas",
      carreira: "Projetos em aceleração",
      financas: "Rápidas movimentações financeiras",
      saude: "Energia intensa, cuidado com excesso",
      espiritualidade: "Avanço espiritual rápido",
      crescimento: "Agir com rapidez e clareza",
      sorte: "Sorte em movimento",
      desafios: "Impulsividade"},
    conselhos: [
      "Mantenha foco e velocidade.",
      "Aja com clareza.",
      "Controle impulsos."
    ]},{
    numero: 9,
    nome: "Nove de Paus",
    areas: {
      amor: "Defesa emocional, resistência",
      carreira: "Persistência em projetos difíceis",
      financas: "Cautela antes de decisões",
      saude: "Força física e mental necessária",
      espiritualidade: "Aprender a resistir",
      crescimento: "Persistência diante de obstáculos",
      sorte: "Sorte através da preparação",
      desafios: "Desconfiança ou cansaço"},
    conselhos: [
      "Mantenha resistência.",
      "Proteja seus interesses.",
      "Não desista facilmente."
    ]},{
    numero: 10,
    nome: "Dez de Paus",
    areas: {
      amor: "Sobrecarga emocional",
      carreira: "Muita responsabilidade",
      financas: "Pressão financeira",
      saude: "Cansaço físico e mental",
      espiritualidade: "Aprender a delegar e organizar",
      crescimento: "Aprender a equilibrar cargas",
      sorte: "Oportunidades se houver disciplina",
      desafios: "Sobrecarga e estresse"},
    conselhos: [
      "Delegue responsabilidades.",
      "Organize tarefas.",
      "Evite sobrecarga."
    ]},{
    numero: 11,
    nome: "Pajem de Paus",
    areas: {
      amor: "Novas ideias e convites",
      carreira: "Curiosidade e aprendizado inicial",
      financas: "Oportunidades exploratórias",
      saude: "Energia em crescimento",
      espiritualidade: "Início de novos caminhos",
      crescimento: "Aprender com iniciativa",
      sorte: "Boas notícias",
      desafios: "Imaturidade ou impulsividade"},
    conselhos: [
      "Seja curioso e aventureiro.",
      "Aprenda explorando.",
      "Use energia de forma positiva."
    ]},{
    numero: 12,
    nome: "Cavaleiro de Paus",
    areas: {
      amor: "Paixão intensa",
      carreira: "Projetos em movimento",
      financas: "Oportunidades rápidas",
      saude: "Energia intensa, atenção ao corpo",
      espiritualidade: "Ação guiada pela intuição",
      crescimento: "Aprender a canalizar energia",
      sorte: "Boas oportunidades",
      desafios: "Impulsividade e precipitação"},
    conselhos: [
      "Aja com coragem e foco.",
      "Controle a impulsividade.",
      "Direcione energia corretamente."
    ]},{
    numero: 13,
    nome: "Rainha de Paus",
    areas: {
      amor: "Paixão equilibrada e confiança",
      carreira: "Liderança criativa",
      financas: "Prosperidade por iniciativa",
      saude: "Boa energia e motivação",
      espiritualidade: "Intuição aliada à ação",
      crescimento: "Aprender a liderar com equilíbrio",
      sorte: "Sorte em projetos criativos",
      desafios: "Orgulho ou impaciência"},
    conselhos: [
      "Seja confiante e determinada.",
      "Use liderança com sabedoria.",
      "Mantenha equilíbrio emocional."
    ]},{
    numero: 14,
    nome: "Rei de Paus",
    areas: {
      amor: "Relacionamentos fortes e maduros",
      carreira: "Liderança inspiradora",
      financas: "Estabilidade por ação assertiva",
      saude: "Energia equilibrada",
      espiritualidade: "Sabedoria prática e inspiradora",
      crescimento: "Domínio da iniciativa e responsabilidade",
      sorte: "Proteção e sucesso",
      desafios: "Autoritarismo ou impulsividade"},
    conselhos: [
      "Lidere com confiança.",
      "Seja inspirador e justo.",
      "Use energia com sabedoria."
    ]}];

const areas = [...copasA, ...ourosA, ...espadasA, ...pausA];

// === CONTAINER PRINCIPAL ===
const container = document.getElementById("areas-vida");

// === FUNÇÃO DE RENDERIZAÇÃO ===
function renderareas(listaCartas) {
  container.innerHTML = ""; // limpa conteúdo anterior

  listaCartas.forEach((carta) => {
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
    conselhosDiv.innerHTML = `<strong>Conselhos:</strong> ${carta.conselhos.join(" | ")}`;
    div.appendChild(conselhosDiv);

    container.appendChild(div);
  });
}

// === FILTRAR POR NAIPE ===
const buttonsA = document.querySelectorAll(".suit-btn");


buttonsA.forEach((btn) => {
  btn.addEventListener("click", () => {
    const suit = btn.dataset.suit;
    let area;

    switch (suit) {
      case "copas":
        area = copasA;
        break;
      case "ouros":
        area = ourosA;
        break;
      case "espadas":
        area = espadasA;
        break;
      case "paus":
        area = pausA;
        break;
      default:
        area = areas;
    }

    renderareas(area);
  });
});

renderareas(areas);