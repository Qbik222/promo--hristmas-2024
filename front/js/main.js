(function () {
    const apiURL = 'https://fav-prom.com/api_wheel_2025'

    const
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.btn-join'),
        redirectBtns = document.querySelectorAll('.took-part'),
        topResultsTable = document.getElementById('top-users'),
        weeksSelector = document.querySelectorAll('.table__toggle-item'),
        weeksContainer = document.querySelector('.table__toggle'),
        mainPage = document.querySelector('.fav-page'),
        ballWrap = document.querySelector('.ball'),
        guideWrap = document.querySelector('.guide'),
        gameWrap = document.querySelector('.games');

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');


    let locale = 'uk';

    // console.log(week)
    //
    // function setState(newLocale) {
    //     locale = newLocale;
    //     sessionStorage.setItem('locale', locale);
    // }
    // function toggleState() {
    //     const newLocale = locale === 'en' ? 'uk' : 'en';
    //     setState(newLocale);
    //     window.location.reload()
    // }
    // document.querySelector('.en-btn').addEventListener('click', () => {
    //     toggleState();
    // });

    // document.querySelector('.week-btn').addEventListener('click', () => {
    //     console.log(week)
    //     if(week === 1){
    //         document.querySelector('._week1').style.display = "flex"
    //         document.querySelector('._week2').style.display = "none"
    //         return week = 2
    //     }
    //     if(week === 2){
    //         document.querySelector('._week2').style.display = "flex"
    //         document.querySelector('._week1').style.display = "none"
    //         week = 1
    //     }
    // });

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';


    let i18nData = {};
    const debug = false;
    let selectedWeekTabId = 0;
    let userId;
    userId = 7777771;

    // userId = Number(sessionStorage.getItem("userId"));
    //
    // console.log(typeof userId)
    //
    // document.querySelector(".lock-btn").addEventListener("click", () =>{
    //     userId ? sessionStorage.removeItem("userId") : sessionStorage.setItem("userId", '101234861')
    //     window.location.reload()
    // })

    // if(week === 1){
    //     document.querySelector('._week1').style.display = "flex"
    // }
    // if(week === 2){
    //     document.querySelector('._week2').style.display = "flex"
    // }

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    translate();
                });
                mutationObserver.observe(document.getElementById('sam'), {
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
        }
        if (locale === 'en') {
            mainPage.classList.add('en');
        }
        refreshLocalizedClass();
    }

    function refreshLocalizedClass(element, baseCssClass) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }


    //new
    function getUsers(week) {
        const url = resolveUsersUrl(week);
        return request(url)
            .then(users => users.map(userOrId => typeof userOrId === 'number' ? {userid: userOrId} : userOrId));
    }

    function resolveUsersUrl(week) {
        return week ? `/week-users/${week}` : '/users';
    }

    const InitPage = () => {
        weeksSelector.forEach((w, i) => w.addEventListener('click', e => {
            if (i === selectedWeekTabId) {
                return;
            }
            weeksSelector.forEach(s => s.classList.remove('_active'));
            w.classList.add('_active');
            selectedWeekTabId = i;
            refreshUsers(selectedWeekTabId + 1);
        }));

        refreshUsers();
    }

    function init() {
        refreshWeekTabs();
        if (window.store) {
            var state = window.store.getState();
            userId = state.auth.isAuthorized && state.auth.id || '';
            checkUserAuth().then(setupPage);
        } else {
            checkUserAuth().then(setupPage);
            let c = 0;
            var i = setInterval(function () {
                if (c < 50) {
                    if (!!window.g_user_id) {
                        userId = window.g_user_id;
                        checkUserAuth().then(setupPage);
                        clearInterval(i);
                    }
                } else {
                    clearInterval(i);
                }
            }, 200);
        }

        participateBtns.forEach((authBtn, i) => {
            authBtn.addEventListener('click', (e) => {
                e.preventDefault();
                participate();
            });
        });
    }

    function setupPage() {
        InitPage();
    }

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
            redirectBtns.forEach(item => item.classList.remove('hide'));
            ballWrap.classList.remove('_sign');
            setupPage();
        });
    }

    function refreshUsers(week) {
        getUsers(week).then(users => {
            renderUsers(users);
            translate();
        });
    }

    const renderUsers = (users) => {
        topResultsTable.classList.remove('hide');
        // resultsTableOther.classList.remove('hide');

        if (users && users.length) {
            let topUsers = users.slice(0, 10);
            const currentUser = userId && users.find(user => user.userid === userId);
            const currentUserIndex = currentUser && users.indexOf(currentUser);
            if (currentUserIndex > 10) {
                topUsers.push(currentUser);
            }
            populateUsersTable(topUsers, userId, topResultsTable, users);

            //     const currentUserQuestIndex = currentUser && questUsers.indexOf(currentUser);

            //     let otherUsers;
            //     if (!currentUserIndex || currentUserIndex < 10) {
            //         otherUsers = users.slice(10, 13);
            //     } else {
            //         otherUsers = users.slice(Math.max(currentUserIndex - 1, 10), currentUserIndex + 2);
            //     }

            //     let otherQuestUsers;
            //     if (!currentUserQuestIndex || currentUserQuestIndex < 10) {
            //         otherQuestUsers = questUsers.slice(10, 13);
            //     } else {
            //         otherQuestUsers = questUsers.slice(Math.max(currentUserQuestIndex - 1, 10), currentUserQuestIndex + 2);
            //     }

            //     if (otherUsers && otherUsers.length) {
            //         populateUsersTable(otherUsers, userId, resultsTableOther, users);
            //         populateUsersTable(otherQuestUsers, userId, questTableOther, questUsers, true);
            //     }
        }
    }

    function updateWager(rank) {
        let prizeText = '-';
        if (rank >= 11 && rank <= 50) {
            prizeText = 'x1';
        } else if (rank >= 51 && rank <= 150) {
            prizeText = 'x2';
        } else if (rank >= 151 && rank <= 300) {
            prizeText = 'x3';
        } else if (rank >= 301 && rank <= 400) {
            prizeText = 'x4';
        } else if (rank >= 401 && rank <= 550) {
            prizeText = 'x5';
        } else if (rank >= 551 && rank <= 750) {
            prizeText = '-';
        }
        return prizeText;
    }

    function populateUsersTable(users, currentUserId, table, allUsers) {
        table.innerHTML = '';
        if (users && users.length) {
            users.forEach((user, index) => {
                const checkCurrentUser = currentUserId && currentUserId === user.userid;
                const additionalUserRow = document.createElement('div');
                if (checkCurrentUser) {
                    additionalUserRow.classList.add('you');
                }

                const place = allUsers.indexOf(user) + 1;

                let placeClass;
                if (table.id === 'top-users' || table.id === 'questsTable') {
                    if (index === 0) {
                        placeClass = 'gold';
                    } else if (index === 1) {
                        placeClass = 'silver';
                    } else if (index === 2) {
                        placeClass = 'bronze';
                    }
                }

                const prizeKey = getPrizeTranslationKey(place);
                const prizeValue = updateWager(place);
                additionalUserRow.classList.add('table__body-row');
                if (placeClass) {
                    additionalUserRow.classList.add(placeClass);
                }
                additionalUserRow.innerHTML = `
                <div class="table__body-row-item">${place}</div>
                <div class="table__body-row-item">${checkCurrentUser ? user.userid : maskUserId(user.userid)}</div>
                <div class="table__body-row-item">${user.points && !isNaN(user.points) ? user.points : 0}</div>
                <div class="table__body-row-item">${prizeKey ? translateKey(prizeKey) : ' - '}</div>
                <div class="table__body-row-item">${prizeValue}</div>
            `;
                table.append(additionalUserRow);
            });
        }
    }

    function getPrizeTranslationKey(place) {
        if (place <= 10) {
            return `prize_${place}`;
        } else if (place <= 20) {
            return `prize_11-20`;
        } else if (place <= 30) {
            return `prize_21-30`;
        } else if (place <= 40) {
            return `prize_31-40`;
        } else if (place <= 50) {
            return `prize_41-50`;
        } else if (place <= 70) {
            return `prize_51-70`;
        } else if (place <= 100) {
            return `prize_71-100`;
        } else if (place <= 150) {
            return `prize_101-150`;
        } else if (place <= 200) {
            return `prize_151-200`;
        } else if (place <= 250) {
            return `prize_201-250`;
        } else if (place <= 300) {
            return `prize_251-300`;
        } else if (place <= 350) {
            return `prize_301-350`;
        } else if (place <= 400) {
            return `prize_351-400`;
        } else if (place <= 450) {
            return `prize_401-450`;
        } else if (place <= 500) {
            return `prize_451-500`;
        } else if (place <= 550) {
            return `prize_501-550`;
        } else if (place <= 600) {
            return `prize_551-600`;
        } else if (place <= 650) {
            return `prize_601-650`;
        } else if (place <= 700) {
            return `prize_651-700`;
        } else if (place <= 750) {
            return `prize_701-750`;
        }
    }


    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
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
        // console.log(userId)
        if (userId) {
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.add('hide');
            }
            return request(`/favuser/${userId}?nocache=1`)
                .then(res => {
                    console.log(res)
                    if (res.userid) {
                        participateBtns.forEach(item => item.classList.add('hide'));
                        redirectBtns.forEach(item => item.classList.remove('hide'));
                        ballWrap.classList.remove('_sign');
                        guideWrap.classList.remove('_sign');
                        gameWrap.classList.remove('_sign');
                        document.querySelector(".progress").classList.remove("_sign");
                        if (debug) {
                            res.pointsPerDay = 30;
                            res.spinAllowed = true;
                            res.spinsStreak = 3;
                            res.spins = [];
                        }
                        refreshWheel(res);
                        refreshDailyPointsSection(res);
                        // console.log(res.spins)
                        displayUserSpins(res.spins);
                    } else {
                        participateBtns.forEach(item => item.classList.remove('hide'));
                    }
                })
        } else {
            for (let participateBtn of participateBtns) {
                participateBtn.classList.add('hide');
            }
            for (const unauthMes of unauthMsgs) {
                unauthMes.classList.remove('hide');
            }
            return Promise.resolve(false);
        }
    }

    loadTranslations()
        .then(init);

    function refreshWeekTabs() {
        selectedWeekTabId = calculateRecentPromoWeeks() - 1;
        if (!selectedWeekTabId || selectedWeekTabId === 0) { // promo not started yet
            weeksContainer.classList.add('hide');
            return;
        }

        for (let i = 0; i < 4; i++) {
            const weekSelector = weeksSelector[i];
            if (selectedWeekTabId < i) {
                weekSelector.classList.add('hide');
            }
        }

        weeksSelector.forEach((w, i) => {
            w.classList.remove('active');
            if (i === selectedWeekTabId) {
                w.classList.add('active');
            }
        });
    }

    function calculateRecentPromoWeeks() {
        const date = Date.now();
        if (date < new Date("2024-12-17T22:00:00Z")) {
            return 1;
        } else {
            return 2;
        }
    }


    function translateKey(key) {
        if (!key) {
            return;
        }
        return i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
    }

    function refreshWheel(userInfo) {
        if (userInfo.spinAllowed) {
            return;
        }
        if (userInfo.pointsPerDay >= 50) {
            ballWrap.classList.add('_lock');
        } else {
            ballWrap.classList.add('_lock');
        }
    }

    function refreshDailyPointsSection(userInfo) {
        const points = Math.min(userInfo.pointsPerDay || 0, 50);
        // const progressStatus = document.querySelector('.progressStatus');
        // progressStatus.innerHTML = `${points}/50`;
        const currentSpan = document.querySelector('.current');
        currentSpan.innerHTML = `${points}`;
        const progressLine = document.querySelector('.progress__bar-thumb');
        const progress = points / 50.0 * 100;
        progressLine.style.width = `${progress}%`;
    }

    function displayUserSpins(spins) {
        const spinItem = document.querySelector('.spins-row');
        const noSpinItem = document.querySelector('.no-spins');

        if (!spins || spins.length === 0) {
            spinItem.classList.add('hide');
            noSpinItem.classList.remove('hide');
            return;
        }

        // const spinsContainer = document.querySelector('.spins-row');
        spinItem.innerHTML = '';

        spinItem.classList.remove('hide');
        noSpinItem.classList.add('hide');
        console.log(noSpinItem)

        spins.forEach(spin => {
            const spinDate = new Date(spin.date);
            const formattedDate = spinDate.toLocaleDateString('uk-UA');
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

    setTimeout(() => mainPage.classList.add('overflow'), 1000);


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

// snowfall animation
    let i = 1;
    function sendShakeRequest() {
        if (!userId) {
            return;
        }

        if (debug) {
            return Promise.resolve({
                // number: i++,
                number: 'jbl'
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

    function initShake(ball, btn, box, prizeNum) {
        btn.addEventListener("click", () =>{
            sendShakeRequest().then(res => {
                console.log(res);
                if (!res || !!res.error) {
                    // btnShake.classList.add('pulse-btn');
                    btnShake.classList.remove('_disabled')
                    return;
                }
                const prize = `_${res.number}`;
                const prizeNum = winClasses.indexOf(prize);
                console.log('Prize:', prize);
                console.log('Prize Num:', prizeNum)
                const streakBonus = res.streakBonus || debug;
                animateShake(ball, box, btn, prize, prizeNum).catch(err => console.error("anim error:", err));
            });
        })
    }

    initShake(ball, btnShake, ballBox)

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
    // document.querySelector(".dark-btn").addEventListener("click", () =>{
    //     document.body.classList.toggle("dark")
    // })
    // document.querySelector(".en-btn").addEventListener("click", () =>{
    //     document.querySelector(".fav-page").classList.toggle("en")
    // })
    //
    // document.querySelector(".testMenu").addEventListener("click", ()=>{
    //     document.querySelector(".prizes-btns").classList.toggle("hide")
    // })

})();
