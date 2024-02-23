document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        englishToHazaragi: {
            "Amenorrhea": {
                translation: "خشک",
                pronunciation: "χuʃk",
                sound: "./pronunciation/Amenorrhea.mp3"
            },
            "Health": { 
                translation: "صت",
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
            // Create a container for the translation
            const translationContainer = document.createElement("div");
            translationContainer.innerHTML = `Translation: ${result.translation}`;
            resultElement.appendChild(translationContainer);

            // Create a container for the pronunciation and sound icon
            const pronunciationContainer = document.createElement("div");
            pronunciationContainer.innerHTML = `Pronunciation: ${result.pronunciation} `;

            if (result.sound) {
                const audio = new Audio(result.sound);
                const soundIcon = document.createElement("span"); // Use span or i for icon
                soundIcon.innerHTML = "🔊"; // Example using emoji, replace with <i class="your-icon-class"></i> if using FontAwesome or similar
                soundIcon.className = "play-sound-icon"; // Add class for styling the icon
                soundIcon.style.cursor = "pointer"; // Change cursor to pointer to indicate it's clickable
                soundIcon.onclick = function() { audio.play(); };
                
                pronunciationContainer.appendChild(soundIcon);
            }

            // Append the pronunciation container to the result element
            resultElement.appendChild(pronunciationContainer);
        } else {
            resultElement.innerText = "Translation not found.";
        }
    }

    document.querySelector('button').addEventListener('click', translate);

    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        // Here, you can store the user's theme preference using localStorage, if required
    });

    document.getElementById('word-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your contribution!');
        document.getElementById('word-form').reset();
    });
});
