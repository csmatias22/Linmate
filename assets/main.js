"use strict";
const menuButton=document.querySelector('.mobile-toggle');const nav=document.querySelector('.nav-links');
function closeMenu(){nav?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Avaa valikko')}
menuButton?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(!!open));menuButton.setAttribute('aria-label',open?'Sulje valikko':'Avaa valikko')});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.getElementById('year')?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
document.querySelectorAll('input[type="file"][data-max-mb]').forEach(input=>input.addEventListener('change',()=>{const f=input.files?.[0];const max=Number(input.dataset.maxMb)*1024*1024;input.setCustomValidity(f&&f.size>max?'Tiedoston enimmäiskoko on '+input.dataset.maxMb+' Mt.':'');input.reportValidity()}));
// Forms POST to FormSubmit on GitHub Pages. Incoming email verification must be activated by the site owner.
// Avoid AJAX reliance so browser-level validation, redirects and accessibility work natively.
document.querySelectorAll('form[action^="https://formsubmit.co/"]').forEach(form=>{form.addEventListener('submit',e=>{const input=form.querySelector('input[name="puhelin"]');if(input){const clean=input.value.trim();if(!/^[+\d][\d\s()\-]{4,24}$/.test(clean)){e.preventDefault();input.setCustomValidity('Tarkista puhelinnumero.');input.reportValidity();return;}input.setCustomValidity('')}// Let native form submission continue without disabling the submitter.})});
document.querySelectorAll('input[name="puhelin"]').forEach(i=>i.addEventListener('input',()=>i.setCustomValidity('')));
// Add GA4 only after implementing actual consent management; see KAYTTOONOTTO.md.

// Service menu closes on outside click and when choosing a page.
document.addEventListener('click',ev=>{document.querySelectorAll('.services-menu[open]').forEach(details=>{if(!details.contains(ev.target))details.open=false})});
document.querySelectorAll('.services-dropdown a').forEach(link=>link.addEventListener('click',()=>document.querySelectorAll('.services-menu[open]').forEach(d=>d.open=false)));
document.addEventListener('keydown',ev=>{if(ev.key==='Escape')document.querySelectorAll('.services-menu[open]').forEach(d=>d.open=false)});
// Direct links may preselect the requested service without reloading the page.
const wanted=new URLSearchParams(location.search).get('palvelu');
if(wanted){document.querySelectorAll('select[name="palvelu"]').forEach(select=>{const match=[...select.options].find(option=>option.value===wanted||option.textContent.trim()===wanted);if(match)select.value=match.value})}
