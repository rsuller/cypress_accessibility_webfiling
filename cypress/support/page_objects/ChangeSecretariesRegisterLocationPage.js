// Constants 
const invalidCharacter = "`";

class ChangeSecretariesRegisterLocationPage {

    moveRegistersToSailAddress() {
        //Elect move registers to SAIL address and check accesibility of fields
        cy.get('#move-to-sail').click();
        cy.accessibilityCheck();

        cy.get('#addSAILAddress > a').click();
        cy.accessibilityCheck();

        cy.get('#address-manual-link').click();
        cy.accessibilityCheck();
    }

    invalidEntryforSAILAddressFields() {
        cy.get('#ro-address-premise').type(invalidCharacter);
        cy.get('#ro-address-postcode').type(invalidCharacter);
        cy.get('#ro-address-street').type(invalidCharacter);
        cy.get('#ro-address-thoroughfare').type(invalidCharacter);
        cy.get('#ro-address-postTown').type(invalidCharacter);
        cy.get('#ro-address-county').type(invalidCharacter);
        cy.get('#ro-address-poBox').type(invalidCharacter);
        cy.get('#button_submit > .button').click();
        return this;

    }

    moveSecretariesRegister() {
        //Get the label text describing where the registers are held
        cy.get('#registers-accordion > :nth-child(1)').then(($label) => {

            //Label shows registers are currently on the public register
            //so elect to hold at the registered office (EW01 - Withdraw from public register)
            if ($label.text().includes("Currently provided on the public register")) {
                cy.get('#move-to-ro').click();
                //Check after clicking the radio button
                cy.accessibilityCheck();
            } else {
                //Registers are already at the RO
                //so elect to hold them on the public register (EH01)
                cy.get('#elect-to-public').click();

                //Confirm decision by clicking the checkbox
                cy.get('input[type="checkbox"]').click();

                //Check after clicking the radio button and checkbox
                cy.accessibilityCheck();
            }
            //Submit the form
            cy.get('#button_submit > .button').click();
        })
    }
}
export default ChangeSecretariesRegisterLocationPage