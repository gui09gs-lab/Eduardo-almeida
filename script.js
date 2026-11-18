/* Flysy · Aviação Executiva
   Cabeçalho, rodapé, frota, aeronaves à venda e formulários são montados aqui
   para que todas as páginas fiquem iguais. Para trocar contatos, edite CONTATO. */

const CONTATO = {
  whatsapp: '5511927486260',            // só números, com 55 + DDD
  telefone: '+55 11 92748-6260',
  telefoneLink: '+5511927486260',
  email: 'contato@flysy.com.br',
  endereco: 'Hangar executivo · Aeroporto de Congonhas',
  cidade: 'São Paulo · SP',
  instagram: '#',
  linkedin: '#'
};

const waLink = (msg) => `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`;

// Frota disponível para fretamento (valores aproximados por categoria).
const FROTA = [
  { cat: 'jatos', tipo: 'Jato leve', nome: 'Light Jet', codinome: 'Ágil', modelos: 'Phenom 100EV · Citation CJ3+ · Phenom 300E', pax: '5–8', alcance: '3.700', vel: '830', ideal: 'Ponte Rio–São Paulo e capitais do Sul e Sudeste.', img: 'jato-escuro' },
  { cat: 'jatos', tipo: 'Jato médio', nome: 'Midsize', codinome: 'Vanguarda', modelos: 'Citation XLS+ · Learjet 75 · Hawker 800XP', pax: '7–9', alcance: '4.000', vel: '800', ideal: 'Nordeste e Mercosul sem escala.', img: 'jato-frente' },
  { cat: 'jatos', tipo: 'Super médio', nome: 'Super Midsize', codinome: 'Soberano', modelos: 'Challenger 350 · Praetor 500 · Gulfstream G280', pax: '8–10', alcance: '6.000', vel: '850', ideal: 'Brasil de ponta a ponta e Caribe.', img: 'jato-sol' },
  { cat: 'jatos', tipo: 'Longo alcance', nome: 'Heavy Jet', codinome: 'Atlântico', modelos: 'Legacy 650 · Falcon 7X · Gulfstream G650 · Global 6500', pax: '12–16', alcance: '12.000', vel: '900', ideal: 'Estados Unidos, Europa e Oriente Médio.', img: 'jato-gulfstream' },
  { cat: 'turbo', tipo: 'Turboélice monomotor', nome: 'Single Turboprop', codinome: 'Sertão', modelos: 'Daher TBM 960 · Pilatus PC-12 NGX', pax: '5–8', alcance: '3.300', vel: '550', ideal: 'Fazendas e pistas curtas.', img: 'turbo-tbm' },
  { cat: 'turbo', tipo: 'Turboélice bimotor', nome: 'Twin Turboprop', codinome: 'Planalto', modelos: 'King Air C90 · King Air 250 · King Air 360', pax: '6–9', alcance: '2.800', vel: '560', ideal: 'Missões regionais, com dois motores.', img: 'turbo-kingair' },
  { cat: 'heli', tipo: 'Helicóptero monoturbina', nome: 'Single Engine', codinome: 'Metrópole', modelos: 'Airbus H125 · Bell 407', pax: '4–6', alcance: '600', vel: '240', ideal: 'Traslados urbanos e helipontos.', img: 'heli-bell' },
  { cat: 'heli', tipo: 'Helicóptero biturbina', nome: 'Twin Engine', codinome: 'Litoral', modelos: 'Leonardo AW109 · Airbus H135 · AW169', pax: '6–8', alcance: '800', vel: '280', ideal: 'Angra, Campos do Jordão e interior.', img: 'heli-por-do-sol' }
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
  mark: '<svg class="brand__mark" viewBox="20 10 210 170" aria-hidden="true"><path class="fin" d="M70 30 L98 30 C108 30 114 34 120 44 C140 76 170 94 218 102 L84 102 L66 164 L40 164 Z"/><path class="wing" d="M90 114 L186 114 C146 124 110 138 82 158 Z"/></svg>'
};

