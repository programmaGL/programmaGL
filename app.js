// Punten component
var PuntenListing = Vue.extend({
  template: '#punten-listing-template',
  data: function() {
    return {
      punten: this.$parent.punten
    }
  }
});

// Punt component
var PuntDetail = Vue.extend({
  template: '#punt-detail-template',
  data: function() {
    var punt;
    for (var i = 0; i < this.$parent.punten.length; i++) {
      if(this.$parent.punten[i].slug == this.$route.params.slug) {
        punt = this.$parent.punten[i];
        break;
      }
    }

    return {
      punt: punt
    }
  }
});

// Create the router
var router = new VueRouter({
  routes: [
    {path: '/', component: PuntenListing},
    {name: 'punt', path: '/:slug', component: PuntDetail }
  ]
});


var app = new Vue({
  router,
  data: {
    punten: [{"id":"98a1e854-eda2-4159-ad1a-158c6cafeecb","tekst_kort":"We voeren een Klimaatwet in","tekst_vol":"We voeren een Klimaatwet in die ervoor zorgt dat de uitstoot van broeikasgassen ten opzichte van 1990 omlaaggaat met ten minste 25 procent in 2020, 55 procent in 2030 en 95 procent in 2050. Uiterlijk in 2050 hebben we alleen nog schone energie. Nederland streeft naar twee tot drie procent energiebesparing per jaar. De Klimaatwet garandeert dat Nederland met de maatregelen die genomen worden deze doelstellingen haalt.","slug":"klimaatwet","url":"https://groenlinksprogramma.nl/klimaatwet/","hoofdstuk":1,"paragraaf":1,"nummer":1},{"id":"90d9c7aa-bc0b-4b37-8a82-2d3c8b541a16","tekst_kort":"Deze kabinetsperiode sluiten we de kolencentrales. In Nederlandse havens wordt de overslag van kolen gestaakt.","tekst_vol":"Deze kabinetsperiode sluiten we de kolencentrales. In Nederlandse havens wordt de overslag van kolen gestaakt. Er wordt een begin gemaakt met het uitfaseren van olie-, benzine- en dieselterminals.","slug":"kolencentrales","url":"https://groenlinksprogramma.nl/kolencentrales/","hoofdstuk":1,"paragraaf":1,"nummer":2},{"id":"7fb2c46e-b20f-4302-90ac-0570cfb53424","tekst_kort":"De kerncentrale in Borssele gaat dicht. Er komen geen nieuwe kerncentrales.","tekst_vol":"De kerncentrale in Borssele gaat dicht. Er komen geen nieuwe kerncentrales. De Nederlandse onderzoeksreactoren worden uitgefaseerd naarmate voldoende vervangende faciliteiten zijn gerealiseerd die nauwelijks tot geen radioactief afval veroorzaken. We schuiven de problemen rond het radioactieve afval niet door naar volgende generaties. Ook voor radioactief afval geldt dat de vervuiler de kosten betaalt.","slug":"kerncentrale","url":"https://groenlinksprogramma.nl/kerncentrale/","hoofdstuk":1,"paragraaf":1,"nummer":3},{"id":"65a6faf3-8286-43dd-b10f-1034fc1e6ae5","tekst_kort":"Met het huidige belastingstelsel wordt milieuvervuiling gesubsidieerd en werk- gelegenheid belast. Dat gaan we omkeren.","tekst_vol":"Met het huidige belastingstelsel wordt milieuvervuiling gesubsidieerd en werk- gelegenheid belast. Dat gaan we omkeren. We stoppen met de subsidies op gas. Grootverbruikers gaan evenredig betalen voor CO2-uitstoot. Duurzame energie en energiebesparing worden scaal gestimuleerd. Schone energie, bijvoorbeeld opgewekt met zonnepanelen, wordt voor kleinverbruikers en Verenigingen van Eigenaren niet belast. Netbeheerders krijgen de taak en de ruimte om de overgang naar een schone energievoorziening te faciliteren. Wetgeving en het belastingsysteem worden verder beter ingericht voor het energiesysteem van de toekomst, bijvoorbeeld met variabele tarieven om vraag en aanbod af te stemmen en een vergoeding voor opslagcapaciteit. Overheden krijgen geen korting meer op de energiebelasting bij grootverbruik. Dit wordt gecompenseerd via het Gemeentefonds.","slug":"groen-belastingstelsel","url":"https://groenlinksprogramma.nl/groen-belastingstelsel/","hoofdstuk":1,"paragraaf":1,"nummer":4},{"id":"647cf612-a81f-4d22-9316-e6e4e762dd13","tekst_kort":"Er komt een heffing op CO2-uitstoot zodat de uitstoot omlaaggaat.","tekst_vol":"Er komt een heffing op CO2-uitstoot zodat de uitstoot omlaaggaat. Deze CO2-hef ng wordt breed ingevoerd, ook voor bedrijven die nu niet onder het emissiehandelssysteem vallen. In Europees verband willen we het overschot aan emissierechten schrappen en een einde maken aan het gratis weggeven van CO2-rechten. Zolang dat niet geregeld is, zorgt de CO2-hef ng voor een bodemprijs voor CO2. Zo stimuleert de prijs van CO2 de overgang naar een duurzame economie.","slug":"co2-heffing","url":"https://groenlinksprogramma.nl/co2-heffing/","hoofdstuk":1,"paragraaf":1,"nummer":5},{"id":"dcb82d26-a285-49c8-9217-f61b6cc9b743","tekst_kort":"Uitgangspunt bij de gaswinning in Groningen is de veiligheid van de inwoners.","tekst_vol":"Uitgangspunt bij de gaswinning in Groningen is de veiligheid van de inwoners. De gaswinning in Groningen wordt teruggeschroefd naar maximaal 21 miljard kuub per jaar. Jaarlijks wordt een nieuw besluit genomen over de verdere verlaging. Schade door mijnbouwactiviteiten wordt volledig vergoed. Proefboringen en zoutwinning in het Waddengebied worden niet toegestaan. Er worden geen vergunningen verstrekt voor boringen naar schaliegas en geen nieuwe vergunningen voor boren naar steenkoolgas. Er komt een exit-strategie voor het winnen van fossiele brandstoffen; we stappen zo snel mogelijk af van het gebruik van fossiel gas. Nederland moet hierbij een leidende rol vervullen. In lege gasvelden en zoutcavernes worden geen stoffen opgeslagen die op den duur een gevaar kunnen vormen voor de volksgezondheid of ons leefmilieu.","slug":"gaswinning-groningen","url":"https://groenlinksprogramma.nl/gaswinning-groningen/","hoofdstuk":1,"paragraaf":1,"nummer":6},{"id":"939dc386-1393-4d73-87dc-c7a9f7099a66","tekst_kort":"De subsidie voor het verbranden van vaste biomassa wordt beëindigd voor kolencentrales en uitgefaseerd voor andere installaties","tekst_vol":"De subsidie voor het verbranden van vaste biomassa wordt beëindigd voor kolencentrales en uitgefaseerd voor andere installaties voor stroom- en warmteproductie. Voor de gehele keten van ge mporteerde biomassa die wordt gebruikt voor de productie van energie worden strenge duurzaamheidscriteria opgenomen in de wet.","slug":"subsidie-biomassa","url":"https://groenlinksprogramma.nl/subsidie-biomassa/","hoofdstuk":1,"paragraaf":1,"nummer":7},{"id":"e5babd8f-6b98-4d00-aebc-19a4375980e8","tekst_kort":"De toekomst van onze economie is groen.","tekst_vol":"De toekomst van onze economie is groen. De verantwoordelijkheid voor economie, klimaat en energie moet onder één bewindspersoon vallen. Daarom komt er een ministerie voor Klimaat en Duurzame Economie.","slug":"toekomst-economie-groen","url":"https://groenlinksprogramma.nl/toekomst-economie-groen/","hoofdstuk":1,"paragraaf":1,"nummer":8},{"id":"0b0f0a10-efad-45ba-8840-5854ee856b5b","tekst_kort":"Er komt een Groene investeringsbank die de marktsector stimuleert","tekst_vol":"Er komt een Groene investeringsbank die de marktsector stimuleert om samen met de overheid meer te investeren in grote groene projecten, innovatie en duurzame landbouw. De ontwikkeling van nieuwe technologie laten we niet alleen aan de markt over. De overheid werkt samen met kapitaalverschaffers, universiteiten en innovatieve bedrijven om technologische ontwikkeling te stimuleren en de economie te vergroenen. Groene start-ups krijgen de kans om de markt in beweging te zetten. Zo ontstaan clusters voor groene innovatie, bijvoorbeeld een Green Car Valley voor elektrische mobiliteit in Zuid-Nederland.","slug":"groene-investeringsbank","url":"https://groenlinksprogramma.nl/groene-investeringsbank/","hoofdstuk":1,"paragraaf":2,"nummer":9}]
  }
}).$mount('#app');
