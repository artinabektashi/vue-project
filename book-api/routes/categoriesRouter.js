import express from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const router = express.Router();

const categories = [
    {id:1 , name:"idk"},
    {id:2,name:"idk2"}
]

router.get('/list', (req,res) =>{
    return res.json(categories)
})

router.get('/:categoryId', (req,res) =>{
    const { categoryId }=req.params;
    const category = categories.find((category) => category.id.toString() === categoryId)

    // if(!category) return res.status(404).json({error: 'Not found'});
    if(!category) return res.status(StatusCodes.NOT_FOUND).json({error: ReasonPhrases.NOT_FOUND});

    return res.json(category);
})

router.post('/create' , (req,res) =>{

    const {creatorId ,name, description } = req.body;
    
    const categoriesId= (categories.map((category) => category.id))
    const nextId = Math.max(...categoriesId) + 1;

    const newCategory = {
        id:nextId,
        creatorId,
        name,
        description
    };

    categories.push(newCategory);

    return res.json(newCategory);
})

export default router;