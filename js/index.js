const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav_link");
const bodyElement = document.querySelector("body");
const pageTitle = document.querySelector("title");
const divContainerElement = document.querySelector(".container");
const homePage = document.querySelector("#home");
const profilePage = document.querySelector("#profile");
const logoHome = document.querySelector("#logo");
createDivContainer();

homePage.addEventListener("click",() => {
    divContainerElement.classList.add("container");
    createDivContainer()
})

logoHome.addEventListener("click",  () => {
    divContainerElement.classList.add("container");
    createDivContainer()
})

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open")
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open")
    })
});

function createDivContainer() {
    divContainerElement.innerHTML = "";
    fetch(`http://localhost:3000/scores`)
    .then(res => res.json())
    .then(dataInfoObjs => {
        dataInfoObjs.forEach(dataInfoObj => {
            placedata(dataInfoObj);
        })
    })

    pageTitle.innerText = "The Game Stop";

    let divMain1Element = document.createElement("div");
    divMain1Element.id = "main1";
    let gameName1 = document.createElement("p");
    gameName1.innerText = "Memorize";
    gameName1.classList.add("game");
    divMain1Element.append(gameName1);


    let divMain2Element = document.createElement("div");
    divMain2Element.id = "main2";
    let gameName2 = document.createElement("p");
    gameName2.innerText = "HungrySnake";
    gameName2.classList.add("game");
    divMain2Element.append(gameName2);

    let divMain3Element = document.createElement("div");
    divMain3Element.id = "main3";
    let gameName3 = document.createElement("p");
    gameName3.innerText = "Tetris";
    gameName3.classList.add("game");
    divMain3Element.append(gameName3);

    let divSidebarElement = document.createElement("div");
    divSidebarElement.id = "sidebar";


    let divBottomLeft2 = document.createElement("div")
    divBottomLeft2.classList.add("bottom-left2");

    
    
    showLoginForm();

    let divContent1Element = document.createElement("div");
    divContent1Element.id = "content1";

        let content1ImgElement = document.createElement("img");
        content1ImgElement.classList.add("game_img");
        content1ImgElement.src = "imgs/memory.png";
        content1ImgElement.alt = "Memorize";

        let content1DivGameDescriptionElement = document.createElement("div");
        content1DivGameDescriptionElement.classList.add("description");

            let content1GameNameP = document.createElement("p");
            content1GameNameP.classList.add("game_name");
            

            let content1GameDescriptionP = document.createElement("p");
            content1GameDescriptionP.classList.add("game_description");
            

    let divContent2Element = document.createElement("div");
    divContent2Element.id = "content2";

        let content2ImgElement = document.createElement("img");
        content2ImgElement.classList.add("game_img");
        content2ImgElement.src = "imgs/HungrySnake.jpeg";
        content2ImgElement.alt = "HungrySnake";

        let content2divGameDescriptionElement = document.createElement("div");
        content2divGameDescriptionElement.classList.add("description");

            let content2GameNameP = document.createElement("p");
            content2GameNameP.classList.add("game_name");

            let content2GameDescriptionP = document.createElement("p");
            content2GameDescriptionP.classList.add("game_description");

    let divContent3Element = document.createElement("div");
    divContent3Element.id = "content3";

        let content3ImgElement = document.createElement("img");
        content3ImgElement.classList.add("game_img");
        content3ImgElement.src = "imgs/tetris.jpeg";
        content3ImgElement.alt = "Tetris";

        let content3divGameDescriptionElement = document.createElement("div");
        content3divGameDescriptionElement.classList.add("description");

            let content3GameNameP = document.createElement("p");
            content3GameNameP.classList.add("game_name");

            let content3GameDescriptionP = document.createElement("p");
            content3GameDescriptionP.classList.add("game_description");
    

    content3divGameDescriptionElement.append(content3GameNameP, content3GameDescriptionP);
    divContent3Element.append(content3ImgElement, content3divGameDescriptionElement);

    content2divGameDescriptionElement.append(content2GameNameP, content2GameDescriptionP);
    divContent2Element.append(content2ImgElement, content2divGameDescriptionElement);

    content1DivGameDescriptionElement.append(content1GameNameP, content1GameDescriptionP);
    divContent1Element.append(content1ImgElement, content1DivGameDescriptionElement);

    divContainerElement.append(divMain1Element, divMain2Element, divMain3Element, divSidebarElement, divBottomLeft2, divContent1Element, divContent2Element, divContent3Element);

    bodyElement.append(divContainerElement);

    content1ImgElement.addEventListener("click", () => {
        divContainerElement.innerHTML = "";
        pageTitle.innerText = "Memorize";

        createMemorize();
    })

    function placedata(dataInfoObj) {

        if (dataInfoObj.game.name === "Memorize")
        {
            let userHighscore = document.createElement("p");
            userHighscore.classList.add("user-highscore");
            userHighscore.innerText = `${dataInfoObj.user.username}: ${dataInfoObj.highscore}`;
            divMain1Element.append(userHighscore);
            content1GameNameP.innerText = dataInfoObj.game.name;
            content1GameDescriptionP.innerText = dataInfoObj.game.description;
        }
        else if (dataInfoObj.game.name === "HungrySnake")
        {
            
            let userHighscore = document.createElement("p");
            userHighscore.classList.add("user-highscore");
            userHighscore.innerText = `${dataInfoObj.user.username}: ${dataInfoObj.highscore}`;
            divMain2Element.append(userHighscore);
            content2GameNameP.innerText = dataInfoObj.game.name;
            content2GameDescriptionP.innerText = dataInfoObj.game.description;
        }
        else
        {
            let userHighscore = document.createElement("p");
            userHighscore.classList.add("user-highscore");
            userHighscore.innerText = `${dataInfoObj.user.username}: ${dataInfoObj.highscore}`;
            divMain3Element.append(userHighscore);
            content3GameNameP.innerText = dataInfoObj.game.name;
            content3GameDescriptionP.innerText = dataInfoObj.game.description;
        }
        


    }

    function showLoginForm() {
        divSidebarElement.innerHTML = ""
        
        let loginForm = document.createElement("form")
            
        let usernameDiv = document.createElement('div')
            usernameDiv.className = "form-group"
        let usernameLabel = document.createElement("label")
            usernameLabel.htmlFor = "username"
            usernameLabel.innerText = "Username"
    
        let usernameInput = document.createElement("input")
            usernameInput.type = "text"
            usernameInput.id = "username"
            usernameInput.placeholder = "Enter Username"
            usernameInput.autocomplete = "off"

        let lineBreak = document.createElement("br");

        usernameDiv.append(usernameLabel,lineBreak, usernameInput)
        
        let submitButton = document.createElement('button')
            submitButton.type = "submit"
            submitButton.className = "login-button"
            submitButton.innerText = "Login"

        let createUser = document.createElement("button");
        createUser.classList.add("create-user");
        createUser.innerText = "Create New User";

    
        loginForm.append(usernameDiv, submitButton)
    
        divSidebarElement.append(loginForm,createUser)

        createUser.addEventListener("click", (evt) => {
            divSidebarElement.innerHTML = "";
            
            let newUserForm = document.createElement("form")
            
            let newUsernameDiv = document.createElement('div')
            newUsernameDiv.className = "new-user-div"

            let newUsernameLabel = document.createElement("label")
            newUsernameLabel.htmlFor = "newUsername"
            newUsernameLabel.innerText = "New account"
        
            let newUsernameInput = document.createElement("input")
            newUsernameInput.type = "text"
            newUsernameInput.id = "newUsername"
            newUsernameInput.placeholder = "Enter Username"
            newUsernameInput.autocomplete = "off"

            let newLineBreak = document.createElement("br");
        
            newUsernameDiv.append(newUsernameLabel, newLineBreak, newUsernameInput);
            
            let newSubmitButton = document.createElement('button')
            newSubmitButton.type = "submit"
            newSubmitButton.innerText = "Submit" 
            newSubmitButton.classList.add("new-user-submit-button")    

            newUserForm.append(newUsernameDiv, newSubmitButton);

            divSidebarElement.append(newUserForm);

            newUserForm.addEventListener("submit", (evt) => {
                evt.preventDefault();

                let username = evt.target.newUsername.value
        
                fetch("http://localhost:3000/createUser", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username
                    })
                })
                    .then(res => res.json())
                    .then(userObj => {
            
                        if(userObj.id){
                            showUserInfo(userObj);
                        } else {
                            console.error(userObj)
                        }
            
                    })
            })
        })

        loginForm.addEventListener("submit", (evt) =>{
            evt.preventDefault()
            let username = evt.target.username.value
        
            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    username: username
                })
            })
                .then(res => res.json())
                .then(userObj => {
        
                    if(userObj.id){
                        showUserInfo(userObj);
                    } else {
                        console.error(userObj)
                    }
        
                })
        })

        let showUserInfo = (userObj) => {
            divSidebarElement.innerHTML = ""

            let userUsername = document.createElement("p")
            userUsername.innerText = `Logged in as: ${userObj.username}`

            let memorizeGame = document.createElement("div");
            memorizeGame.innerText = "Memorize";

            let hungrySnakeGame = document.createElement("div");
            hungrySnakeGame.innerText = "HungrySnake";

            let tetrisGame = document.createElement("div");
            tetrisGame.innerText = "Tetris";

            userObj.scores.forEach(score => {
                let gameHighscore = document.createElement("p");
                gameHighscore.innerText = score.highscore;
                if(score.game_id === 2)
                {
                    memorizeGame.append(gameHighscore);
                }
                else if(score.game_id === 3)
                {
                    hungrySnakeGame.append(gameHighscore)
                }
                else {
                    tetrisGame.append(gameHighscore)
                }
            }) 
            let ChangeUsernameForm = document.createElement("form");
        

            let newUserDiv = document.createElement("div");
            newUserDiv.classList.add("new-user-div");
            
            let labelForNewUsername = document.createElement("label");
            labelForNewUsername.htmlFor = "newUsername";
            labelForNewUsername.innerText = "New username: ";

            let newUsername = document.createElement("input");
            newUsername.type = "text";
            newUsername.id = "newUsername";
            newUsername.placeholder = "Enter new username"
            newUsername.autocomplete = "off"

            let submitButtonNewUsername = document.createElement("input");
            submitButtonNewUsername.type = "submit";
            submitButtonNewUsername.classList.add("new-username-button")
            submitButtonNewUsername.innerText = "Submit";
            
            let deleteUser = document.createElement("button");
            deleteUser.classList.add("delete-user");
            deleteUser.innerText = "Delete User";

            let LogOutButton = document.createElement("button");
            LogOutButton.innerText = "Log Out";
            LogOutButton.classList.add("log-out");

            let lineBreak = document.createElement("br");

            newUserDiv.append(labelForNewUsername, lineBreak, newUsername);

            ChangeUsernameForm.append(newUserDiv, submitButtonNewUsername);
            divSidebarElement.append(userUsername, memorizeGame, hungrySnakeGame, tetrisGame, ChangeUsernameForm, LogOutButton, deleteUser);

            ChangeUsernameForm.addEventListener("submit", (evt) => {
                evt.preventDefault();
                let newUsername = evt.target.newUsername.value;
                fetch(`http://localhost:3000/users/${userObj.id}`, {
                    method: "PATCH", 
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        username: newUsername
                    })
                })
                .then(res => res.json())
                .then(newUserObj => {
                    userObj.username = newUserObj.username
                    createDivContainer();

                })
                
            })

            LogOutButton.addEventListener("click", (evt) => {
                showLoginForm();
            })

            window.theUserObj = userObj


            deleteUser.addEventListener("click", (evt) => {

                fetch(`http://localhost:3000/users/${userObj.id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then((emptyObject) => {
                        window.theUserObj = null;
                        createDivContainer();
                    })
        
            })
        }
    
    }

}

function createMemorize() {
    let gameSectionElement = document.createElement("section");
    gameSectionElement.classList.add("memory-game");

    let cardDiv1 = document.createElement("div");
    cardDiv1.dataset.framework = "bird";
    cardDiv1.classList.add("memory-card");

        let frontFaceImg1 = document.createElement("img");
        frontFaceImg1.src = "imgs/memorize/bird.jpg";
        frontFaceImg1.alt = "bird";
        frontFaceImg1.classList.add("front-face");

        let backFaceImg1 = document.createElement("img");
        backFaceImg1.src = "imgs/memorize/spider.jpg";
        backFaceImg1.alt = "spider";
        backFaceImg1.classList.add("back-face");

    let cardDiv2 = document.createElement("div");
    cardDiv2.dataset.framework = "bird";
    cardDiv2.classList.add("memory-card");

        let frontFaceImg2 = document.createElement("img");
        frontFaceImg2.src = "imgs/memorize/bird.jpg";
        frontFaceImg2.alt = "bird";
        frontFaceImg2.classList.add("front-face");

        let backFaceImg2 = document.createElement("img");
        backFaceImg2.src = "imgs/memorize/spider.jpg";
        backFaceImg2.alt = "spider";
        backFaceImg2.classList.add("back-face");

    //////////
    let cardDiv3 = document.createElement("div");
    cardDiv3.dataset.framework = "elephant";
    cardDiv3.classList.add("memory-card");

        let frontFaceImg3 = document.createElement("img");
        frontFaceImg3.src = "imgs/memorize/elephant.jpg";
        frontFaceImg3.alt = "elephant";
        frontFaceImg3.classList.add("front-face");

        let backFaceImg3 = document.createElement("img");
        backFaceImg3.src = "imgs/memorize/spider.jpg";
        backFaceImg3.alt = "spider";
        backFaceImg3.classList.add("back-face");

    let cardDiv4 = document.createElement("div");
    cardDiv4.dataset.framework = "elephant";
    cardDiv4.classList.add("memory-card");

        let frontFaceImg4 = document.createElement("img");
        frontFaceImg4.src = "imgs/memorize/elephant.jpg";
        frontFaceImg4.alt = "elephant";
        frontFaceImg4.classList.add("front-face");

        let backFaceImg4 = document.createElement("img");
        backFaceImg4.src = "imgs/memorize/spider.jpg";
        backFaceImg4.alt = "spider";
        backFaceImg4.classList.add("back-face");

    //////////
    let cardDiv5 = document.createElement("div");
    cardDiv5.dataset.framework = "leopard";
    cardDiv5.classList.add("memory-card");

        let frontFaceImg5 = document.createElement("img");
        frontFaceImg5.src = "imgs/memorize/leopard.jpg";
        frontFaceImg5.alt = "leopard";
        frontFaceImg5.classList.add("front-face");

        let backFaceImg5 = document.createElement("img");
        backFaceImg5.src = "imgs/memorize/spider.jpg";
        backFaceImg5.alt = "spider";
        backFaceImg5.classList.add("back-face");

    let cardDiv6 = document.createElement("div");
    cardDiv6.dataset.framework = "leopard";
    cardDiv6.classList.add("memory-card");

        let frontFaceImg6 = document.createElement("img");
        frontFaceImg6.src = "imgs/memorize/leopard.jpg";
        frontFaceImg6.alt = "leopard";
        frontFaceImg6.classList.add("front-face");

        let backFaceImg6 = document.createElement("img");
        backFaceImg6.src = "imgs/memorize/spider.jpg";
        backFaceImg6.alt = "spider";
        backFaceImg6.classList.add("back-face");

    //////////
    let cardDiv7 = document.createElement("div");
    cardDiv7.dataset.framework = "panda";
    cardDiv7.classList.add("memory-card");

        let frontFaceImg7 = document.createElement("img");
        frontFaceImg7.src = "imgs/memorize/panda.jpg";
        frontFaceImg7.alt = "panda";
        frontFaceImg7.classList.add("front-face");

        let backFaceImg7 = document.createElement("img");
        backFaceImg7.src = "imgs/memorize/spider.jpg";
        backFaceImg7.alt = "spider";
        backFaceImg7.classList.add("back-face");

    let cardDiv8 = document.createElement("div");
    cardDiv8.dataset.framework = "panda";
    cardDiv8.classList.add("memory-card");

        let frontFaceImg8 = document.createElement("img");
        frontFaceImg8.src = "imgs/memorize/panda.jpg";
        frontFaceImg8.alt = "panda";
        frontFaceImg8.classList.add("front-face");

        let backFaceImg8 = document.createElement("img");
        backFaceImg8.src = "imgs/memorize/spider.jpg";
        backFaceImg8.alt = "spider";
        backFaceImg8.classList.add("back-face");

    //////////
    let cardDiv9 = document.createElement("div");
    cardDiv9.dataset.framework = "eagle";
    cardDiv9.classList.add("memory-card");

        let frontFaceImg9 = document.createElement("img");
        frontFaceImg9.src = "imgs/memorize/eagle.jpg";
        frontFaceImg9.alt = "eagle";
        frontFaceImg9.classList.add("front-face");

        let backFaceImg9 = document.createElement("img");
        backFaceImg9.src = "imgs/memorize/spider.jpg";
        backFaceImg9.alt = "spider";
        backFaceImg9.classList.add("back-face");

    let cardDiv10 = document.createElement("div");
    cardDiv10.dataset.framework = "eagle";
    cardDiv10.classList.add("memory-card");

        let frontFaceImg10 = document.createElement("img");
        frontFaceImg10.src = "imgs/memorize/eagle.jpg";
        frontFaceImg10.alt = "eagle";
        frontFaceImg10.classList.add("front-face");

        let backFaceImg10 = document.createElement("img");
        backFaceImg10.src = "imgs/memorize/spider.jpg";
        backFaceImg10.alt = "spider";
        backFaceImg10.classList.add("back-face");

    //////////
    let cardDiv11 = document.createElement("div");
    cardDiv11.dataset.framework = "monkey";
    cardDiv11.classList.add("memory-card");

        let frontFaceImg11 = document.createElement("img");
        frontFaceImg11.src = "imgs/memorize/monkey.jpg";
        frontFaceImg11.alt = "monkey";
        frontFaceImg11.classList.add("front-face");

        let backFaceImg11 = document.createElement("img");
        backFaceImg11.src = "imgs/memorize/spider.jpg";
        backFaceImg11.alt = "spider";
        backFaceImg11.classList.add("back-face");

    let cardDiv12 = document.createElement("div");
    cardDiv12.dataset.framework = "monkey";
    cardDiv12.classList.add("memory-card");

        let frontFaceImg12 = document.createElement("img");
        frontFaceImg12.src = "imgs/memorize/monkey.jpg";
        frontFaceImg12.alt = "monkey";
        frontFaceImg12.classList.add("front-face");

        let backFaceImg12 = document.createElement("img");
        backFaceImg12.src = "imgs/memorize/spider.jpg";
        backFaceImg12.alt = "spider";
        backFaceImg12.classList.add("back-face");

    let resetButton = document.createElement("button");
    resetButton.classList.add("reser-button");
    resetButton.innerText = "Reset Game";


    cardDiv12.append(frontFaceImg12, backFaceImg12);
    cardDiv11.append(frontFaceImg11, backFaceImg11);
    cardDiv10.append(frontFaceImg10, backFaceImg10);
    cardDiv9.append(frontFaceImg9, backFaceImg9);
    cardDiv8.append(frontFaceImg8, backFaceImg8);
    cardDiv7.append(frontFaceImg7, backFaceImg7);
    cardDiv6.append(frontFaceImg6, backFaceImg6);
    cardDiv5.append(frontFaceImg5, backFaceImg5);
    cardDiv4.append(frontFaceImg4, backFaceImg4);
    cardDiv3.append(frontFaceImg3, backFaceImg3);
    cardDiv2.append(frontFaceImg2, backFaceImg2);
    cardDiv1.append(frontFaceImg1, backFaceImg1);

    gameSectionElement.append(cardDiv1, cardDiv2, cardDiv3, cardDiv4, cardDiv5, cardDiv6, cardDiv7, cardDiv8, cardDiv9, cardDiv10, cardDiv11, cardDiv12);
    
    divContainerElement.append(gameSectionElement, resetButton);
    divContainerElement.classList.remove("container");
    let cards = document.querySelectorAll(".memory-card");

    resetButton.addEventListener("click", (evt) => {
        divContainerElement.innerHTML = "";
        createMemorize();
    })
    
    memorizeGame(cards);
}

function memorizeGame(cards) {

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
    
        this.classList.add('flip');
    
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
    
            return;
        }
    
        secondCard = this;
        checkForMatch();
    }
    
    function checkForMatch() {
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
        isMatch ? disableCards() : unflipCards();
    }
    
    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    
        resetBoard();
    }
    
    function unflipCards() {
        lockBoard = true;
    
        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    
        resetBoard();
        }, 1500);
    }
    
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    
    (function shuffle() {
        cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
        });
    })();
    
    cards.forEach(card => card.addEventListener('click', flipCard));
}

