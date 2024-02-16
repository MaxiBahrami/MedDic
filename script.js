document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        englishToHazaragi: {
            "Amenorrhea": {
                translation: "خشک",
                pronunciation: "χuʃk"
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
    function translate() {
        const direction = document.getElementById("direction").value;
        const word = document.getElementById("word").value.trim().toLowerCase(); // Normalize input to lowercase
        const dictionary = translations[direction];
        let result = null;
    
        // If translating from English to Hazaragi, keys are initially uppercase in your dictionary
        if (direction === 'englishToHazaragi') {
            // Convert dictionary keys to lowercase for the lookup
            const lowerCaseDictionary = Object.keys(dictionary).reduce((acc, key) => {
                const lowerKey = key.toLowerCase(); // Convert key to lowercase
                acc[lowerKey] = dictionary[key]; // Assign the original value to the lowercase key
                return acc;
            }, {});
            result = lowerCaseDictionary[word]; // Use the lowercase dictionary for lookup
        } else {
            // For Hazaragi to English, you can use the dictionary directly as it's already in lowercase
            result = dictionary[word];
        }
    
        if (result) {
            document.getElementById("result").innerHTML = `Translation: ${result.translation}<br>Pronunciation: ${result.pronunciation}`;
        } else {
            document.getElementById("result").innerText = "Translation not found.";
        }
    }
    
    // Add event listener to the translate button
    document.querySelector('button').addEventListener('click', translate);
});

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode-toggle');
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        // You can store the user's theme preference here using localStorage
    });
});

document.getElementById('word-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server
    alert('Thank you for your contribution!');
    // Reset form after submission
    document.getElementById('word-form').reset();
});
