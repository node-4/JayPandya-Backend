const catchAsync = require('../utils/catchAsync');
const { notifyService } = require('../services');


const addnotification = catchAsync(async (req, res) => {
    console.log('GHH')
    let { Notification } = req.body;
    console.log(req.body)
    console.log(Notification)
    const { type, message, statusCode, notificationData } =
        await notifyService.Addnotification(Notification)

    if (type === "Error") {
        return res.status(statusCode).json({
            type,
            message: message
        })
    }

    return res.status(statusCode).json({
        type,
        message: message,
        notificationData
    })
})


const getnotification = catchAsync(async (req, res) => {

    const { type, message, statusCode, Notification } =
        await notifyService.getnotification()

    if (type === "Error" || type === "error") {
        return res.status(statusCode).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        type,
        message: message,
        Notification
    })
})


const updatenotification = catchAsync(async (req, res) => {
    let Id = req.params.id
    const { type, statusCode, message, Notification } =
        await notifyService.updatenotification(Id, req.body)
    if (type === "Error" || type === "error") {
        return res.status(statusCode).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        message: message,
        type: type,
        Notification

    })
})


const deletenotification = catchAsync(async (req, res) => {
    const id = req.params.id
    const { type, statusCode, message } = await notifyService.Deletenotification(id)
    res.status(statusCode).json({
        type: type,
        message: message
    })
})
module.exports = { addnotification, getnotification, updatenotification, deletenotification }
