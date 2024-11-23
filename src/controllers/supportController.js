import expressAsyncHandler from "express-async-handler";
import { Support } from "../models/supportModel";

//@desc Create a support
//@route /api/support
//@access private

export const createSupport = expressAsyncHandler(async (req, res) => {
    try {
        const support = new Support(req.body);
        await support.save();
        res.status(201).json({
            status: true,
            data: support
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})


//@desc Get  all support
//@route /api/support
//@access private

export const getSupportAll = expressAsyncHandler(async (req, res) => {
    try {
        const supports = await Support.find().populate("user product assignedTo assignedBy");
        
        res.status(200).json({
            status: true,
            data: supports
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Get  single support Id
//@route /api/support
//@access private

export const getSingleSupport = expressAsyncHandler(async (req, res) => {
    try {
        const support = await Support.findById(req.params.id).populate("user product assignedTo assignedBy");
        
        if (!support) {
            return res.status(404).json({
                status:false,
                message: "Support Query Not Found",
                
            });
        }

        res.status(200).json({
            status: true,
            data: support
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Update  single support Id
//@route /api/support
//@access private

export const updateSingleSupport = expressAsyncHandler(async (req, res) => {
    try {
        const support = await Support.findByIdAndUpdate(req.params.id,req.body,{new:true});
        
        if (!support) {
            return res.status(404).json({
                status:false,
                message: "Support Query Not Found",
                
            });
        }

        res.status(200).json({
            status: true,
            data: support
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})

//@desc Delete  single support Id
//@route /api/support
//@access private

export const deleteSingleSupport = expressAsyncHandler(async (req, res) => {
    try {
        const support = await Support.findByIdAndDelete(req.params.id);
        
        if (!support) {
            return res.status(404).json({
                status:false,
                message: "Support Query Not Found",
                
            });
        }
        res.status(200).json({
            status: true,
            message: "Delete successfully "
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})


//@desc assign  support Id
//@route /api/support
//@access private

export const assignSupport = expressAsyncHandler(async (req, res) => {
    try {
        const { assignedTo, assignedBy } = req.body;
        const support = await Support.findById(req.params.id,{assignedTo,assignedBy},{new: true}).populate("user product assignedTo assignedBy");
        
        if (!support) {
            return res.status(404).json({
                status:false,
                message: "Support Query Not Found",
                
            });
        }

        res.status(200).json({
            status: true,
            data: support
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})

//@desc assign  support status
//@route /api/support
//@access private

export const assignSupportStatus = expressAsyncHandler(async (req, res) => {
    try {
        const { status} = req.body;
        const support = await Support.findById(req.params.id,{status},{new: true}).populate("user product assignedTo assignedBy");
        
        if (!support) {
            return res.status(404).json({
                status:false,
                message: "Support Query Not Found",
                
            });
        }

        res.status(200).json({
            status: true,
            data: support
        })
    } catch (error) {
        res.status(500).json({
            message: "Somthing is support create  worn!",
            error: error.message,
        });
        
    }
})
