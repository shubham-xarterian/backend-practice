import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  { name: { type: String, required: true},
    expiriance: {
        type:Number,
        default: 0
    },
    workeInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        rel: "Hospital"
    }
},
  { timestamps: true }
);
