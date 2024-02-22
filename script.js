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
        if (result) {
            resultElement.innerHTML = `Translation: ${result.translation}<br>Pronunciation: ${result.pronunciation}`;

            if (result.sound) {
                const audio = new Audio(result.sound);
                const playButton = document.createElement("button");
                playButton.textContent = "Play Pronunciation Sound";
                playButton.onclick = function() { audio.play(); };

                resultElement.appendChild(document.createElement("br")); // Add line break for spacing
                resultElement.appendChild(playButton);
            }
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
