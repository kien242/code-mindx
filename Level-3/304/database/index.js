import mongoose from "mongoose";
const data = mongoose();

async function connect() {
  try {
    await data.connect("mongodb://localhost:27017/kien242");
    console.log("connec thanh cong");
  } catch (error) {
    console.log("connec khong thanh cong");
  }
}

export default connect();
