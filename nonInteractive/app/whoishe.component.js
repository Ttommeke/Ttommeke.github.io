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
    var WhoisheComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WhoisheComponent = (function () {
                function WhoisheComponent() {
                    this.jump_id = "who-am-i";
                    this.title = "Who am i?";
                    this.paragraphs = [
                        "Ik ben Tom Valkeneers, geboren op 14 autgustus 1995 en mijn thuishaven bevind zich in Hoeselt.",
                        "Mijn vrije tijd besteed ik aan Kazou. Kazou is een organisatie die vacanties organiseerd voor kinderen en tieners. Zowel in Belgie als in de rest van Europa. Binnen Kazou Ben ik hoofd leider. In andere woorden organizeer ik een vacantie en coach ik mijn andere leiding. Ik haal hier zeer veel voldoening uit! Het is ook super fijn. Gedurende een vakantie ben je een beetje afgesloten van de wereld en kan je volledig voor een top week gaan. Het is een beetje stoom afblazen en stress wegweren. Spelen met de kinderen en vooral het coachen van mijn team en organizeren van een vacantie geeft mij zeer veel voldoening.",
                        "De rest van mijn vrije tijd besteed ik aan het spelen met nieuwe dingen en technologiën. Meestal in de vorm van kleine hobby projectjes waarmee ik iets probeer te maken met een nieuwe technologie. Dingen zoals IoT, met een Raspberry Pi of een arduino. Het is geweldig om met iets wat ik heb gemaakt, andere te verrassen of aan het lachen te brengen! Ik hou van programeren, maar niet door het programeren zelf. Ik hou ervan omdat ik nieuwe coole dingen kan maken met mijn programmeer vaardigheden. In andere woorden, ik hou ervan een product te ontwikkelen, niet om een app of website te programeren."
                    ];
                }
                WhoisheComponent = __decorate([
                    core_1.Component({
                        selector: 'whoishe-comp',
                        templateUrl: 'app/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], WhoisheComponent);
                return WhoisheComponent;
            }());
            exports_1("WhoisheComponent", WhoisheComponent);
        }
    }
});
//# sourceMappingURL=whoishe.component.js.map