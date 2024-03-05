{ // must be inside our own scope here so that when we are unloaded everything disappears
  // we also define functions using 'let fn = function() {..}' for the same reason. function decls are global

  // Clock with large digits using the "Anton" bold font
  let setFontAnton = function(scale) {
    // Actual height 69 (68 - 0)
    g.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAA/gAAAAAAAAAAP/gAAAAAAAAAH//gAAAAAAAAB///gAAAAAAAAf///gAAAAAAAP////gAAAAAAD/////gAAAAAA//////gAAAAAP//////gAAAAH///////gAAAB////////gAAAf////////gAAP/////////gAD//////////AA//////////gAA/////////4AAA////////+AAAA////////gAAAA///////wAAAAA//////8AAAAAA//////AAAAAAA/////gAAAAAAA////4AAAAAAAA///+AAAAAAAAA///gAAAAAAAAA//wAAAAAAAAAA/8AAAAAAAAAAA/AAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////AAAAAB///////8AAAAH////////AAAAf////////wAAA/////////4AAB/////////8AAD/////////+AAH//////////AAP//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wA//8AAAAAB//4A//wAAAAAAf/4A//gAAAAAAP/4A//gAAAAAAP/4A//gAAAAAAP/4A//wAAAAAAf/4A///////////4Af//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH//////////AAD/////////+AAB/////////8AAA/////////4AAAP////////gAAAD///////+AAAAAf//////4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/gAAAAAAAAAAP/gAAAAAAAAAAf/gAAAAAAAAAAf/gAAAAAAAAAAf/AAAAAAAAAAA//AAAAAAAAAAA/+AAAAAAAAAAB/8AAAAAAAAAAD//////////gAH//////////gAP//////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAB/gAAD//4AAAAf/gAAP//4AAAB//gAA///4AAAH//gAB///4AAAf//gAD///4AAA///gAH///4AAD///gAP///4AAH///gAP///4AAP///gAf///4AAf///gAf///4AB////gAf///4AD////gA////4AH////gA////4Af////gA////4A/////gA//wAAB/////gA//gAAH/////gA//gAAP/////gA//gAA///8//gA//gAD///w//gA//wA////g//gA////////A//gA///////8A//gA///////4A//gAf//////wA//gAf//////gA//gAf/////+AA//gAP/////8AA//gAP/////4AA//gAH/////gAA//gAD/////AAA//gAB////8AAA//gAA////wAAA//gAAP///AAAA//gAAD//8AAAA//gAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/+AAAAAD/wAAB//8AAAAP/wAAB///AAAA//wAAB///wAAB//wAAB///4AAD//wAAB///8AAH//wAAB///+AAP//wAAB///+AAP//wAAB////AAf//wAAB////AAf//wAAB////gAf//wAAB////gA///wAAB////gA///wAAB////gA///w//AAf//wA//4A//AAA//wA//gA//AAAf/wA//gB//gAAf/wA//gB//gAAf/wA//gD//wAA//wA//wH//8AB//wA///////////gA///////////gA///////////gA///////////gAf//////////AAf//////////AAP//////////AAP/////////+AAH/////////8AAH///+/////4AAD///+f////wAAA///8P////gAAAf//4H///+AAAAH//gB///wAAAAAP4AAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAAAAA//wAAAAAAAAAP//wAAAAAAAAB///wAAAAAAAAf///wAAAAAAAH////wAAAAAAA/////wAAAAAAP/////wAAAAAB//////wAAAAAf//////wAAAAH///////wAAAA////////wAAAP////////wAAA///////H/wAAA//////wH/wAAA/////8AH/wAAA/////AAH/wAAA////gAAH/wAAA///4AAAH/wAAA//+AAAAH/wAAA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gA///////////gAAAAAAAAH/4AAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAH/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8AAA/////+B///AAA/////+B///wAA/////+B///4AA/////+B///8AA/////+B///8AA/////+B///+AA/////+B////AA/////+B////AA/////+B////AA/////+B////gA/////+B////gA/////+B////gA/////+A////gA//gP/gAAB//wA//gf/AAAA//wA//gf/AAAAf/wA//g//AAAAf/wA//g//AAAA//wA//g//gAAA//wA//g//+AAP//wA//g////////gA//g////////gA//g////////gA//g////////gA//g////////AA//gf///////AA//gf//////+AA//gP//////+AA//gH//////8AA//gD//////4AA//gB//////wAA//gA//////AAAAAAAH////8AAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////gAAAAB///////+AAAAH////////gAAAf////////4AAB/////////8AAD/////////+AAH//////////AAH//////////gAP//////////gAP//////////gAf//////////wAf//////////wAf//////////wAf//////////wAf//////////4A//wAD/4AAf/4A//gAH/wAAP/4A//gAH/wAAP/4A//gAP/wAAP/4A//gAP/4AAf/4A//wAP/+AD//4A///wP//////4Af//4P//////wAf//4P//////wAf//4P//////wAf//4P//////wAP//4P//////gAP//4H//////gAH//4H//////AAH//4D/////+AAD//4D/////8AAB//4B/////4AAA//4A/////wAAAP/4AP////AAAAB/4AD///4AAAAAAAAAH/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAAAAA//gAAAAAAADgA//gAAAAAAP/gA//gAAAAAH//gA//gAAAAB///gA//gAAAAP///gA//gAAAD////gA//gAAAf////gA//gAAB/////gA//gAAP/////gA//gAB//////gA//gAH//////gA//gA///////gA//gD///////gA//gf///////gA//h////////gA//n////////gA//////////gAA/////////AAAA////////wAAAA///////4AAAAA///////AAAAAA//////4AAAAAA//////AAAAAAA/////4AAAAAAA/////AAAAAAAA////8AAAAAAAA////gAAAAAAAA///+AAAAAAAAA///4AAAAAAAAA///AAAAAAAAAA//4AAAAAAAAAA/+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//gB///wAAAAP//4H///+AAAA///8P////gAAB///+f////4AAD///+/////8AAH/////////+AAH//////////AAP//////////gAP//////////gAf//////////gAf//////////wAf//////////wAf//////////wA///////////wA//4D//wAB//4A//wB//gAA//4A//gA//gAAf/4A//gA//AAAf/4A//gA//gAAf/4A//wB//gAA//4A///P//8AH//4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////gAP//////////gAP//////////AAH//////////AAD/////////+AAD///+/////8AAB///8f////wAAAf//4P////AAAAH//wD///8AAAAA/+AAf//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//gAAAAAAAAB///+AA/+AAAAP////gA//wAAAf////wA//4AAB/////4A//8AAD/////8A//+AAD/////+A///AAH/////+A///AAP//////A///gAP//////A///gAf//////A///wAf//////A///wAf//////A///wAf//////A///wA///////AB//4A//4AD//AAP/4A//gAB//AAP/4A//gAA//AAP/4A//gAA/+AAP/4A//gAB/8AAP/4A//wAB/8AAf/4Af//////////wAf//////////wAf//////////wAf//////////wAf//////////wAP//////////gAP//////////gAH//////////AAH/////////+AAD/////////8AAB/////////4AAAf////////wAAAP////////AAAAB///////4AAAAAD/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/AAB/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAA//AAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="), 46, atob("EiAnGicnJycnJycnEw=="), 78 + (scale << 8) + (1 << 16));
  };

  let sched = require('sched');

  let locale = require('locale');
  
  let width = g.getWidth();
  let height = g.getHeight();
  let midX = width/2;
  let midY = height/2;

  let drawTimeout;

  let alarmid = "antontimerclk";
  
  let timerY = [midY - 47 - 16, midY - 47];

  let setTimer = function(seconds) {
    var t = sched.newDefaultTimer();
    t.timer = seconds * 1000;
    sched.setAlarm(alarmid, t);
    sched.reload();
  };

  let drawPicker = function(label, value) {
    resetPickerTimeout();
    g.clear(true);
    g.setFontAlign(0, -1).setFont("6x8", 3).drawString(label, midX, 24);
    g.setFontAlign(0, 0).setFont("6x8", 10).drawString(value.toString().padStart(2, 0), midX, midY);
    g.setColor(189,189,189).fillRect(0, height - 16, width, height);
    g.setFontAlign(0, 1).setFont("6x8", 2).setColor(0,0,0).drawString("CLEAR TIMER", midX, height);
  };
  
  let resetPickerTimeout = function() {
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = setTimeout(function() {
      drawTimeout = undefined;
      showClock();
    }, 10000);
  };
  
  let intPicker = function(label, start, min, max) {
    return new Promise((resolve, reject) => {
      if (drawTimeout) clearTimeout(drawTimeout);
      var pickerValue = (start) ? start : 0;

      Bangle.setUI({
        mode: "custom",
        btn: (n) => {
          if (drawTimeout) clearTimeout(drawTimeout);
          resolve(pickerValue);
        },
        touch: (n, xy) => {
          if (xy.y > height - 16) {
            reject();
          }
          if (xy.y < midY) {
            pickerValue++;
          } else {
            pickerValue--;
          }
          if (pickerValue > max) {
            pickerValue = max;
          } else if (pickerValue < min) {
            pickerValue = min;
          }
          drawPicker(label, pickerValue);
        },
        drag: (xy) => {
          pickerValue += -1 * Math.floor(xy.dy / 3);
          if (pickerValue > max) {
            pickerValue = max;
          } else if (pickerValue < min) {
            pickerValue = min;
          }
          drawPicker(label, pickerValue);
        }
      });

      drawPicker(label, pickerValue);
    });
  };

  let openTimerPicker = function() {
    var pickerSeconds = 0;
    var remaining = timerRemaining();
    if (remaining > 0) {
      pickerSeconds = remaining;
    }
    var hms = getHMS(pickerSeconds);
    intPicker("HOURS", hms[0], 0, 24).then((val) => {
      pickerSeconds = val * 3600;
      return intPicker("MINUTES", hms[1], 0, 60);
    }).then((val) => {
      pickerSeconds += val * 60;
      return intPicker("SECONDS", hms[2], 0, 60);
    }).then((val) => {
      pickerSeconds += val;
      setTimer(pickerSeconds);
      showClock();
    }).catch((err) => {
      setTimer(0);
      showClock();
    });
  };

  let timerRemaining = function() {
    var out = Math.floor(sched.getTimeToAlarm(sched.getAlarm(alarmid)) / 1000);
    return (isNaN(out)) ? undefined : out;
  };

  let getHMS = function(seconds) {
    var s = seconds % 60;
    var m = Math.floor(seconds / 60);
    var h = Math.floor(m / 60);
    m = m % 60;
    return [h, m, s];
  };

  let getTimerDisplayText = function(seconds) {
    var hms = getHMS(seconds);
    var secs = "--";
    if (!Bangle.isLocked() || timerRemaining() < 120) {
      secs = hms[2].toString().padStart(2, 0);
    }
    return hms[0].toString().padStart(2, 0) + ":" + hms[1].toString().padStart(2, 0) + ":" + secs;
  };

  let getTimerDisplay = function() {
    var diff = timerRemaining();
    if (diff == undefined || diff < 0) {
      return "--";
    }
    return getTimerDisplayText(diff);
  };

  let queueRedraw = function() {
    if (drawTimeout) clearTimeout(drawTimeout);
    var redrawAt = 60000 - (Date.now() % 60000);
    var remaining = timerRemaining();
    if (remaining > 0 && (!Bangle.isLocked() || remaining < 120)) {
      redrawAt = (Date.now() % 1000);
    }
    drawTimeout = setTimeout(function() {
      drawTimeout = undefined;
      draw();
    }, redrawAt);
  };

  // Actually draw the watch face
  let draw = function() {
    g.reset().clearRect(Bangle.appRect); // clear whole background (w/o widgets)

    // Show timer
    g.setFontAlign(0, 0).setFont("6x8", 2).drawString(getTimerDisplay(), midX, midY - 55);

    var date = new Date();
    var timeStr = locale.time(date, 1); // Hour and minute
    g.setFontAlign(0, 0).setFont("Anton").drawString(timeStr, midX, midY);
    // Show date and day of week
    var dateStr = ("0" + date.getDate()).substr(-2) + " " + locale.month(date, 1).toUpperCase() + " " + date.getFullYear() + "\n" +
      locale.dow(date, 0).toUpperCase();
    g.setFontAlign(0, 0).setFont("6x8", 2).drawString(dateStr, midX, midY + 48);

    // queue next draw
    queueRedraw();
  };

  let onLock = function(locked) {
    if (!locked) {
      draw();
    }
  };

  let showClock = function() {
    Graphics.prototype.setFontAnton = setFontAnton;
    Bangle.setUI({
      mode: "custom",
      clock: 1,
      touch: function(b, xy) {
        if (xy.y > timerY[0] && xy.y < timerY[1]) {
          openTimerPicker();
        }
      },
      remove: function() {
        if (drawTimeout) clearTimeout(drawTimeout);
        Bangle.removeListener('lock', onLock);
        drawTimeout = undefined;
        delete Graphics.prototype.setFontAnton;
      }
    });
    draw();
    setTimeout(Bangle.drawWidgets, 0);
    Bangle.on('lock', onLock);
  };

  // MAIN
  Bangle.loadWidgets();
  showClock();
}
