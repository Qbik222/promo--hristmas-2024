(function () {
    // Cards slider
    const cardsContainer = document.querySelector('.prize__list'),
          cards = document.querySelectorAll('.prize__list-item'),
          cardsWrap = document.querySelector('.prize__list-scroll'),
          moveRightButton = document.querySelector('.prize__slider-move-right'),
          moveLeftButton = document.querySelector('.prize__slider-move-left'),
          tabsContainer = document.querySelector('.prize__tabs'),
          totalCards = cards.length,
          cardWidth = cards[0].clientWidth,
          cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
          visibleSlides = Math.floor(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
          totalTabs = Math.ceil(totalCards / visibleSlides)

    let currentSlide = 1;
    let cardsPosition = 0;
    for (let i = 1; i < totalTabs; i++) {
        const tab = document.createElement('div');
        tab.classList.add('prize__tabs-item');
        tabsContainer.appendChild(tab);
    }
    const updateTabs = () => {
        const activeTab = Math.ceil(currentSlide / visibleSlides);
        tabsContainer.childNodes.forEach((tab, index) => {
            tab.classList.toggle('_active', index + 1 === activeTab);
        });
    };
    updateTabs();
    const setCardsPosition = (position) => {
        cardsWrap.style.transform = `translateX(-${position}px)`;
    };
    const moveRight = () => {
        if (currentSlide >= totalCards - visibleSlides) {
            currentSlide = 1;
            cardsPosition = 0;
        } else {
            const maxPosition = (totalCards - visibleSlides) * (cardWidth + cardsMargin);
            if (cardsPosition + cardWidth + cardsMargin > maxPosition) {
                cardsPosition = maxPosition;
                currentSlide = totalCards - visibleSlides + 1;
            } else {
                cardsPosition += cardWidth + cardsMargin;
                currentSlide++;
            }
        }
        setCardsPosition(cardsPosition);
        updateTabs();
    };
    const moveLeft = () => {
        if(currentSlide === 1){
            currentSlide = totalCards - visibleSlides;
            cardsPosition = ((totalCards - visibleSlides) * (cardWidth + cardsMargin)) -(cardWidth + cardsMargin);
        }else if (currentSlide === 2) {
            cardsPosition = 0
            currentSlide = 1
        }else {
            cardsPosition -= cardWidth + cardsMargin;
            currentSlide--
        }
        setCardsPosition(cardsPosition);
        updateTabs();
        console.log(currentSlide)
    };

    // snowfall animations
    (function () {
        var COUNT = 400;

        function Snowstorm(element) {
            this.masthead = element;
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.width = this.masthead.clientWidth;
            this.height = this.masthead.clientHeight;
            this.active = false;
            this.snowflakes = [];

            this.init();
        }

        Snowstorm.prototype.init = function () {
            this.canvas.style.position = 'absolute';
            this.canvas.style.left = this.canvas.style.top = '0';
            this.masthead.appendChild(this.canvas);

            this.onResize();
            window.addEventListener('resize', this.onResize.bind(this), false);

            for (var i = 0; i < COUNT; i++) {
                var snowflake = new this.Snowflake(this);
                snowflake.reset();
                this.snowflakes.push(snowflake);
            }

            if (this.active) {
                requestAnimFrame(this.update.bind(this));
            }
        };

        Snowstorm.prototype.onResize = function () {
            this.width = this.masthead.clientWidth;
            this.height = this.masthead.clientHeight;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.ctx.fillStyle = '#FFF';

            var wasActive = this.active;
            this.active = this.width > 80;
            this.width > 280 ? COUNT = 150 : null

            if (!wasActive && this.active) {
                requestAnimFrame(this.update.bind(this));
            }
        };

        Snowstorm.prototype.update = function () {
            this.ctx.clearRect(0, 0, this.width, this.height);

            if (!this.active) {
                return;
            }

            for (var i = 0; i < COUNT; i++) {
                var snowflake = this.snowflakes[i];
                snowflake.y += snowflake.vy;
                snowflake.x += snowflake.vx;

                this.ctx.globalAlpha = snowflake.o;
                this.ctx.beginPath();
                this.ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
                this.ctx.closePath();
                this.ctx.fill();

                if (snowflake.y > this.height) {
                    snowflake.reset();
                }
            }

            requestAnimFrame(this.update.bind(this));
        };

        Snowstorm.prototype.Snowflake = function (snowstorm) {
            this.snowstorm = snowstorm;
            this.reset();
        };

        Snowstorm.prototype.Snowflake.prototype.reset = function () {
            this.x = Math.random() * this.snowstorm.width;
            this.y = Math.random() * -this.snowstorm.height;
            this.vy = 1 + Math.random() * 0.00001;
            this.vx = 0.5 - Math.random();
            this.r = 1 + Math.random() * 2;
            this.o = 1;
        };

        // shim layer with setTimeout fallback
        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

        // Apply Snowstorm to all elements with the class 'sky'
        var skies = document.querySelectorAll('.sky');
        skies.forEach(function (sky) {
            new Snowstorm(sky);
        });
    })();

    const handleResize = () =>{
        let touchStartX = 0;
        let touchEndX = 0;
        const handleTouchStart = (event) => {
            touchStartX = event.touches[0].clientX;
        };
        const handleTouchMove = (event) => {
            touchEndX = event.touches[0].clientX;
        };
        const handleTouchEnd = () => {
            const swipeDistance = touchStartX - touchEndX;
            if (swipeDistance > 50) {
                // Свайп ліворуч
                moveRight();
            } else if (swipeDistance < -50) {
                // Свайп праворуч
                moveLeft();
            }
            // Скидаємо значення
            touchStartX = 0;
            touchEndX = 0;
        };

        moveRightButton.addEventListener('click', moveRight);
        moveLeftButton.addEventListener('click', moveLeft);
        cardsContainer.addEventListener('touchstart', handleTouchStart);
        cardsContainer.addEventListener('touchmove', handleTouchMove);
        cardsContainer.addEventListener('touchend', handleTouchEnd);
    }

    handleResize()

})();