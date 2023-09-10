window.onload = function() {
    let all = document.getElementById('all');
    let lvl1 = document.getElementById('lvl1');
    let lvl2 = document.getElementById('lvl2');
    let lvl3 = document.getElementById('lvl3');
    let txt = document.getElementById('buttontxt');
    all.onclick = function() {
        txt.innerHTML = 'There are no rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.';
        txt.style.backgroundColor = 'inherit';
        $('[name="lv1"]').show();
        $('[name="lv2"]').show();
        $('[name="lv3"]').show();
    }
    lvl1.onclick = function() {
        txt.innerHTML = 'A great place to start learning about layouts, animations, color choices, and more.';
        txt.style.backgroundColor = 'rgba(71, 190, 83, 0.763)';
        $('[name="lv2"]').hide();
        $('[name="lv3"]').hide();
        $('[name="lv1"]').show();
    }
    lvl2.onclick = function() {
        txt.innerHTML = 'A wonderful variety of projects with well designed layouts, interactive elements, hover effects and animations.';
        txt.style.backgroundColor = 'rgba(255, 242, 0, 0.593)';
        $('[name="lv1"]').hide();
        $('[name="lv2"]').show();
        $('[name="lv3"]').hide();
    }
    lvl3.onclick = function() {
        txt.innerHTML = 'Test and push your skills even further with these complex layouts, animations, and interactive elements.';
        txt.style.backgroundColor = 'rgba(255, 136, 0, 0.829)';
        $('[name="lv1"]').hide();
        $('[name="lv2"]').hide();
        $('[name="lv3"]').show();
    }
}