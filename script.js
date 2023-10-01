function sayHello() {
    const name = prompt("What is your name?"); //pop up
    alert("Hello, " + name + "! Welcome to my website."); //also pop up
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1; // built in operator to access math 
    alert("You have rolled a " + dice + "!");
}

rollDice();

function jobSearch() {
    let months = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    months += dice //dice variable updates month
    alert("It will take you " + months + " months to get a job as a developer");

}

jobSearch();

function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        alert("You are a pro!");
    } else if (average >= 4) {
        alert("Don't worry you're nearly there");
    } else {
        alert("If you keep trying you will get there");
    }
}

comfortLevel(9,7,3);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}