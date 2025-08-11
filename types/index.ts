import { ReactNode } from "react";

/
 * User interface representing a guest at luxery dark AirBNB.
 * @interface Guest
 * @property {string} id - Unique identifier for the guest.
 * @property {string} name - Full name of the guest.
 * @property {string} email - Email address of the guest.
 * @property {string} phoneNumber - Phone number of the guest.
 * @property {string} profilePicture - URL to the guest's profile picture.
 */
export interface Guest {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    profilePicture: string;
}

/
 * Interface representing a property available at luxery dark AirBNB.
 * @interface Property
 * @property {string} id - Unique identifier for the property.
 * @property {string} title - Title of the property listing.
 * @property {string} description - Detailed description of the property.
 * @property {number} pricePerNight - Price per night in USD.
 * @property {string[]} amenities - List of amenities available in the property.
 * @property {string} location - Geographical location of the property.
 * @property {boolean} isAvailable - Availability status of the property.
 */
export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    amenities: string[];
    location: string;
    isAvailable: boolean;
}

/
 * Booking interface representing a booking made at luxery dark AirBNB.
 * @interface Booking
 * @property {string} id - Unique identifier for the booking.
 * @property {Guest} guest - The guest who made the booking.
 * @property {Property} property - The property that has been booked.
 * @property {Date} checkInDate - Check-in date for the booking.
 * @property {Date} checkOutDate - Check-out date for the booking.
 * @property {number} totalAmount - Total amount for the booking in USD.
 */
export interface Booking {
    id: string;
    guest: Guest;
    property: Property;
    checkInDate: Date;
    checkOutDate: Date;
    totalAmount: number;
}

/
 * Interface representing the overall application state for luxery dark AirBNB.
 * @interface AppState
 * @property {Property[]} properties - List of properties available at luxery dark AirBNB.
 * @property {Booking[]} bookings - List of current bookings made at luxery dark AirBNB.
 * @property {Guest | null} currentUser - Currently logged-in guest, or null if not logged in.
 */
export interface AppState {
    properties: Property[];
    bookings: Booking[];
    currentUser: Guest | null;
}

/
 * Function to calculate the total price for a given booking.
 * @param {Booking} booking - The booking for which to calculate the total price.
 * @returns {number} - The total price for the booking in USD.
 */
export const calculateTotalPrice = (booking: Booking): number => {
    const nights = (booking.checkOutDate.getTime() - booking.checkInDate.getTime()) / (1000  3600  24);
    return nights * booking.property.pricePerNight;
};

/
 * Function to check property availability based on booking dates.
 * @param {Property} property - The property to check.
 * @param {Date} checkInDate - The check-in date to check.
 * @param {Date} checkOutDate - The check-out date to check.
 * @returns {boolean} - True if the property is available, false otherwise.
 */
export const isPropertyAvailable = (property: Property, checkInDate: Date, checkOutDate: Date): boolean => {
    // Logic to check availability can be added here
    return property.isAvailable;
};