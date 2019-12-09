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

    clearSAILAddressFields() {

        cy.get('#ro-address-premise').clear();
        cy.get('#ro-address-postcode').clear();
        cy.get('#ro-address-street').clear();
        cy.get('#ro-address-thoroughfare').clear();
        cy.get('#ro-address-postTown').clear();
        cy.get('#ro-address-county').clear();
        cy.get('#ro-address-poBox').clear();
        return this;

    }

    electToHoldOnPublicRegister() {
        //Select to hold directors register on public register

        cy.get('#registers-accordion > :nth-child(1)').then(($label) => {

        if ($label.text().includes("Currently provided on the public register")) {
        cy.get('#move-to-ro').click();
        //Check after clicking the radio button
        cy.accessibilityCheck();

        } else {
            cy.get('#elect-to-public').click();

            //Check after clicking the radio button
            cy.accessibilityCheck();

            //Confirm decision by clicking the checkbox
            cy.get('input[type="checkbox"][name="changeRegisterLocationDirectors.registerLocationControl.confirm_ckbox"]').click();

        }
        //Submit the form
        cy.get('#button_submit > .button').click();
    })

    }
}
export default ChangeDirectorsRegisterLocationPage