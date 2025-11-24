import mongoose from "mongoose";

const membershipSchema = mongoose.Schema({
  userId: { type: String, required: true },
  membershipName: { type: String, required: true },
  membershipPrice: { type: Number, required: true },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
}, { timestamps: true });

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;