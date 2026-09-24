function fitWordmarkTracking(){
  var word1 = document.querySelector('.mark .word1');
  var word2 = document.querySelector('.mark .word2');
  if(!word1 || !word2) return;

  word2.style.letterSpacing = '0px';
  var targetWidth = word1.getBoundingClientRect().width;

  var lo = 0, hi = 40;
  for(var i = 0; i < 24; i++){
    var mid = (lo + hi) / 2;
    word2.style.letterSpacing = mid + 'px';
    var w = word2.getBoundingClientRect().width;
    if(w < targetWidth){ lo = mid; } else { hi = mid; }
  }
  word2.style.letterSpacing = lo.toFixed(2) + 'px';
}

if(document.fonts && document.fonts.ready){
  document.fonts.ready.then(fitWordmarkTracking);
} else {
  window.addEventListener('load', fitWordmarkTracking);
}
window.addEventListener('resize', fitWordmarkTracking);

document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var lang = document.documentElement.lang === 'en' ? 'en' : 'fr';
      var subjectText = lang === 'en' ? 'New message from the website — ' : 'Nouveau message depuis le site — ';
      var fromText = lang === 'en' ? ' — from ' : ' — de ';
      var subject = encodeURIComponent(subjectText + name);
      var body = encodeURIComponent(message + '\n\n' + fromText + name + ' (' + email + ')');
      window.location.href = 'mailto:apptitudesoft@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
