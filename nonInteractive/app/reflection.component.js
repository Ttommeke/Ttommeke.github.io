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
    var ReflectionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReflectionComponent = (function () {
                function ReflectionComponent() {
                    this.jump_id = "reflection";
                    this.title = "Reflectie!";
                    this.paragraphs = [
                        "Mijn reflextie over al deze kleine activiteiten is eigenlijk een samenstelling van allemaal kleine dingen die ik op elke ervaring heb geleerd. Het is als het waren een lapendeken van ervaringen en verworven ideëen.",
                        "Ik vindt bijvoorbeeld dat initiatief nemen een zeer belangrijke eigenschap is. het is een eigenschap die op zichzelf weinig betekenis heeft, maar in combinatie met andere zeer veel kan verwezenlijke. Bijvoorbeeld met creativiteit of als je goed bent in plannen. Door initiatief te nemen kan je andere bepaalde problemen oplossen op een veel grotere schaal. Zoals bij ING kon frank met zijn manegment skills een beetje creativiteit en veel initiatief een hele IT-Dienst omvormen.",
                        "Smartbeehive leerde mij het nut van documentatie en waarom het zeer vervelend is als deze er niet is. Een 9 maanden na het opleveren van het project vroeg Tom Schuyten iets technisch. Ik moest dit helemaal uitpluizen voor ik hem het antwoord kon geven. Mocht ik minder mijn voeten hebben geveegt aan die documentatie dan was dit niet gebeurt",
                        "Tutoring heeft mij geholpen mensen te leren begrijpen. Waar zitten de problemen en hoe kunnen we deze oplossen. Is de leerstof een probleem of ligt het eventueel dieper? Te weinig zelfvertrouwen, bang om te proberen, slechte attitude, ... Er is meer aan een mens dan enkel zijn leer capacitiet. Motivaties, attitude, durven falen, ... dit zijn allemaal zeer belangrijke kenmerken",
                        "Het buisness verhaal is minstens even belangrijk als de IT aspect. Op de Soundtouch hackaton zijn we beloond voor onze app met de tweede prijs. Zowel ons technische verhaal als ons idee en buisness verhaal zat goed. Dit gaf de doorslag voor de jury.",
                        "Wat vond ik op het einde van het vak ITalent... Wel het was ok! Van de activiteiten heb ik veel geleerd en ik had er ook zeer veel plezier in om deze uit te voeren. Tutoring gaf me voldoening en het is altijd leuk een hackaton te winnen. Ook het Smartbeehive project was leuk om met iets nieuws bezig te zijn. Als ik de activiteiten niet leuk zou vinden, had ik nooit meer dan 200 uur gehaald. Nu denk ik wel dat ik deze activiteiten ook had gedaan zonder de verplichtingen van ITalent om 160 uren te halen.",
                        "Het is te zeggen, ik had enkele semenaries niet gevolgd. De reden hiervoor is dat ik de meeste ervan totaal niet interessant vond. Niet omdat het onderwerp mij niet aansprak, en niet voor de spreker die een slechte naam zou hebben maar ik vond de meeste semenaries nogal rommelig of slecht gepresenteerd. Een hands on semenarie waarbij je als presentator zelf code schrijft, live is bijvoorbeeld een slecht idee. Er kan van alles mis lopen en er vallen van die akward stiltes. Als je dan ook nog eens de studenten laat mee doen Moet je of te wel wachten op de traagste, maar dan vervelen de snelste zich. Of je gaat te snel waardoor de tragere in de groep afhaken doordat ze niet kunnen volgen.",
                        "Drie uur volledig theorie geven is ook weer een slecht idee. Niemnd zit hierop te wachten tenzij je een zeer goede spreker bent. Ik ga persoonlijk liever naar presentaties van een uur, dan naar lange presentaties waar ik zeer weinig uithaal."
                    ];
                }
                ReflectionComponent = __decorate([
                    core_1.Component({
                        selector: 'reflection-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReflectionComponent);
                return ReflectionComponent;
            }());
            exports_1("ReflectionComponent", ReflectionComponent);
        }
    }
});
//# sourceMappingURL=reflection.component.js.map