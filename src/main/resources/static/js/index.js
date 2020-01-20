;(function () {

    'use strict';


    // iPad and iPod detection
    const isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    const isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };



    [].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {
        new SelectFx(el);
    });

    // Parallax
    const parallax = function () {
        if (!isiPad() || !isiPhone()) {
            $(window).stellar();
        }
    };


    // Animations
    const contentWayPoint = function () {
        let i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        const el = $(this);
                        setTimeout(function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        }, k * 50, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {offset: '90%'});
    };

    // Document on load.
    $(function () {
        parallax();
        contentWayPoint();
    });


}());