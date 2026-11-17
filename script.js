/* Eduardo Almeida · Aviação Executiva
   Cabeçalho, rodapé, frota, aeronaves à venda e formulários são montados aqui
   para que todas as páginas fiquem iguais. Para trocar contatos, edite CONTATO. */

const CONTATO = {
  whatsapp: '5511000000000',            // só números, com 55 + DDD
  telefone: '+55 11 0000-0000',
  telefoneLink: '+551100000000',
  email: 'contato@exemplo.com.br',
  endereco: 'Hangar executivo · Aeroporto de Congonhas',
  cidade: 'São Paulo · SP',
  instagram: '#',
  linkedin: '#'
};

const waLink = (msg) => `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`;

// Frota disponível para fretamento (valores aproximados por categoria).
const FROTA = [
  { cat: 'jatos', tipo: 'Jato leve', nome: 'Light Jet', modelos: 'Phenom 100EV · Citation CJ3+ · Phenom 300E', pax: '5–8', alcance: '3.700', vel: '830', ideal: 'Ponte São Paulo–Rio, capitais do Sudeste e Sul, ida e volta no mesmo dia.', img: 'jato-escuro' },
  { cat: 'jatos', tipo: 'Jato médio', nome: 'Midsize', modelos: 'Citation XLS+ · Learjet 75 · Hawker 800XP', pax: '7–9', alcance: '4.000', vel: '800', ideal: 'Nordeste a partir de São Paulo e capitais do Mercosul sem escala.', img: 'jato-frente' },
  { cat: 'jatos', tipo: 'Super médio', nome: 'Super Midsize', modelos: 'Challenger 350 · Praetor 500 · Gulfstream G280', pax: '8–10', alcance: '6.000', vel: '850', ideal: 'O Brasil de ponta a ponta, América do Sul e Caribe.', img: 'jato-sol' },
  { cat: 'jatos', tipo: 'Longo alcance', nome: 'Heavy Jet', modelos: 'Legacy 650 · Falcon 7X · Gulfstream G650 · Global 6500', pax: '12–16', alcance: '12.000', vel: '900', ideal: 'Voos intercontinentais para Estados Unidos, Europa e Oriente Médio.', img: 'jato-gulfstream' },
  { cat: 'turbo', tipo: 'Turboélice monomotor', nome: 'Single Turboprop', modelos: 'Daher TBM 960 · Pilatus PC-12 NGX', pax: '5–8', alcance: '3.300', vel: '550', ideal: 'Fazendas, pistas curtas e cidades sem aviação comercial.', img: 'turbo-tbm' },
  { cat: 'turbo', tipo: 'Turboélice bimotor', nome: 'Twin Turboprop', modelos: 'King Air C90 · King Air 250 · King Air 360', pax: '6–9', alcance: '2.800', vel: '560', ideal: 'Missões regionais e pistas não pavimentadas com dois motores.', img: 'turbo-kingair' },
  { cat: 'heli', tipo: 'Helicóptero monoturbina', nome: 'Single Engine', modelos: 'Airbus H125 · Bell 407', pax: '4–6', alcance: '600', vel: '240', ideal: 'Traslados urbanos, helipontos em edifícios e litoral norte.', img: 'heli-bell' },
  { cat: 'heli', tipo: 'Helicóptero biturbina', nome: 'Twin Engine', modelos: 'Leonardo AW109 · Airbus H135 · AW169', pax: '6–8', alcance: '800', vel: '280', ideal: 'Aeroporto–escritório, Angra dos Reis, Campos do Jordão e interior.', img: 'heli-por-do-sol' }
];

