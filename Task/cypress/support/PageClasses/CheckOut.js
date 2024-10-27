class CheckOut{
  clickCheckOut(){

    cy.contains('Checkout').click()
  }

  //clicking continue
  
  continue1(){
    cy.get('#button-account').click({force:true})
  }

}

export default CheckOut;