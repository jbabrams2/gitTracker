function countPushes() {
            var arr1 = [];                                                //array that contains the dates
            var match = [];                                               //array that eliminates duplicate dates
            var arr2 = [];                                                //array that contains the count of pushes for each date (minus duplicates)

    //-------------------------------- call to first github user -------------------------- \\

    $.ajax({                                             
        type: "GET",
        url: "https://api.github.com/users/Ocramius/repos",               //connect to Github API
        dataType: "json",
        success: function(result) {
            for (var e = 0; e < result.length; e++)  {                    //for each result from api call:
                var pushed_at = result[e].pushed_at;                      //assign the API value: "pushed_at" to "pushed_at" variable
                var datePushed = pushed_at.substr(0, 10);                 //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                var count = 0;                                            //stores the number of times a user pushed code on each date
                 for (var x = 0; x < result.length; x++) {                //start another loop that runs through the length of the "result" object.
                        var Match_pushed_at = result[x].pushed_at;        //assign the API value: "pushed_at" to "pushed_at" variable
                        var dateMatched = Match_pushed_at.substr(0, 10);  //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                        if(datePushed == dateMatched){                    //if the current value of loop 1 is equal to the value of loop 2,
                                                                          // it means that the user again pushed code on this date. 
                        count++;                                          //Add 1 to the "count" variable to document this.
                        }        
                    }
                if(arr1.indexOf(datePushed) < 1){                         //if the date doesn't already exist in "arr1" array, it isn't a duplicate.
                    match.push(datePushed);                               //since it isn't a duplicate, push it to "Match" array, and
                    arr2.push(count.toString());                          //push the number stored in the "count" variable to the "arr2" array
                }
                arr1.push(datePushed);                                    //no matter what, add datePushed to array 1. 
                                                                          //All dates must be stored in this array so that the above IF statement can 
                                                                          //cross reference datePushed with previous dates to determine whether it's a duplicate.
            }
                // console.log(arr1);                                        //print result in log
                // console.log(match);                                       //print result in log
                // console.log(arr2);                                        //print result in log
            for (var z = 0; z < match.length; z++) {                      // loop through the Match array
                if(arr2[z] == "1"){
                    $("#pushList1").append(                               //if arr2[z] is equal to 1,
                     "<li>" + arr2[z] + " push on " + match[z] + "</li>"                 //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#pushList1").append(
                     "<li>" + arr2[z] + " pushes on " + match[z] + "</li>"
                 );
                }
            }
        }
    });

//-------------------------------- call to second github user -------------------------- \\

            var arr1v2 = [];                                              //array that contains the dates
            var matchv2 = [];                                             //array that eliminates duplicate dates
            var arr2v2 = [];   
    $.ajax({                                             
        type: "GET",
        url: "https://api.github.com/users/michalbe/repos",               //connect to Github API
        dataType: "json",
        success: function(result) {
            for (var e = 0; e < result.length; e++)  {                    //for each result from api call:
                var pushed_at = result[e].pushed_at;                      //assign the API value: "pushed_at" to "pushed_at" variable
                var datePushed = pushed_at.substr(0, 10);                 //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                var count = 0;                                            //stores the number of times a user pushed code on each date
                 for (var x = 0; x < result.length; x++) {                //start another loop that runs through the length of the "result" object.
                        var Match_pushed_at = result[x].pushed_at;        //assign the API value: "pushed_at" to "pushed_at" variable
                        var dateMatched = Match_pushed_at.substr(0, 10);  //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                        if(datePushed == dateMatched){                    //if the current value of loop 1 is equal to the value of loop 2,
                                                                          // it means that the user again pushed code on this date. 
                        count++;                                          //Add 1 to the "count" variable to document this.
                        }        
                    }
                if(arr1v2.indexOf(datePushed) < 1){                       //if the date doesn't already exist in "arr1" array, it isn't a duplicate.
                    matchv2.push(datePushed);                             //since it isn't a duplicate, push it to "Match" array, and
                    arr2v2.push(count.toString())                         //push the number stored in the "count" variable to the "arr2" array
                }
                arr1v2.push(datePushed);                                  //no matter what, add datePushed to array 1. 
                                                                          //All dates must be stored in this array so that the above IF statement can 
                                                                          //cross reference datePushed with previous dates to determine whether it's a duplicate.
            }

            for (var z = 0; z < matchv2.length; z++) {                    // loop through the Match array
                if(arr2v2[z] == "1"){
                    $("#pushList2").append(                               //if arr2[z] is equal to 1,
                     "<li>" + arr2v2[z] + " push on " + matchv2[z] + "</li>"                 //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#pushList2").append(
                     "<li>" + arr2v2[z] + " pushes on " + matchv2[z] + "</li>"
                 );
              }
          }
        }
    });

