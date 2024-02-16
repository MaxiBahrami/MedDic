
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        englishToHazaragi: {
            "Amenorrhea": {
                translation: "چاردرد",
                pronunciation: "χuʃk"
            },
            // Add more translations with pronunciations
        },
        hazaragiToEnglish: {
            "چاردرد": {
                translation: "Amenorrhea",
                pronunciation: "Amenorrhea"
            },
            // Add more translations with pronunciations
        }
    };

    function translate() {
        const direction = document.getElementById("direction").value;
        const word = document.getElementById("word").value.trim().toLowerCase();
        const dictionary = translations[direction];
        const result = dictionary[word];

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
