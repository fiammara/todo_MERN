const Archive = require('../models/archive_model')

createArchive = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an archive',
        })
    }

    const archive = new Archive(body)

    if (!archive) {
        return res.status(400).json({ success: false, error: err })
    }

    archive
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: archive._id,
                message: 'Archive created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Archive not created!',
            })
        })
}

updateArchive = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Archive.findOne({ _id: req.params.id }, (err, archive) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Archive not found!',
            })
        }
        archive.name = body.name
        
        archive
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: archive._id,
                    message: 'Archive updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Archive not updated!',
                })
            })
    })
}

deleteArchive = async (req, res) => {
    await Archive.findOneAndDelete({ _id: req.params.id }, (err, archive) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!archive) {
            return res
                .status(404)
                .json({ success: false, error: `Archive not found` })
        }

        return res.status(200).json({ success: true, data: archive })
    }).catch(err => console.log(err))
}

getArchiveById = async (req, res) => {
    await Archive.findOne({ _id: req.params.id }, (err, archive) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Archive not found` })
        }
        return res.status(200).json({ success: true, data: archive })
    }).catch(err => console.log(err))
}

getArchive = async (req, res) => {
    await Archive.find({}, (err, archive) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!archive.length) {
            return res
                .status(404)
                .json({ success: false, error: `Archive1 not found` })
        }
        return res.status(200).json({ success: true, data: archive })
    }).catch(err => console.log(err))
}

module.exports = {
    createArchive,
    updateArchive,
    deleteArchive,
    getArchive,
    getArchiveById,
}
