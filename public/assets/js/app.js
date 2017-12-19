$.getJSON("/articles", function(data) {

    console.log(data);

   // $.post("/")
for (i =0 ; i<data.length ; i++) {

    $("ul#results ").append("<li>").text(data[i].title);
    
    }
});
