"use strict";
// Mobile navigation: initialize after the document is ready.
function initMobileNavigation() {
  const menuButton = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav-links');
  if (!menuButton || !nav) return;
  const closeMenu = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Avaa valikko');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Sulje valikko' : 'Avaa valikko');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileNavigation, { once: true });
} else {
  initMobileNavigation();
}
document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
document.querySelectorAll('input[type="file"][data-max-mb]').forEach(input=>input.addEventListener('change',()=>{const f=input.files?.[0];const max=Number(input.dataset.maxMb)*1024*1024;input.setCustomValidity(f&&f.size>max?'Tiedoston enimmäiskoko on '+input.dataset.maxMb+' Mt.':'');input.reportValidity()}));
// Forms POST natively to Web3Forms on GitHub Pages. Access key is included in each HTML form.
// Avoid AJAX reliance so browser-level validation, redirects and accessibility work natively.
document.querySelectorAll('form[action^="https://api.web3forms.com/submit"]').forEach(form=>{form.addEventListener('submit',e=>{const input=form.querySelector('input[name="puhelin"]');if(input){const clean=input.value.trim();if(!/^[+\d][\d\s()\-]{4,24}$/.test(clean)){e.preventDefault();input.setCustomValidity('Tarkista puhelinnumero.');input.reportValidity();return;}input.setCustomValidity('')} // Let native form submission continue.
  })});
document.querySelectorAll('input[name="puhelin"]').forEach(i=>i.addEventListener('input',()=>i.setCustomValidity('')));
// Add GA4 only after implementing actual consent management; see KAYTTOONOTTO.md.

// Service menu closes on outside click and when choosing a page.
document.addEventListener('click',ev=>{document.querySelectorAll('.services-menu[open]').forEach(details=>{if(!details.contains(ev.target))details.open=false})});
document.querySelectorAll('.services-dropdown a').forEach(link=>link.addEventListener('click',()=>document.querySelectorAll('.services-menu[open]').forEach(d=>d.open=false)));
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')document.querySelectorAll('.services-menu[open]').forEach(d=>d.open=false)});
// Direct links may preselect the requested service without reloading the page.
const wanted=new URLSearchParams(location.search).get('palvelu');
if(wanted){document.querySelectorAll('select[name="palvelu"]').forEach(select=>{const match=[...select.options].find(option=>option.value===wanted||option.textContent.trim()===wanted);if(match)select.value=match.value})}

// Täyttää ovihuollon palveluvalinnan ovihuolto-sivun tarjouslinkistä.
(function () {
  try {
    const query = new URLSearchParams(window.location.search);
    if (query.get('palvelu') !== 'ovihuolto') return;
    const choice = document.querySelector('select[name="palvelu"]');
    if (choice) choice.value = 'Ovien huolto ja tiivistys';
  } catch (_) { /* sivusto toimii ilman URL-valintaakin */ }
})();
