import { Schema, model } from 'mongoose';

const PurchaseSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
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
