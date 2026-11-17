# Eduardo Almeida · Aviação Executiva

Site institucional de fretamento de jatos, turboélices e helicópteros, missões especiais e compra e venda de aeronaves. Sem build nem dependências: HTML, CSS e JavaScript puros.

## Páginas
- `index.html`: início (cotação rápida, soluções, frota, como funciona, aeronaves à venda, perguntas frequentes)
- `servicos.html`: fretamento (jatos, helicópteros, turboélices, contas corporativas, trechos de oportunidade, missões especiais)
- `frota.html`: categorias de aeronaves com filtro e referência de rotas
- `aeronaves.html`: aeronaves à venda (aba separada), busca sob encomenda, serviços para proprietários e formulário de avaliação
- `sobre.html`: a empresa, princípios e conformidade
- `contato.html`: canais e formulário completo de cotação

## Onde editar
- **Contatos** (WhatsApp, telefone, e-mail, endereço): objeto `CONTATO` no início do `script.js`.
- **Frota**: lista `FROTA` no `script.js`.
- **Aeronaves à venda**: lista `VENDA` no `script.js` (modelo, ano, horas, assentos, local, foto, etiqueta).
- **Cores e fontes**: variáveis no início do `style.css` (navy, marfim e champanhe; Cormorant Garamond + Inter Tight).
- Cabeçalho e rodapé são montados pelo `script.js`, então qualquer mudança vale para todas as páginas.

Os formulários não guardam dados: montam a mensagem e abrem o WhatsApp.

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
