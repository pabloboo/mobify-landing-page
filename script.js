let currentPage = 1;
const totalPages = 5;

function scrollNext() {
    if (currentPage < totalPages) {
        currentPage++;
        document.getElementById('page' + currentPage).scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollPrev() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('page' + currentPage).scrollIntoView({ behavior: 'smooth' });
    }
}

function goToFirstPage() {
    currentPage = 1;
    document.getElementById('page1').scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollNext();
    } else {
        scrollPrev();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        scrollNext();
    } else if (event.key === 'ArrowUp') {
        scrollPrev();
    }
});
