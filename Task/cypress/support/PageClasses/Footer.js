class Footer{

//Clicking on footer link of brands
    Click(){
cy.contains('Brands').click()
    }


    //clicking HP laptop

    hpLaptop(){
        cy.contains('Hewlett-Packard').click()
    }

    //Verifying HP laptop is visible 

    hpVisibility(){
        cy.contains('HP LP3065').should('be.visible')
    }
}

export default Footer;