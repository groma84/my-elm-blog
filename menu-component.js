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
    <nav>
    <ul>
        <li class="${getActivePage('index') && 'active'}">
            <a href="index.html">Blog</a>
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

<style>
nav > ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav > ul > li {
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: lightblue;
  }

  nav > ul > li.active {
      font-weight: bold;
  }
  
    </style>
    `
};

define('menu-component', MenuComponent);