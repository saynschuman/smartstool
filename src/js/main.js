window.onload  = function () {
    AppJS.ready();
};

var AppJS = {

    ready: function () {
        AppJS.initSelect();
        AppJS.handlers();
        AppJS.customScroll();
        AppJS.initRangeSlider();
        AppJS.videoHijacking();
        AppJS.windowScroll();
        AppJS.progressCircle();
        AppJS.timer();
        AppJS.initSlider()
    },

    handlers: function () {
        $('.buyBox .dot').on('click', function() { AppJS.dotNavigation($(this)); });
        $('.watchMore').on('click', function() { AppJS.watchMore($(this)); });
        $('.aboutMore').on('click', function() { AppJS.watchMore($(this)); });
        $('.showMore').on('click', function() { AppJS.watchMore($(this), 'siblingsBtn'); });
        $('.openTrainingFilter').on('click', function() { AppJS.openTrainingFilter($(this)); });
        $('.viewSwitch').on('click', function() { AppJS.switchTrainingsView($(this)); });
        $('.selectField .viewBox').on('click', function() { AppJS.selectViewBoxClick(this); });
        $('.selectField li').on('click', function() { AppJS.selectLiClick(this); });
        $(window).on('scroll', function() { AppJS.windowScroll(); });
        $(window).resize(function() { AppJS.windowResize(); });
    },

    windowResize: function () {
        AppJS.windowScroll();
        if ($('body').width() <= 700) {
            $('.trainingPage').add('.viewSwitch').removeClass('list');
        }
    },

    windowScroll: function () {
        var scrollTop = $(window).scrollTop();
        var body = $('body');
        if (scrollTop > 30 && body.width() > 800) {
            body.addClass('rebuildMenu');
        } else {
            body.removeClass('rebuildMenu');
        }
        AppJS.fixedPanel(scrollTop);
    },

    fixedPanel: function (scrollTop) {
        var fixedPanel = $('.fixedPanel');
        if (fixedPanel.length) {
            var fixedPanelHeight = fixedPanel.outerHeight();
            $('.trainingContainer').css('margin-bottom', fixedPanelHeight + 31);
            var footerTop = $('footer').offset().top - 30;
            var headerHeight = $('header').outerHeight();
            fixedPanel.css({position: 'absolute', top: footerTop - headerHeight - fixedPanelHeight});
            if ($(window).height() + scrollTop < footerTop) {
                fixedPanel.css({position: 'fixed', top: "calc(100vh - "+ fixedPanelHeight +"px)"});
            }
        }
    },

    switchTrainingsView: function ($btn) {
        var container = $btn.closest('.trainingPage');
        $btn.add(container).toggleClass('list');
    },

    progressCircle: function () {
        var chapter = $('.chapter.inProgress');
        var circleLength = 113;
        chapter.each(function () {
            var value = +$(this).attr('data-value');
            var blueLine = $(this).find('.blueLine');
            var label = $(this).find('.label');
            var dashOffset = circleLength - (circleLength / 100 * value);
            blueLine.css({'stroke-dashoffset': dashOffset});
            label.css({'transform': 'rotate('+ 3.6 * value +'deg)'}).show();
        });

    },

    videoHijacking: function () {
        var video = $('.videoBox video');
        video.on('mouseenter', function() { $(this).attr('controls', 'controls'); });
        video.on('mouseleave', function() { $(this).removeAttr('controls'); });
    },

    initRangeSlider: function () {
        var choiceRange = $('.choiceRange');
        var slider = choiceRange.find('.choiceLine')[0];
        var minInput = choiceRange.find('.min');
        var maxInput = choiceRange.find('.max');
        var defParam = [+minInput.attr('min'), +maxInput.attr('max')];
        noUiSlider.create(slider, {
            start: [0, 100],
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
        slider.noUiSlider.on('update', function( values, handle ) {
            if ( handle ) {
                maxInput[0].value = values[handle];
            } else {
                minInput[0].value = values[handle];
            }
        });
        minInput[0].addEventListener('change', function(){
            slider.noUiSlider.set([this.value, null]);
        });
        maxInput[0].addEventListener('change', function(){
            slider.noUiSlider.set([null, this.value]);
        });
        $('.reset').on('click', function() { AppJS.resetModal($(this), slider, defParam); });
    },

    resetModal: function ($btn, slider, defParam) {
        var modal = $btn.closest('.trainingModal');
        var checkbox = modal.find('[type="checkbox"]:checked');
        checkbox.each(function () {
            this.checked = false;
        });
        slider.noUiSlider.set(defParam);
    },

    openTrainingFilter: function ($btn) {
        var container = $btn.closest('.menuWrap');
        var modal = container.find('.trainingModal');
        container.toggleClass('openTraining');
        if (container.hasClass('openTraining')) {
            modal.slideDown();
        } else {
            modal.slideUp();
        }
    },

    dotNavigation: function ($dot) {
        var dots = $dot.siblings('.dot');
        var slides = $dot.closest('.buyBox').find('.slide');
        var target = $dot.attr('data-target');
        dots.removeClass('active');
        slides.removeClass('active');
        slides.filter('[data-slide="'+ target +'"]').addClass('active');
        $dot.addClass('active');
    },

    initSlider: function () {
        new Swiper('.firstSliderBox', {
            speed: 1000,
            prevButton: '.firstSliderPrev',
            nextButton: '.firstSliderNext',
            loop: true
        });

        new Swiper('.events', {
            speed: 1000,
            prevButton: '.eventsSliderPrev',
            nextButton: '.eventsSliderNext',
            loop: true
        });

        new Swiper('.calendarSlider', {
            slidesPerView: 'auto',
            speed: 1000,
            prevButton: '.calendarPrev',
            nextButton: '.calendarNext',
            loop: true,
            // loopedSlides: 4,
            centeredSlides: true,
            spaceBetween: -100
        });
    },



    customScroll: function () {
        $('.scrollWrap').mCustomScrollbar({
            theme: 'myScroll',
            // scrollbarPosition: 'outside',
            scrollInertia: 300
        });
    },

    timer: function () {
        var timer = $('.timer');
        if (!timer.length) return;
        var time = +timer.attr('data-time');
        var startTime = (new Date()).getTime();
        var interval = setInterval(function () {
            var dynamicDate = (new Date()).getTime();
            var secondsRemained = Math.round((time + startTime - dynamicDate)/1000);
            var min = (secondsRemained/60>=10) ? Math.floor(secondsRemained/60) : '0' + Math.floor(secondsRemained/60);
            var sec = (secondsRemained%60>=10) ? (secondsRemained%60) : '0' + (secondsRemained%60);
            if (min >= 0 && sec >= 0) {
                timer.text(min + ':' + sec);
            }
            if (min <= 0 && sec <= 0) {
                clearInterval(interval);
            }
        }, 1000);

    },

    watchMore: function ($watchMoreBtn, typeBtn) {
        var watchBox = $watchMoreBtn.closest('.content');
        if (typeBtn === 'siblingsBtn') {
            watchBox = $watchMoreBtn.siblings('.content');
        }
        var watchBoxHeight = watchBox.outerHeight();
        watchBox.css({height: 'auto'});
        var openHeight = watchBox.outerHeight();
        watchBox.css({height: watchBoxHeight});
        $watchMoreBtn.fadeOut();
        watchBox.addClass('open');
        watchBox.animate({height: openHeight}, 600, function () {
            $(this).css('height', 'auto');
        })
    },

    initSelect: function () {
        $('select:not(.initialized)').each(function() {
            var selectBox = $(this).closest('.selectField');
            var dropDownBox = '';
            var selectedText = $(this).find('option:selected').text();
            selectBox.find('select option').each(function() { dropDownBox += '<li>'+$(this).text()+'</li>'; });
            $('<div class="viewBox">' + selectedText +'</div><ul class="dropdownBox">' + dropDownBox + '</ul>').appendTo(selectBox);
            $(this).addClass('initialized');
        });
    },

    selectViewBoxClick: function(viewBox) {
        var thisSelect = $(viewBox).next();
        $('ul.dropdownBox').not(thisSelect).slideUp(200).closest('.selectField').removeClass('active');
        thisSelect.slideToggle(200).closest('.selectField').toggleClass('active');
    },

    selectLiClick: function(li) {
        var selectBox = $(li).closest('.selectField');
        var select = selectBox.find('select');
        var clickIndex = $(li).index();
        var targetValue = select.find('option').eq(clickIndex).attr('value');
        selectBox.find('ul.dropdownBox').slideToggle(200).closest('.selectField').toggleClass('active');
        selectBox.find('.viewBox').text($(li).text());
        select.val(targetValue);
        select.change();
    }

};


