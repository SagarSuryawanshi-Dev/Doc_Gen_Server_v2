import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    mrms: {
      type: String,
      enum: ["Mr.", "Mrs.", "Miss.", "Mx."],
      required: true,
    },
    employeeName: {
      type: String,
      required: true,
      trim: true,
    },
    employeeNumber: {
      type: Number,
      required: true,
    },
    employeeEmail: {
      type: String,
      required: true,
      trim: true,
    },
    employeeDateOfBirth: {
      type: Date,
      required: true,
    },

    employeePanNumber: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
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
    employeeId: {
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
    OfferDate: {
      type: Date,
      required: true,
    },
    joininDate: {
      type: Date,
      required: true,
    },
    joiningCTC: {
      type: Number,
      required: true,
    },
    currentCTC: {
      type: Number,
      required: true,
    },
    joiningDesignation: {
      type: String,
      required: true,
    },
    currentDesignation: {
      type: String,
      required: true,
    },
    resignationDate: {
      type: Date,
      required: true,
    },
    RelievingDate: {
      type: Date,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    workLocation: {
      type: String,
      required: true,
    },
    paymentStatus:{
        type: String,
        enum:["pending", "completed", "inProcess"],
        default:"Pending",
        required:true
    },

    issuedBy: {
      type:mongoose.Schema.Types.ObjectId,
      ref:["Admin", "User"],
      required: true,
    },

    purpose: {
      type: String,
      default: "",
    },

    issueDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
