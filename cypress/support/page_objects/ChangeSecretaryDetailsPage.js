import AddressPage from "./generic/Address";

class ChangeSecretaryDetailsPage extends AddressPage {


    changeMiddleName(middleName) {
        cy.get('#name-container-change').click();
        cy.get('#OtherForenames').clear().type(middleName);
        // Update details
        cy.accessibilityCheck();
        cy.get('#name-container-continue').click();
    }

    changeAddressPremise(propertyNumber, postcode) {
        cy.get('#service-address-container-change').click().wait(2000);
        cy.accessibilityCheck();
        cy.get('#correspondence-address-choice-manual-label').click();

        // Enter new premise
        this.lookUpServiceAddress(propertyNumber, postcode);

        cy.accessibilityCheck();
    }

}

export default ChangeSecretaryDetailsPage