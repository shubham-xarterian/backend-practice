import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      rel: "Hospital",
    },
    bloodGroupe: {
        type: String, 
        required: true,
    }
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
