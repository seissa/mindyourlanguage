
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
        suggestedUse: "When trying to get buy-in for a project or initiatves by saying that it's low effort, helps with KPIs."
        
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
    {
        word: "PG",
        definition: "Plead guilty",
        suggestedUse: "When trying to own up to your mistakes before your boss catches you; 'Boss, I PG first.'"
        
    },
    {
        word: "NFA",
        definition: "No Further Action",
        suggestedUse: "When clarifying that the issue has closed, and that no follow-ups are necessary"
        
    },
    {
        word: "North Star",
        definition: "Your most long-term, high-level outcomes that you're working towards",
        suggestedUse: "When explaining the ultimate goal that your project aspires to achieve"
        
    },
    {
        word: "TechUp",
        definition: "One month training programme to earn street cred at the table when talking about ops-tech integration",
        suggestedUse: "When someone who knows nothing about said topic and tries to mansplain to you; 'I was at TechUp, so you can stop now.'"
        
    },
    {
        word: "Future proofing",
        definition: "An approach to make a product or system more likely to withstand the shocks and stresses of future events",
        suggestedUse: "When trying to convince people that the value of doing something is in the long term; 'We are future-proofing our laws in view of technological advancements by doing this now'" 
        
    },
    {
        word: "OTOT",
        definition: "Own time, own target",
        suggestedUse: "Free pass to do what you do as long as you meet the deadline." 
        
    },
    {
        word: "Die on this hill",
        definition: "Something you pursue wholeheartedly with no regard to the price you have to pay",
        suggestedUse: "When trying to show your commitment to the issue on hand - or alternatively, explaining why you're giving up; 'Since big boss has expressed reservations, then let's not die on this hill la.'" 
        
    },
    {
        word: "Moving goalpost",
        definition: "Shifting objectives and outcomes",
        suggestedUse: "Please don't get me started.'" 
        
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
