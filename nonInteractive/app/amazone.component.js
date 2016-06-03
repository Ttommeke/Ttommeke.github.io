System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AWSComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AWSComponent = (function () {
                function AWSComponent() {
                    this.jump_id = "aws";
                    this.title = "AWS Amazon semenary!";
                    this.paragraphs = [
                        "INLEIDING",
                        "The AWS Amazon semenarie presenteerde men welke nieuwe innovatieve functionaliteiten de AWS Cloud had en hoe je deze kan gebruiken. Dit semenarie werd vlak voor de Bose Sound Touch Hackaton georganizeerd. Amazon was namelijk een sponsor van de hackaton en voorzag voor elk team een kosteloze AWS account.",
                        "VERSLAG",
                        "Eén van de meest inovatieve ideëen in de AWS Cloud was het concept van een Lambda. Een Lambda is eenvoudigweg een stukje code dat kan worden uitgevoerd, net zoals in een lambda in een programmeer taal. Deze lambda kan hierna gekoppeld worden aan eender welk event binnen de AWS Cloud. Bijvoorbeeld, een server crashed om welke reden dan ook, en dit genereerd een event. Nu kan je dit crash event koppelen aan een lambda die in een database de log informatie van de crash bij houd, of jou eventueel een email of berichtje sturen. Maar dit kan verder gaan. Een lambda zou bijvoorbeeld een andere service die van jou server gebruik maakt, kunnen laten weten dat er een crash is. Op die manier kan je de andere service bijvoorbeeld in fail safe modus laten gaan of bepaalde data laten cachen tot de volgende gecrashte service terug is opgestart.",
                        "En net op die events speelt Amazon graag in! Hun tweede nieuwe feature die ze voorstelden was de API gateway. Amazon zag dat er zeer vaak dezelfde configuraties werden geschreven voor een REST server, en dacht meteen aan hun lambda's en events! Ze stelden een eenvoudige webinterface in, waarmee je een rest service kon opstellen. Wanneer je nu een REST-call deed, werd er een event binnen de AWS Cloud gegeneerd. En aan dat event kan je eenvoudig weg een lamda koppelen of de info zelfs rechtstreeks in een database steken. Op deze manier kon je op een zeer eenvoudige manier een grote REST-API aanmaken. Het voordeel hiervan is dat deze API automatische mee schaalt met de grote van je publiek. Waarom? Omdat een lambda slechts een stukje code is dat moet worden uitgevoerd. Dit kan op eender welke machine worden uitgevoerd. In tegen stelling van een Spring applicatie volledig zou moeten worden opgestart. Dit systeem van Lambda's is hierdoor veel schaalbaarder. Een nadeel hieraan is dat je bij het gebruik van deze structuur vast zit aan Amazon. Er is momenteel geen enkele andere Cloud host service die dit aanbied, waardoor je niet kan switchen. Wanneer Amazon zijn prijzen bijvoorbeeld verhoogt of stopt met de service, zou je niet zo eenvoudig kunnen switchen van cloud aanbieder als bij een Spring applicatie.",
                        "Als laatste werd de nieuwste aanwinst binnen hun familie gepresenteerd. De DynamoDB! DynamoDB is een non-sql database. Momenteel één van de snelste die er bestaat. Wat DynamoDB zo interessant maakt, is zijn prijs. De prijs van de DynamoDB licht ver onder de rest van de markt. Hoe is dit mogelijk? Deze database is zo light weight gemaakt, dat zijn kost om hem te hosten en zijn vraag naar resourcesvan de server minimaal zijn. Dit maakt dat de DynamoBD super goedkoop is. Het feit dat het een product is van Amazon zelf en dat ze het op deze manier proberen te promoten kan ook geholpen hebben in de lage prijs.",
                        "Wat is nu mijn conclusie over dit semenarie? Amazon is zeer inovatief op vlak van Cloud Solutions en is zeker de mozeite waard om verder op te volgen. Alleen moet je je ervan bewust zijn dat sommige services nog niet beschikbaar zijn bij anderen waardoor Amazon voorlopig een monooly heeft op somige vlakken.",
                        "REFLECTIE",
                        "Ik vond dit semenarie zeer interessant omdat het veel nieuwe perspectieven opende. Persoonlijk vond ik de nieuwe technieken zeer inoverend en losten ze echt problemen op! Geen wonder dat AWS de grootste aanbieder is van cloud infrastructuur ter wereld. Met deze technieken vind ik het persoonlijk veel eenvoudiger om nieuwe dingen te leren en uit te testen. Met een API-gateway is het zeer eenvoudig om een simpele REST-service op te zetten. Hierdoor kan je veel meer tijd steken in je frontend applicatie bijvoorbeeld. Of een probeersel van jou online zetten en effectief mensen jou applicatie laten uitproberen zonder dat jij je zorgen moet maken over servers en schaalbaarheid en performantie, ... Het gaf mij persoonlijk ook meer het gevoel dat echte innovatie in een bedrijf of van een product echt het verschil kan maken tussen u en een concurent! Met andere woorden als je een startup wil starten, moet je idee zeer goed zitten. Als eerste wil je dat je oplossing een probleem oplost. Een groot en belangrijk probleem liefst. Met lambda's hoef je je bijvoorbeeld niet meer druk te maken over je schaalbaarheid. Punt twee is dat je doel van je oplossing zeer duidelijk is! Het moet een logische keuze zijn om voor jou product te kiezen. De klant moet in zijn hoofd denken: 'Dit is het beste wat ik ooit gezien heb! Ik wilhet gebruiken!'. En punt drie is dat het zakelijke concept achter jou idee ook interessant is voor de klant. Je wil dat jou oplossing geld bespaard, minder duur is of een geweldige prijs/kwaliteits verhouding heeft. Al deze punten zitten gewoon snor bij de producten van Amazon."
                    ];
                }
                AWSComponent = __decorate([
                    core_1.Component({
                        selector: 'aws-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AWSComponent);
                return AWSComponent;
            }());
            exports_1("AWSComponent", AWSComponent);
        }
    }
});
//# sourceMappingURL=amazone.component.js.map