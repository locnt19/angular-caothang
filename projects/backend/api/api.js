const router = require('express').Router()
const LopHocPhanRoutes = require('./LopHocPhan')

router.use('/lophocphan', LopHocPhanRoutes)

module.exports = router