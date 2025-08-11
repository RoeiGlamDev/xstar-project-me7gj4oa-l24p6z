export const BRAND_NAME = "luxery dark AirBNB";

export const COLORS = {
    PRIMARY: "#FF69B4", // Pink
    SECONDARY: "#000000", // Black
};

export const CONFIG = {
    APP_TITLE: ${BRAND_NAME} - Luxurious Dark Accommodations,
    TAGLINE: "Experience elegance in the heart of technology.",
    CONTACT_EMAIL: "support@luxerydarkairbnb.com",
    PHONE_NUMBER: "+1-800-555-0199",
    SOCIAL_MEDIA: {
        TWITTER: "https://twitter.com/luxerydarkairbnb",
        INSTAGRAM: "https://instagram.com/luxerydarkairbnb",
        FACEBOOK: "https://facebook.com/luxerydarkairbnb",
    },
};

/
 * Interface representing a property listing in luxery dark AirBNB.
 */
export interface Property {
    id: string;
    name: string;
    description: string;
    pricePerNight: number;
    location: string;
    amenities: string[];
    imageUrl: string;
}

/
 * Interface representing the user profile for luxery dark AirBNB.
 */
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    bookings: string[];
}

/
 * Function to calculate the total price for a stay at a property.
 * @param nights - Number of nights for the stay.
 * @param pricePerNight - Price per night for the property.
 * @returns Total price for the stay.
 */
export const calculateTotalPrice = (nights: number, pricePerNight: number): number => {
    return nights * pricePerNight;
};