Vue.component('banner-comp', {
    template: `
    <div class="container">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8">
                <img class="imagestrap" v-bind:src="image" v-bind:alt="image"/>
            </div>
        </div>
    </div>
    `,
    props: ["image"],
    data: function() {
        return {};
    }
});
