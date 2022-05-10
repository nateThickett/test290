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