//-------------------------------- call to third github user -------------------------- \\

            var arr1v3 = [];                                              //array that contains the dates
            var matchv3 = [];                                             //array that eliminates duplicate dates
            var arr2v3 = [];   
    $.ajax({                                             
        type: "GET",
        url: "https://api.github.com/users/kevinsawicki/repos",               //connect to Github API
        dataType: "json",
        success: function(result) {
            for (var e = 0; e < result.length; e++)  {                    //for each result from api call:
                var pushed_at = result[e].pushed_at;                      //assign the API value: "pushed_at" to "pushed_at" variable
                var datePushed = pushed_at.substr(0, 10);                 //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                var count = 0;                                            //stores the number of times a user pushed code on each date
                 for (var x = 0; x < result.length; x++) {                //start another loop that runs through the length of the "result" object.
                        var Match_pushed_at = result[x].pushed_at;        //assign the API value: "pushed_at" to "pushed_at" variable
                        var dateMatched = Match_pushed_at.substr(0, 10);  //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                        if(datePushed == dateMatched){                    //if the current value of loop 1 is equal to the value of loop 2,
                                                                          // it means that the user again pushed code on this date. 
                        count++;                                          //Add 1 to the "count" variable to document this.
                        }        
                    }
                if(arr1v3.indexOf(datePushed) < 1){                       //if the date doesn't already exist in "arr1" array, it isn't a duplicate.
                    matchv3.push(datePushed);                             //since it isn't a duplicate, push it to "Match" array, and
                    arr2v3.push(count.toString())                         //push the number stored in the "count" variable to the "arr2" array
                }
                arr1v3.push(datePushed);                                  //no matter what, add datePushed to array 1. 
                                                                          //All dates must be stored in this array so that the above IF statement can 
                                                                          //cross reference datePushed with previous dates to determine whether it's a duplicate.
            }

            for (var z = 0; z < matchv3.length; z++) {                    // loop through the Match array
                if(arr2v3[z] == "1"){
                    $("#pushList3").append(                               //if arr2[z] is equal to 1,
                     "<li>" + arr2v3[z] + " push on " + matchv3[z] + "</li>"                 //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#pushList3").append(
                     "<li>" + arr2v3[z] + " pushes on " + matchv3[z] + "</li>"
                 );
              }
          }
        }
    });

//-------------------------------- call to fourth github user -------------------------- \\

            var arr1v4 = [];                                              //array that contains the dates
            var matchv4 = [];                                             //array that eliminates duplicate dates
            var arr2v4 = [];   
    $.ajax({                                             
        type: "GET",
        url: "https://api.github.com/users/brianchandotcom/repos",               //connect to Github API
        dataType: "json",
        success: function(result) {
            for (var e = 0; e < result.length; e++)  {                    //for each result from api call:
                var pushed_at = result[e].pushed_at;                      //assign the API value: "pushed_at" to "pushed_at" variable
                var datePushed = pushed_at.substr(0, 10);                 //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                var count = 0;                                            //stores the number of times a user pushed code on each date
                 for (var x = 0; x < result.length; x++) {                //start another loop that runs through the length of the "result" object.
                        var Match_pushed_at = result[x].pushed_at;        //assign the API value: "pushed_at" to "pushed_at" variable
                        var dateMatched = Match_pushed_at.substr(0, 10);  //eleminate any text in the string that comes after the date and assign it to variable "datePushed"
                        if(datePushed == dateMatched){                    //if the current value of loop 1 is equal to the value of loop 2,
                                                                          // it means that the user again pushed code on this date. 
                        count++;                                          //Add 1 to the "count" variable to document this.
                        }        
                    }
                if(arr1v4.indexOf(datePushed) < 1){                       //if the date doesn't already exist in "arr1" array, it isn't a duplicate.
                    matchv4.push(datePushed);                             //since it isn't a duplicate, push it to "Match" array, and
                    arr2v4.push(count.toString())                         //push the number stored in the "count" variable to the "arr2" array
                }
                arr1v2.push(datePushed);                                  //no matter what, add datePushed to array 1. 
                                                                          //All dates must be stored in this array so that the above IF statement can 
                                                                          //cross reference datePushed with previous dates to determine whether it's a duplicate.
            }
                console.log(arr1v4);                                      //print result in log
                console.log(matchv4);                                     //print result in log
                console.log(arr2v4);                                      //print result in log
            for (var z = 0; z < matchv4.length; z++) {                    // loop through the Match array
                if(arr2v4[z] == "1"){
                    $("#pushList4").append(                               //if arr2[z] is equal to 1,
                     "<li>" + arr2v4[z] + " push on " + matchv4[z] + "</li>"                 //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#pushList4").append(
                     "<li>" + arr2v4[z] + " pushes on " + matchv4[z] + "</li>"
                 );
              }
          }
        }
    });
       
        var pushData = {
        labels : match,
        datasets : [
            {
                fillColor : "rgba(172,194,132,0.4)",
                strokeColor : "#ACC26D",
                pointColor : "#fff",
                pointStrokeColor : "#9DB86D",
                data : arr2
            }
        ]
    }

    var pushes = document.getElementById('pushes').getContext('2d');
    new Chart(pushes).Line(pushData);

            // $("#repo_count").append("Total Repos: " + result.length);
}

//----------------------------SHRINKING HEADER--------------------------------------\\
                /*note, this section was copied and modified
                  from http://jsfiddle.net/jezzipin/JJ8Jc/ */

