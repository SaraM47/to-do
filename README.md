# Moment 2 - Att göra lista

Denna laboration handlar om att skapa en att göra lista (todo-list) applikation, där användaren ska kunna skapa och radera föremål av todos samtidgt har möjlighet att justera föremålets status. Syftet med denna uppgift är att få förståelse för tillståndhantering i React, skapa flera komponeter och få kunskap kring att hämta och hantera data dynmaiskt med useEffect. Applikationen består av en React-frontend i TypeScript och ett backend-API byggt med Fastify och MongoDB.

---

## Publicerad webbplats

Länk till publicerad webbplats via Netlify: [Todo-list](https://).

---

## Funktionalitet

Applikationen är en interaktiv Todo-lista som stödjer full CRUD-funktionalitet för todos där användaren kan hantera sina uppgifter på ett strukturerat sätt. Följande funktioner är implementerade:

* Skapa nya uppgifter med titel, valfri beskrivning och vald status.

* Inbyggd validering av formulärdata innan en uppgift sparas.

* Möjlighet att uppdatera status för en uppgift till ej påbörjad, pågående eller avklarad.

* Ta bort befintliga uppgifter.

* Responsiv layout som fungerar på både mobil och desktop.

* Visuell laddningsindikator (React Spinners) medan data hämtas från backend.

---

## Installation
```bash
npm install
npm run dev
```