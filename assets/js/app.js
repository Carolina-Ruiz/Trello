var close = document.getElementsByClassName("addBtn");
var i;
for (i = 0; i < addBtn.length; i++) {
  addBtn[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}