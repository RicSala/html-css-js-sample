
// It is good practice to put the initial at the beginning
// so we know what we're doing in this javascript file.
setupVanillaCode();
setupJQueryCode();
setupJQueryCodeSimplified();


// --- Functions --- //

/** Vanilla Javascript example */
function setupVanillaCode() {
  const button = document.querySelector(".vanilla button");
  button.onclick = function() {
    const input = document.querySelector(".vanilla input");
    const searchTerm = input.value;
    const paragraph = document.querySelector(".vanilla .result");
    paragraph.textContent = "You searched for: " + searchTerm;
    button.style.display = 'none'; // hides button
  };
}

/** jQuery example (equivalent to the vanilla example above) */
function setupJQueryCode() {
  const button = $(".jquery.verbose button");
  button.click(function() {
    const input = $(".jquery.verbose input");
    const searchTerm = input.val();
    const paragraph = $(".jquery.verbose .result");
    paragraph.text("You searched for: " + searchTerm);
    button.hide();
  });
}

// With jQuery it's easy to inline variables and end up with this equivalent code:

/** jQuery example (simplified) */
function setupJQueryCodeSimplified() {
  const div = $(".jquery.simplified"); // get div container and the find inside of it
  const button = div.find("button");
  button.click(function() {
    div.find(".result").text("You searched for: " + div.find("input").val());
    button.hide();
  });
}
