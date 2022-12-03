$('#counter-block').ready(function(){
  $('.number').animationCounter({
    start: 0,
    step: 10,
    end: 700;
    delay:100
  });
  $('.bike').animationCounter({
    start: 245677,
    step: 100,
    delay:2000,
    txt: ' km'
  });
  $('.code').animationCounter({
    start: 0,
    end: 570,
    step: 4,
    delay: 1000
  });
  $('.coffee').animationCounter({
    start: 490,
    end: 1560,
    step: 20,
    delay: 900,
    txt: ' cl'
  });
});