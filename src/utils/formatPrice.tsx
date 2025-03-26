export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("ro-RO", {
        style: "currency",
        currency: "RON"
    }).format(amount);
};