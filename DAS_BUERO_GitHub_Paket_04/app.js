(function () {
  'use strict';

  // Neu gelieferter Bildsatz: Team Büro.png und die sechs benannten Porträts.
  var photos = {team: 'assets/team.jpg', caesar: 'assets/caesar.jpg', alejandra: 'assets/alejandra.jpg', daniel: 'assets/daniel.jpg', juergen: 'assets/juergen.jpg', fausto: 'assets/fausto.jpg', niklaus: 'assets/niklaus.jpg'};
  var photoVersion = '04';
  var people = [
    {key: 'caesar', name: 'Cäsar Künzi', first: 'Cäsar', initials: 'CK', role: 'DAS BÜRO'},
    {key: 'alejandra', name: 'Alejandra Gaviria', first: 'Alejandra', initials: 'AG', role: 'DAS BÜRO'},
    {key: 'daniel', name: 'Daniel Rabenstein', first: 'Daniel', initials: 'DR', role: 'DAS BÜRO'},
    {key: 'juergen', name: 'Jürgen Baumann', first: 'Jürgen', initials: 'JB', role: 'DAS BÜRO'},
    {key: 'fausto', name: 'Fausto Kraut', first: 'Fausto', initials: 'FK', role: 'Spedition'},
    {key: 'niklaus', name: 'Niklaus Gassmann', first: 'Niklaus', initials: 'NG', role: 'Aussendienst'}
  ];
  var titles = {start: 'Wir schaffen Arbeit.', menschen: 'Menschen', raeume: 'Räume', philosophie: 'Philosophie', taetigkeit: 'Was wir machen', miteinander: 'Miteinander', spiel: 'Das Spiel', intern: 'Intern', zugang: 'Zugang'};
  var rooms = {
    fokus: {number: '01', title: 'Fokus-Raum.', icon: 'focus-icon', label: 'Konzentration & Rückzug', text: 'Ein Raum für konzentriertes Arbeiten und ungestörte Gedanken. Er kann auch als Safe Space dienen, wenn jemand Ruhe und Abstand braucht.', note: 'Hier darf Rückzug selbstverständlich sein.'},
    sitzung: {number: '02', title: 'Sitzungszimmer.', icon: 'meeting-icon', label: 'Austausch & Entscheidungen', text: 'Für gemeinsame Fragen und verschiedene Perspektiven. Hier können Gedanken auf den Tisch und nächste Schritte Form annehmen.', note: 'Ein gemeinsamer Tisch für unterschiedliche Gedanken.'},
    kueche: {number: '03', title: 'Die Küche.', icon: 'coffee-icon', label: 'Kaffee & Begegnung', text: 'Als Team trinken wir hier gerne einen Kaffee zusammen. Für ein kurzes Gespräch, eine Pause und Ideen, die sich nicht in einen Termin eintragen lassen.', note: 'Eine gute Gelegenheit, kurz zusammenzukommen.'},
    buero: {number: '00', title: 'Das Büro.', icon: 'work-icon', label: 'Kreativität & Alltag', text: 'Unser gemeinsamer Ausgangspunkt. Hier beschäftigen wir uns mit Bürokultur, entwickeln Infrastruktur, Abläufe und Haltungen. Und generieren Arbeit.', note: 'Arbeit findet statt. Bürokultur entsteht gemeinsam.'}
  };
  var main = document.getElementById('inhalt');
  var menu = document.getElementById('site-menu');
  var toggle = document.querySelector('.menu-toggle');
  var close = document.querySelector('.close-menu');
  var initial = true;
  var gameBlobUrl = null;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function icon(id, className) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', className || 'room-icon');
    svg.setAttribute('viewBox', '0 0 64 64');
    svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#' + id);
    svg.appendChild(use);
    return svg;
  }
  function setMenuState(open) {
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  }
  function closeMenu() {
    if (menu.open && typeof menu.close === 'function') menu.close();
    else menu.removeAttribute('open');
    setMenuState(false);
  }
  toggle.addEventListener('click', function () {
    if (menu.open) { closeMenu(); return; }
    if (typeof menu.showModal === 'function') menu.showModal();
    else menu.setAttribute('open', '');
    setMenuState(true);
    close.focus();
  });
  close.addEventListener('click', function () { closeMenu(); toggle.focus(); });
  menu.addEventListener('close', function () { setMenuState(false); });
  menu.addEventListener('cancel', function () { setMenuState(false); });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open) { closeMenu(); toggle.focus(); }
  });
  document.addEventListener('fullscreenchange', function () {
    var button = document.getElementById('game-fullscreen');
    if (!button) return;
    var active = document.fullscreenElement === document.getElementById('game-stage');
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? 'Vollbild verlassen ↙' : 'Vollbild ↗';
  });
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href');
    if (href === '#inhalt') {
      event.preventDefault();
      main.focus({preventScroll: true});
      main.scrollIntoView({behavior: 'auto'});
    } else if (href === window.location.hash) {
      closeMenu();
      window.scrollTo({top: 0, behavior: 'auto'});
      main.focus({preventScroll: true});
    }
  });

  function buildPeople() {
    var grid = document.getElementById('people-grid');
    people.forEach(function (person, index) {
      var number = String(index + 1).padStart(2, '0');
      var fieldCard = person.key === 'niklaus' && !photos.niklaus;
      var figure = el('figure', 'person');
      figure.setAttribute('data-person', person.key);
      var frame = el('div', 'photo portrait' + (fieldCard ? ' field-card' : ''));
      frame.setAttribute('role', 'img');
      frame.setAttribute('aria-label', fieldCard ? 'Niklaus Gassmann im Aussendienst' : 'Porträt ' + person.name + ', Format 5 zu 7');
      if (!fieldCard) frame.setAttribute('data-photo', person.key);
      var top = el('div', 'photo-top');
      top.append(el('span', '', number + ' / ' + person.first), el('span', '', fieldCard ? '↗' : '5:7'));
      var center = el('div', 'photo-center');
      if (!fieldCard) {
        var initials = el('span', 'initials', person.initials); initials.setAttribute('aria-hidden', 'true');
        var cross = el('span', 'small-cross'); cross.setAttribute('aria-hidden', 'true');
        center.append(initials, cross);
      } else {
        var fieldTitle = el('span', 'field-title'); fieldTitle.append(document.createTextNode('Heute'), el('br'), document.createTextNode('woanders.'));
        center.appendChild(fieldTitle);
        var orbit = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        orbit.setAttribute('class', 'field-orbit'); orbit.setAttribute('viewBox', '0 0 160 130'); orbit.setAttribute('aria-hidden', 'true');
        orbit.innerHTML = '<g fill="none" stroke="#476427" stroke-width="1"><ellipse cx="80" cy="65" rx="65" ry="37" transform="rotate(-28 80 65)"/><ellipse cx="80" cy="65" rx="65" ry="37" transform="rotate(28 80 65)"/><ellipse cx="80" cy="65" rx="37" ry="59"/><path d="M16 65h128M80 6v118"/></g><circle cx="125" cy="35" r="8" fill="#171916"/><circle cx="125" cy="35" r="3" fill="#b4ff45"/>';
        center.appendChild(orbit);
      }
      var bottom = el('div', 'photo-bottom');
      bottom.append(el('span', '', fieldCard ? 'Im Aussendienst' : 'DAS BÜRO'), el('span', '', person.role));
      frame.append(top, center, bottom);
      var caption = el('figcaption', 'person-caption');
      var info = el('div'); info.append(el('h3', '', person.name), el('p', '', person.role));
      caption.append(info, el('span', 'eyebrow', number));
      figure.append(frame, caption);
      grid.appendChild(figure);
    });
  }
  function applyPhotos() {
    main.querySelectorAll('[data-photo]').forEach(function (frame) {
      var key = frame.getAttribute('data-photo');
      if (!photos[key]) return;
      var person = people.find(function (item) { return item.key === key; });
      var image = el('img');
      image.src = photos[key].indexOf('data:') === 0 ? photos[key] : photos[key] + '?v=' + photoVersion;
      image.alt = key === 'team' ? 'Das Team von DAS BÜRO' : person.name;
      image.decoding = 'async';
      image.loading = key === 'team' ? 'eager' : 'lazy';
      image.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:4;object-position:' + (key === 'team' ? '50% 32%' : '50% 28%') + ';';
      image.addEventListener('error', function () { image.remove(); });
      frame.removeAttribute('role'); frame.removeAttribute('aria-label');
      frame.appendChild(image);
    });
  }
  function showRoom(key) {
    if (!Object.prototype.hasOwnProperty.call(rooms, key)) key = 'fokus';
    var room = rooms[key];
    main.querySelectorAll('[data-room]').forEach(function (button) {
      var active = button.getAttribute('data-room') === key;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    var detail = document.getElementById('room-detail');
    if (!detail) return;
    var upper = el('div');
    upper.append(icon(room.icon), el('div', 'eyebrow muted', room.number + ' / ' + room.label), el('h2', '', room.title), el('p', '', room.text));
    var note = el('p', 'room-note');
    var dot = el('span', 'dot'); dot.setAttribute('aria-hidden', 'true');
    note.append(dot, document.createTextNode(room.note));
    detail.replaceChildren(upper, note);
  }
  function bindPage(route, subpage) {
    if (route === 'menschen') buildPeople();
    if (route === 'spiel') {
      var stage = document.getElementById('game-stage');
      var frame = document.getElementById('office-game');
      var fullButton = document.getElementById('game-fullscreen');
      var openLink = document.getElementById('game-open');
      if (frame.hasAttribute('srcdoc')) {
        gameBlobUrl = URL.createObjectURL(new Blob([frame.getAttribute('srcdoc')], {type: 'text/html'}));
        openLink.href = gameBlobUrl;
      }
      if (!stage.requestFullscreen) fullButton.hidden = true;
      fullButton.addEventListener('click', function () {
        var action = document.fullscreenElement === stage ? document.exitFullscreen() : stage.requestFullscreen();
        if (action && action.catch) action.catch(function () {
          var message = document.getElementById('game-message');
          message.textContent = 'Vollbild ist in diesem Browser nicht verfügbar. Über «In eigenem Fenster» kannst du das Spiel separat öffnen.';
          message.hidden = false;
        });
      });
    }
    if (route === 'raeume') {
      showRoom(subpage || 'fokus');
      main.querySelectorAll('[data-room]').forEach(function (button) {
        button.addEventListener('click', function () { showRoom(button.getAttribute('data-room')); });
      });
    }
    if (route === 'intern') {
      var roster = document.getElementById('team-roster');
      people.forEach(function (person) {
        var li = el('li'); li.title = person.name;
        var avatar = el('span', 'avatar', person.initials); avatar.setAttribute('aria-hidden', 'true');
        var name = el('span', 'name', person.name);
        if (person.role !== 'DAS BÜRO') name.appendChild(el('small', '', person.role));
        li.append(avatar, name); roster.appendChild(li);
      });
    }
    if (route === 'zugang') {
      var form = document.getElementById('login-form');
      var password = document.getElementById('login-password');
      var reveal = document.getElementById('show-password');
      reveal.addEventListener('click', function () {
        var shown = password.type === 'password';
        password.type = shown ? 'text' : 'password';
        reveal.textContent = shown ? 'Verbergen' : 'Zeigen';
        reveal.setAttribute('aria-pressed', String(shown));
      });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        password.value = '';
        var message = document.getElementById('login-message');
        message.textContent = 'Die persönliche Anmeldung ist noch nicht verbunden. Über «Entwurf ohne Anmeldung ansehen» kannst du alle gestalteten Seiten anschauen.';
        message.hidden = false;
      });
    }
    applyPhotos();
  }
  function render() {
    if (gameBlobUrl) { URL.revokeObjectURL(gameBlobUrl); gameBlobUrl = null; }
    var segments = window.location.hash.slice(1).split('/');
    var route = segments[0] || 'start';
    if (!Object.prototype.hasOwnProperty.call(titles, route)) route = 'start';
    var template = document.getElementById('view-' + route);
    main.replaceChildren(template.content.cloneNode(true));
    document.title = 'DAS BÜRO · ' + titles[route];
    document.querySelectorAll('nav a').forEach(function (link) {
      if (link.getAttribute('href') === '#' + route) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    closeMenu();
    bindPage(route, segments[1]);
    if (!initial) { window.scrollTo({top: 0, behavior: 'auto'}); main.focus({preventScroll: true}); }
    initial = false;
  }
  document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
  window.addEventListener('hashchange', render);
  render();
}());
