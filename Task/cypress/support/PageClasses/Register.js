class Register{

    personalDetails(){


        //Entering FirstName
        cy.get('#input-payment-firstname').type('Shahid')
        

        //Entering LastName
        cy.get('#input-payment-lastname').type("Patel")

        //Entering Email
        cy.get('#input-payment-email').type('shah4822pat00el86440878@gmail.com')
        
        //Entering Telephone number
        cy.get('[id="input-payment-telephone"]').type('9689818230')
    }

    password(){

        //entering password 
        const pass='8182sAP@'
        cy.get('#input-payment-password').type(pass)
        //confirming password 
        cy.get('[id="input-payment-confirm"]').type(pass)
    }

    address(){
        //company address
        cy.get('#input-payment-company').type('Masai')
        
        //address1
        cy.get('#input-payment-address-1').type('MG road')

        //city
        cy.get('#input-payment-city').type('Banglore')

        //postcode
        cy.get('#input-payment-postcode').type('4322')

        //using static dropdown for country

        cy.get('[id="input-payment-country"]').select('India')

        //using static dropdown for State
        cy.get('[id="input-payment-zone"]').select('Maharashtra')

        //check term and condition

        cy.get('[name="agree"]').check()
        cy.get('#button-register').click({force:true})
    }

//Step2:
        //Billing Details

        billingDetails(){
            cy.get('[id="button-payment-address"]').click()
            cy.wait(2000)
            
        }
        //click on continue
       
       
          
 //Step 3:
          //clicking continue for Delivery Details

        deliveryDetails(){
        cy.get('#button-shipping-address').click()
       
       }
//Step4:
         //  Creating  Delivery Method 
        //clicking continue Delivery Details
     
        deliveryMethod(){
            cy.xpath('//input[@id="button-shipping-method"]').click()
        }
     

       
         
//Step 5: PaymentMethod 
         paymentCheckBox(){

           //Marking Payment Term and Condition 
           cy.get('[name="agree"]').check()

           //clicking continue

           cy.xpath('//input[@id="button-payment-method"]').click()
       }
         //Step 6: Confirming Order 
    orderConfirm(){
        cy.xpath('//input[@id="button-confirm"]').click()

       cy.get('[id="content"]').contains('Your order has been successfully processed!').should('be.visible')
    }
}

export default Register;