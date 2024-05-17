// dictionary.js

// Define the dictionary array to store word definitions
var dictionary = [
    {
        word: "ob markers",
        definition: "Out of Bound markers",
        suggestedUse: "When trying to say something is taboo."
        
    },
    {
        word: "no regret moves",
        definition: "decisions that we must make regardless",
        suggestedUse: "When trying to convince bosses that this is something that we must do even if it sounds like a bad idea now."
        
    },
    {
        word: "low hanging fruit",
        definition: "most easily achieved set of outcomes or goals",
        suggestedUse: "When trying to get buy-in for a project haha"
        
    },
    {
        word: "next bound",
        definition: "a cooler alternative to 'next stage' or 'next phase'",
        suggestedUse: "When trying to signal that your project has moved on after 10 years"
        
    },
    // Add more entries as needed
];

// Function to render the dictionary entries
function renderDictionary() {
    var dictionaryContainer = document.getElementById("dictionary");
    dictionaryContainer.innerHTML = "";

    dictionary.forEach(function(entry) {
        var entryElement = createEntryElement(entry);
        dictionaryContainer.appendChild(entryElement);
    });
}

// Function to create a dictionary entry element
function createEntryElement(entry) {
    var entryElement = document.createElement("div");
    entryElement.classList.add("entry");
    entryElement.innerHTML = `
        <div class="word">${entry.word}</div>
        <div class="definition">${entry.definition}</div>
        <div class="suggested-use">Suggested Use: ${entry.suggestedUse}</div>

    `;
    return entryElement;
}

// Function to add a new entry to the dictionary
function addToDictionary() {
    var word = document.getElementById("word").value;
    var definition = document.getElementById("definition").value;
    var suggestedUse = document.getElementById("suggestedUse").value;
    

    if (word && definition) {
        var entry = {
            word: word,
            definition: definition,
            suggestedUse: suggestedUse,
            
        };

        // Add the new entry to the dictionary array
        dictionary.push(entry);

        // Update the displayed dictionary
        renderDictionary();

        clearInputs();
    } else {
        alert("Please enter both word and definition.");
    }
}

// Function to clear the input fields after adding an entry
function clearInputs() {
    document.getElementById("word").value = "";
    document.getElementById("definition").value = "";
    document.getElementById("suggestedUse").value = "";
}

// Render the dictionary when the page loads
document.addEventListener("DOMContentLoaded", function() {
    renderDictionary();
});
