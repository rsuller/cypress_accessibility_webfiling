// Change the location of registers to either the Registered office or the public record.
// These are the registers of directors, secretaries and directors usual residential addresses.
// EW01/02/03 and EH01/02/03 all have common elements, so are contained in this one page object.

// Constants 
const invalidCharacter = "`";

class ChangeLocationOfRegisters {

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
        cy.get('#button_submit > .button').click();
        return this;

    }

    moveARegister() {
        //Get the label text describing where the registers are held
        cy.get('#registers-accordion > :nth-child(1)').then(($label) => {

            //Label shows registers are currently on the public register
            //so elect to hold at the registered office (EW01/02/03 - Withdraw from public register)
            if ($label.text().includes("Currently provided on the public register")) {
                cy.get('#move-to-ro').click();
                //Check after clicking the radio button
                cy.accessibilityCheck();
            } else {
                //Registers are already at the RO
                //so elect to hold them on the public register (EH01/02/03)
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
export default ChangeLocationOfRegisters