const express = require('express');
const router = express.Router();


router.get('/',(req, res)=>{
    res.send();
})


router.get('/session/:session_id/image/:image_id', (req, res) => {
    var options = {
        root: 'D:\\React\\MERN\\Backend\\Images'
    };
    var fileName = req.params.image_id;
    setTimeout(()=>{
        res.sendFile(fileName, options);
    },2000);
});

router.get('/session/:session_id/image', (req, res) => {
    setTimeout(()=>{res.json(
        {
            "product_images":["blue.jpg", "green.jpg", "lavender.jpg", "lime.jpg"],
            "available_product_images":["blue.jpg", "lavender.jpg"],
            "shopper_images":["maroon.jpg", "pink.jpg", "red.jpg", "torq.jpg"],
            "available_shopper_images":["pink.jpg", "torq.jpg"]
        }
    )},2000)
});

router.post('/session/:session_id/upload/:category', (req, res) => {
    setTimeout(()=>{
        if(req.params.category === "shopper"){
            console.log('Shopper Images Uploaded');
            res.status(200).send();
        }
        else if(req.params.category === "product"){
            console.log('Product Images Uploaded');
            res.status(200).send();
        }
        else{
            console.log('Wrong Category');
            res.status(200).send();
        }
    },2000)
})

router.get('/image/combine', (req, res) => {
    setTimeout(()=>{
        console.log(`Combining ${req.query.shopper} and ${req.query.product}`);
        res.send("combined.jpg");
    },5000)
})

router.get('/image/:combined_image_id', (req, res) => {
    var options = {
        root: 'D:\\React\\MERN\\Backend\\Images'
    };
    var fileName = req.params.combined_image_id;
    setTimeout(()=>{
        res.sendFile(fileName, options, err => {
            if (err) {
                next(err);
            } else {
                console.log('Sent:', fileName);
            }
        });
    },2000);
})


module.exports = router;