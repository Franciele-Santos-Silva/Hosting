import {model, Scheama } from "mongoose";

const placeSchema = new Scheama({
    owner : { type: Scheama.Types.ObjectId, ref: 'User' },
    title: String,
    city: String,
    photos: [String],
    description: String,
    extras: [String],
    price: Number,
    checkin: String,
    checkout : String,
    guests: Number,
});

export const Place = model('Place', placeSchema);