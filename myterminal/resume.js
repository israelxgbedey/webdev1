document.addEventListener('DOMContentLoaded', function() {

  document.getElementsByTagName('form')[0].onsubmit = function(evt) {
    evt.preventDefault(); 
    checkWord();
    window.scrollTo(0,150);
  }

  document.getElementById('terminalTextInput').focus();

  var textInputValue = document.getElementById('terminalTextInput').value.trim();

  var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

  var clearInput = function(){
    document.getElementById('terminalTextInput').value = "";
  }

  var scrollToBottomOfResults = function(){
    var terminalResultsDiv = document.getElementById('terminalReslutsCont');
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  }

  scrollToBottomOfResults();

  var addTextToResults = function(textToAdd){
    document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  }

 
  var postHelpList = function(){
   
    var helpKeyWords = [
	"- 'experience' will display my previous work experience",
	"- 'education' will display my current education level",
	"- 'contact' will display my contact information",
	"- 'internshipinfo' show more information about internship",
    "- Open + website URL to open it in the browser (ex. open mahdif.com)",
    "- Google + keyword to make a Google search (ex. google what is the capital of France)",
    "- YouTube + keyword to search for videos on Youtube (ex. youtube how to make money)",
    "- Wiki + keyword to search on Wikipedia (ex. wiki who is donald trump)",
    "- 'Time' will display the  time.",
    "- 'Date' will display the  date.",
    "- 'joke' will not make you laugh",
    "- 'funny video' show a funny video",
	"- 'funfact' will display a 'fun' fact ", 
      "* Explore. There's more to discover :).",
    ].join('<br>');
    addTextToResults(helpKeyWords);
  }

  
  var getTimeAndDate = function(postTimeDay){
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; 
    var dateYear = timeAndDate.getFullYear(); 

    if (timeHours < 10){ 
      timeHours = "0" + timeHours;
    }

    if (timeMinutes < 10){ 
      timeMinutes = "0" + timeMinutes;
    }

    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

    if (postTimeDay == "time"){
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date"){
      addTextToResults(currentDate);
    }
  }

  
  var openLinkInNewWindow = function(linkToOpen){
    window.open(linkToOpen, '_blank');
    clearInput();
  }


  var textReplies = function() {
    switch(textInputValueLowerCase){
      case "experience":
        clearInput();
        addTextToResults("Network Engineer (Internship) WADA, ACCRA, GHANA, July 15 2021–Present | Campus Maintenance job Illinois college, Jacksonville IL, June 2020 – September 2020");
        break;

      case "education":
        clearInput();
        addTextToResults("Columbia College Chicago, Chicago, IL May 2021, Programming and Graphic Design Major,");
        break;
			
	case "info":
        clearInput();
        addTextToResults("I am currently a programming major and, I have two more years to graduate. I am planning on working in a computer science field, preferably software development. Over the years I have acquired a variety of IT skills which will hopefully help me get into the computer science job market.  ");
        break;
			
			

      case "skills":
        clearInput();
        addTextToResults("Server Linux | Cloud Computing | Networking | Web Development | Java | Python | Microsoft Office | Fluent in French | Adobe Photoshop Sony Vegas");
        break;

      case "intershipinfo":
        clearInput();
        addTextToResults("	Building a Cardano stake pool to help raise funds. 	Monitoring and Maintaining servers and also the stake pool Network so it can stay fully operational. 	Building a website for the stake pool and hosting it on our server .	Maintaining the web servers to make sure the site is up. 	Helping newer interns join the company smoothly .	Used AWS and various other cloud server hosting services");
        break;
        
      case "contact":
        clearInput();
        addTextToResults("Phone: (240) 477-2816 | Email: Israelgbedey51@gmail.com | Address: 525 S State St Chicago, IL 60605");
        break;

      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults("am an AI i don't have feelings sorry");
        break;

      case "dad joke":
      case "unfunny joke":
      case "joke":
        clearInput();
        addTextToResults ("Dear Math, grow up and solve your own problems");
        break;

      case "funfact":
        clearInput();
        addTextToResults("homo sapiens might go extinct soon ");
        break;

      
      case "hello":
      case "hi":
      case "hola":
        clearInput();
        addTextToResults("Hello, hope you're having a good day");
        break;

      

      case "funny video":
        addTextToResults("might actually be funny");
        openLinkInNewWindow('https://www.youtube.com/watch?v=kCsbcZCcG3Y&t=1s');
        break;

     
    

      case "youtube":
        clearInput();
        addTextToResults("Type youtube + something to search for.");
        break;

      case "google":
        clearInput();
        addTextToResults("Type google + something to search for.");
        break;

      case "time":
        clearInput();
        getTimeAndDate("time");
        break;

      case "date":
        clearInput();
        getTimeAndDate("date");
        break;
			
		case "dani":
        clearInput();
        addTextToResults("She's my beautiful girlfriend");
        break;
			

      case "help":
      case "?":
        clearInput();
        postHelpList();
        break;

      default:
      clearInput();
      addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
      break;
    }
  }


  var checkWord = function() {
    textInputValue = document.getElementById('terminalTextInput').value.trim(); 
    textInputValueLowerCase = textInputValue.toLowerCase(); 

    if (textInputValue != ""){ 
      addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0,5) == "open ") { 
        openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
        openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
        addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,7) == "google ") {
        openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
        openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
        addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
      } else{
        textReplies();
      }
    }
  };

});
