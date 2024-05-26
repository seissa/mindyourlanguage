
var dictionary = [
    {
        word: "OB markers",
        definition: "Out of Bound markers",
        suggestedUse: "When trying to say something is taboo."
        
    },
    {
        word: "No regret moves",
        definition: "Decisions that we must make regardless",
        suggestedUse: "When trying to convince bosses that this is something that we must do even if it sounds like a bad idea now."
        
    },
    {
        word: "Low hanging fruit",
        definition: "Most easily achieved set of outcomes or goals",
        suggestedUse: "When trying to get buy-in for a project or initiatves by saying that it's low effort"
        
    },
    {
        word: "Next bound",
        definition: "A cooler alternative to 'next stage' or 'next phase'",
        suggestedUse: "When trying to signal that your project has moved on after 10 years"
        
    },
    {
        word: "Optional",
        definition: "Not optional (usually)",
        suggestedUse: "When trying to give a false sense of choice. Alternatively, can use 'encouraged to'"
        
    },
    
];

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
