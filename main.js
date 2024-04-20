var links = `
<a href="Info.html">Informatii</a>
<a href="websites.html">Website-uri</a>
<a href="Actualizari.html">Actualizari</a>
<a href="Contact.html">Contacteaza-ma</a>
`;

var name = "Romania | Wiki";

var logo = document.querySelector('.logo').innerHTML = name;
var linksMenu = document.querySelector('.links-menu').innerHTML = links;
var ph = document.querySelector('.links-zone').innerHTML = links;

var menuph, btnph;

menuph = document.querySelector('.ph-menu');
btnph = document.querySelector('.menu-btn');

btnph.addEventListener('click', () => {
    if (menuph.style.display === 'block') {
        menuph.style.display = 'none';
    } else {
        menuph.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menuph.contains(event.target);
    const isClickOnButton = btnph.contains(event.target);
            
    if (!isClickInsideMenu && !isClickOnButton) {
        menuph.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search');
    const suggestionsDiv = document.querySelector('.sugestions');

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const results = document.querySelectorAll('.titlu-art');

        if (searchTerm !== '') {
            let found = false;
            results.forEach(result => {
                const title = result.textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    result.parentElement.style.display = 'block';
                    found = true;
                } else {
                    result.parentElement.style.display = 'none';
                }
            });

            if (searchTerm === '189020') {
                window.location.href = 'teste.html';
            }

            if (found) {
                suggestionsDiv.style.display = 'block';
            } else {
                suggestionsDiv.style.display = 'none';
            }
        } else {
            results.forEach(result => {
                result.parentElement.style.display = 'block';
            });
            suggestionsDiv.style.display = 'none';
        }
    });
});

