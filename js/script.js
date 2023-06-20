function changeContent(link) {
    const contentTitle = document.getElementById("contentTitle");
    const contentText = document.getElementById("contentText");

    if (link === "Home") {
        contentTitle.textContent = "Home";
        contentText.textContent = "This is the home content.";
    } else if (link === "About") {
        contentTitle.textContent = "About";
        contentText.textContent = "Hello, I'm Marian Vulpes, a transgender woman from Presidente Prudente, São Paulo. I'm currently studying Systems Analysis and Development at Fatec, where I am acquiring extensive knowledge and skills in several programming languages ​​and techniques. However, my main focus is on Python. In addition, I have knowledge in web development languages ​​such as JavaScript, React and PHP, as well as proficiency in MySQL and MongoDB. As a personal touch, I like to carry out independent projects that stimulate my learning, always naming them with the name of Pokémon as my trademark. I'm still in my study phase while looking for work experience. I am moved by the love of programming and the desire to learn more and more!";
    } else if (link === "Projects") {
        contentTitle.innerHTML = 'Projects<span class="underscore" style="visibility: hidden;">_</span>';
        contentText.textContent = "This is the projects content.";

        const underscoreElement = document.querySelector(".underscore");
    setInterval(function () {
      underscoreElement.style.visibility =
        underscoreElement.style.visibility === "hidden"
          ? "visible"
          : "hidden";
    }, 800);

    } else if (link === "Contact") {
        contentTitle.textContent = "Contact";
        contentText.textContent = "This is the contact content.";
    }
}

changeContent("Home");
