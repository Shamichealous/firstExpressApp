let express = require("express");

let app = express();

let PORT = 7700;

app.get("/time", (req, res) =>{
    let time = "The current date & time in ATX is "  + new Date();
    res.send(time);

});

// app.get("/:universalURL", (req, res) => {
//     res.send("hello");
//  });

app.listen(PORT, function(){
    console.log("Applicaion started on port ", PORT);
});