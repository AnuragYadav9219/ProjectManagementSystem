import api from "@/config/api";

export const createPayment = ({ planType }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.post(`/payments/${planType}`);

            if (data.payment_link_url) {
                window.location.href = data.payment_link_url;
            }
        } catch (error) {
            console.log("Payment error:", error);
        }
    };
};
