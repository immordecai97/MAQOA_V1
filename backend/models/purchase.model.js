import { Schema, model } from 'mongoose';

const PurchaseSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    country: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
  },
  cardInfo: {
    cardDate: {
      type: String,
      required: false,
    },
    cardNumber: {
      type: String,
      required: false,
    },
    cvc: {
      type: String,
      required: false,
    },
  },
  cartBasket: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  shipping: {
    type: Number,
    required: false,
  },
  total: {
    type: Number,
    required: false,
  }
});

const PurchaseModel = model('Purchase', PurchaseSchema);
export default PurchaseModel;
