
Vue.component('who-is-he-comp', {
    template: `
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 block-comp">
                <h3 class="block-center">{{title}}</h3>
                <p v-for="para of paragraphs">
                    {{para}}
                </p>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            title: "Who am i?",
            paragraphs: [
                "I'm Tom Valkeneers, born in 1995 and living in Hoeselt, Belguim.",
                "In 2016 I got my college degree in applied computersience @PXL and now i'm studying for an extra degree in Informatics @UHasselt. My free time i spend at Freelance projects and as a volunteer for Kazou. Kazou is an organization that organizes group vacations for children and teenagers. In the organization i give courses to new people, and I'm a GroupLeader. A group leader on a vacation has to organize the vacation and has to coach the other leaders. I love going on a vacation with kazou because you can work together so closely with others and you are separated from the rest of the world for eight days.",
                "I also love trying out new things with technology, going to hackatons, trying out arduino's, raspberry pi's, starting up small projects with others. I love making a product or trying out a new concept or idea, and that i can program is a handy coincidence. "
            ]
        };
    }
});
