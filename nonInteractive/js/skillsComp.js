Vue.component('skills-comp', {
    template: `
    <div class="container">
        <div class="row">
            <div id="skill-overview" class="col-lg-offset-2 col-lg-8 block-comp skill-comp">

                <div v-for="skill of skills" class="skill" :style="skill.styleBar">
                    <div :style="skill.styleBarInf" class="skillBar">

                    </div>
                </div>
                <hr class="skillHr">
                <div v-for="skill of skills" class="skill" :style="skill.styleBottom">
                    {{skill.name}}
                </div>
                <div style="clear: both"></div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            skills : [
                {name: 'OpenCV', score: 3, styleBar:"margin-top: 75px; min-width: 10%", styleBarInf:"min-height: 75px", styleBottom:"min-width: 10%" },
                {name: 'C#', score: 5, styleBar:"margin-top: 60px; min-width: 10%", styleBarInf:"min-height: 90px", styleBottom:"min-width: 10%"},
                {name: 'ThreeJS', score: 3, styleBar:"margin-top: 45px; min-width: 10%", styleBarInf:"min-height: 105px", styleBottom:"min-width: 10%"},
                {name: 'javascript', score: 3.5, styleBar:"margin-top: 15px; min-width: 10%", styleBarInf:"min-height: 135px", styleBottom:"min-width: 10%"},
                {name: 'NodeJS', score: 4, styleBar:"margin-top: 30px; min-width: 10%", styleBarInf:"min-height: 120px", styleBottom:"min-width: 10%"},
                {name: 'React', score: 2.5, styleBar:"margin-top: 75px; min-width: 10%", styleBarInf:"min-height: 75px", styleBottom:"min-width: 10%"},
                {name: 'Vue.js', score: 3, styleBar:"margin-top: 45px; min-width: 10%", styleBarInf:"min-height: 105px", styleBottom:"min-width: 10%"},
                {name: 'java', score: 5, styleBar:"margin-top: 30px; min-width: 10%", styleBarInf:"min-height: 120px", styleBottom:"min-width: 10%"},
                {name: 'Spring', score: 3.5, styleBar:"margin-top: 75px; min-width: 10%", styleBarInf:"min-height: 75px", styleBottom:"min-width: 10%"},
                {name: 'Python', score: 2.5, styleBar:"margin-top: 90px; min-width: 10%", styleBarInf:"min-height: 60px", styleBottom:"min-width: 10%"}
            ]
        };
    }
});
