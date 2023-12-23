import express from "express";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
app.use(express.static("public/"))
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
  let val = req.body.firstInput;
  let name = req.body.secondInput
  let thala = "";
  let link = ""

  if (val.length == 7) {
    thala = `${val} is Thala for a reason: It's a ${val.length}-letter word.`;
    link = ecode(name)
    res.redirect(`/${link}`)
    } else {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
      sum = sum + Number(val[i]);
    }
    if (sum === 7) {
      thala = `${val} is Thala for a reason: The sum of its digits is ${sum}`;
      link = ecode(name)
      res.redirect(`/${link}`)

    } else {
      thala = `${val} : No Thala spotted, opinion rejected. Try another word`;
      res.render("index.ejs", { result: thala, name:name});
    }
  }
  
});

app.get('/:id',(req,res)=>{
    let thala = decode(req.params.id)
  res.render("result.ejs", { content: thala, link : req.params.id  });
    
})

function ecode(input){
  return Buffer.from(input, 'utf8').toString('base64')
}
function decode(input){
return Buffer.from(input, 'base64').toString('utf8')
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
