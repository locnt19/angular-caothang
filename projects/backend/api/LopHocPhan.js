const router = require('express').Router()

router.get('/danhsachlophocphan', (req, res) => {
  const data = [{
    lop: "CD TH 16 PMC",
    name: "Nguyen Thanh Loc"
  }]
  res.send(data)
})

router.post('/lophocphan', (req, res) => {
  console.log(req.body)
})

module.exports = router