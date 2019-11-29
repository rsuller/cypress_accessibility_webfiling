class ChangeCorporateSecretaryDetailsPage {

    changeAddressPremise() {
        cy.get('#company-address-container-change').click().wait(2000);
        cy.accessibilityCheck();

        // Clear premise and enter new entry
        cy.get('#service-address-premise').clear().type('22');

        cy.accessibilityCheck();
        // Update details
        cy.get('#company-address-container-continue').click();
    }

}

export default ChangeCorporateSecretaryDetailsPage