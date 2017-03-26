var RootVM = {};

RootVM = new Vue({
    el: '#vueroot',
    data: function() {
        return {
            projects: [
                {
                    "title" : "Young talent in action",
                    "text" : "The Young Talent in Action program is a program organized by BDO and VBO (Belgian Organization for Companies). It's a program for 200 young people who are very driven by what they do spread over whole belgium! Most of them are entrepreneurs. With this program they get the chance of meeting CEO's of big companies, highly placed politicians and various behind the scene's looks of big organizations. To connect even more they wanted to create an app to organize events, exchange personal information, write articles, ... At this project I was the Lead Developer. This is an closed app so I can't give you a look inside.",
                    "image" : "http://www.madeinvlaamsbrabant.be/wp-content/uploads/2015/03/BDP.png",
                    "link" : "http://www.youngtalentinaction.be/"
                },
                {
                    "title" : "TriLED",
                    "text" : "TriLED makes smart industrial led light solutions. Every LED strip has a motion sensor and light sensor. All this data is being logged to the cloud and is available for the customer. With a simple web interface, you can easily automate all the lamps in your facility. I developed large parts of the support software. Did an intership of 3 months and then worked for 3 months @TriLED.",
                    "image" : "https://media.licdn.com/media/AAEAAQAAAAAAAAMQAAAAJGM1MTg2YTI4LTA5NGYtNDQ5OC04ODEyLTVhMGE1YzExZjk1OA.png",
                    "link" : "https://www.triled.be/"
                },
                {
                    "title" : "Kazou Verhalen",
                    "text" : "This project was started for the anniversary of 70 years of Kazou. It was meant for everybody who ever went on a Kazou vacation (Yearly 38 000 people). You could post a story and a picture of something that happened on a Kazou vacation. At this project I was one of the two main developers.",
                    "image" : "https://www.vakantieparticipatie.be/files/files/show-image/id/9559/folder/larger",
                    "link" : "http://verhalen.kazou.be/"
                }
            ]
        }
    },
    mounted: function() {
        var that = this;
    }
});
