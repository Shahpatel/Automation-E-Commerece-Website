
import HomePage from "../../../support/PageClasses/HomePage";
import CheckOut from "../../../support/PageClasses/CheckOut";
import Register from "../../../support/PageClasses/Register";
import Footer from "../../../support/PageClasses/Footer";


describe('POM', () => {
   const search=new HomePage();
   const checkout=new CheckOut();
   const register=new Register();

   const brands=new Footer();

   it('Add to Cart', () => {

      //Opening website 
    search.Enterurl();

    //Input product in the search bar
    search.EnterProductName();
 
    search.ClickOnSearch();

    //Clicking on the search bar button
    search.AddToCart();
         
    //clicking checkout button
    checkout.clickCheckOut()
     cy.wait(2000)

     //clicking checkout continue button 
    checkout.continue1();

    //Register
    cy.wait(2000)
    register.personalDetails();

    //new password

    register.password();

    register.address();

     //adding delivery details
    register.deliveryDetails();
    register.deliveryMethod();

    cy.wait(2000)

    //filling payment details
    register.paymentCheckBox();

    cy.wait(2000)

    //checking order is successfully confirm or not
    register.orderConfirm();
     

    //clicking my account drop menu
    search.MyAccount();
     
    brands.Click();
     
    //clicking on footer brands 
    brands.hpLaptop();

    //Verifying Visibilty of HP laptop 

    brands.hpVisibility();
    search.AddToCart();

    cy.wait(2000)

    //again reusing methods
    checkout.clickCheckOut();
    cy.wait(2000)
    register.billingDetails();
    register.deliveryDetails();
    register.deliveryMethod();
    register.paymentCheckBox();
    register.orderConfirm();
   });

});