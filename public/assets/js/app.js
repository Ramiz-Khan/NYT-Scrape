


        
$.getJSON("/articles", function(data) {

    console.log(data);

for (i =0 ; i<data.length ; i++) {

    if (data[i].URL === undefined) {
        
        // $("#results ").append("<li>" + data[i].title + "</li>");
        
    
    }
    
     else {

    // for (i =0 ; i<data.length ; i++) {        


        $("#results ").append("<li><a href='" + data[i].URL + "'>" + data[i].title + "</a></li>");
        

    // }
        
   }

}
});

