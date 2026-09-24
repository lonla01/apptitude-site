function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr]').forEach(function(el){
    var val = el.getAttribute('data-' + lang);
    if(val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-fr-ph]').forEach(function(el){
    var val = el.getAttribute('data-' + lang + '-ph');
    if(val !== null) el.setAttribute('placeholder', val);
  });
  document.title = document.documentElement.getAttribute('data-title-' + lang) || document.title;
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  localStorage.setItem('apptitude-lang', lang);
}

document.addEventListener('DOMContentLoaded', function(){
  var saved = localStorage.getItem('apptitude-lang') || 'fr';
  applyLang(saved);
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.addEventListener('click', function(){ applyLang(b.dataset.lang); });
  });
});
