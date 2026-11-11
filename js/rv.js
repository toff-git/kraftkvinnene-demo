(function(){
  var els=document.querySelectorAll('.rv');
  if(!('IntersectionObserver' in window)){return}
  document.documentElement.classList.add('js');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.05});
  els.forEach(function(el){io.observe(el)});
})();
