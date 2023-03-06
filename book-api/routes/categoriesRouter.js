import express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CategoryModel from '../models/CategoryModel'
const router = express.Router();

router.get('/', async (req,res) =>{
    const list = await CategoryModel.find();
    return res.json(list);
})

router.get('/:categoryId', async (req,res) =>{
    try{
        const category = await CategoryModel.findOne({ _id: req.params.categoryId });
        if(!category) return res.status(StatusCodes.NOT_FOUND).json({error: ReasonPhrases.NOT_FOUND});
        return res.json(category);
    }catch(error){
        res.status(StatusCodes.NOT_FOUND).json({ error: error.message })
    }
})

router.post('/create' , async (req,res) =>{

    const newCategory = new CategoryModel(req.body);

    const result = await newCategory.save();

    console.log(result);

    return res.json(newCategory);

    // const {creatorId ,name, description } = req.body;
    
    // const categoriesId= (categories.map((category) => category.id))
    // const nextId = Math.max(...categoriesId) + 1;

    // const newCategory = {
    //     id:nextId,
    //     creatorId,
    //     name,
    //     description
    // };

    // categories.push(newCategory);

    // return res.json(newCategory);
})

router.put('/:categoryId', async (req, res) => {
    await CategoryModel.updateOne({ _id: req.params.categoryId }, req.body);

    const updatedCategory = CategoryModel.find({ _id: req.params.categoryId });

    return res.json(updatedCategory);
})

router.delete('/:categoryId', async(res, req) => {

    try{
        await CategoryModel.deleteOne({ _id: req.params.categoryId });
        res.json({ deleted: true})

    }catch(err){
        res.status(StatusCodes.NOT_FOUND).json({ message: ReasonPhrases.NOT_FOUND}); 
    }
})

export default router;