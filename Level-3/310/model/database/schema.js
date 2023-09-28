import mongoose from "mongoose";

const Schema = mongoose.Schema;
const customer = new Schema({
  //   infomation: {
  //     name: { type: String, require: [true, "Yêu cầu nhập tên khách thuê trọ"] },
  //     phoneNumber: Number,
  //     email: String,
  //     permanentAddress: {
  //       type: String,
  //       require: [true, "Yêu cầu địa chỉ thường trú"],
  //     },
  //     identityCard: {
  //       type: Number,
  //       require: [true, "Yêu cầu nhập số CCCD/CMND"],
  //     },
  //   },
  //   roomStatus: {
  //     dateOfHire: { type: Date, require: [true] },
  //     electricityIndex: { type: Number, require: [true] },
  //     waterIndex: { type: Number, require: [true] },
  //     serviceStatus: { type: String },
  //     otherStatus: { type: String },
  //   },
  name: String,
  email: String,
});

export const customerModel = mongoose.model("customerModel", customer);
