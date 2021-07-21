'use strict';

(() => {
    const SLIDER = {
        BODY: document.querySelector('.slider'),
        WIDTH: 0,
        INTERVAL: 2000
    }

    if (SLIDER.BODY) {
        SLIDER.LINE = SLIDER.BODY.querySelector('.slider__img');
        SLIDER.IMAGES = SLIDER.LINE.querySelectorAll('img');

        let count = 0;

        function init() {
            SLIDER.WIDTH = SLIDER.BODY.offsetWidth;
            SLIDER.LINE.style.width = SLIDER.WIDTH * SLIDER.IMAGES.length + 'px';

            SLIDER.IMAGES.forEach(element => {
                element.style.width = SLIDER.WIDTH + 'px';
                element.style.height = 'auto';
            });
        }

        function animation() {
            count++;
            if (count == SLIDER.IMAGES.length) { count = 0; }
            SLIDER.LINE.style.transform = 'translate(-' + count * SLIDER.WIDTH + 'px)';
        }

        window.addEventListener('resize', init);
        init();
        setInterval(animation, SLIDER.INTERVAL);
    }


})();