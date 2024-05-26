
function searchDictionary() {
    var searchWord = document.getElementById("searchInput").value.toLowerCase();
    var entry = dictionary.find(function(item) {
        return item.word.toLowerCase() === searchWord;
    });

    if (entry) {
        // Display the popup with the found entry
        openDictionaryPopup();
        displayPopupContent(entry);
    } else {
        alert("Word not found in the dictionary.");
    }
}

// Function to display popup content with the found dictionary entry
function displayPopupContent(entry) {
    var popupContent = document.getElementById("dictionaryOutput");
    popupContent.innerHTML = `
        <div class="word">${entry.word}</div>
        <div class="definition">${entry.definition}</div>
        <div class="suggested-use">Suggested Use: ${entry.suggestedUse}</div>
    `;
}

function openDictionaryPopup() {
    var modal = document.getElementById("dictionaryPopup");
    modal.style.display = "block";
}

function closeDictionaryPopup() {
    var modal = document.getElementById("dictionaryPopup");
    modal.style.display = "none";
}