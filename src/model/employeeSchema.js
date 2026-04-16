import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "NIMBJA SECURITY SOLUTIONS Pvt. Ltd.",
        "Smart Software Services (I) Pvt. Ltd.",
        "SmartMatrix Digital Services Pvt. Ltd.",
        "Devcons Software Solutions Pvt. Ltd.",
        "Penta Software Consultancy Services (I) Pvt Ltd",
        "Cubeage Technologies Services Pvt. Ltd.",
        "Quick Management Services",
        "Neweage Cloud Solution Pvt. Ltd.",
        "RP Business Solutions LLP",
        "JDIT Software Solutions Pvt. Ltd.",
      ],
    },
    identity: {
      type: String,
      enum: ["Mr.", "Mrs.", "Miss.", "Mx."],
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    employeeId: {
      type: String,
      required: true,
      trim: true,
    },
    Number: {
      type: Number,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    PanNumber: {
      type: String,
      required: true,
      trim: true,
    },
    DateOfBirth: {
      type: Date,
      required: true,
    },
    currentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    permantAddress: {
      type: String,
      required: true,
      trim: true,
    },
    offerDate: {
      type: Date,
      required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
    },
    joiningCtc: {
      type: Number,
      required: true,
    },
    currentCtc: {
      typr: Number,
      required: true,
    },
    joiningDegisnation: {
      type: String,
      required: true,
      trim: true,
    },
    currentDegisnation: {
      type: String,
      required: true,
      trim: true,
    },
    Department: {
      type: String,
      required: true,
      trim: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    bankAccountNumber: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Paid", "Pending"],
      default: "Pending",
      required: true,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
