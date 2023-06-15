const catchAsync = require('../utils/catchAsync');
const { Support, Help } = require('../models');
const { messages } = require('../config/i18n');




const AddSupport = catchAsync(async (req, res) => {
    try {
        const data = {
            email: req.body.email,
            mobile: req.body.mobile,
            whatpapp: req.body.whatpapp
        }
        const result = await Support.create(data);
        res.status(200).json({
            message: "ok",
            result: result
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})

const GetSupport = catchAsync(async (req, res) => {
    try {
        const result = await Support.find();
        res.status(200).json({
            message: "ok",
            result: result
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})


const DeleSupport = catchAsync(async (req, res) => {
    try {
        await Support.DeleteOne({ _id: req.params.id });
        res.status(200).json({
            message: "Deleted "
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})

const UpdateSupport = catchAsync(async (req, res) => {
    try {
        await Support.updateOne({ _id: req.params.id }, {
            email: req.body.email,
            mobile: req.body.mobile,
            whatpapp: req.body.whatpapp
        }, { new: true })
        res.status(200).json({
            message: "Updated "
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
});

const AddHelp = catchAsync(async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            message: req.body.message
        }
        const result = await Help.create(data);
        res.status(200).json({
            message: "ok",
            result: result
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})

const GetHelp = catchAsync(async (req, res) => {
    try {
        const result = await Help.find();
        res.status(200).json({
            message: "ok",
            result: result
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})


const DeleHelp = catchAsync(async (req, res) => {
    try {
        await Help.DeleteOne({ _id: req.params.id });
        res.status(200).json({
            message: "Deleted "
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
})

const UpdateHelp = catchAsync(async (req, res) => {
    try {
        await Help.updateOne({ _id: req.params.id }, {
            email: req.body.email,
            mobile: req.body.mobile,
            whatpapp: req.body.whatpapp
        }, { new: true })
        res.status(200).json({
            message: "Updated "
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            message: "Something Wrong ",
            error: err.message
        })
    }
});

module.exports = { AddSupport, GetSupport, GetHelp, DeleSupport, DeleHelp, UpdateHelp, UpdateSupport, AddHelp }
