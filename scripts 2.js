//On button click 
    //take the text inside the input  
    //put the text inside the paragraph 


$("#submit").on("click", function(event) {
    let text= $("input").val();
    event.preventDefault();
    $("#text").html(text);
    //delete input value
    $("#input").val("");
});

