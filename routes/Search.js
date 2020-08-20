
const express = require('express');
const { patch } = require('../app/app');
const router =  express.Router();

//crud basic 
// returns al dados search  
router.get('/:inputSearch', (req, res, next) =>{
    const inputSearch =  req.params.inputSearch
    res.status(200).send({
    mensagem:` OK get ${inputSearch}`
    })
})

// rout post
router.post('/', (req, res, next) =>{
    const inputSearch =  req.params.inputSearch
    res.status(201).send({
    mensagem:` OK post `
    })
    
})

//rout path 
router.patch('/', (req, res, next) =>{
    const inputSearch =  req.params.inputSearch

    res.status(201).send({
    mensagem:` OK patch`
    })
    
})

// rout delete 

router.delete('/', (req, res, next) =>{
    const inputSearch =  req.params.inputSearch

    res.status(201).send({
    mensagem:` OK delete`
    })
    
})  

module.exports = router;
