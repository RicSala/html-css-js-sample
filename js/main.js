// Open the browser javascript console to see these messages
console.log("Javascript loaded!");


// It is good practice to put the initial at the beginning
// so we know what we're doing in this javascript file.
setupVanillaCode();
setupJQueryCode();
setupJQueryCodeInlined();
setupVanillaAutoUpdate();
setupJQueryAutoUpdate()
setupJQueryCodeImproved();


// --- Functions --- //

function setupJQueryAutoUpdate() {

    const input = $(".jquery.liveupdate input");
    input.keyup(function () {
        alert("i am here!")
        const result = document.querySelector(".jquery.liveupdate .result");
        result.textContent = "You are searching for: " + input.val();
    });


    $(".jquery.liveupdate button").click(function () {
        alert("and i am here too!")
        $(".jquery.liveupdate .result").textContent = "You searched for: " +
            document.querySelector(".jquery.liveupdate input").val();
    });
}



function setupVanillaAutoUpdate() {
    const input = document.querySelector(".vanilla.liveupdate input");
    input.onkeyup = function () {
        const result = document.querySelector(".vanilla.liveupdate .result");
        result.textContent = "You are searching for: " + input.value;

    };
    const button = document.querySelector(".vanilla.liveupdate button");
    button.onclick = function () {
        document.querySelector(".vanilla.liveupdate .result").textContent = "You searched for: " +
            document.querySelector(".vanilla.liveupdate input").value;
    };

}





/** Vanilla Javascript example */
function setupVanillaCode() {

    const button = document.querySelector(".vanilla button"); //SELECCIONA EL BOTÓN Y LE DICE QUE PASA SI LO PULSA...
    button.onclick = function () {
        const input = document.querySelector(".vanilla input"); //SELECCIONA EL ELEMENTO QUE CONTIENE EL TEXTO...
        const searchTerm = input.value;                         //Y SE GUARDA EL VALOR DEL TEXTO EN UNA CONSTANTE
        const result = document.querySelector(".vanilla .result"); //SELECCIONA DONDE APARECERÁ EL RESULTADO...
        result.textContent = "You searched for: " + searchTerm;     //Y LE ASIGNA EL VALOR QUE MOSTRARÁ
        button.style.display = 'none'; // hides button              //Y HACE DESAPARECER EL BOTÓN...
    };
}


/** jQuery example (equivalent to the vanilla example above) */
function setupJQueryCode() {

    // language=JQuery-CSS
    const button = $(".jquery.verbose button"); //document.queryselector(".vanilla button") == $(".vanilla button")
    button.click(function () {                     //button.onclick = function() {---}== button.click(function() {...}
        const input = $(".jquery.verbose input");
        const searchTerm = input.val();
        const result = $(".jquery.verbose .result");
        result.text("You searched for: " + searchTerm);
        button.hide();
    });
}

// With jQuery it's easy to inline variables and end up with this equivalent code:

/** jQuery example (inlined) */
function setupJQueryCodeInlined() {

    $(".jquery.inlined button").click(function () {
        $(".jquery.inlined .result").text("You searched for: " + $(".jquery.inlined input").val());
        $(".jquery.inlined button").hide();
    });
}

// But the previous code is a bit hard to read, and it also looks for elements multiple times.
// We can improve it extracting some elements into variables.

/** jQuery example (improved) */
function setupJQueryCodeImproved() {

    const div = $(".jquery.improved"); // we get the div element and then find elements inside of it
    const button = div.find("button"); // we extract the button because we use it twice

    button.click(function () {
        div.find(".result").text("You searched for: " + div.find("input").val()); //div.find(".result")...
        button.hide();
    });
}
