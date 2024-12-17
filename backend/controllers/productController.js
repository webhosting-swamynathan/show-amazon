
const ProductModel = require('../models/productModel')

// get total products 

exports.getProducts =async (req,res,next)=>{

    // search functionality ----------

    const query = req.query.keyword?{name : { 
        $regex: req.query.keyword,
        $options:'i'
     }}:{}

    //  search function end --------- 

  const products = await ProductModel.find(query)


    res.json({
        success : true,
        products
    })
}



// get single product 

exports.getSingleProducts =async(req,res,next)=>{

    try{
        // console.log(req.params.id, 'ID')
        const product = await ProductModel.findById(req.params.id)
    
        res.json({
            success : true,
            product
        })
    } catch(error){
        res.status(404).json({
            success : false,
            message : "unable to identify ID"
        })
    }

   
}