// Aeronaves à venda (anúncios ilustrativos até receber a carteira real do cliente).
const VENDA = [
  { id: 'g450', cat: 'jatos', modelo: 'Gulfstream G450', tipo: 'Jato de longo alcance', ano: 2012, horas: '4.850', pax: 14, loc: 'São Paulo · SP', img: 'jato-gulfstream', tag: 'Destaque', gold: true },
  { id: 'cl350', cat: 'jatos', modelo: 'Bombardier Challenger 350', tipo: 'Jato super médio', ano: 2017, horas: '2.400', pax: 9, loc: 'Belo Horizonte · MG', img: 'jato-sol', tag: 'Novo na carteira' },
  { id: 'tbm940', cat: 'turbo', modelo: 'Daher TBM 940', tipo: 'Turboélice monomotor', ano: 2021, horas: '620', pax: 5, loc: 'Goiânia · GO', img: 'turbo-tbm' },
  { id: 'f7x', cat: 'jatos', modelo: 'Dassault Falcon 7X', tipo: 'Jato de longo alcance', ano: 2011, horas: '5.300', pax: 14, loc: 'Sorocaba · SP', img: 'jato-neve' },
  { id: 'p300', cat: 'jatos', modelo: 'Embraer Phenom 300E', tipo: 'Jato leve', ano: 2019, horas: '1.150', pax: 8, loc: 'Jundiaí · SP', img: 'jato-escuro' },
  { id: 'ka350', cat: 'turbo', modelo: 'Beechcraft King Air 350i', tipo: 'Turboélice bimotor', ano: 2014, horas: '3.100', pax: 9, loc: 'Campinas · SP', img: 'turbo-kingair', tag: 'Em negociação' },
  { id: 'b407', cat: 'heli', modelo: 'Bell 407GXi', tipo: 'Helicóptero monoturbina', ano: 2020, horas: '780', pax: 6, loc: 'São Paulo · SP', img: 'heli-bell' }
];

const ICON = {
  wa: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.7c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.9-1-2.2-1-.3-.2-.5-.2-.7.1l-1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6 0-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9 2.7 1.1 3.3.9 3.8.8.6 0 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z"/></svg>',
  arr: '<svg class="arr" viewBox="0 0 22 10" aria-hidden="true"><path d="M0 5h20M16 1l4 4-4 4"/></svg>',
  mark: '<svg class="brand__mark" viewBox="0 0 44 44" aria-hidden="true"><circle class="ring" cx="22" cy="22" r="21"/><text x="22" y="26.5" text-anchor="middle">EA</text><path class="wing" d="M10 31.4 22 28.6l12 2.8-12-1.2z"/></svg>'
};

const PAGINAS = [
  ['fretamento', 'servicos.html', 'Fretamento'],
  ['frota', 'frota.html', 'Frota'],
  ['venda', 'aeronaves.html', 'Aeronaves à venda'],
  ['sobre', 'sobre.html', 'A empresa'],
  ['contato', 'contato.html', 'Contato']
];

