const revealPage = (pageId) => {
    document.querySelector(`div #${pageId}`).style.display = 'block';
};

const handleChoiceClick = (event) => {
    console.log('Choice clicked:', event.target.getAttribute('href'));
    event.preventDefault();
    const pageId = event.target.getAttribute('href').substring(1);
    document.querySelectorAll('div .pg').forEach((page) => {
        page.style.display = 'none';
    });
    revealPage(pageId);
};

const init = () => {
    document.querySelectorAll('div.pg-choice li a').forEach((link) => {
        link.addEventListener('click', handleChoiceClick);
    });

    revealPage('p-start');
};

(async () => {
    document.addEventListener('DOMContentLoaded', init);
})();