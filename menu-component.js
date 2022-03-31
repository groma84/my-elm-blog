const define = window.hybrids.define;
const html = window.hybrids.html;

function getActivePage(pageName) {
    if (window.location.href.indexOf(`${pageName}.html`) !== -1) {
        return true;
    }
    if (window.location.pathname === '/' && pageName === 'index') {
        return true;
    }
    return false;
}

const MenuComponent = {
    render: () => html`
    <div class="menu">
        <nav>
            <ul>
                <li class="${getActivePage('2021') && 'active'}">
                    <a href="2021.html" class="button">Blog</a>
                </li>
                <li class="${getActivePage('2020') && 'active'}">
                    <a href="2020.html">2020</a>
                </li>
                <li class="${getActivePage('2019') && 'active'}">
                    <a href="2019.html">2019</a>
                </li>
                <li class="${getActivePage('2018') && 'active'}">
                    <a href="2018.html">2018</a>
                </li>
                <li class="${getActivePage('events') && 'active'}">
                    <a href="events.html">Events & Termine</a>
                </li>
                <li class="${getActivePage('faq') && 'active'}">
                    <a href="faq.html">FAQ</a>
                </li>
                <li class="${getActivePage('datenschutz') && 'active'}">
                    <a href="datenschutz.html">Datenschutz</a>
                </li>
                <li class="${getActivePage('impressum') && 'active'}">
                    <a href="impressum.html">Impressum</a>
                </li>
            </ul>
        </nav>

        <aside class="social_media_stuff">
            <ul>
                <li><a href="https://www.meetup.com/de-DE/Lambda-Lounge-Funktionale-Programmierung-Nurnberg/">FP Meetup Nürnberg</a></li>
                <li><a href="https://github.com/groma84">Github</a></li>
                <li><a href="https://twitter.com/mobilgroma">Twitter</a></li>
                <li><a href="https://www.xing.com/profile/Martin_Grotz3/cv">Xing</a></li>
            </ul>
        </aside>
    </div>

    <style>
    
    </style>
    `
};

define('menu-component', MenuComponent);