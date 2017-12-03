$.getJSON("/scrape", function(data) {
    $("ul#results ").html("<li>").text(data.title);
    });
