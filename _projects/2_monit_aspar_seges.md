---
layout: page
title: Aplicação web para monitoramento legislativo
description: Aplicação web para consultar proposições legislativas de temas específicos que tiveram tramitação nos últimos 60 dias na Câmara dos Deputados e nos últimos 30 dias na Câmara dos Deputados Senado Federal.
img: assets/img/national-congress-of-brazil.png
importance: 2
category: trabalho
---

### Aplicação web para monitoramento legislativo

Este aplicativo permite consultar proposições legislativas que tiveram tramitação nos últimos 60 dias na Câmara dos Deputados e nos últimos 30 dias na Câmara dos Deputados Senado Federal. As proposições exibidas são relacionadas a temas de interesse específicos, tais como:

- Gestão pública
- Inovação da gestão pública
- Central de compras
- Programa de gestão e desempenho

A lista de todos os verbetes utilizados está [aqui](https://github.com/lab-dados-seges/monitoramento-parlamentar-seges/blob/main/verbetes.txt).

O objetivo é facilitar o acompanhamento de matérias legislativas relevantes, apresentando informações detalhadas e links para tramitação e documentos completos. Há a possibilidade de exportar os dados para análise em planilhas.

No [repositório do GitHub do projeto](https://github.com/lab-dados-seges/monitoramento-parlamentar-seges) é possível acessar os scripts de consulta da API, assim como a configuração da atualização via GitHub actions.

### Funcionalidades
- Consulta de dados legislativos da Câmara e do Senado via API.
- Filtragem por temas de interesse pré-selecionados.
- Exportação de resultados em formato Excel.
- Atualizações diárias automatizadas via GitHub Actions (exceto nos finais de semana).

### Acesso ao Monitoramento

Para acessar o monitoramento clique no link abaixo:

🔗 [Monitoramento Legislativo](https://monitora-parlamentar-seges.streamlit.app/)

> **Nota:** Caso o aplicativo exiba a mensagem *"This app is sleeping"* ou algo semelhante, clique no botão **"Wake up app"** para reativá-lo. O processo pode levar alguns segundos.

---

<small> O ícone utilizado na capa deste projeto foi criado por [Freepik - Flaticon](https://www.flaticon.com/free-icons/register). </small>