$(function(){
    $('#heading').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#heading').data('size') == 'big')
        {
            $('#heading').data('size','small');
            $('#heading').stop().animate({
                height:'40px'
            },300);

            $('#name').data('size','big');
            $('#name').stop().animate({
                margin:'-25px'
            },300);

            $('#name').data('size','big');
            $('#name').stop().animate({
                padding:'0px'
            },300);
        }
    }
    else
    {
        if($('#heading').data('size') == 'small')
        {
            $('#heading').data('size','big');
            $('#heading').stop().animate({
                height:'100px'
            },300);

            $('#name').data('size','small');
            $('#name').stop().animate({
                margin:'0px'
            },300);

            $('#name').data('size','small');
            $('#name').stop().animate({
                padding:'20px'
            },300);

        }  
    }
});

//----------------------------SHRINKING HEADER for ranGen--------------------------------------\\
                /*note, this section was copied and modified
                  from http://jsfiddle.net/jezzipin/JJ8Jc/ */

                  $(function(){
    $('#ranHeading').data('size','big');
});

$(window).scroll(function(){
    if($(document).scrollTop() > 0)
    {
        if($('#ranHeading').data('size') == 'big')
        {
            $('#ranHeading').data('size','small');
            $('#ranHeading').stop().animate({
                height:'40px'
            },300);

            $('#name').data('size','big');
            $('#name').stop().animate({
                margin:'-25px'
            },300);

            $('#name').data('size','big');
            $('#name').stop().animate({
                padding:'0px'
            },300);
        }
    }
    else
    {
        if($('#ranHeading').data('size') == 'small')
        {
            $('#ranHeading').data('size','big');
            $('#ranHeading').stop().animate({
                height:'100px'
            },300);

            $('#name').data('size','small');
            $('#name').stop().animate({
                margin:'0px'
            },300);

            $('#name').data('size','small');
            $('#name').stop().animate({
                padding:'20px'
            },300);

        }  
    }
});

//----------------------ranGen JAVASCRIPT-------------------\\

function randomize() {

        var avatarArray = [];
        var userArray = [];

    $.ajax({                                             
      type: "GET",
      url: "https://api.github.com/users?since=2000",               //connect to Github API
      dataType: "json",
      success: function(result) { 
          
 
          for (var e = 0; e < result.length; e++)  {                    //for each result from api call:
          var avatar = result[e].avatar_url;
          avatarArray.push(avatar);
          console.log(avatarArray);                                        //print result in log

          var user = result[e].login;
          userArray.push(user);
          console.log(userArray);                                       //print result in log
          }
            user = userArray[Math.floor(userArray.length * Math.random())];
            console.log(user);
            var matchingAvatar = avatarArray[userArray.indexOf(user)];
            console.log(matchingAvatar);

            var newUser = document.createTextNode("created by " + user)
            var position = document.getElementById('userName');
            position.appendChild(newUser);

            var newUser2 = document.createTextNode("Other repositories by " +user);
            var position2 = document.getElementById('secName');
            position2.appendChild(newUser2);

            var position = document.getElementById('userName');

            var userPic = document.getElementById("profileImage");
            var src = userPic.getAttribute("src");
            src = matchingAvatar;
            userPic.setAttribute("src", src);

            var repoName = [];
            var repoDescription = [];

             $.ajax({                                             
                  type: "GET",
                  url: "https://api.github.com/users/"+user+"/repos",               //connect to Github API
                  dataType: "json",
                  success: function(result) { 
                      for (var i = 0; i < 4; i++)  {
                        var repo = result[i].name;
                        repoName.push(repo);
                        console.log(repoName); 

                        var description = result[i].description;
                        repoDescription.push(description);
                        console.log(repoDescription);
                      }

                    var firstRepo = document.createTextNode(repoName[0])
                    var position = document.getElementById('repository');
                    position.appendChild(firstRepo);

                    var firstRepoDescription = document.createTextNode(repoDescription[0])
                    var position = document.getElementById('repoDesc');
                    position.appendChild(firstRepoDescription);

                    //posting additional repositories below\\

                      //repoNames below

                    var secRepo = document.createTextNode(repoName[1])
                    var position = document.getElementById('secRepo');
                    position.appendChild(secRepo);

                    var thirdRepo = document.createTextNode(repoName[2])
                    var position = document.getElementById('thirdRepo');
                    position.appendChild(thirdRepo);

                    var fourthRepo = document.createTextNode(repoName[3])
                    var position = document.getElementById('fourthRepo');
                    position.appendChild(fourthRepo);

                      //repo descriptions below

                    var secRepoDescription = document.createTextNode(repoDescription[1])
                    var position = document.getElementById('secDesc');
                    position.appendChild(secRepoDescription);


                    var thirdRepoDescription = document.createTextNode(repoDescription[2])
                    var position = document.getElementById('thirdDesc');
                    position.appendChild(thirdRepoDescription);

                    var fourthRepoDescription = document.createTextNode(repoDescription[3])
                    var position = document.getElementById('fourthDesc');
                    position.appendChild(fourthRepoDescription);

                  }
                });
        }
    });     
  }


