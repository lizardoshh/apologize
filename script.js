document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const container = document.querySelector('.button-container');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close-button');
    const colorfulPopup = document.getElementById('colorfulPopup');

      yesButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    noButton.addEventListener('click', function() {
        colorfulPopup.style.display = 'block';
        setTimeout(function() {
            colorfulPopup.style.display = 'none';
        }, 3000); // Pop-up akan hilang setelah 3 detik
    });

    noButton.addEventListener('mouseover', function() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});
