Feature: Ecommerce2 Validations
    @Validation
    @foo
    Scenario Outline: Scenario Outline name : Placing the order
        Given a login to Ecommerce2 application with "<userName>" and "<Password>"
        When Verify error message is dispalyed


        Examples:
            | userName           | Password          |
            | rahul              | Learning@830$3mK2 |
            | rahulshettyacademy | Learning@8        |







