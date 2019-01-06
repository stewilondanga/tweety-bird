var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

document.addEventListener("DOMContentLoaded", function() {
  this.querySelector("textarea").addEventListener("keydown", ctChars);
  this.querySelector("form").addEventListener("submit", tweet);
});

function ctChars() {
  let el = this,
    to = setTimeout(function() {
      let len = el.value.length,
        ct = document.querySelector("span"),
        btn = document.querySelector("button"),
        warnAt = 20,
        max = ct.getAttribute("data-limit");

      // characters left
      ct.innerHTML = max - len;
      // warn about reaching limit
      ct.className = len > max - warnAt ? "warn" : "";
      btn.disabled = len == 0 ? true : false;
      clearTimeout(to);
    }, 1);
}

function tweet(e) {
  let el = this,
    ta = el.querySelector("textarea");
  el.classList.add("pre-morph");
  ta.disabled = true;

  // bird animation
  var tl = new TimelineMax();
  tl
    .to("#b1", 0.2, {
      delay: 0.2,
      morphSVG: "#b2",
      ease: Linear.easeIn
    })
    .to("#b1", 0.25, {
      morphSVG: "#b3",
      ease: Linear.easeIn
    })
    .to("#b1", 0, {
      delay: 0.05,
      opacity: 0
    });

  // reset everything
  setTimeout(function() {
        let ct = el.querySelector("span"),
          btn = el.querySelector("button");

        /*          		el.classList.remove("pre-morph")
                  		ta.value = "";
                  		ta.disabled = false;
                  		ct.innerHTML = ct.getAttribute("data-limit");
                  		btn.disabled = true;
                  		tl.pause(0);
                  	}, 3000);

                  	e.preventDefault();
                  }
