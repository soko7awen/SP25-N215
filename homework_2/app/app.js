window.onscroll = function(e) {
    var blackBar = document.getElementById("black-bar");
    var placeholder = document.getElementById("placeholder");
    // detects if the new scroll direction is up
    if(this.oldScroll > this.scrollY) {
        placeholder.style.display = 'inherit';
        blackBar.style.position = 'fixed';
        blackBar.style.top = 0;
    } else {
        placeholder.style.display = 'none';
        blackBar.style.position = 'relative';
        blackBar.style.top = 'inherit';
    }

    if(this.scrollY <= blackBar.offsetHeight) {
        placeholder.style.display = 'none';
        blackBar.style.position = 'relative';
        blackBar.style.top = 'inherit';
    }

    this.oldScroll = this.scrollY;
  }