function montarCabecalho() {
  const page = document.body.dataset.page;
  const util = document.createElement('div');
  util.className = 'util';
  util.innerHTML = `<div class="wrap">
    <div class="util__l"><span><i class="dot" aria-hidden="true"></i>Atendimento 24 horas</span><span class="hide-sm">Operadores homologados pela ANAC</span></div>
    <div class="util__r"><a href="tel:${CONTATO.telefoneLink}">${CONTATO.telefone}</a><a href="mailto:${CONTATO.email}">${CONTATO.email}</a></div>
  </div>`;
  const header = document.createElement('header');
  header.className = 'topbar';
  header.id = 'topbar';
  header.innerHTML = `<div class="wrap"><div class="topbar__in">
    <a class="brand" href="./" aria-label="Eduardo Almeida Aviação Executiva, início">${ICON.mark}<span class="brand__txt"><b>Eduardo Almeida</b><small>Aviação Executiva</small></span></a>
    <nav class="nav" id="nav" aria-label="Principal">
      ${PAGINAS.map(([id, href, nome]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ''}>${nome}</a>`).join('')}
      <a class="btn nav__cta" href="contato.html#cotacao">Solicitar cotação</a>
    </nav>
    <a class="btn btn--sm topbar__cta" href="contato.html#cotacao">Solicitar cotação</a>
    <button class="menu" id="menu" type="button" aria-expanded="false" aria-controls="nav" aria-label="Abrir menu"><span></span><span></span></button>
  </div></div>`;
  document.body.prepend(util, header);
  const skip = document.createElement('a');
  skip.className = 'skip'; skip.href = '#conteudo'; skip.textContent = 'Pular para o conteúdo';
  document.body.prepend(skip);
}

function montarRodape() {
  const footer = document.createElement('footer');
  footer.className = 'foot';
  const ano = new Date().getFullYear();
  footer.innerHTML = `<div class="wrap">
    <div class="foot__top">
      <div>
        <a class="brand" href="./" aria-label="Início">${ICON.mark}<span class="brand__txt"><b>Eduardo Almeida</b><small>Aviação Executiva</small></span></a>
        <p class="foot__about">Fretamento de jatos, turboélices e helicópteros, missões especiais e intermediação de compra e venda de aeronaves. Atendimento pessoal, 24 horas.</p>
      </div>
      <div><h4>Fretamento</h4><ul>
        <li><a href="servicos.html#jatos">Jatos executivos</a></li>
        <li><a href="servicos.html#helicopteros">Helicópteros</a></li>
        <li><a href="servicos.html#turboelices">Turboélices</a></li>
        <li><a href="servicos.html#empty-legs">Trechos de oportunidade</a></li>
        <li><a href="servicos.html#missoes">Missões especiais</a></li>
      </ul></div>
      <div><h4>Proprietários</h4><ul>
        <li><a href="aeronaves.html">Aeronaves à venda</a></li>
        <li><a href="aeronaves.html#proprietarios">Compra e venda</a></li>
        <li><a href="aeronaves.html#proprietarios">Gestão de aeronaves</a></li>
        <li><a href="aeronaves.html#vender">Vender minha aeronave</a></li>
        <li><a href="sobre.html">A empresa</a></li>
      </ul></div>
      <div><h4>Contato</h4><ul>
        <li><a href="tel:${CONTATO.telefoneLink}">${CONTATO.telefone}</a></li>
        <li><a href="mailto:${CONTATO.email}">${CONTATO.email}</a></li>
        <li>${CONTATO.endereco}<br>${CONTATO.cidade}</li>
        <li><a href="${CONTATO.instagram}">Instagram</a> · <a href="${CONTATO.linkedin}">LinkedIn</a></li>
      </ul></div>
    </div>
    <div class="foot__bottom">
      <p class="foot__legal">A Eduardo Almeida Aviação Executiva intermedeia e coordena voos fretados, realizados exclusivamente por operadores certificados pela ANAC (RBAC 135). Valores, disponibilidade e aeronaves sujeitos a confirmação no momento da cotação.</p>
      <p>© ${ano} Eduardo Almeida Aviação Executiva</p>
    </div>
  </div>`;
  document.body.appendChild(footer);
  const wa = document.createElement('a');
  wa.className = 'wa';
  wa.href = waLink('Olá! Gostaria de falar sobre um voo executivo.');
  wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Falar pelo WhatsApp');
  wa.innerHTML = ICON.wa;
  document.body.appendChild(wa);
}

function cardFrota(a, light) {
  return `<article class="ac${light ? ' ac--light' : ''} rv" data-cat="${a.cat}">
    <div class="ac__img"><img src="img/${a.img}.jpg" alt="${a.tipo}" loading="lazy" width="800" height="500"></div>
    <div class="ac__b">
      <span class="ac__cat">${a.nome}</span>
      <h3>${a.tipo}</h3>
      <p class="ac__models">${a.modelos}</p>
      <ul class="specs">
        <li><b>${a.pax}</b>passageiros</li>
        <li><b>${a.alcance}</b>km de alcance</li>
        <li><b>${a.vel}</b>km/h</li>
      </ul>
      <p class="ac__ideal"><b>Ideal para:</b> ${a.ideal}</p>
      ${light ? `<a class="btn btn--line btn--sm" href="${waLink(`Olá! Gostaria de cotar um voo de ${a.tipo.toLowerCase()} (${a.modelos}).`)}" target="_blank" rel="noopener">Cotar esta categoria</a>` : ''}
    </div>
  </article>`;
}

function cardVenda(v) {
  return `<article class="lot rv" data-cat="${v.cat}" id="${v.id}">
    <div class="lot__img"><img src="img/${v.img}.jpg" alt="${v.modelo}" loading="lazy" width="800" height="500">${v.tag ? `<span class="lot__tag${v.gold ? ' lot__tag--gold' : ''}">${v.tag}</span>` : ''}</div>
    <div class="lot__b">
      <span class="lot__cat">${v.tipo}</span>
      <h3>${v.modelo}</h3>
      <span class="lot__loc">${v.loc}</span>
      <dl>
        <div><dt>Ano</dt><dd>${v.ano}</dd></div>
        <div><dt>Horas</dt><dd>${v.horas}</dd></div>
        <div><dt>Assentos</dt><dd>${v.pax}</dd></div>
      </dl>
      <div class="lot__f">
        <span class="lot__price">Valor<b>Sob consulta</b></span>
        <a class="btn btn--navy btn--sm" href="${waLink(`Olá! Tenho interesse no ${v.modelo} ${v.ano} anunciado no site. Podem me enviar o dossiê?`)}" target="_blank" rel="noopener">Solicitar dossiê</a>
      </div>
    </div>
  </article>`;
}

function renderListas() {
  document.querySelectorAll('[data-frota]').forEach(el => {
    const light = el.dataset.frota === 'light';
    el.innerHTML = FROTA.map(a => cardFrota(a, light)).join('');
  });
  document.querySelectorAll('[data-venda]').forEach(el => {
    const n = parseInt(el.dataset.venda, 10) || VENDA.length;
    el.innerHTML = VENDA.slice(0, n).map(cardVenda).join('');
  });
}

// Abas que filtram cartões por categoria: <div class="tabs" data-filter="#alvo">.
function initFiltros() {
  document.querySelectorAll('[data-filter]').forEach(tabs => {
    const alvo = document.querySelector(tabs.dataset.filter);
    if (!alvo) return;
    const btns = [...tabs.querySelectorAll('button')];
    const apply = (cat) => {
      btns.forEach(b => b.setAttribute('aria-selected', String(b.dataset.cat === cat)));
      alvo.querySelectorAll('[data-cat]').forEach(c => {
        const show = cat === 'todas' || c.dataset.cat === cat;
        c.hidden = !show;
        if (show) c.classList.add('in');
      });
    };
    btns.forEach(b => {
      if (b.dataset.cat !== 'todas') {
        const n = alvo.querySelectorAll(`[data-cat="${b.dataset.cat}"]`).length;
        if (tabs.dataset.count !== undefined) b.insertAdjacentHTML('beforeend', `<sup>${n}</sup>`);
      }
      b.addEventListener('click', () => apply(b.dataset.cat));
    });
    const start = btns.find(b => b.getAttribute('aria-selected') === 'true') || btns[0];
    apply(start.dataset.cat);
  });
}

function initMenu() {
  const btn = document.getElementById('menu');
  const nav = document.getElementById('nav');
  const set = (open) => {
    document.documentElement.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  addEventListener('resize', () => { if (innerWidth > 1020) set(false); });
}

function initTopbar() {
  const bar = document.getElementById('topbar');
  const limit = () => Math.min(innerHeight * .5, 420);
  const onScroll = () => bar.classList.toggle('is-fixed', scrollY > limit());
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initReveal() {
  const els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  els.forEach(e => io.observe(e));
}

// Formulários viram mensagem de WhatsApp (nenhum dado fica guardado no site).
function initForms() {
  const hoje = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('input[type="date"]').forEach(i => { i.min = hoje; });
  document.querySelectorAll('form[data-wa]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const linhas = [form.dataset.wa];
      const vistos = new Set();
      form.querySelectorAll('input, select, textarea').forEach(el => {
        if (!el.name || vistos.has(el.name) || el.type === 'checkbox') return;
        let v = el.value;
        if (el.type === 'radio') {
          const sel = form.querySelector(`input[name="${el.name}"]:checked`);
          v = sel ? sel.value : '';
        }
        if (el.type === 'date' && v) v = v.split('-').reverse().join('/');
        vistos.add(el.name);
        if (v && String(v).trim()) linhas.push(`*${el.dataset.label || el.name}:* ${String(v).trim()}`);
      });
      window.open(waLink(linhas.join('\n')), '_blank', 'noopener');
    });
  });
  // Ida e volta: mostra/esconde a data de retorno.
  document.querySelectorAll('[data-trip]').forEach(form => {
    const volta = form.querySelector('[data-volta]');
    if (!volta) return;
    const upd = () => {
      const sel = form.querySelector('input[name="trecho"]:checked');
      const show = sel && sel.value === 'Ida e volta';
      volta.hidden = !show;
      const inp = volta.querySelector('input');
      if (inp) inp.disabled = !show;
    };
    form.addEventListener('change', upd);
    upd();
  });
}

function initWaLinks() {
  document.querySelectorAll('[data-wa-msg]').forEach(a => {
    a.href = waLink(a.dataset.waMsg);
    a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelectorAll('[data-tel]').forEach(a => { a.href = `tel:${CONTATO.telefoneLink}`; a.textContent = CONTATO.telefone; });
  document.querySelectorAll('[data-email]').forEach(a => { a.href = `mailto:${CONTATO.email}`; a.textContent = CONTATO.email; });
}

montarCabecalho();
montarRodape();
renderListas();
initFiltros();
initMenu();
initTopbar();
initForms();
initWaLinks();
initReveal();
