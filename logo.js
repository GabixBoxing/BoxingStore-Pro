(function(){

// ── GOLD GRADIENT DEFS (invisible SVG) ─────────────────────
var defs = document.createElementNS('http://www.w3.org/2000/svg','svg');
defs.setAttribute('style','position:absolute;width:0;height:0;overflow:hidden');
defs.innerHTML = '<defs>' +
  '<linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">' +
  '<stop offset="0%" stop-color="#AA771C"/>' +
  '<stop offset="25%" stop-color="#FDF6C7"/>' +
  '<stop offset="50%" stop-color="#D4AF37"/>' +
  '<stop offset="75%" stop-color="#F3E5AB"/>' +
  '<stop offset="100%" stop-color="#A37012"/>' +
  '</linearGradient>' +
  '<linearGradient id="gold-text" x1="0%" y1="0%" x2="0%" y2="100%">' +
  '<stop offset="0%" stop-color="#FDF6C7"/>' +
  '<stop offset="50%" stop-color="#D4AF37"/>' +
  '<stop offset="100%" stop-color="#AA771C"/>' +
  '</linearGradient>' +
  '</defs>';
document.body.insertBefore(defs, document.body.firstChild);

// ── SVG PATHS (CBA geometric logo) ──────────────────────────
function makeSVG(w, h) {
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" ' +
    'width="' + w + '" height="' + h + '" class="cba-logo-gold" ' +
    'style="transition:transform .3s ease;cursor:pointer" ' +
    'onmouseover="this.style.transform=\'scale(1.06)\'" ' +
    'onmouseout="this.style.transform=\'scale(1)\'">' +
    '<g fill="none" stroke="url(#gold-metallic)" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M 60,75 A 40,40 0 0,1 140,75" stroke-width="7"/>' +
    '<path d="M 40,80 C 40,115 95,115 100,80" stroke-width="8"/>' +
    '<path d="M 100,80 C 100,115 160,115 160,80" stroke-width="8"/>' +
    '<line x1="38" y1="80" x2="162" y2="80" stroke-width="6"/>' +
    '<path d="M 55,105 L 100,170 L 145,105" stroke-width="8"/>' +
    '<line x1="80" y1="140" x2="120" y2="140" stroke-width="5"/>' +
    '</g>' +
    '</svg>';
}

// ── UPDATE HEADER LOGO ───────────────────────────────────────
var headerSVG = document.querySelector('.logo svg');
if (headerSVG) {
  headerSVG.outerHTML = makeSVG(44, 44);
}

// ── UPDATE FOOTER LOGO ──────────────────────────────────────
var footerDiv = document.querySelector('.flo');
if (footerDiv) {
  footerDiv.innerHTML = makeSVG(80, 80);
  footerDiv.style.display = 'flex';
  footerDiv.style.justifyContent = 'center';
}

// ── CSS ─────────────────────────────────────────────────────
var style = document.createElement('style');
style.textContent = 
  '.cba-logo-gold path, .cba-logo-gold line {' +
  'stroke: url(#gold-metallic);' +
  'filter: drop-shadow(0 0 4px rgba(212,160,23,.4));' +
  '}' +
  '.logo:hover .cba-logo-gold {transform: scale(1.05);}';
document.head.appendChild(style);

})();
