class APIutility {

    apicontext: any;
    Loginpayload: string;
    constructor(apicontext: any, Loginpayload: string) {
        this.apicontext = apicontext;
        this.Loginpayload = Loginpayload;


    }

    async gettoken() {

        const responselogin = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.Loginpayload
            });


        if (!responselogin.ok()) {
            throw new Error('Login failed');
        }

        const responseJson = await responselogin.json();
        const token = responseJson.token;
        console.log(token);
        return token;


    }

    async createOrderId(orderPayload: string) {

        let response = { token: String, orderId: String };
        response.token = await this.gettoken();


        const orderResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload, // payload has to be sent in post//we can change paylod details fro payl;oad tab i n console
                headers: {
                    'Authorization': response.token, // we are sending headers in post to create the order, 1.authorisation because it has login token unique to each user and conttent type
                    'Content-Type': 'application/json'
                }
            });


        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        response.orderId = orderId;
        return response;

    }

}

//module.exports = { APIutility };









