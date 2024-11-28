(function () {
    const hrLeng = document.querySelector('#hrLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = 'en';

    if (hrLeng) locale = 'hr';
    if (enLeng) locale = 'en';


    let i18nData = {};
    const debug = true;
    // let userId;
    let userId = 99432;


    // Cards slider
    // const cardsContainer = document.querySelector('.prize__list'),
    //       cards = document.querySelectorAll('.prize__list-item'),
    //       cardsWrap = document.querySelector('.prize__list-scroll'),
    //       moveRightButton = document.querySelector('.prize__slider-move-right'),
    //       moveLeftButton = document.querySelector('.prize__slider-move-left'),
    //       tabsContainer = document.querySelector('.prize__tabs'),
    //       isMobile = window.innerWidth < 600,
    //       totalCards = cards.length,
    //       cardWidth = cards[0].clientWidth,
    //       cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
    //       visibleSlides = isMobile ? 1 : Math.ceil(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
    //       totalTabs = Math.ceil(totalCards / visibleSlides),
    //       tabWidth= visibleSlides * (cardWidth + cardsMargin)
    //
    // console.log(tabWidth)
    //
    // let currentSlide = 1;
    // let cardsPosition = 0
    //     for (let i = 1; i <= totalTabs; i++) {
    //         const tab = document.createElement('div');
    //         tab.classList.add('prize__tabs-item');
    //         tabsContainer.appendChild(tab);
    //     }
    //
    // const updateActiveCard = (cards, activeIndex) => {
    //     cards.forEach((card, i) =>{
    //         activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active")
    //     })
    // }
    // updateActiveCard(cards, currentSlide)
    //
    // const updateTabs = () => {
    //     const activeTab = Math.ceil(currentSlide / visibleSlides);
    //     tabsContainer.childNodes.forEach((tab, index) => {
    //         tab.classList.toggle('_active', index + 1 === activeTab);
    //     });
    // };
    // updateTabs();
    // function setCardsPosition (position) {
    //     cardsWrap.style.transform = `translateX(-${position}px)`;
    // };
    // const moveRight = () => {
    //     if (currentSlide >= totalCards - visibleSlides && isMobile === false) {
    //         currentSlide = 1;
    //         cardsPosition = 0;
    //     }else if(currentSlide === totalCards) {
    //         currentSlide = 1;
    //         cardsPosition = 0;
    //     }else {
    //         const maxPosition = (totalCards - visibleSlides) * (cardWidth + cardsMargin);
    //         if (cardsPosition + cardWidth + cardsMargin > maxPosition) {
    //             cardsPosition = maxPosition;
    //             currentSlide = totalCards - visibleSlides + 1;
    //         } else {
    //             cardsPosition += cardWidth + cardsMargin;
    //             currentSlide++;
    //         }
    //     }
    //     setCardsPosition(cardsPosition);
    //     updateTabs();
    //     updateActiveCard(cards, currentSlide)
    // };
    // const moveLeft = () => {
    //     if(currentSlide === 1 && isMobile === false){
    //         currentSlide = totalCards - visibleSlides;
    //         cardsPosition = ((totalCards - visibleSlides) * (cardWidth + cardsMargin)) -(cardWidth + cardsMargin);
    //     }else if (currentSlide === 2) {
    //         cardsPosition = 0
    //         currentSlide = 1
    //     }else if(currentSlide === 1 && isMobile === true){
    //         currentSlide = totalCards
    //         cardsPosition = totalCards  * (cardWidth + cardsMargin) - (cardWidth + cardsMargin)
    //     }else {
    //         cardsPosition -= cardWidth + cardsMargin;
    //         currentSlide--
    //     }
    //     setCardsPosition(cardsPosition);
    //     updateTabs();
    //     updateActiveCard(cards, currentSlide)
    // };

    const cardsContainer = document.querySelector('.prize__list'),
        cards = document.querySelectorAll('.prize__list-item'),
        cardsWrap = document.querySelector('.prize__list-scroll'),
        moveRightButton = document.querySelector('.prize__slider-move-right'),
        moveLeftButton = document.querySelector('.prize__slider-move-left'),
        tabsContainer = document.querySelector('.prize__tabs'),
        isMobile = window.innerWidth < 600,
        totalCards = cards.length,
        cardWidth = cards[0].clientWidth,
        cardsMargin = (cardsWrap.clientWidth - cardWidth * totalCards) / (totalCards - 1),
        visibleSlides = isMobile ? 1 : Math.ceil(cardsContainer.clientWidth / (cardWidth + cardsMargin)),
        totalTabs = Math.ceil(totalCards / visibleSlides),
        tabWidth= visibleSlides * (cardWidth + cardsMargin)

    let currentSlide = 1;
    let currentTab = 1;
    let cardsPosition = 0;
    let leftSlide;
    let rightSlide;
    console.log(totalTabs)

// Створення табів
    for (let i = 1; i <= totalTabs; i++) {
        const tab = document.createElement('div');
        tab.classList.add('prize__tabs-item');
        tabsContainer.appendChild(tab);
    }

    function leftSlideTab(){
        leftSlide = currentTab * visibleSlides - (visibleSlides - 1)
    }
    function rightSlideTab(){
        rightSlide = currentTab * visibleSlides
    }

    function firstLastSlides(){
        if(isMobile) return
        leftSlideTab()
        rightSlideTab()
        cards.forEach((card , i) =>{
            i + 1 === leftSlide ? card.classList.add("_left") : card.classList.remove("_left")
            i + 1 === rightSlide ? card.classList.add("_right") : card.classList.remove("_right")
        })
    }
    firstLastSlides()

    const updateActiveCard = (cards, activeIndex) => {
        cards.forEach((card, i) => {
            activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active");
        });
    };
    updateActiveCard(cards, currentSlide);

    const updateTabs = () => {
        if(isMobile){
            const activeTab = Math.ceil(currentSlide / visibleSlides);
            tabsContainer.childNodes.forEach((tab, index) => {
                tab.classList.toggle('_active', index + 1 === activeTab);
            });
        }else{
            tabsContainer.childNodes.forEach((tab, index) => {
                tab.classList.remove("_active")
                console.log(currentTab, index)
                index + 1 === currentTab ? tab.classList.add("_active") : null
            });
        }


    };
    updateTabs();

    function setCardsPosition(position) {
        cardsWrap.style.transform = `translateX(-${position}px)`;
    };

    const moveRight = () => {
        if (isMobile) {
            // Мобільна логіка
            if (currentSlide >= totalCards) {
                currentSlide = 1;
                cardsPosition = 0;
            } else {
                cardsPosition += cardWidth + cardsMargin;
                currentSlide++;
            }
        }
        else {
            if(currentTab === totalTabs){
                cardsPosition = 0
                currentTab = 1
            }else{
                cardsPosition += tabWidth
                ++currentTab
            }
        }
        firstLastSlides()
        setCardsPosition(cardsPosition);
        updateTabs();
        updateActiveCard(cards, currentSlide);
        hidePopups(cards)

    };



    const moveLeft = () => {
        if (isMobile) {
            // Мобільна логіка
            if (currentSlide === 1) {
                currentSlide = totalCards;
                cardsPosition = (totalCards - 1) * (cardWidth + cardsMargin);
            }else if(currentSlide === 2){
                currentSlide = 1;
                cardsPosition = 0
            }
            else {
                cardsPosition -= cardWidth + cardsMargin;
                currentSlide--;
            }
        } else {

            if(currentTab === 1){
                currentTab = totalTabs
                cardsPosition = (currentTab * tabWidth) - tabWidth
            }else if(currentTab === 2){
                cardsPosition = 0
                currentTab = 1
            }
            else {
                cardsPosition -= tabWidth
                --currentTab

            }

        }
        setCardsPosition(cardsPosition);
        updateTabs();
        firstLastSlides()
        updateActiveCard(cards, currentSlide);
        hidePopups(cards)
    };

    // popups logic

    function setPopups(popups, popupsBtns) {
        popupsBtns.forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                popups.forEach((popup, j) => {
                    i === j ? popup.classList.add("_popup") : popup.classList.remove("_popup");
                });
            });
        });
    }

    function hidePopups(popups){
        popups.forEach(popup =>{
           popup.classList.remove("_popup")
        })
    }
