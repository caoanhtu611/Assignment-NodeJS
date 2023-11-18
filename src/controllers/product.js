import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    try {

        console.log(req.body);
        const data = await Product.create(req.body);
        if(!data){
            return res.status(400).json({
                message: "False",
            })
        }
        return res.status(200).json({
            message: "Create Success",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message,
        })
    }
}

export const getAllProduct = async (req, res) => {
    try {
     
        const data = await Product.find();
        if(!data || data.length == 0){
            return res.status(400).json({
                message: "Khong tim thay san pham!",
            })
        }
        return res.status(200).json({
            message: "Success",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message,
        })
    }
}

export const getOneProduct = async (req, res) => {
    try {
    
        const data = await Product.findById(req.params.id);
        if(!data){
            return res.status(400).json({
                message: "Khong tim thay san pham!",
            })
        }
        return res.status(200).json({
            message: "Success",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message,
        })
    }
}


export const deleteProduct = async (req, res) => {
    try {
       
        const data = await Product.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(400).json({
                message: "Khong tim thay san pham!",
            })
        }
        return res.status(200).json({
            message: "Delete Success",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message,
        })
    }
}


export const updateProduct = async (req, res) => {
    try {
        console.log(req.body);
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!data){
            return res.status(400).json({
                message: "Khong tim thay san pham!",
            })
        }
        return res.status(200).json({
            message: "Update Success",
            data,
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message,
        })
    }
}