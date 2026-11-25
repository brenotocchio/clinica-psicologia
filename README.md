# Landing page — Fernanda Andreatta | Psicóloga CRP 06/187943

Site estático (HTML + CSS + JS, sem dependências). Basta enviar a pasta para qualquer hospedagem (Hostinger, Netlify, Vercel, GitHub Pages etc.).

```
index.html        página única com todas as seções + Schema (JSON-LD)
css/styles.css    estilos (mobile-first)
js/main.js        menu, link do WhatsApp com mensagem, animações, carrossel
assets/img/       imagens (as .svg atuais são provisórias)
robots.txt, sitemap.xml
```

## Antes de publicar

1. **Fotos reais** — substitua em `assets/img/` (de preferência em .webp ou .jpg comprimido, < 200 KB cada) e atualize o `src` no `index.html`:
   - `fernanda-hero` (vertical 3:4, ~900×1200)
   - `fernanda-sobre` (4:5, ~800×1000)
   - `consultorio-1` e `consultorio-2` (4:3, ~1200×900)
   - `og-image.jpg` (1200×630, imagem de compartilhamento)
2. **Itens a confirmar** (procure por `CONFIRMAR` no `index.html`):
   - graduação (instituição/ano) na seção Sobre
   - dias e horários de atendimento
   - política de convênio/reembolso (FAQ)
   - duração/frequência das sessões (texto atual: ~50 min, em geral semanais)
3. **Domínio** — troque `https://www.fernandaandreatta.com.br/` pelo endereço definitivo no `index.html`, `robots.txt` e `sitemap.xml`.
4. **Google Business Profile** — crie/atualize o perfil com o mesmo nome, endereço e telefone do site (importante para "psicóloga em Araçatuba").

## Checagem ética (CFP, Art. 20)
Nome completo + CRP no topo e no rodapé · sem depoimentos · sem valores/promoções · sem promessas de resultado · sem comparação com colegas. Para atendimento online, mantenha o cadastro no e-Psi em dia.