// popups
    const prizeOpenBtns = document.querySelectorAll(".prize__list-item-btn")
    const prizeCloseBtns = document.querySelectorAll(".prize__list-popup-close")
    const guidePopupsWrap = document.querySelectorAll(".guide__item")
    const guideOpenBtns = document.querySelectorAll(".guide__item-info-btn")
    const guideCloseBtns = document.querySelectorAll(".guide__item-popup-close")
    const tablePopup = document.querySelector(".table__popup")
    const tablePopupClose = document.querySelector(".table__popup-close")
    const tablePopupOpen = document.querySelector(".table__info")

    setPopups(cards, prizeOpenBtns);
    setPopups(guidePopupsWrap, guideOpenBtns);

    guideCloseBtns.forEach(btn =>{
        btn.addEventListener('click', () =>{
            hidePopups(guidePopupsWrap)
        });
    });

    prizeCloseBtns.forEach(btn =>{
        btn.addEventListener('click', () =>{
            hidePopups(cards)
        });
    });

    tablePopupOpen.addEventListener("click", () =>{
       tablePopup.classList.remove("hide")
        document.body.style.overflow = "hidden"
    });

    tablePopupClose.addEventListener("click", () =>{
        tablePopup.classList.add("hide")
        document.body.style.overflow = "auto"
    });

