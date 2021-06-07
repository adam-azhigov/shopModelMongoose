const {Schema,model} = require('express')

const Review = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product"
  },
  text:{
    type: String
  },
  createdAt:{
    type: Date
  },
  updatedAt:{
    type: Date
  }
})

module.exports = model('Cart', Cart)