const express = require('express'),
cors = require('cors'),
app = express();

app.use(cors({
  AccessControlAllowOrigin: '*'
}));

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const fila = [];



app.post('/insert',(req,res)=>{
  const {item} = req.body
  console.log(req.body)
  fila.push(item)
  res.send(fila)
  
});

app.post('/remove',(req,res)=>{
  fila.reverse()
  fila.pop()
  fila.reverse()
  res.send(fila)
});

app.listen(3333,()=>{
  console.log('Funcionando')
})