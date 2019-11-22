class ChangeSecretaryDetailsPage {

    changeMiddleName(middleName) {
        cy.get('#name-container-change').click();
        cy.get('#OtherForenames').clear().type(middleName);
        // Update details
        cy.accessibilityCheck();
        cy.get('#name-container-continue').click();
    }

    changeAddressPremise(propertyNumber) {
        cy.get('#service-address-container-change').click().wait(2000);
        cy.accessibilityCheck();
        cy.get('#correspondence-address-choice-manual-label').click();

        // Enter new premise
        cy.get('#service-address-premise').type(propertyNumber);
        // Use CF14 3UZ postcode - may need to alter this at a later date
        cy.get('#service-address-postcode').type('CF14 3UZ');
        cy.get('#service-address-postcode-Lookup').click().wait(2000);

        cy.accessibilityCheck();
        // Update details
        cy.get('#service-address-container-continue').click();
    }

}

export default ChangeSecretaryDetailsPage