(function () {
    const apiURL = 'https://fav-prom.com/api_wheel_2025'

    const
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.btn-join'),
        mainPage = document.querySelector('.fav-page'),
        ballWrap = document.querySelector(".ball"),
        guideWrap = document.querySelector(".guide"),
        gameWrap = document.querySelector(".games");

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = sessionStorage.getItem('locale') || 'en',
        week = 1;

    console.log(week)

    function setState(newLocale) {
        locale = newLocale;
        sessionStorage.setItem('locale', locale);
    }
    function toggleState() {
        const newLocale = locale === 'en' ? 'uk' : 'en';
        setState(newLocale);
        window.location.reload()
    }
    document.querySelector('.en-btn').addEventListener('click', () => {
        toggleState();
    });
    document.querySelector('.week-btn').addEventListener('click', () => {
        console.log(week)
        if(week === 1){
            document.querySelector('._week1').style.display = "flex"
            document.querySelector('._week2').style.display = "none"
            return week = 2
        }
        if(week === 2){
            document.querySelector('._week2').style.display = "flex"
            document.querySelector('._week1').style.display = "none"
            week = 1
        }
    });

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';


    let i18nData = {};
    const debug = true;
    let userId;
    userId = Number(sessionStorage.getItem("userId"));

    console.log(typeof userId)

    document.querySelector(".lock-btn").addEventListener("click", () =>{
        userId ? sessionStorage.removeItem("userId") : sessionStorage.setItem("userId", '101234861')
        window.location.reload()
    })

    // userId = 9999;

    if(week === 1){
        document.querySelector('._week1').style.display = "flex"
    }
    if(week === 2){
        document.querySelector('._week2').style.display = "flex"
    }

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                });
                mutationObserver.observe(document.getElementById('ball'), {
                    childList: true,
                    subtree: true,
                });

            });
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            elems.forEach(elem => {
                const key = elem.getAttribute('data-translate');
                elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                elem.removeAttribute('data-translate');
            })
            // console.log("translate working")
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass();
    }
    loadTranslations()
        .then(init);
    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['hr', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }


    function init() {
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            setupPage();
        } else {
            setupPage();
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        setupPage();
                        checkUserAuth();
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }

        checkUserAuth();

        participateBtns.forEach((authBtn, i) => {
            authBtn.addEventListener('click', (e) => {
                e.preventDefault();
                participate();
            });
        });
    }

    function setupPage() {}
    function participate() {
        if (!userId) {
            return;
        }

        const params = {userid: userId};
        request('/user', {
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => {
            participateBtns.forEach(item => item.classList.add('hide'));
            ballWrap.classList.remove('_sign');
            setupPage();
        });
    }

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        }).then(res => res.json())
    }

    function checkUserAuth() {
        console.log(userId)
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    console.log(res)
                    if (res.userid) {
                        participateBtns.forEach(item => item.classList.add('hide'));
                        ballWrap.classList.remove('_sign');
                        guideWrap.classList.remove('_sign');
                        gameWrap.classList.remove('_sign');
                        document.querySelector(".banner__btn").classList.remove("hide")
                        document.querySelector(".progress").classList.remove("_sign");
                        if (debug) {
                            res.pointsPerDay = 30;
                            res.spinAllowed = true;
                            res.spinsStreak = 3;
                            res.spins = [];
                        }
                        // refreshUserInfo(res);
                        // console.log(res.spins)
                        displayUserSpins(res.spins);
                    } else {
                        document.querySelector(".banner__btn").classList.add("hide")
                        participateBtns.forEach(item => item.classList.remove('hide'));
                    }
                })
        } else {
            document.querySelector(".banner__btn").classList.add("hide")
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
        }
    }

    function translateKey(key) {
        if (!key) {
            return;
        }
        return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function displayUserSpins(spins) {
        const spinItem = document.querySelector('.spins-row');
        const noSpinItem = document.querySelector('.no-spins');

        if (!spins || spins.length === 0) {
            spinItem.classList.add('hide');
            noSpinItem.classList.remove('hide');
            console.log(spins)
            return;
        }

        // const spinsContainer = document.querySelector('.spins-row');
        spinItem.innerHTML = '';

        spinItem.classList.remove('hide');
        noSpinItem.classList.add('hide');
        console.log(noSpinItem)

        spins.forEach(spin => {
            const spinDate = new Date(spin.date);
            const formattedDate = spinDate.toLocaleDateString('hr-HR');
            const spinName = translateKey(spin.name) || '';

            const spinElement = document.createElement('div');
            spinElement.classList.add('spins-row-item');

            spinElement.innerHTML = `
            <span class="content-date">${formattedDate}</span>
            <span class="content-prize">${spinName}</span>
        `;

            spinItem.appendChild(spinElement);
        });
    }


    // Cards slider
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


    let currentSlide = 1,
        cardsPosition = 0,
        leftSlide,
        rightSlide;

    const updateActiveCard = (cards, activeIndex) => {
        cards.forEach((card, i) =>{
            activeIndex - 1 === i ? card.classList.add("_active") : card.classList.remove("_active")
        })
    }
    updateActiveCard(cards, currentSlide)

    function leftSlideTab(){
        leftSlide = currentSlide
    }
    function rightSlideTab(){
        rightSlide = currentSlide + (visibleSlides - 1)
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

    function setCardsPosition (position) {
        cardsWrap.style.transform = `translateX(-${position}px)`;
    };
    const moveRight = () => {

        if (currentSlide >= totalCards - (visibleSlides - 1) && isMobile === false) {
            firstLastSlides()
            currentSlide = 1;
            cardsPosition = 0;
            rightSlide++
            leftSlide++
        }else if(currentSlide === totalCards) {
            console.log(currentSlide)
            currentSlide = 1;
            cardsPosition = 0;
        }else if(currentSlide === totalCards - ( visibleSlides + 1) && isMobile === true){
            currentSlide = totalCards
            cardsPosition = cardsWrap.clientWidth - (window.innerWidth - (cardsMargin / 2))
            console.log(cardsPosition)
        }
        else {
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
        updateActiveCard(cards, currentSlide)
        firstLastSlides()
        hidePopupsOnBtn(prizePopupItem)
        // centerPopup(".prize__list-popup")

    };
    const moveLeft = () => {
        if(currentSlide === 1 && isMobile === false){
            currentSlide = totalCards - (visibleSlides - 1);
            cardsPosition = ((totalCards - (visibleSlides - 1)) * (cardWidth + cardsMargin)) -(cardWidth + cardsMargin);
        }else if (currentSlide === 2) {
            cardsPosition = 0
            currentSlide = 1
        }else if(currentSlide === 1 && isMobile === true){
            currentSlide = totalCards
            cardsPosition = cardsWrap.clientWidth - (window.innerWidth - (cardsMargin / 2))
        }else {
            cardsPosition -= cardWidth + cardsMargin;
            currentSlide--
        }
        setCardsPosition(cardsPosition);
        updateActiveCard(cards, currentSlide)
        firstLastSlides()
        hidePopupsOnBtn(prizePopupItem)
        // centerPopup(".prize__list-popup")
    };

    // centerPopup(".prize__list-popup")


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

    function   hidePopupsOnBtn(popups){
        popups.forEach(popup =>{
           popup.classList.remove("_popup")
        })
    }





// popups
    const prizeOpenBtns = document.querySelectorAll(".prize__list-item-btn"),
          prizeCloseBtns = document.querySelectorAll(".prize__list-popup-close"),
          guidePopupsWrap = document.querySelectorAll(".guide__item"),
          guideOpenBtns = document.querySelectorAll(".guide__item-info-btn"),
          guideCloseBtns = document.querySelectorAll(".guide__item-popup-close"),
          tablePopup = document.querySelector(".table__popup"),
          tablePopupClose = document.querySelector(".table__popup-close"),
          tablePopupOpen = document.querySelector(".table__info"),
          ballPopup = document.querySelector(".progress__popup"),
          ballPopupClose = document.querySelector(".progress__popup-close"),
          ballPopupOpen = document.querySelector(".progress__popup-btn"),
          prizePopupItem = document.querySelectorAll(".prize__container-item")


    document.addEventListener("click", (e) =>{

        //  prizePopupItem.forEach(card =>{
        //         if(e.target !== card){
        //             prizeOpenBtns.forEach(btn =>{
        //                 if(e.target !== btn && e.target !== card){
        //                     console.log(e.target )
        //                     // card.classList.remove("_popup")
        //                 }
        //             })
        //         }
        // })
        guidePopupsWrap.forEach(popup =>{
            if(!popup.contains(e.target)){
                popup.classList.remove("_popup")
            }
        })

        if(!ballPopup.contains(e.target) && e.target !== ballPopupOpen){
                ballPopup.classList.add("hide")
        }

    })


    setPopups(prizePopupItem, prizeOpenBtns);
    setPopups(guidePopupsWrap, guideOpenBtns);

    guideCloseBtns.forEach(btn =>{
        btn.addEventListener('click', () =>{
              hidePopupsOnBtn(guidePopupsWrap)
        });
    });

    prizeCloseBtns.forEach(btn =>{
        btn.addEventListener('click', () =>{
              hidePopupsOnBtn(prizePopupItem)
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

    ballPopupOpen.addEventListener("click", () =>{
            ballPopup.classList.remove("hide")
    });

    ballPopupClose.addEventListener("click", () =>{
            ballPopup.classList.add("hide")
    });

window.addEventListener("DOMContentLoaded", () =>{
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

        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();

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
        const maxSpeed = 7;
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
                    const targetSpeed = 0.1;
                    const speedDecayFactor = 0.05; // Коефіцієнт для плавного сповільнення

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
                    this.acceleration += 0.05;
                } else {
                    this.acceleration *= 0.95;
                }
                this.speedX += this.acceleration * (Math.random() - 0.5);
                this.speedY += this.acceleration * (Math.random() - 0.5);

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

        let lastBallShakingState = false;

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

            if (ballShaking && !lastBallShakingState) {
                snowflakes = [];
                snowflakesRemoved = 0;
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
})

// snowfall animatio

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

    const btnShake = document.querySelector(".progress__shake"),
          ball = document.querySelector(".sphere"),
          ballBox = document.querySelector(".sphere__box")

    let currentPrize;
    let pastPrize;



    // Кожен клас відповідає виграному призу:
    // "_iphone" - виграно iPhone
    // "_tv" - виграно телевізор
    // "_jbl" - виграно JBL-колонку
    // "_megogo" - виграно підписку Megogo
    // "_respin" - додаткове обертання
    // "_nothing" - нічого не виграно
    // "_points50" - виграно 50 бонусних балів
    // "_fs10" - виграно 10 фріспінів
    // "_fs25" - виграно 25 фріспінів
    // "_fs50" - виграно 50 фріспінів
    // "_saveBet100" - виграно страховку на 100 ставок
    // "_saveBet150" - виграно страховку на 150 ставок
    // "_saveBet200" - виграно страховку на 200 ставок
    // функція initShake прокидує класи відповідні призам на блок .sphere для відображення призу
    const winClasses = [
        "_iphone", "_tv", "_jbl", "_megogo", "_respin", "_nothing", "_fs10", "_fs25",
        "_fs50", "_saveBet100", "_saveBet150", "_saveBet200", "_points50"
    ];


    function removePrize(ball, box, btn){
        ball.classList.remove("_before-hide");
        winClasses.forEach(item =>{
            ball.classList.remove(`${item}`)
        })
        box.classList.remove("_box-opacity")
        btn.classList.remove("_disabled")

    }

    async function animateShake(ball, box, btn, prize, prizeNum) {


        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

        removePrize(ball, box, btn)

        if(prizeNum){
            console.log(prizeNum)
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");

            await delay(2000)

            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");

            await delay(200);

            ball.classList.add(`${prize}`);
        }
        else{
            btn.classList.add("_disabled");
            ball.classList.add("_shake");
            box.classList.add("_shake-reverse");

            // await delay(2000)

            ball.classList.remove("_shake");
            ball.classList.add("_before-hide");
            box.classList.remove("_shake-reverse");
            box.classList.add("_box-opacity");

            if(prizeNum === 0) await delay(200);

            ball.classList.add(`${prize}`);
        }
        return pastPrize = prize;


    }


    sessionStorage.setItem("prizeNum", 0)


    let prizeState = winClasses[sessionStorage.getItem("prizeNum")]

    const btnPrize1 = document.querySelector('.prize1');
    const btnPrize2 = document.querySelector('.prize2');
    const btnPrize3 = document.querySelector('.prize3');
    const btnPrize4 = document.querySelector('.prize4');
    const btnPrize5 = document.querySelector('.prize5');
    const btnPrize6 = document.querySelector('.prize6');
    const btnPrize7 = document.querySelector('.prize7');
    const btnPrize8 = document.querySelector('.prize8');
    const btnPrize9 = document.querySelector('.prize9');
    const btnPrize10 = document.querySelector('.prize10');
    const btnPrize11 = document.querySelector('.prize11');
    const btnPrize12 = document.querySelector('.prize12');
    const btnPrize13 = document.querySelector('.prize13');

    function setPrizeNum(btn, num){
        btn.addEventListener("click", (e) =>{
            sessionStorage.setItem("prizeNum", num)
            prizeState = winClasses[sessionStorage.getItem("prizeNum")]
        })
    }

    setPrizeNum(btnPrize1, 0)
    setPrizeNum(btnPrize2, 1)
    setPrizeNum(btnPrize3, 2)
    setPrizeNum(btnPrize4, 3)
    setPrizeNum(btnPrize5, 4)
    setPrizeNum(btnPrize6, 5)
    setPrizeNum(btnPrize7, 6)
    setPrizeNum(btnPrize8, 7)
    setPrizeNum(btnPrize9, 8)
    setPrizeNum(btnPrize10,9)
    setPrizeNum(btnPrize11, 10)
    setPrizeNum(btnPrize12, 11)
    setPrizeNum(btnPrize13, 12)

    function initShake(ball, btn, box, prizeNum) {
        btn.addEventListener("click", () =>{
            sendShakeRequest().then(res => {
                console.log(res);
                if (!res || !!res.error) {
                    // btnShake.classList.add('pulse-btn');
                    btnShake.classList.remove('_disabled')
                    return;
                }
                // const prize = res.number;
                const prize = prizeState;
                const streakBonus = res.streakBonus || debug;
                animateShake(ball, box, btn, prize, prizeNum).catch(err => console.error("anim error:", err));
            });
        })
    }

    initShake(ball, btnShake, ballBox, sessionStorage.getItem("prizeNum"))
    initShake(ball, btnPrize1, ballBox)
    initShake(ball, btnPrize2, ballBox )
    initShake(ball, btnPrize3, ballBox )
    initShake(ball, btnPrize4, ballBox )
    initShake(ball, btnPrize5, ballBox )
    initShake(ball, btnPrize6, ballBox )
    initShake(ball, btnPrize7, ballBox )
    initShake(ball, btnPrize8, ballBox )
    initShake(ball, btnPrize9, ballBox )
    initShake(ball, btnPrize10, ballBox )
    initShake(ball, btnPrize11, ballBox )
    initShake(ball, btnPrize12, ballBox )
    initShake(ball, btnPrize13, ballBox )


// table toggle

    const toggleItems = document.querySelectorAll('.table__toggle-item'),
          tables = document.querySelectorAll('.table__body')

    toggleItems.forEach((toggleItem, index) => {
        toggleItem.addEventListener('click', () => {
            toggleItems.forEach(item => item.classList.remove('_active'));
            tables.forEach(table => table.classList.remove('_active'));
            toggleItem.classList.add('_active');
            tables[index].classList.add('_active');
        });
    });



    const btns = document.querySelectorAll(".btn"),
          os = detectOS()

    if (os === "macOS" || os === "iOS"){
        btns.forEach(btn =>{
            btn.classList.add("_ios")
        })
    }


    function detectOS() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const platform = navigator.platform || "unknown";
        let os;

        if (/android/i.test(userAgent) && /linux arm/i.test(platform)) {
            os = "Android";
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            os = "iOS";
        }
        if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(platform)) {
            os = "macOS";
        }
        if (/Win32|Win64|Windows|WOW64/.test(platform)) {
            os = "Windows";
        }
        if (/Linux/.test(platform) && !/android/i.test(userAgent)) {
            os = "Linux";
        }
        return os
    }

    console.log("Операційна система:", os);

    const handleResize = () =>{
        let touchStartX = 0;
        let touchEndX = 0;

        cardsContainer.addEventListener('touchstart', (event) => {
            touchStartX = event.changedTouches[0].screenX;
        }, false);
        cardsContainer.addEventListener('touchend', (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                moveRight()
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                moveLeft()
            }
        }
        moveRightButton.addEventListener('click', moveRight);
        moveLeftButton.addEventListener('click', moveLeft);
        window.addEventListener("orientationchange", () =>{
            location.reload()
        })
    }

    handleResize()


    // for test
    document.querySelector(".dark-btn").addEventListener("click", () =>{
        document.body.classList.toggle("dark")
    })
    document.querySelector(".en-btn").addEventListener("click", () =>{
        document.querySelector(".fav-page").classList.toggle("en")
    })

    document.querySelector(".testMenu").addEventListener("click", ()=>{
        document.querySelector(".prizes-btns").classList.toggle("hide")
    })

})();