const PAGINAS = [
  ['fretamento', 'servicos.html', 'Viagens'],
  ['destinos', 'index.html#destinos', 'Destinos'],
  ['frota', 'frota.html', 'O Hangar'],
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
    <a class="brand" href="./" aria-label="Flysy Aviação Executiva, início">${ICON.mark}<span class="brand__txt"><b>Flysy</b><small>Aviação Executiva</small></span></a>
    <nav class="nav" id="nav" aria-label="Principal">
      ${PAGINAS.map(([id, href, nome]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ''}>${nome}</a>`).join('')}
      <a class="btn nav__cta" href="index.html#planejar">Planejar viagem</a>
    </nav>
    <a class="btn btn--sm topbar__cta" href="index.html#planejar">Planejar viagem</a>
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
        <a class="brand" href="./" aria-label="Início">${ICON.mark}<span class="brand__txt"><b>Flysy</b><small>Aviação Executiva</small></span></a>
        <p class="foot__about">Viagens executivas porta a porta, no Brasil e no exterior. Atendimento pessoal, 24 horas.</p>
      </div>
      <div><h4>Viagens</h4><ul>
        <li><a href="servicos.html#negocios">Negócios</a></li>
        <li><a href="servicos.html#lazer">Família e férias</a></li>
        <li><a href="servicos.html#traslados">Traslados de helicóptero</a></li>
        <li><a href="servicos.html#internacional">Internacional</a></li>
        <li><a href="servicos.html#missoes">Missões especiais</a></li>
      </ul></div>
      <div><h4>Proprietários</h4><ul>
        <li><a href="frota.html">O Hangar</a></li>
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
      <p class="foot__legal">A Flysy Aviação Executiva intermedeia e coordena voos fretados, realizados exclusivamente por operadores certificados pela ANAC (RBAC 135). Valores, disponibilidade e aeronaves sujeitos a confirmação no momento da cotação.</p>
      <p>© ${ano} Flysy Aviação Executiva</p>
    </div>
  </div>`;
  document.body.appendChild(footer);
  const wa = document.createElement('a');
  wa.className = 'wa';
  wa.href = waLink('Olá! Gostaria de planejar uma viagem executiva.');
  wa.target = '_blank'; wa.rel = 'noopener';
  wa.setAttribute('aria-label', 'Falar pelo WhatsApp');
  wa.innerHTML = ICON.wa;
  document.body.appendChild(wa);
}

function cardFrota(a, light) {
  return `<article class="ac${light ? ' ac--light' : ''} rv" data-cat="${a.cat}">
    <div class="ac__img"><img src="img/${a.img}.jpg" alt="${a.tipo}" loading="lazy" width="800" height="500"></div>
    <div class="ac__b">
      <span class="ac__cat">Codinome ${a.codinome}</span>
      <h3>${a.tipo}</h3>
      <p class="ac__models">${a.modelos}</p>
      <ul class="specs">
        <li><b>${a.pax}</b>passageiros</li>
        <li><b>${a.alcance}</b>km de alcance</li>
        <li><b>${a.vel}</b>km/h</li>
      </ul>
      <p class="ac__ideal"><b>Ideal para:</b> ${a.ideal}</p>
      ${light ? `<a class="btn btn--line btn--sm" href="${waLink(`Olá! Gostaria de cotar um voo de ${a.tipo.toLowerCase()} (${a.modelos}).`)}" target="_blank" rel="noopener">Cotar esta categoria</a>` : `<a class="link" style="margin-top:18px;align-self:flex-start" href="frota.html?codinome=${encodeURIComponent(a.codinome)}">Abrir dossiê ${ICON.arr}</a>`}
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

// ---------- O Hangar: seletor de aeronave ----------
const ORDEM_HANGAR = [3, 2, 1, 0, 5, 4, 7, 6]; // do maior ao menor: longo alcance primeiro
const maxPax = (a) => parseInt(String(a.pax).split('–').pop(), 10);
const num = (s) => parseInt(String(s).replace(/\./g, ''), 10);

function initHangar() {
  const root = document.getElementById('hangar');
  if (!root) return;
  const list = root.querySelector('.hg__list');
  const stage = root.querySelector('.hg__stage');
  const scan = root.querySelector('.hg__scan');
  const itens = ORDEM_HANGAR.map(i => FROTA[i]);
  list.innerHTML = itens.map((a, i) => `<li><button type="button" role="tab" aria-selected="false" data-i="${i}"><i>${String(i + 1).padStart(2, '0')}</i><b>${a.codinome}</b><span>${a.tipo}</span></button></li>`).join('');
  const btns = [...list.querySelectorAll('button')];
  let atual = -1;
  const $ = (sel) => root.querySelector(sel);
  const show = (i, first) => {
    if (i === atual) return;
    i = (i + itens.length) % itens.length;
    atual = i;
    const a = itens[i];
    btns.forEach((b, k) => b.setAttribute('aria-selected', String(k === i)));
    const old = stage.querySelector('img');
    const img = new Image();
    img.src = `img/${a.img}.jpg`; img.alt = `${a.tipo}: ${a.modelos}`;
    img.className = 'out';
    stage.prepend(img);
    const reveal = () => requestAnimationFrame(() => requestAnimationFrame(() => {
      img.classList.remove('out');
      if (old) { old.classList.add('out'); setTimeout(() => old.remove(), 800); }
    }));
    if (img.complete) reveal(); else { img.onload = reveal; img.onerror = reveal; }
    if (!first) { scan.classList.remove('go'); void scan.offsetWidth; scan.classList.add('go'); }
    $('[data-h="num"]').textContent = `Dossiê nº ${String(i + 1).padStart(2, '0')} · ${a.nome}`;
    $('[data-h="cod"]').textContent = a.codinome;
    $('[data-h="tipo"]').textContent = `Codinome · ${a.tipo}`;
    $('[data-h="ideal"]').textContent = a.ideal;
    $('[data-h="models"]').textContent = a.modelos;
    const set = (k, val, max, unit) => {
      $(`[data-m="${k}"] b`).innerHTML = `${val}<small>${unit}</small>`;
      $(`[data-m="${k}"] i`).style.width = Math.min(100, Math.round(num(String(val).split('–').pop()) / max * 100)) + '%';
    };
    set('alcance', a.alcance, 12000, 'km');
    set('vel', a.vel, 900, 'km/h');
    set('pax', a.pax, 16, 'lugares');
    const sel = $('[data-h="selecionar"]');
    sel.dataset.i = i;
    if (!first && innerWidth < 760) btns[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  };
  btns.forEach(b => b.addEventListener('click', () => show(+b.dataset.i)));
  root.querySelector('[data-h="prev"]').addEventListener('click', () => show(atual - 1));
  root.querySelector('[data-h="next"]').addEventListener('click', () => show(atual + 1));
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); show(atual + 1); btns[atual].focus(); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); show(atual - 1); btns[atual].focus(); }
  });
  // arrastar no palco (celular)
  let x0 = null;
  stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) show(atual + (dx < 0 ? 1 : -1));
  });
  // "Selecionar para a missão" leva a aeronave para o briefing
  $('[data-h="selecionar"]').addEventListener('click', () => {
    const a = itens[atual];
    document.dispatchEvent(new CustomEvent('aeronave', { detail: a }));
    const brief = document.getElementById('briefing');
    if (brief) brief.scrollIntoView({ behavior: 'smooth' });
  });
  const pedido = new URLSearchParams(location.search).get('codinome');
  const ini = pedido ? Math.max(0, itens.findIndex(a => a.codinome.toLowerCase() === pedido.toLowerCase())) : 0;
  show(ini, true);
}

// ---------- Briefing da missão: recomenda a aeronave pela distância ----------
const CIDADES = {
  'São Paulo': [-23.63, -46.66], 'Rio de Janeiro': [-22.91, -43.16], 'Belo Horizonte': [-19.85, -43.95], 'Brasília': [-15.87, -47.92],
  'Curitiba': [-25.53, -49.17], 'Florianópolis': [-27.67, -48.55], 'Porto Alegre': [-29.99, -51.17], 'Salvador': [-12.91, -38.33],
  'Recife': [-8.13, -34.92], 'Fortaleza': [-3.78, -38.53], 'Manaus': [-3.04, -60.05], 'Goiânia': [-16.63, -49.22],
  'Ribeirão Preto': [-21.13, -47.78], 'Campinas': [-23.01, -47.13], 'Angra dos Reis': [-23.0, -44.32], 'Campos do Jordão': [-22.74, -45.59],
  'Búzios': [-22.77, -41.96], 'Trancoso': [-16.59, -39.1], 'Fernando de Noronha': [-3.85, -32.42], 'Punta del Este': [-34.85, -55.09],
  'Buenos Aires': [-34.56, -58.42], 'Santiago': [-33.39, -70.79], 'Lima': [-12.02, -77.11], 'Bogotá': [4.7, -74.15],
  'Miami': [25.79, -80.29], 'Orlando': [28.43, -81.31], 'Nova York': [40.64, -73.78], 'Lisboa': [38.77, -9.13],
  'Paris': [49.01, 2.55], 'Londres': [51.28, -0.78], 'Genebra': [46.24, 6.11], 'Dubai': [25.25, 55.36]
};
const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const acharCidade = (s) => { const n = norm(s); return Object.keys(CIDADES).find(c => norm(c) === n); };
function distKm(a, b) {
  const R = 6371, r = Math.PI / 180;
  const [la1, lo1] = CIDADES[a], [la2, lo2] = CIDADES[b];
  const h = Math.sin((la2 - la1) * r / 2) ** 2 + Math.cos(la1 * r) * Math.cos(la2 * r) * Math.sin((lo2 - lo1) * r / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
const fmtH = (h) => { const m = Math.round(h * 60 / 5) * 5; return `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}`; };
// do menor ao maior: helicópteros, turboélices, jatos
const ESCADA = [6, 7, 4, 5, 0, 1, 2, 3].map(i => FROTA[i]);

function recomendar(dist, pax) {
  const rota = dist * 1.08;
  const cabe = ESCADA.filter(a => maxPax(a) >= pax);
  const ok = cabe.filter(a => {
    if (a.cat === 'heli') return rota <= 350;
    if (a.cat === 'turbo') return rota <= Math.min(1400, num(a.alcance) * .85);
    return num(a.alcance) * .9 >= rota;
  });
  let escolha = ok[0], escala = false;
  if (!escolha) { escolha = cabe[cabe.length - 1] || ESCADA[ESCADA.length - 1]; escala = true; }
  const idx = ok.indexOf(escolha);
  const alt = ok.slice(idx + 1).find(a => a.cat === 'jatos' && a !== escolha);
  const horas = rota / num(escolha.vel) + .3 + (escala ? 1.2 : 0);
  return { escolha, alt, horas, escala };
}

// ---------- Destinos: tempo de voo calculado a partir de São Paulo ----------
const DESTINOS = [
  { nome: 'Trancoso', regiao: 'Bahia', img: 'dest-trancoso' },
  { nome: 'Angra dos Reis', regiao: 'Rio de Janeiro', img: 'dest-angra' },
  { nome: 'Punta del Este', regiao: 'Uruguai', img: 'dest-punta' },
  { nome: 'Campos do Jordão', regiao: 'São Paulo', img: 'dest-campos' },
  { nome: 'Miami', regiao: 'Estados Unidos', img: 'dest-miami' },
  { nome: 'Lisboa', regiao: 'Portugal', img: 'dest-lisboa' }
];

function renderDestinos() {
  document.querySelectorAll('[data-destinos]').forEach(el => {
    el.innerHTML = DESTINOS.map((d, i) => {
      const r = recomendar(distKm('São Paulo', d.nome), 4);
      return `<a class="dest rv" style="--d:${(i % 3) * .08}s" href="index.html?destino=${encodeURIComponent(d.nome)}#planejar" data-destino="${d.nome}">
        <img src="img/${d.img}.jpg" alt="${d.nome}, ${d.regiao}" loading="lazy" width="800" height="1000">
        <span class="dest__b">
          <small>${d.regiao}</small>
          <b>${d.nome}</b>
          <span class="dest__meta">${fmtH(r.horas)} de voo · Codinome ${r.escolha.codinome}</span>
          <span class="dest__go">Planejar ${ICON.arr}</span>
        </span>
      </a>`;
    }).join('');
  });
  // na mesma página do planejador, o clique preenche o destino sem recarregar
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('[data-destino]');
    const form = document.querySelector('#briefing form');
    if (!a || !form) return;
    e.preventDefault();
    form.destino.value = a.dataset.destino;
    form.destino.dispatchEvent(new Event('input', { bubbles: true }));
    document.getElementById('briefing').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initBriefing() {
  const box = document.getElementById('briefing');
  if (!box) return;
  const form = box.querySelector('form');
  const out = box.querySelector('.brief__out');
  const dl = document.getElementById('cidades');
  if (dl) dl.innerHTML = Object.keys(CIDADES).map(c => `<option value="${c}">`).join('');
  const fixo = form.querySelector('[name="aeronave"]');
  const chip = box.querySelector('[data-b="chip"]');
  document.addEventListener('aeronave', e => {
    fixo.value = `${e.detail.tipo} (codinome ${e.detail.codinome})`;
    chip.hidden = false;
    chip.querySelector('b').textContent = e.detail.codinome;
    calcular();
  });
  chip.querySelector('button').addEventListener('click', () => { fixo.value = ''; chip.hidden = true; calcular(); });
  const $ = (s) => out.querySelector(s);
  function calcular() {
    const o = acharCidade(form.origem.value), d = acharCidade(form.destino.value);
    const pax = parseInt(form.pax.value, 10) || 1;
    if (!o || !d || o === d) { out.classList.remove('has'); return null; }
    const dist = distKm(o, d);
    const r = recomendar(dist, pax);
    const escolhida = fixo.value ? ESCADA.find(a => fixo.value.includes(a.codinome)) : null;
    const a = escolhida || r.escolha;
    const horas = escolhida ? (dist * 1.08 / num(a.vel) + .3) : r.horas;
    $('.route').textContent = `${o} → ${d}`;
    $('[data-b="titulo"]').textContent = escolhida ? `Sua escolha: ${a.codinome}` : `Recomendado: ${a.codinome}`;
    $('[data-b="tipo"]').textContent = `${a.tipo} · ${a.modelos}`;
    $('[data-b="dist"]').textContent = Math.round(dist).toLocaleString('pt-BR') + ' km';
    $('[data-b="tempo"]').textContent = fmtH(horas);
    $('[data-b="lug"]').textContent = a.pax;
    let alt = '';
    if (escolhida && num(a.alcance) * .9 < dist * 1.08) alt = `Atenção: para este trecho o ${a.codinome} precisa de escala técnica. Sem escala: <b>${r.escolha.codinome}</b> (${r.escolha.tipo.toLowerCase()}).`;
    else if (!escolhida && r.escala) alt = 'Trecho acima do alcance sem escala: previsto um pouso técnico para reabastecimento.';
    else if (!escolhida && r.alt) alt = `Mais espaço a bordo: <b>${r.alt.codinome}</b> (${r.alt.tipo.toLowerCase()}, ${r.alt.pax} lugares).`;
    $('[data-b="alt"]').innerHTML = alt;
    const im = out.querySelector('img');
    if (!im.src.endsWith(`${a.img}.jpg`)) im.src = `img/${a.img}.jpg`;
    out.classList.add('has');
    return { o, d, a, horas, dist };
  }
  const qd = new URLSearchParams(location.search).get('destino');
  if (qd && acharCidade(qd)) form.destino.value = acharCidade(qd);
  form.addEventListener('input', calcular);
  form.addEventListener('change', calcular);
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const r = calcular();
    const data = form.data.value ? form.data.value.split('-').reverse().join('/') : 'a combinar';
    const linhas = [
      'Olá! Pedido de viagem enviado pelo site:',
      `*Rota:* ${form.origem.value} → ${form.destino.value}`,
      `*Data:* ${data}${form.hora.value ? ' às ' + form.hora.value : ''}`,
      `*Passageiros:* ${form.pax.value}`,
      r ? `*Aeronave:* ${r.a.tipo} (codinome ${r.a.codinome})` : '',
      r ? `*Estimativa:* ${Math.round(r.dist).toLocaleString('pt-BR')} km · ${fmtH(r.horas)} de voo` : '',
      form.obs.value.trim() ? `*Observações:* ${form.obs.value.trim()}` : ''
    ].filter(Boolean);
    window.open(waLink(linhas.join('\n')), '_blank', 'noopener');
  });
  calcular();
}

// Paleta: Executiva (preto e dourado) ou Atual (azul Flysy). Só para o cliente escolher na prévia.
function initTema() {
  const root = document.documentElement;
  const box = document.createElement('div');
  box.className = 'tema';
  box.setAttribute('role', 'group');
  box.setAttribute('aria-label', 'Paleta de cores');
  box.innerHTML = '<span>Paleta</span><button type="button" data-t="executiva">Executiva</button><button type="button" data-t="azul">Atual</button>';
  const sync = () => box.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String((root.dataset.tema || 'executiva') === b.dataset.t)));
  box.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.t === 'azul') root.dataset.tema = 'azul'; else delete root.dataset.tema;
    try { localStorage.setItem('flysy-tema', b.dataset.t); } catch (err) {}
    sync();
  });
  sync();
  document.body.appendChild(box);
}

montarCabecalho();
montarRodape();
renderListas();
initFiltros();
initMenu();
initTopbar();
initForms();
initHangar();
renderDestinos();
initBriefing();
initWaLinks();
initReveal();
initTema();
