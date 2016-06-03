import {Component} from 'angular2/core';

@Component({
    selector: 'whoishe-comp',
    templateUrl: 'app/block.component.html'
})
export class WhoisheComponent {
    jump_id = "who-am-i";
    title = "Who am i?";
    paragraphs = [
        "Ik ben Tom Valkeneers, geboren op 14 autgustus 1995 en mijn thuishaven bevind zich in Hoeselt.",
        "Mijn vrije tijd besteed ik aan Kazou. Kazou is een organisatie die vacanties organiseerd voor kinderen en tieners. Zowel in Belgie als in de rest van Europa. Binnen Kazou Ben ik hoofd leider. In andere woorden organizeer ik een vacantie en coach ik mijn andere leiding. Ik haal hier zeer veel voldoening uit! Het is ook super fijn. Gedurende een vakantie ben je een beetje afgesloten van de wereld en kan je volledig voor een top week gaan. Het is een beetje stoom afblazen en stress wegweren. Spelen met de kinderen en vooral het coachen van mijn team en organizeren van een vacatie geeft mij zeer veel voldoening.",
        "De rest van mijn vrije tijd besteed ik aan het spelen met nieuwe dingen en technologiën. Meestal in de vorm van kleine hobby projectjes waarmee ik iets probeer te maken met een nieuwe technologie. Dingen zoals IoT, met een Raspberry Pi of een arduino. Het is geweldig om met iets wat ik heb gemaakt, andere te verrassen of aan het lachen te brengen! Ik hou van programeren, maar niet door het programeren zelf. Ik hou ervan omdat ik nieuwe coole dingen kan maken met mijn programmeer vaardig heden. In andere woorden, ik hou ervan een product te ontwikkelen, niet om een app of website te programeren."
    ];
}
