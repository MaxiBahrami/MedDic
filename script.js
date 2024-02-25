document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        englishToHazaragi: {
            "Amenorrhea": {
                translation: "خشک",
                pronunciation: "χuʃk",
                sound: "./pronunciation/Amenorrhea.mp3"
            },
            "Health": { 
                translation: "صحت",
                pronunciation: "səhat"
                // Assuming sound URL will be added here
            },
            "Anemia": {
                translation: "کم خو",
                pronunciation: "kʌm χu"
                // Assuming sound URL will be added here
            },
            "Bladder": {
                translation: "شاش دان",
                pronunciation: "ʃʌʃ dan"
                // Assuming sound URL will be added here
            },
            "Cervix": {
                translation: "دان باچه دو",
                pronunciation: "dan e bʌʧʌ do"
                // Assuming sound URL will be added here
            }
        },
        hazaragiToEnglish: {
            "خشک": {
                translation: "Amenorrhea",
                pronunciation: "ə-men-ə-REE-ə"
                // Assuming sound URL will be added here
            },
            "صحت": { 
                translation: "Health",
                pronunciation: "health"
                // Assuming sound URL will be added here
            },
            "کم خو": { 
                translation: "Anemia",
                pronunciation: "Anemia"
                // Assuming sound URL will be added here
            },
            "شاش دان": { 
                translation: "Bladder",
                pronunciation: "Bladder"
                // Assuming sound URL will be added here
            },
            "دان باچه دو": { 
                translation: "Cervix",
                pronunciation: "Cervix"
                // Assuming sound URL will be added here
            }
        }
    };

    function incrementSearchCount(word) {
        const count = localStorage.getItem(word) || 0;
        localStorage.setItem(word, parseInt(count) + 1);
    }

    function updateMostSearchedWords() {
        const mostSearchedWordsContainer = document.getElementById('most-searched-words');
        mostSearchedWordsContainer.innerHTML = ''; // Clear previous content

        const words = Object.keys(translations.englishToHazaragi).concat(Object.keys(translations.hazaragiToEnglish));
        const wordCounts = words.map(word => ({
            word,
            count: parseInt(localStorage.getItem(word.toLowerCase()) || 0)
        })).sort((a, b) => b.count - a.count).slice(0, 3);

        wordCounts.forEach(item => {
            if (item.count > 0) { // Only display words that have been searched
                const wordElement = document.createElement('p');
                wordElement.className = 'news-item';
                wordElement.innerHTML = `${item.word} <span class="news-content">Searched ${item.count} times</span>`;
                mostSearchedWordsContainer.appendChild(wordElement);
            }
        });
    }

    function translate() {
        const direction = document.getElementById("direction").value;
        const word = document.getElementById("word").value.trim().toLowerCase();
        const dictionary = translations[direction];
        let result = null;

        if (direction === 'englishToHazaragi') {
            const lowerCaseDictionary = Object.keys(dictionary).reduce((acc, key) => {
                const lowerKey = key.toLowerCase();
                acc[lowerKey] = dictionary[key];
                return acc;
            }, {});
            result = lowerCaseDictionary[word];
        } else {
            result = dictionary[word];
        }

        const resultElement = document.getElementById("result");
        resultElement.innerHTML = ''; // Clear previous results
        if (result) {
            // Display translation and pronunciation
            const translationContainer = document.createElement("div");
            translationContainer.innerHTML = `Translation: ${result.translation}`;
            resultElement.appendChild(translationContainer);

            const pronunciationContainer = document.createElement("div");
            pronunciationContainer.innerHTML = `Pronunciation: ${result.pronunciation} `;

            if (result.sound) {
                const audio = new Audio(result.sound);
                const soundIcon = document.createElement("span");
                soundIcon.innerHTML = "🔊";
                soundIcon.className = "play-sound-icon";
                soundIcon.style.cursor = "pointer";
                soundIcon.onclick = function() { audio.play(); };
                pronunciationContainer.appendChild(soundIcon);
            }

            resultElement.appendChild(pronunciationContainer);
        } else {
            resultElement.innerText = "Translation not found.";
        }

        // Increment search count and update most searched words display
        incrementSearchCount(word.toLowerCase());
        updateMostSearchedWords();
    }

    document.querySelector('button').addEventListener('click', translate);

    // Initialize most searched words display on page load
    updateMostSearchedWords();
});
