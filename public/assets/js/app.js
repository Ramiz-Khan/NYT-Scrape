$.getJSON("/articles", function(data) {

    console.log(data);

   // if (data[i].URL) {
        

// for (i =0 ; i<data.length ; i++) {



//     $("#results ").append("<li><a href='" + data[i].URL + "'>" + data[i].title + "</a></li>");
    
//     }
    
    
// } else {

    for (i =0 ; i<data.length ; i++) {        

        $("#results ").append("<li>" + data[i].title + "</li>");

    }
        
//    }
});
