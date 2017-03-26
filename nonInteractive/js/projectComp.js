Vue.component('project-comp', {
    template: `
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 block-comp">
                <h3 class="block-center">{{title}}</h3>
                <div>
                    {{text}}
                </div>
                <a v-bind:href="link"><img v-bind:src="image" class="projectImage"></img></a>
                <a v-bind:href="link">{{link}}</a>
            </div>
        </div>
    </div>
    `,
    props: ["title", "text", "image", "link"],
    data: function() {
        return {};
    }
});
