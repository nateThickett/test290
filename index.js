var button = document.getElementById("create-twit-button");
var modalBackdrop = document.getElementById("modal-backdrop");
var modal = document.getElementById("create-twit-modal");
var modalCancelButton  = document.getElementsByClassName("modal-cancel-button")[0];
var modalCloseButton = document.getElementsByClassName("modal-close-button")[0];
var modalAcceptButton = document.getElementsByClassName("modal-accept-button")[0];
var twitText = document.getElementById("twit-text-input");
var twitAuthor = document.getElementById("twit-attribution-input");



button.addEventListener('click', modalToggle);
modalCancelButton.addEventListener('click', modalToggle);
modalCloseButton.addEventListener('click', modalToggle);
modalAcceptButton.addEventListener('click', addTwit);

function modalToggle(event) {
  if (modal.classList.contains("hidden")) {
    twitText.value = "";
    twitAuthor.value = "";
    modal.classList.remove('hidden');
    modalBackdrop.classList.remove('hidden');
  }
  else {
    modal.classList.add('hidden');
    modalBackdrop.classList.add('hidden');
  }
}

function addTwit(event) {
  if ((twitText.value == "") || (twitAuthor.value == "")) {
    alert("You have not entered a value for either text or author")
    return;
  }

  var icon = document.createElement('i');
  icon.classList.add('fa');
  icon.classList.add('fa-bullhorn');

  var twitIcon = document.createElement('div');
  twitIcon.classList.add('twit-icon');
  twitIcon.appendChild(icon);

  var text = document.createElement('p');
  text.classList.add('twit-text');
  text.textContent = twitText.value;

  var author = document.createElement('a');
  author.href = '#';
  author.textContent = twitAuthor.value;

  var attribution = document.createElement('p');
  attribution.classList.add('twit-attribution');
  attribution.appendChild(author);

  var twitContent = document.createElement('div');
  twitContent.classList.add("twit-content");
  twitContent.appendChild(text);
  twitContent.appendChild(attribution);


  var twit = document.createElement('article');
  twit.classList.add('twit');
  twit.appendChild(twitIcon);
  twit.appendChild(twitContent);
  
  var body = document.getElementsByClassName('twit-container')[0];
  body.appendChild(twit);
  
document.getElementsByClassName("twit-container")[0].insertAdjacentHTML("afterend","<article class=\"twit\"> \n<div class=\"twit-icon\"> \n<i class=\"fa fa-bullhorn\"></i> \n</div> \n<div class=\"twit-content\"> \n<p class=\"twit-text\"> \n" + twitText.value + "\n</p> \n<p class=\"twit-author\"> \n<a href=\"#\">" + twitAuthor.value + "</a> \n</p> \n</div> \n</article>");


  
   

  modalToggle();
}

function isSubstring(s1, s2){
    var M = s1.length;
    var N = s2.length;
    for (var i = 0; i <= N - M; i++) {
        var j;
        for (j = 0; j < M; j++)
            if (s2[i + j] != s1[j])
                break;
 
        if (j == M)
            return i;
    }
 
    return -1;
}
