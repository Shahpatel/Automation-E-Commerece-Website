class HomePage{

    Enterurl(){
        //this link open the website 
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
    }

    EnterProductName(){
        //Trying to search 
        cy.get('[placeholder="Search"]').type('hp')
    }
         //clicking on search icon
    ClickOnSearch(){
        cy.get('[class="btn btn-default btn-lg"]').click()
    }

    AddToCart(){
        cy.xpath('(//button//i[@class="fa fa-shopping-cart"])[2]').click()
        cy.get('[id="button-cart"]').click()

        //click on link shopping cart on success msg

        cy.contains('shopping cart').click()
    }

    MyAccount(){
        cy.get('[title="My Account"]').click()

        cy.contains('My Account').click()
    }
}


export default HomePage;