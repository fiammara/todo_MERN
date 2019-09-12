const express = require('express')

const ArchiveCtrl = require('../controllers/archive_ctrl')

const router = express.Router()

router.post('/archive', ArchiveCtrl.createArchive)
router.put('/archive/:id', ArchiveCtrl.updateArchive)
router.delete('/archive/:id', ArchiveCtrl.deleteArchive)
router.get('/archive/:id', ArchiveCtrl.getArchiveById)
router.get('/archive', ArchiveCtrl.getArchive)

module.exports = router
