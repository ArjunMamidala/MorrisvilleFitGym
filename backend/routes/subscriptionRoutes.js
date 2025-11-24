// routes/subscriptionRoutes.js
import express from "express";
import Membership from "../models/Memberships.js"; // Your membership model
import User from "../models/User.js"; // Your user model

const router = express.Router();

// Route to handle membership subscription
router.post("/create-checkout-session", async (req, res) => {
  const { userId, membershipName, membershipPrice } = req.body;
  const stripe = req.app.get('stripe');

  try {
    const existing = await Membership.findOne({userId, status: "active"});
    if(existing) {
      if (existing.membershipName === membershipName) {
        return res.status(400).json({ error: "User already subscribed to this membership" });
      }
    }

    //Creating Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: membershipName,
            },
            unit_amount: parseInt(membershipPrice) * 100,
            recurring: {interval: 'month'}
          },
          quantity: 1, 
        },
      ],
      mode: 'subscription',
      metadata: {
        userId, 
        membershipName, 
        membershipPrice
      },
      success_url: 'http://localhost:5173/memberships?success=true',
      cancel_url: 'http://localhost:5173/memberships?canceled=true',
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: "There was an error creating the checkout session." });
  }

});

export default router;
