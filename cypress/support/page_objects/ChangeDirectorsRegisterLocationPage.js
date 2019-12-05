// Constants 
const invalidCharacter = "`";

class ChangeDirectorsRegisterLocationPage {
    

    moveRegistersToSailAddress() {
        
        //Elect move registers to SAIL address and check accesibility of fields
        cy.get('#move-to-sail').click();
        cy.accessibilityCheck();

        cy.get('#addSAILAddress > a').click();
        cy.accessibilityCheck();

        cy.get('#address-manual-link').click();
        
    }

    invalidEntryforSAILAddressFields() {

        cy.get('#ro-address-premise').type(invalidCharacter);
        cy.get('#ro-address-postcode').type(invalidCharacter);
        cy.get('#ro-address-street').type(invalidCharacter);
        cy.get('#ro-address-thoroughfare').type(invalidCharacter);
        cy.get('#ro-address-postTown').type(invalidCharacter);
        cy.get('#ro-address-county').type(invalidCharacter);
        cy.get('#ro-address-poBox').type(invalidCharacter);
        
        cy.get('#button_submit > .button')
        return this;
    
    }

    electToHoldOnPublicRegister() {


        //Select to hold directors register on public register
        cy.get('#elect-to-public').click();
        //Check after clicking the radio button
        cy.accessibilityCheck();

        //Confirm decision by clicking the checkbox
        cy.get('input[type="checkbox"][name="changeRegisterLocationDirectors.registerLocationControl.confirm_ckbox"]').click();
        cy.accessibilityCheck();

        //Submit the form
        cy.get('input[value^="Provide"]').click();
        
    }

    submitMoveDirectorsRegister() {
        return this;
    }


}

export default ChangeDirectorsRegisterLocationPage