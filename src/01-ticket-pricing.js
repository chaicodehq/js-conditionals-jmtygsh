/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here

  let weekendSurcharge = 3;
  let childPrice = 8;
  let teenPrice = 12;
  let adultPrice = 15;
  let seniorPrice = 10;

if (typeof age !== "number" || age < 0) {
    return -1;
  } else if (age <= 12) {
    return isWeekend ? weekendSurcharge + childPrice : childPrice;
  } else if (age <= 17) {
    return isWeekend ? weekendSurcharge + teenPrice : teenPrice;
  } else if (age <= 59) {
    return isWeekend ? weekendSurcharge + adultPrice : adultPrice;
  } else {
    return isWeekend ? weekendSurcharge + seniorPrice : seniorPrice;
  }
}
