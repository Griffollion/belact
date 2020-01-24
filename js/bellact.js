$(document).ready(function() {
  var eraseScreen2 = "#bellact-screen-2-img",
    eraseScreen3 = "#bellact-screen-3-img",
    eraseScreen4 = "#bellact-screen-4-img",
    showScreen2 = "[data-js='show-screen-2']",
    showScreen3 = "[data-js='show-screen-3']",
    showScreen4 = "[data-js='show-screen-4']",
    screen1 = ".bellact__screen-1",
    screen2 = ".bellact__screen-2",
    screen3 = ".bellact__screen-3",
    screen4 = ".bellact__screen-4",
    screen5 = ".bellact__screen-5",
    eraseContainer = ".erase-container",
    zzz = null;
    count = 0;

  function showFinal() {
    count++;
    console.log(zzz);
    $(zzz).fadeOut(1000);
    showCanvas('.bellact__screen-2 .ers');
    showCanvas('.bellact__screen-3 .ers');
    showCanvas('.bellact__screen-4 .ers');

    if(count  >= 3 ) {
      lastScreenEnable = true;
      $(screen5+' .bellact__screen-5-img-1').addClass('visible');
      $(screen5+' .bellact__screen-5-img-2').addClass('visible');
      $(screen5+' .bellact__screen-5-cont').addClass('visible');
      console.log("Erase finished");
    }
  }

  function showCanvas(id) {
    $(id).eraser({
      completeRatio: 0.15,
      completeFunction: showFinal,
      size: 50
    });
  }

  function screenInit(screenForHide, screenForShow) {
    shakeEnable = false;
    $(screenForHide).addClass("hide");
    $(screenForShow).addClass("up");
    $(screen2).addClass("visible");
    $(screen3).addClass("visible");
    $(screen4).addClass("visible");
    showCanvas(screenForShow +' .ers');
    $(screen5).addClass("visible");

    console.log(screenForShow +' .ers');

    zzz = screenForShow;
  }

  $(document)
    .on("mousedown", showScreen2, function() {
      screenInit(screen1, screen2, eraseScreen2);
      console.log("screen 2 showed");
    })
    .on("mousedown", showScreen3, function() {
      screenInit(screen1, screen3, eraseScreen3);
      console.log("screen 3 showed");
    })
    .on("mousedown", showScreen4, function() {
      screenInit(screen1, screen4, eraseScreen4);
      console.log("screen 4 showed");
    })

    .on("mousedown", zzz+" canvas", function() {
      $(".bellact__finger").hide();
    });

  // ---------------------------------

  function removeCl(el, classN, time) {
    setTimeout(function() {
      $(el).removeClass(classN);
    }, time);
  }

  function addCls(el, classN, time) {
    setTimeout(function() {
      $(el).addClass(classN);
    }, time);
  }

  var removeTime = 4000;
  var shakeEnable = true;
  var lastScreenEnable = false;
  var animationClass = "wobble-hor-bottom";
  var animationClass2 = "zoom-in-out";
  var animationClass3 = "move-finger";

  var timerId = setTimeout(function tick() {
    if (shakeEnable) {
      addCls(".bellact__screen-1-img-1", animationClass, 1000);
      addCls(".bellact__screen-1-img-2", animationClass, 2000);
      addCls(".bellact__screen-1-img-3", animationClass, 3000);

      removeCl(".bellact__screen-1-img-1", animationClass, removeTime);
      removeCl(".bellact__screen-1-img-2", animationClass, removeTime);
      removeCl(".bellact__screen-1-img-3", animationClass, removeTime);
    }

    timerId = setTimeout(tick, 4100);
  }, 50);

  var timerId2 = setTimeout(function tick2() {
    if (lastScreenEnable) {
      addCls(".bellact__screen-5-img-3", animationClass2, 1000);
      addCls(".bellact__screen-5-img-4", animationClass2, 2000);
      addCls(".bellact__screen-5-img-5", animationClass2, 3000);

      removeCl(".bellact__screen-5-img-3", animationClass2, removeTime);
      removeCl(".bellact__screen-5-img-4", animationClass2, removeTime);
      removeCl(".bellact__screen-5-img-5", animationClass2, removeTime);
    }

    timerId2 = setTimeout(tick2, 4100);
  }, 50);

  var timerId3 = setTimeout(function tick3() {
    addCls(".bellact__finger img:nth-child(1)", animationClass3, 100);

    removeCl(".bellact__finger img:nth-child(1)", animationClass3, 2000);

    timerId3 = setTimeout(tick3, 2100);
  }, 50);
});
