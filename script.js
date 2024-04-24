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
            },
            "Anemia": {
                translation: "کم خو",
                pronunciation: "kʌm χu"
            },
            "Bladder": {
                translation: "شاش دان",
                pronunciation: "ʃʌʃ dan"
            },
            "Cervix": {
                translation: "دان باچه دو",
                pronunciation: "dan e bʌʧʌ do"
            }
        },
        hazaragiToEnglish: {
            "خشک": {
                translation: "Amenorrhea",
                pronunciation: "ə-men-ə-REE-ə"
            },
            "صحت": { 
                translation: "Health",
                pronunciation: "health"
            },
            "کم خو": { 
                translation: "Anemia",
                pronunciation: "Anemia"
            },
            "شاش دان": { 
                translation: "Bladder",
                pronunciation: "Bladder"
            },
            "دان باچه دو": { 
                translation: "Cervix",
                pronunciation: "Cervix"
            }
        }
    };

    document.getElementById('word').addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        const direction = document.getElementById("direction").value;
        const dictionary = translations[direction];
        let matches = Object.keys(dictionary).filter(key => key.toLowerCase().startsWith(query));

        const wordList = document.getElementById('wordList');
        if (query !== "" && matches.length > 0) {
            wordList.innerHTML = matches.map(key => `<a href="#" class="list-group-item list-group-item-action">${key}</a>`).join('');
            wordList.style.display = 'block';
        } else {
            wordList.style.display = 'none';
            wordList.innerHTML = '';
        }
    });

    document.getElementById('wordList').addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            document.getElementById('word').value = e.target.textContent;
            translate(e.target.textContent); // Pass the actual word content
            this.style.display = 'none';
        }
    });

    document.querySelector('button').addEventListener('click', function() {
        translate(document.getElementById('word').value);
    });

    function translate(inputWord) {
        const direction = document.getElementById("direction").value;
        const dictionary = translations[direction];
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = ''; // Clear previous results

        // Adjust case based on dictionary structure
        const result = dictionary[inputWord] || dictionary[inputWord.toLowerCase()] || dictionary[inputWord.toUpperCase()];

        if (result) {
            const translationContainer = document.createElement("div");
            translationContainer.innerHTML = `Translation: ${result.translation}`;
            resultElement.appendChild(translationContainer);

            const pronunciationContainer = document.createElement("div");
            pronunciationContainer.innerHTML = `Pronunciation: ${result.pronunciation}`;

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
    }
});
