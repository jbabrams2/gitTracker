$("#btn_get_repos").click(function() {
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
                console.log(arr1);                                        //print result in log
                console.log(match);                                       //print result in log
                console.log(arr2);                                        //print result in log
            for (var z = 0; z < match.length; z++) {                      // loop through the Match array
                if(arr2[z] == "1"){
                    $("#repo_name").append(                               //if arr2[z] is equal to 1,
                     "<div>" + arr2[z] + " push on</div>"                 //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#repo_name").append(
                     "<div>" + arr2[z] + " pushes on</div>"
                 );
                }
                 $("#repo_date").append(                                  //print the date that arr2[z] corresponds to.
                    "<div> " + match[z] + "</div>"                        //end result should be: "x pushes on [date]"
                                                                          //example: 3 pushes on 2015-03-13
                    );
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
                console.log(arr1v2);                                      //print result in log
                console.log(matchv2);                                     //print result in log
                console.log(arr2v2);                                      //print result in log
            for (var z = 0; z < matchv2.length; z++) {                    // loop through the Match array
                if(arr2v2[z] == "1"){
                    $("#repo_name4").append(                              //if arr2[z] is equal to 1,
                     "<div>" + arr2v2[z] + " push on</div>"               //write "push" instead of "pushes" (just for proper english)
                 );                                                       //also here, the main purpose is to print the number stored in arr2[z] in the view
                }else{
                    $("#repo_name4").append(
                     "<div>" + arr2v2[z] + " pushes on</div>"
                 );
                }
                 $("#repo_date5").append(                                 //print the date that arr2[z] corresponds to.
                    "<div> " + matchv2[z] + "</div>"                      //end result should be: "x pushes on [date]"
                                                                          //example: 3 pushes on 2015-03-13
                    );
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
});

