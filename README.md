# FlyVIP · Aviação Executiva

Site institucional de fretamento de jatos, turboélices e helicópteros, missões especiais e compra e venda de aeronaves. Sem build nem dependências: HTML, CSS e JavaScript puros.

## Páginas
- `index.html`: início com foco na **viagem**: planejador de viagem (tempo de voo e aeronave indicada), porta a porta, destinos, tipos de viagem, a bordo; a aeronave e a compra e venda vêm depois, como apoio
- `servicos.html`: **Viagens** (negócios, família e férias, traslados de helicóptero, internacional, contas corporativas, destinos, trechos de oportunidade, missões especiais)
- `frota.html`: **O Hangar**, seletor de aeronaves com codinomes, ficha técnica em barras e **briefing da missão** (calcula distância, tempo de voo e indica a aeronave)
- `aeronaves.html`: aeronaves à venda (aba separada), busca sob encomenda, serviços para proprietários e formulário de avaliação
- `sobre.html`: a empresa, princípios e conformidade
- `contato.html`: canais e formulário completo de cotação

## Onde editar
- **Contatos** (WhatsApp, telefone, e-mail, endereço): objeto `CONTATO` no início do `script.js`.
- **Frota e codinomes**: lista `FROTA` no `script.js` (Atlântico, Soberano, Vanguarda, Ágil, Planalto, Sertão, Litoral, Metrópole).
- **Cidades do planejador**: lista `CIDADES` no `script.js` (nome e coordenadas).
- **Destinos em destaque**: lista `DESTINOS` no `script.js` (o tempo de voo é calculado sozinho).
- **Aeronaves à venda**: lista `VENDA` no `script.js` (modelo, ano, horas, assentos, local, foto, etiqueta).
- **Cores e fontes**: variáveis no início do `style.css` e no bloco *BLACK TIE* no fim dele (preto-grafite e dourado champanhe; Cormorant Garamond + Inter Tight).
- Cabeçalho e rodapé são montados pelo `script.js`, então qualquer mudança vale para todas as páginas.

Os formulários não guardam dados: montam a mensagem e abrem o WhatsApp.

## Paletas
O site tem duas paletas, para o cliente escolher na prévia (botão "Paleta" no rodapé da tela, ou `?tema=azul` / `?tema=executiva` no endereço):
- **Executiva:** preto-grafite e dourado champanhe, títulos em Cormorant Garamond.
- **Atual:** fundo branco, textos em grafite e detalhes no azul FlyVIP, títulos em Sora. Fotos sem filtro colorido.

As cores ficam nas variáveis do `style.css` (bloco `html[data-tema="azul"]`). Depois da escolha, basta fixar a paleta e tirar o botão (`initTema` no `script.js`).

## Direção visual
Tema *black tie*: a sensação de um agente de terno entrando no hangar para escolher a aeronave da missão. Entrada com tarjas de cinema, luz dourada, textura de filme e dossiês "confidenciais". Nenhuma marca, logo, número ou música de franquia de cinema é usada.

## Fotos
Pasta `img/`, todas do Unsplash (licença de uso comercial livre). Trocar pelas fotos reais do cliente quando possível.

## Publicar no GitHub Pages
Settings → Pages → Source: **Deploy from a branch** → Branch `main` / `(root)` → Save.

## Modo prévia (demonstração)
Enquanto o site não é oficial, todas as páginas carregam `preview.js` (tela de aviso, marca-d'água e envios bloqueados) e estão bloqueadas para buscadores.

Para publicar o site oficial:
1. Apague `preview.js`.
2. Remova de cada página as linhas `<script src="preview.js"></script>` e `<meta name="robots" content="noindex, nofollow">`.
3. Troque o `robots.txt` por `User-agent: *` / `Allow: /`.
4. Revise os números, depoimentos e anúncios ilustrativos.
