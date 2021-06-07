const Cart = require("../models/Cart");
const path = require('path')
const controllers = {
  postProductInCart: async (req, res) => {
    const { user, product, amount } = req.body;

    let cart = await Cart.findOne({ user })
   // console.log(cart)

    if (cart) {
      let productId = cart.products.findIndex(item => item.product.toString() === product)


      if (productId !== -1) {
        cart.products[productId].amount += amount
      } else {
        cart.products.push({ item: product, amount: amount })
      }
      await cart.save()
      res.json(cart)
    } else {
      const cart = new Cart({
        user,
        products: [{ product, amount }],
      })
      await cart.save()
      res.json(cart);
    }
  },

  deleteCart: async (req,res)=>{

   const cart  = await Cart.findByIdAndDelete(req.params.id)

    res.json(cart)
  },

  postImage : async (req,res)=>{
    const image =req.files.image
    const newFileName = `./avatars/${Math.floor(Math.random() * 100000)}${path.extname(image.name)}`

    image.mv(newFileName ,  async (e)=>{
      if(e){
        console.log(e.message)
      }else{
        const userCart =  await  Cart.findById(req.params.id)
        console.log(req.files)
        userCart.pathToAvatar  = newFileName

      await userCart.save()
        res.json('file upload')
      }
    })



  }

}

module.exports = controllers