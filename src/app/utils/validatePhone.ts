export const validatePhone = (phone: string): boolean => {
    const phoneWithDashesRegex = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
    const phoneWithoutDashesRegex = /^\+375 \(\d{2}\) \d{3} \d{2} \d{2}$/;
    const phoneWithoutDashesAndSpacingRegex = /^\+375 \(\d{2}\) \d{3}\d{2}\d{2}$/;

    return phoneWithDashesRegex.test(phone) || phoneWithoutDashesRegex.test(phone) || phoneWithoutDashesAndSpacingRegex.test(phone);
};