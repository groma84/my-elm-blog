if ('ActiveXObject' in window) {
    var el = document.getElementById('header');

    el.appendChild(document.createTextNode("Es wird ein Browser mit Web Components Unterstützung benötigt!"));

    var node1 = document.createElement("a");
    node1.setAttribute('href', 'impressum.html');
    node1.appendChild(document.createTextNode("  Impressum  "));
    el.appendChild(node1);

    var node2 = document.createElement("a");
    node2.setAttribute('href', 'datenschutz.html');
    node2.appendChild(document.createTextNode("  Datenschutz  "));
    el.appendChild(node2);
}