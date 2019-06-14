import { ProgresCircle } from "/js/ProgressCircle.js";
import { myAlert } from "/js/myAlert.js";

("use strict");
window.addEventListener("DOMContentLoaded", app);
function app() {
  let myObjects = {
    //just object container
    circles: [],
    circlesRunning: false
  };

  const mySetUp = {
    //Here you can set up page app, circles parametrs.. for now.
    myName: "Brian",
    myEmail: "brianwala22@gmail.com",
    // progress
    progress: [0.7, 0.52, 0.25, 0.2, 0.25],
    speed: [70 * 1, 52 * 1, 25 * 1, 20 * 1, 25 * 1],
    text: [
      'BEM, SEMANTIC TAGS, HTML5 STANDARDS, SEO, google analytics, tinypng, PWA, flex (almost all projects), grid, bootstrap4, Old tehchnologies (inline-block, float-left etc.). I am using for testing: HTML Validator, lighthouse audits and gtmetrix history. Books I have read: "Advanced Game Design with HTML5 and JavaScript". I am currently studing on BS4/SCSS.',
      'Vanilla, syntax of JSX(Babel) and Typescript(superset of JS), OOP, DRY, naming convention, all Data Types and all methods/properties, API, Algorithms(most knowledge based on C++), Data modeling. Window, navigator, history, DOMTokenList, DOM + manipulation, Nodelist, [...res], closures, Error handling, constructor, prototype, __proto__ chains, settter/getter, canvas context drawing(games and effects), JSON, localStorage, application filesystem patterns,  ES8, await, async, ES6, arrow functions, Promise, this, bind, class, extends, modules, exports, require, jquery lib, emailjs lib, reCAPTCHA, leaflet.js lib, (ProgressBar.js + myDOM.js + myAlert.js) libs(my own). Books I have read: "Advanced Game Design with HTML5 and JavaScript". Currently learning: Node.js/React.',
      "Global, REST, WEB API, URL, IP, Server Statuses, wrapper function, exports, require. mkdir, touch, cd. npm(moving project with dependencies)=>{npm install dependecie -g, npm link dependecie, init -y, npm install rimraf -g, rimraf node_modules, git push, git pull, npm install}. Path, FileSystem, url, events, net, http (class Server all methods/events, eg. request (IncomingMessage), responde (ServerResponse), class ClientRequest), express(set, get, locals, app.METHODS, server, app, Router (setting routes), use, send, redirect, sendFile, views, statics (documentation)). gulp(task, watch, css-clean, concat, pipe). JSON, json-package config, git. Currently study on express. Currently working on: server side apps.",
      "Babel -> JSX, state, prevState, props, React Dev Tool, Render, React, Fragment, extends React.Component, costructor? this : variables.",
      'My first programming language :). All kind of data types (beside vector) and methods/properties, OOP, class, public, private, protected, inherit, pointers, algorithms(bubble sort, quicksort), libs: iostream, string, cstdlib more than windows.h, conio.h, ctime, creating my own headers, SDL2. C++ builder. I created: 1) turn-based strategy, text game. 2) coverter app for units of measurement. Much more small projects for learning. Books I have read: "The C++ Programming Language, 4th Edition"'
    ]
    // for ".project__iframe" || for myDOM.iframes.srcsttps://sajrus33.github.io/App-ToDo/index.html", "https://sajrus33.github.io/Card-game-prototype/", "https://sajrus33.github.io/Escape-Layout/", "https://sajrus33.github.io/Flubmaster-web/"]
    // iframesSrcs: ["https://sajrus33.github.io/Flubmaster-web/", "https://sajrus33.github.io/Escape-Layout/", "https://sajrus33.github.io/App-ToDo/index.html", "https://sajrus33.github.io/Card-game-prototype/", "https://sajrus33.github.io/Escape-Layout/", "https://sajrus33.github.io/Flubmaster-web/"]
    // iframesSrcs: [
    //   "https://sajrus33.github.io/game-tower-defence/",
    //   "https://sajrus33.github.io/lib-progress-circles/",
    //   "https://sajrus33.github.io/app-todo/",
    //   "https://sajrus33.github.io/game-memory-cards/",
    //   "https://sajrus33.github.io/app-maps/",
    //   "https://sajrus33.github.io/web-flubmaster/"
    // ]
  };

  const myDOM = {
    // NAV
    nav: {
      ham: document.querySelector(".ham"),
      bar1: document.querySelector(".ham__bar--first"),
      bar2: document.querySelector(".ham__bar--second"),
      bar3: document.querySelector(".ham__bar--thirt"),
      hamList: document.querySelector(".ham__list"),
      hamLinks: [...document.querySelectorAll(".ham__link")],
      links: [...document.querySelectorAll(".nav__link")]
    },

    // ADDS
    paralax: document.querySelector(".paralax"),
    arrow: document.querySelector(".arrow"),

    // HEADER
    header: document.querySelector(".header"),
    headerBtn: document.querySelector(".header__button"),

    // ABOUT SECTION
    about: document.querySelector(".main__section--about"),

    // SKILLS SECTION
    skills: document.querySelector(".main__section--skills"),

    // PROGRESS SECTION
    progress: document.querySelector(".main__section--progress"),
    progressMiddle: undefined,
    progressCanvases: [...document.querySelectorAll(".progress__canvas")],
    progressSections: [...document.querySelectorAll(".progress__technology")],
    progressDescribe: document.querySelector(".progress__describe"),

    // PROJECTS SECTION
    projects: document.querySelector(".main__section--projects"),

    // FOOTER SECTION
    footer: document.querySelector(".main__section--footer"),
    footerBtn: document.querySelector(".footer__button"),
    footerEmail: document.querySelector(".myEmail"),

    mailForm: {
      name: document.querySelector(".footer__name"),
      email: document.querySelector(".footer__email"),
      number: document.querySelector(".footer__number"),
      message: document.querySelector(".footer__message"),
      submit: document.querySelector(".footer__submit")
    },

    //   "https://sajrus33.github.io/game-tower-defence/",
    //   "https://sajrus33.github.io/lib-progress-circles/",
    //   "https://sajrus33.github.io/app-todo/",
    //   "https://sajrus33.github.io/game-memory-cards/",
    //   "https://sajrus33.github.io/app-maps/",
    //   "https://sajrus33.github.io/web-flubmaster/"
    // IFRAMES
    iframes: {
      imgs: [
        "img/game-tower.png",
        "img/web-portfolio.png",
        "img/app-todo.png",
        "img/game-memory.png",
        "img/app-maps.png",
        "img/web-flubmaster.png"
      ],
      // srcs: mySetUp.iframesSrcs,
      iframes: [...document.querySelectorAll(".project__iframe")]
      // check: [...document.querySelectorAll(".project__check")],
      // code: [...document.querySelectorAll(".project__code")]
    },

    // FUNCTIONS
    createProgressCircles: function() {
      myDOM.progressCanvases.forEach((circle, i) => {
        myObjects.circles.push(
          new ProgresCircle(
            circle,
            mySetUp.speed[i],
            mySetUp.progress[i],
            0.15,
            "rgba(252,198,38,1)",
            "white",
            "bold calc(2.6vw + 2.6vh) Open Sans",
            1
          )
        );
       
        myObjects.circles[i].init();
      });
    },

    scrollTo: (target = myDOM.header, duration = 200) => {
      myDOM.paralax.style.animation = "fadeOut .1s forwards";

      const targetPosition = target.offsetTop; //top of target
      const startPosition = window.pageYOffset; //window se

      const distance = targetPosition - startPosition;
      let startTime = null;

      const ease = (time, start, distance, duration) => {
        time /= duration / 2;
        if (time < 1) return (distance / 2) * time * time + start;
        time--;
        return (-distance / 2) * (time * (time - 2) - 1) + start;
      };

      const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const newPosition = ease(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, newPosition);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          myDOM.paralax.style.animation = "fadeIn .5s forwards";
        }
      };
      requestAnimationFrame(animation);
    },

    sendEmail: () => {
      const number = myDOM.mailForm.number.value;
      const name = myDOM.mailForm.name.value;
      const email = myDOM.mailForm.email.value;
      const message = myDOM.mailForm.message.value;

      if (number && email && message && name) {
        //  creating new message from inputs values
        const newMessage = {
          replay_to: String(number),
          from_name: String(name) + " " + String(email),
          to_name: mySetUp.myName,
          message_html: String(message)
        };
        // send email with emailjs
        emailjs
          .send("brianwala22_gmail_com", "template_gqc9FdOP", newMessage)
          .then(
            response => {
              // console.log({ response });!!!!!!!!!!!! check me !!!!!!!!!!
              myAlert("Message has been sent");
              grecaptcha.reset();
              for (let property in myDOM.mailForm) {
                if (myDOM.mailForm.hasOwnProperty(property)) {
                  if (property !== "submit") {
                    myDOM.mailForm[property].value = "";
                  }
                }
              }
            },
            error => {
              let alertString;
              // console.log(error.status);
              if (error.status == 400) {
                alertString = "Verification by reCAPTCHA is needed !";
              } else if (error.status == 0) {
                alertString = "You are out of connection !";
              } else {
                alertString = "We are sorry, automatic mailbox is full !";
              }
              myAlert(alertString);
            }
          );
        // clean inputs values
      } else myAlert("Please fill out all form positions");
    },

    // MAIN FUNCTIONS INITIALIZATION
    reSize: () => {
      myDOM.progressMiddle =
        myDOM.progress.offsetTop + myDOM.progress.offsetHeight / 2;
    },
    listen: () => {
      //                                             EVENT LISTENER

      //            WINDOW
      window.addEventListener("resize", myDOM.reSize, false);
      window.addEventListener(
        "scroll",
        () => {
          const windowY = scrollY + innerHeight;
          const progressMiddle = myDOM.progressMiddle;

          if (!mySetUp.circlesRunning && windowY >= progressMiddle) {
            myObjects.circles.forEach(circle => {
              circle.run();
            });
            mySetUp.circlesRunning = true;
          } else if (windowY < progressMiddle) {
            mySetUp.circlesRunning = false;
          }
        },
        { passive: true }
      );

      //           HEADER BUTTON
      myDOM.headerBtn.addEventListener("click", () => {
        const scrollTime = myDOM.footer.offsetTop / 2;
        myDOM.scrollTo(myDOM.footer, scrollTime);
      });

      //            main NAV  && hamburger nav  links"on clicks"
      myDOM.nav.links.forEach((link, i) => {
        const targetName = link.classList.value.slice(
          21,
          link.classList.value.length
        );
        link.addEventListener("click", () => {
          const scrollTime = myDOM[targetName].offsetTop / 2;
          myDOM.scrollTo(myDOM[targetName], scrollTime);
        });
        myDOM.nav.hamLinks[i].addEventListener("click", () => {
          const scrollTime = myDOM[targetName].offsetTop / 2;
          setTimeout(() => {
            myDOM.scrollTo(myDOM[targetName], scrollTime);
            myDOM.nav.ham.click();
          }, 300);
        });
      });

      //               HAMBURGER ico menu on click
      myDOM.nav.ham.addEventListener("click", () => {
        // hamburger ico change  ||| -> X
        myDOM.nav.bar1.classList.toggle("ham__bar--firstA");
        myDOM.nav.bar2.classList.toggle("ham__bar--secondA");
        myDOM.nav.bar3.classList.toggle("ham__bar--thirtA");
        // display MOBILE NAV
        myDOM.nav.hamList.classList.toggle("flex");
      });

      //           ARROW NAVIGATION on click
      myDOM.arrow.addEventListener("click", () => {
        const scrollTime = Math.abs(window.pageYOffset / 3);
        myDOM.scrollTo(myDOM.header, scrollTime);
      });

      //            PROGRESS CIRCLE on click
      myDOM.progressSections.forEach((section, i) => {
        section.addEventListener("click", () => {
          myDOM.progressSections.forEach((circle, index) => {
            if (i !== index) {
              circle.classList.toggle("displayNone");
            }
          });

          myDOM.progressDescribe.classList.toggle("displayNone");
          setTimeout(() => {
            myDOM.progressDescribe.classList.toggle(
              "progress__describe--runIn"
            );
          }, 10);

          if (mySetUp.text[i]) {
            myDOM.progressDescribe.innerText = "";

            const newH2 = document.createElement("h2");
            newH2.innerText = "My knowledge";

            const newP = document.createElement("p");
            newP.innerText = mySetUp.text[i];

            myDOM.progressDescribe.appendChild(newH2);
            myDOM.progressDescribe.appendChild(newP);
          } else {
            myDOM.progressDescribe.innerText = "Content soon..";
          }

          myObjects.circles[i].run();
        });
      });

      myDOM.iframes.iframes.forEach((iframe, i) => {
        iframe.style.backgroundImage = "url('" + myDOM.iframes.imgs[i] + "')";
      });

      myDOM.mailForm.submit.addEventListener("click", () => {
        event.preventDefault();
        myDOM.sendEmail();
      });

      //            click event for copy email button in footer
      myDOM.footerBtn.addEventListener("click", () => {
        myDOM.footerEmail.value = mySetUp.myEmail;
        myDOM.footerEmail.focus();

        myDOM.footerEmail.select();
        document.execCommand("copy");
      });
    }
  };

  const init = () => {
    myDOM.reSize();
    emailjs.init("user_tdJP5pQdemG5AhJpq5J7O");
    myDOM.createProgressCircles();
    myDOM.listen();
  };
  init();

  /*
    1
    $ npm install emailjs-com --save
     */
}
