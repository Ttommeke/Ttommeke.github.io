Vue.component('project-explained-comp', {
    template: `
    <div class="container" id="activities-overview">
        <div class="row">
            <div class="col-lg-offset-2 col-lg-8 block-comp">
                <h3 class="block-center">Freelance projects</h3>
                <div>
                    These are some of the freelance projects i did.
                </div>
            </div>
        </div>
    </div>
    `,
    props: ["title", "text", "image", "link"],
    data: function() {
        return {};
    }
});
