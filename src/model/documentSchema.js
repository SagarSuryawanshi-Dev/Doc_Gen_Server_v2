import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    // Offer Letter

    employementType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
    },
    probationPeriod: {
      type: Number,
    },
    workLocation: {
      type: String,
      trim: true,
    },
    workHours: {
      type: Number,
    },
    reportingManeger: {
      type: String,
      trim: true,
    },
    OfferValidTill: {
      type: Date,
    },
    issueDate: {
      type: Date,
    },
    // Appointment Letter
    probationPeriod: {
      type: Number,
    },
    workLocation: {
      type: String,
      trim: true,
    },
    reportingManeger: {
      type: String,
    },
    issueDate: {
      type: Date,
    },

    // Experience Letter
    relievingDate: {
      type: Date,
    },
    conduct_Performance: {
      type: String,
      enum: ["Excellent", "Very Good", "Good", "SatisFactory"],
    },
    issueDate: {
      type: Date,
    },

    // relieving Letter

    issueDate: {
      type: Date,
    },
    relievingDate: {
      type: Date,
    },
    noticePeriod: {
      type: Number,
    },
    handoverStatus: {
      type: String,
      enum: ["Completed", "Partially Completed", "Not Applicable"],
    },

    // incremnet Letter

    effectiveDate: {
      type: Date,
    },
    issueDate: {
      type: Date,
    },

    // intership Certificate

    intershipType: {
      type: String,
      enum: ["paid", "unpaid"],
    },
    issueDate: {
      type: Date,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },

    // Completion Certificate

    projectName: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    completionDate: {
      type: Date,
    },
    roleinProject: {
      type: String,
    },
    TechnologiesUsed: {
      type: String,
      trim: true,
    },
    keyAchievements: {
      type: String,
      trim: true,
    },
    clientName: {
      type: String,
      trim: true,
    },
    issueDate: {
      type: Date,
    },

    // Full And Final Letter
    fnfData: {
      type: Date,
    },
    forMonth: {
      type: String,
    },
    dateofResignation: {
      type: Date,
    },
    dateOfLeaving: {
      type: Date,
    },
    leaveencashment: {
      type: Number,
    },
    paidDays: {
      type: Number,
    },
    totalDayinMonth: {
      type: Number,
    },

    // Confirmation Letter

    effectiveDate: {
      type: Date,
    },
    issueDate: {
      type: Date,
    },
  },
  { timestamp: true },
);

const Document = mongoose.model("Document", documentSchema);
export default Document;
