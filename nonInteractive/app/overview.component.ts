import { Component, OnInit, Injectable } from 'angular2/core';

@Component({
    selector: 'overview-comp',
    templateUrl: 'app/overview.component.html'
})

export class OverviewComponent implements OnInit{

    hours = 0;
    hours_sience = 0;
    hours_lll = 0;
    hours_international = 0;
    hours_sp = 0;
    hours_semenaries = 0;

    activities = [
        {
            "title": "Vlaamse programeer wedstrijd(Flemish coding contest)",
            "description": "Een codeer wedstrijd waar mensen van over heel vlaanderen deelnemen. middelbaar universiteit, hogenschool en bedrijven. Ons eind resultaat 7de van de 48!",
            "location": "Thomas More",
            "date": "Datum 06/03/2015",
            "time_past": 7,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": true,
            "student_participation": false
        },{
            "title": "SmartBeehive",
            "description": "IoT project waarbij ik de spring backend heb geschreven.Met dit kleine IoT toestel can je de temperatuur, de vochtigheid, het gewicht, het geluid, ... van een bijen kork realtime te weten komen.",
            "location": "PXL-Research",
            "date": "Van 01/03/2015 tot 07/06/2015",
            "time_past": 40,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "Seminary Intership",
            "description": "Wat moeten we allemaal weten voor onze stage volgend jaar? Welke papieren moeten we invullen en hoe moeten we op zoek gaan naar een stage bedrijf.",
            "location": "PXL",
            "date": "Datum 09/12/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "International drone week",
            "description": "Deze week heb ik internationale studenten geholpen met hun vragen over Computer vision en het aansturen van een drone. Dit was tijdens semenaries en tijdens demo vluchten.",
            "location": "PXL, Droneport Sint Truiden",
            "date": "Van 15/02/2016 tot 19/02/2016",
            "time_past": 12,
            "own_idea": true,
            "international": true,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "SID-IN Genk",
            "description": "Bij de SID-IN in genk hielp ik jongeren met vragen over Toegepaste Informatica. at is het verschil tussen dit en de universitaire richting, of dit en electronica-ict, ...",
            "location": "Genk",
            "date": "Datum 27/02/2016",
            "time_past": 6,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": false,
            "student_participation": true
        },{
            "title": "Tutoring Programming Basics",
            "description": "Bij tutoring heb ik eerste jaars studenten geholpen met het vak programming basics. Hiervoor gaf ik prive les en zeer persoonlijke begeleiding aan mijn tutee! ",
            "location": "PXL",
            "date": "Van 13/10/2014 tot 9/11/2014",
            "time_past": 20,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "ING Agile Development",
            "description": "Hoe implementeerd ING Agile Development? En wat is zijn de voor- en nadelen van agile development.",
            "location": "PXL",
            "date": "Datum 30/0/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Projectweek",
            "description": "Het doel van deze week was bekend te raken met alles rondom IT. What heb je allemaal nodig om succesvol te zijn in de IT Wereld. Softskills, management, een eigen bedrijf starten, waren slechts enkele topics die werden aangehaalt die week.",
            "location": "PXL",
            "date": "Van 02/02/2015 tot 09/02/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        },{
            "title": "Windows Dev Day",
            "description": "Wat is er nieuw in de Windows wereld? en hoe kunnen we deze nieuwe dingen toepassen?",
            "location": "PXL Conference",
            "date": "Datum 29/10/2015",
            "time_past": 8,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Putting The R Back In RAD Contribute",
            "description": "Wat is RAD en wat zijn de best practices voor RAD?",
            "location": "PXL",
            "date": "Datum 28/10/2015",
            "time_past": 3,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "BPM(n)/Agile/RequirementsGathering by Contribute",
            "description": "Een semenary over agile development en requirments gatering. Plus nog een extratje van BPM. Uitgelegt door Contribute.",
            "location": "pxl",
            "date": "Datum 21/10/2015",
            "time_past": 7,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "CEBIT",
            "description": " Een vier daagse reis, met een bezoek aan Berlijn, de CEBIT Conferentie en de Reinsche post. Georganizeerd door PXL-IT!",
            "location": "Hanover, Berlin",
            "date": "Van 16/03/2016 tot 19/03/2016",
            "time_past": 30,
            "own_idea": false,
            "international": true,
            "semenaries": false,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Amazone AWS Seminary",
            "description": "Een semenarie waar ze uitleg gaven over het bouwen van een backend in de AWS cloud. Welke vernieuwende technieken bestaan er binnen dit platform!",
            "location": "Fenego Hasselt",
            "date": "Datum 15/10/2015",
            "time_past": 2,
            "own_idea": true,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Bose Sound Touch hackaton",
            "description": "Een hackaton met het Bose SoundTouch syteem. Wat is er allemaal mogelijk mee en kan je er leuken ideëen mee verzinnen. We eindigde 2de en kregen de 1ste plaats voor meest vernieuwende backend van Amazon!",
            "location": "Corda Incubator",
            "date": "Van 16/10/2015 tot 18/10/2015",
            "time_past": 25,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": false,
            "sience": true,
            "student_participation": false
        },{
            "title": "Workshop Drones",
            "description": "Een workshop waarbij ik de basis leerden van het controleren van een Parrot AR drone. Zowel manueel als met een computer programma.",
            "location": "PXL",
            "date": "Van 30/11/2015 tot 02/12/2015",
            "time_past": 12,
            "own_idea": false,
            "international": false,
            "semenaries": true,
            "lll": false,
            "sience": false,
            "student_participation": false
        },{
            "title": "Tutoring Java Advanced",
            "description": "Bij tutoring heb ik eerste jaars studenten geholpen met het vak Java Advanced. Hiervoor gaf ik prive les en zeer persoonlijke begeleiding aan mijn tutee!",
            "location": "PXL",
            "date": "Van 13/10/2014 tot 9/11/2014",
            "time_past": 20,
            "own_idea": true,
            "international": false,
            "semenaries": false,
            "lll": true,
            "sience": false,
            "student_participation": false
        }
    ];

    ngOnInit() {
        for (let i = 0; i < this.activities.length; i++) {
            let activ = this.activities[i];
            this.hours += activ.time_past;

            if (activ.international) {
                this.hours_international += activ.time_past;
            }
            if (activ.lll) {
                this.hours_lll += activ.time_past;
            }
            if (activ.sience) {
                this.hours_sience += activ.time_past;
            }
            if (activ.student_participation) {
                this.hours_sp += activ.time_past;
            }
            if (activ.semenaries) {
                this.hours_semenaries += activ.time_past;
            }
        }
    }


}
