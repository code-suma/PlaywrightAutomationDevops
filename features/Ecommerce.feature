Feature: Ecommerce Validations
    @Regression
    Scenario: Placing the order
        Given a login to Ecommerce application with "sumag848@gmail.com" and "Alpha@123"
        When Add "ZARA COAT 3" to cart
        Then Verify "ZARA COAT 3" is displayed in the cart page
        When Enter valid details and place the order
        Then Verify order is pesent in the orderHistory


    @Validation

    Scenario Outline: Scenario Outline name : Placing the order
        Given a login to Ecommerce2 application with "<userName>" and "<Password>"
        When Verify error message is dispalyed


        Examples:
            | userName           | Password          |
            | rahul              | Learning@830$3mK2 |
            | rahulshettyacademy | Learning@8        |