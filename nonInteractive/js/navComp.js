Vue.component('nav-comp', {
    template: `
    <nav id="top-navbar" class="navbar navbar-default">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 row">
                    <div class="col-lg-12"><img src="tom.jpg" alt="Tom" /><h1 class="header-title">This is Tom</h1></div>
                </div>

                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <div class="collapse navbar-collapse" id="nav-collapse">
                    <ul class="nav nav-pills">
                        <li role="presentation"><a href="#who-am-i"><h4>Who is he</h4></a></li>
                        <li role="presentation"><a href="#skill-overview"><h4>Skills</h4></a></li>
                        <li role="presentation"><a href="#activities-overview"><h4>Projects</h4></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    `,
    data: function() {
        return {};
    }
});
