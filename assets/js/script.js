// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html. 
var todayDate = moment().format('MM/DD/YYYY');
$("#currentDay").html(todayDate);
// event listener
$(function () {
  $(".saveBtn").on("click", function(){ 
    var text = $(this).siblings(".description"). val ();
    var time = $(this).parent().attr("id");

    //local storage
    localStorage.setItem(time,text);
    
  }) 

  function timeTracker(){ 
    var timeNow = moment().hour(); 
    $(".time-block").each(function(){ 
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    
    if(blockTime < timeNow){ 
      $(this).removeClass("future"); 
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if(blockTime === timeNow){ 
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present"); 
    }

  else{ 
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
    }); 

  

  }
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
