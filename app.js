const express = require('express')
const app = express()

//   app.get('/',function (req, res){
// //    console.log('hello')
//     res.send('<h1> Home </h1>')
//   });
  app.get('/',function (req, res){
        const siswa = {
            nama : 'Nurfadhil',
            absen : 25,
            hobby : 'sepak bola'
        }
        res.json(siswa)
      });

  app.get('/about', function (req, res) {
    res.send('about')
  });
//   app.get('/about', function (req, res) {
//     res.redirect('/users')
//   });

  app.get('/users', function (req, res){
    res.send('Get User')
  })
  app.post('/users', function (req, res){
    res.send('post User')
  })
  app.put('/users/:id', function (req, res){
    const id = req.params;
    res.send(id)
  })
  app.delete('/users/:userId', function (req, res){
    res.send(req.params.userId)
  })

app.listen(3000, () => {
  console.log(`server is ready`)
})