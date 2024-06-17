import "./styles.css";

/**
  Complete the `addheadings()` function here.
*/
function addHeadings() {
    const articles = document.querySelectorAll("article");
    for (let article of articles) {
        const content = article.innerHTML;
        article.innerHTML = `<h2>${content}</h2>`;
    }
}

/**
  Complete the `styleTutorialsAndArticles()` function here.
*/
function styleTutorialsAndArticles() {
    const articles = document.querySelectorAll("article");
    for (let article of articles) {
        if (article.innerHTML.includes("Article")) {
            article.classList.add("article");
        }
        if (article.innerHTML.includes("Tutorial")) {
            article.classList.add("tutorial");
        }
    }
}

/**
  Write the `separateAllTutorials()` function here.
*/
function separateAllTutorials() {
    const articles = document.querySelectorAll("article");
    const articlesSection = document.querySelector(".articles");
    const arts = [];
    const tutorials = [];
    for (let article of articles) {
        if (article.innerHTML.includes("Article")) {
            arts.push(article);
        }
        if (article.innerHTML.includes("Tutorial")) {
            tutorials.push(article);
            articlesSection.removeChild(article);
        }
    }

    if (tutorials.length) {
        const tutorialsSection = document.createElement("section");
        tutorialsSection.classList.add("tutorials");
        tutorials.forEach((tutorial) => tutorialsSection.appendChild(tutorial));
        document.querySelector(".container").appendChild(tutorialsSection);
    }
}

/**
  No need to edit the following.
*/
function main() {
    addHeadings();
    styleTutorialsAndArticles();
    separateAllTutorials();
}

main();