
function showFilter() {
    let filterForm = document.getElementById("filterContent");
    let newForm = document.getElementById("newContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
        newForm.style.display = "none";
    } else {
        filterForm.style.display = "none";
    }
}

function showAddNew() {
    let newForm = document.getElementById("newContent");
    let filterForm = document.getElementById("filterContent");

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
        filterForm.style.display = "none";
    } 
    else {
        newForm.style.display = "none";
    }
}

function filterArticles() {

    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;

    let articles = document.querySelectorAll("#articleList article");

    articles.forEach(function(article) {
        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }
        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }
        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}

function addNewArticle() {

    let title = document.getElementById("inputHeader").value;
    let text = document.getElementById("inputArticle").value;
    let type = "";
    let markerText = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
        markerText = "Opinion";
    } 
    else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
        markerText = "Recipe";
    } 
    else if (document.getElementById("lifeRadio").checked) {
        type = "update";
        markerText = "Update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please fill out all fields.");
        return;
    }

    let article = document.createElement("article");
    article.className = type;
    let span = document.createElement("span");
    span.className = "marker";
    span.textContent = markerText;
    let h2 = document.createElement("h2");
    h2.textContent = title;
    let p = document.createElement("p");
    p.textContent = text;

    article.appendChild(span);
    article.appendChild(h2);
    article.appendChild(p);

    document.getElementById("articleList").appendChild(article);
    document.getElementById("newContent").reset();
    document.getElementById("newContent").style.display = "none";
}