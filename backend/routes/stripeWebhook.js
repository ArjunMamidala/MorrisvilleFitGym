// routes/stripeWebhook.js
import express from "express";
import Stripe from "stripe";
import Membership from "../models/Memberships.js";
import User from "../models/User.js";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log("Webhook signature verification failed.", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle successful subscription payment
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Get userId and membershipName from metadata if you set it
    const { userId, membershipName, membershipPrice } = session.metadata;

    const newMembership = new Membership({ userId, membershipName, membershipPrice });
    await newMembership.save();
    console.log(`Saved membership for user ${userId}`);
  }

  res.json({ received: true });
});

export default router;
