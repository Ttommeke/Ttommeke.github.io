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
                        "Mijn reflextie over al deze kleine zken is eigenlijk een samenstelling van allemaal kleine dingen die ik op elke ervaring heb geleerd. Het is als het waren een lapendeken van ervaringen en verworven ideëen.",
                        "Ik vindt bijvoorbeeld dat initiatief nemen een zeer belangrijke eigenschap is. het is een eigenschap die op zichzelf weinig betekenis heeft, maar in combinatie met andere zeer veel kan verwezenlijke. Bijvoorbeeld met creativiteit of als je goed bent in plannen. Door initiatief te nemen kan je andere bepaalde problemen oplossen op een veel grotere schaal. Zoals bij ING kon frank met zijn manegment skills een beetje creativiteit en veel initiatief een hele IT-Dienst omvormen.",
                        "Smartbeehive leerde mij het nut van documentatie en waarom het zeer vervelend is als deze er niet is. Een 9 maanden na het opleveren van het project vroeg Tom Schuyten iets technisch. Ik moest dit helemaal uitpluizen voor ik hem het antwoord kon geven. Mocht ik minder mijn voeten hebben geveegt aan die documentatie dan was dit niet gebeurt",
                        "Tutoring heeft mij geholpen mensen te leren begrijpen. Waar zitten de problemen en hoe kunnen we deze oplossen. Is de leerstof een probleem of ligt het eventueel dieper? Te weinig zelfvertrouwen, bang om te proberen, slechte attitude, ... Er is meer aan een mens dan enkel zijn leer capacitiet. Motivaties, attitude, durven falen, ... dit zijn allemaal zeer belangrijke kenmerken",
                        "Het buisness verhaal is minstens even belangrijk als de IT aspect. Op de Soundtouch hackaton zijn we beloond voor onze app met de tweede prijs. Zowel ons technische verhaal als ons idee en buisness verhaal zat goed. Dit gaf de doorslag voor de jury.",
                        ""
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