// snowfall animation
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
            this.vy = 0.3 + Math.random() * 0.00001;
            this.vx = 0.6 - Math.random();
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



        // ball shake snow
        const canvas = document.querySelector('.snowCanvas');
        const ctx = canvas.getContext('2d');
        const ball = document.querySelector('.sphere');

        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

        let snowflakes = [];
        const maxSnowflakes = 100;
        const maxSpeed = 7; // Максимальна швидкість сніжинки
        let stormCounter = 1


        let snowflakesRemoved = 0;

        class Snowflake {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 10;
                this.speedY = Math.random() * 1.5 + 1;
                this.acceleration = 0;
                this.movingToBottom = false;
            }

            update(ballX, ballY, ballRadius, ballShaking) {
                if (this.movingToBottom) {
                    const targetSpeed = 0.1; // Маленька швидкість, до якої прагнемо
                    const speedDecayFactor = 0.05; // Коефіцієнт для плавного сповільнення

                    // Плавно наближаємо швидкість до targetSpeed
                    this.speedX = this.speedX - (this.speedX - targetSpeed) * speedDecayFactor;
                    this.speedY = this.speedY - (this.speedY - targetSpeed) * speedDecayFactor;

                    // Оновлення позиції сніжинки
                    this.y += this.speedY;

                    if (this.y > canvas.height) {
                        this.remove();
                    }
                    return;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Обмеження швидкості
                this.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedX));
                this.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedY));

                // Додавання швидкості через "трусіння" кулі
                if (ballShaking) {
                    this.acceleration += 0.05; // Нарощування швидкості
                } else {
                    this.acceleration *= 0.95; // Поступове зменшення
                }
                this.speedX += this.acceleration * (Math.random() - 0.5);
                this.speedY += this.acceleration * (Math.random() - 0.5);

                // Перевірка на межі canvas
                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x > canvas.width) {
                    this.x = 0;
                } else if (this.x < 0) {
                    this.x = canvas.width;
                }

                // Відстань до центру кулі
                const dx = this.x - ballX;
                const dy = this.y - ballY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Відскок від кулі
                if (distance < ballRadius + this.radius) {
                    const angle = Math.atan2(dy, dx); // Кут зіткнення
                    const overlap = ballRadius + this.radius - distance;

                    // Переміщення сніжинки
                    this.x += Math.cos(angle) * overlap;
                    this.y += Math.sin(angle) * overlap;

                    // Реверс швидкості
                    this.speedX *= -0.7;
                    this.speedY *= -0.7;
                }
            }

            moveToBottom() {
                this.movingToBottom = true;
            }

            remove() {
                snowflakes.splice(snowflakes.indexOf(this), 1);
                snowflakesRemoved++;
                if (stormCounter === 1) {
                    new Snowstorm(document.querySelector(".sphere__body"));
                    stormCounter++;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.closePath();
            }
        }

