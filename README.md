# hobby-agenda

Een persoonlijke hobby agenda om activiteiten te plannen, bekijken en beheren.

##  Installatie

1. Clone de repository:
   git clone https://github.com/baraanakawah-cell/hobby-agenda.git

2. Ga naar de map:
   cd hobby-agenda

3. Installeer de dependencies:
   npm install

4. Start de applicatie:
   npm run dev

5. Open je browser op http://localhost:3000

##  Functionaliteiten

- **Agendaweergave** — chronologische lijst van activiteiten per dag
- **Kalenderweergave** — maandkalender met activiteiten op datum
- **Activiteit toevoegen** — formulier met validatie
- **Detailweergave** — modal met alle informatie, bewerken en verwijderen
- **Filteren** — filter activiteiten per hobby categorie
- **Categorieën** — 5 hobby categorieën elk met eigen kleur en icoon

##  Hobby Categorieën

-  Sporten
-  Muziek
-  Lezen
-  Gaming
-  Reizen

##  Technische keuzes

- **Next.js + TypeScript** — moderne React framework met type-veiligheid
- **Tailwind CSS** — snelle en consistente styling
- **localStorage** — data opslag in de browser, geen backend nodig
- **react-big-calendar** — kalender component, niet zelf bouwen bespaart tijd
- **date-fns** — datum formatting in het Nederlands

##  Projectstructuur

- app/ — Next.js paginas
- components/ — herbruikbare React componenten
- lib/ — hulpfuncties voor opslag en categorieën
- types/ — TypeScript type definities
