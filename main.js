document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    console.log('Hello from main.js');

    const page = document.getElementById('page');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    console.log({ page, main, footer });

    function updateMain() {
        const spacing = 20;
        const pageHeight = page.clientHeight;
        const footerHeight = footer.clientHeight;
        const height = -pageHeight + footerHeight + window.innerHeight;
        console.log('Updating main position: ' + height);
        main.style.top = height + 'px';
    }

    window.addEventListener('resize', updateMain);
    updateMain();

});