// Спавнимо нові сніжинки при зміні стану кулі
        let lastBallShakingState = false; // Змінна для відстеження стану кулі

        for (let i = 0; i < maxSnowflakes; i++) {
            snowflakes.push(new Snowflake());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const ballTransform = window.getComputedStyle(ball).transform;
            let ballX = canvas.width / 2;
            let ballY = canvas.height / 2;
            const ballRadius = ball.offsetWidth / 2;
            const ballShaking = ballTransform !== 'none';

            if (ballTransform !== 'none') {
                const matrix = new DOMMatrix(ballTransform);
                ballX = ball.offsetLeft + matrix.m41 + ballRadius;
                ballY = ball.offsetTop + matrix.m42 + ballRadius;
            }

            // Якщо стан кулі змінився на "рух", перезапускаємо сніжинки
            if (ballShaking && !lastBallShakingState) {
                // Очищаємо масив сніжинок
                snowflakes = [];
                snowflakesRemoved = 0;
                // Спавнимо нові сніжинки
                for (let i = 0; i < maxSnowflakes; i++) {
                    snowflakes.push(new Snowflake());
                }
            }

            lastBallShakingState = ballShaking;

            snowflakes.forEach(snowflake => {
                if (!ballShaking) snowflake.moveToBottom();
                snowflake.update(ballX, ballY, ballRadius, ballShaking);
                snowflake.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

    })();

    let i = 1;
    function sendShakeRequest() {
        if (!userId) {
            return;
        }

        if (debug) {
            return Promise.resolve({
                // number: i++,
                type: 'test'
            });
        }

        const params = {userid: userId};
        return request('/spin', {
            method: 'POST',
            body: JSON.stringify(params)
        });
    }


    const btnShake = document.querySelector(".progress__shake")
    const ball = document.querySelector(".sphere")
    const ballBox = document.querySelector(".sphere__box")

    function initShake(ball, btn, box) {
        btn.addEventListener("click", () =>{
            sendShakeRequest().then(res => {
                console.log(res);
                if (!res || !!res.error) {
                    // btnShake.classList.add('pulse-btn');
                    btnShake.classList.remove('_disabled')
                    return;
                }
                // const prize = res.number;
                const prize = "iphone";
                const streakBonus = res.streakBonus || debug;
                const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
                if(prize === "iphone"){
                    ( async function (){
                        btn.classList.add("_disabled");
                        ball.classList.add("_shake");
                        box.classList.add("_shake-reverse");
                        await delay(2000);
                        ball.classList.remove("_shake");
                        ball.classList.add("_before-hide");
                        box.classList.remove("_shake-reverse");
                        box.classList.add("_box-opacity");
                        await delay(200);
                        ball.classList.add(`_${prize}`);

                    })();
                }
                // if(prize === "respin"){
                //     sections.addEventListener("animationend", () => showPopup(sections, wheel, "_bonus", streakBonus, spinBg, popupCloseBtn, popupContainer, popup, "respin"), {once: true})
                //     spinWheel(72.5, "respinAnim", sections, btn, wheel, arrow, prize, spinBg, salut)
                // }
            });
        })
    }

    initShake(ball, btnShake, ballBox)

    const handleResize = () =>{
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartTime = 0; // Час початку дотику

        const handleTouchStart = (event) => {
            touchStartX = event.touches[0].clientX;
            touchStartTime = Date.now(); // Записуємо час початку дотику
        };

        const handleTouchMove = (event) => {
            touchEndX = event.touches[0].clientX;
        };

        const handleTouchEnd = () => {
            const swipeDistance = touchStartX - touchEndX;
            const swipeTime = Date.now() - touchStartTime; // Тривалість свайпу

            // Фільтрація кліків та некоректних свайпів
            if (Math.abs(swipeDistance) < 50 || swipeTime > 500 && swipeTime > 50) {
                // Якщо свайп занадто короткий або надто повільний, не вважаємо його справжнім
                touchStartX = 0;
                touchEndX = 0;
                return;
            }

            // Перевіряємо напрямок свайпу
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
        window.addEventListener("orientationchange", () =>{
            location.reload()
        })
    }

    handleResize()

})();