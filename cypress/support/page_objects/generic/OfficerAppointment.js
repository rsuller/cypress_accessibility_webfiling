class OfficerAppointment {

    enterName(title, firstName, middleName, lastName) {
        cy.get('#Title').type(title);
        cy.get('#Forename').type(firstName);
        cy.get('#OtherForenames').type(middleName);
        cy.get('#Surname').type(lastName);
        cy.get('#name-container-continue').click();
    }

    enterNationality(nationality) {
        cy.get('#nationality1').type(nationality);
        cy.get('#nationality-container-continue').click();
    }

    selectROasCorrespondenceAddress() {
        cy.get('#correspondence-address-choice-ro-label').click();
        cy.get('#service-address-sameAsLinkConf').check();
        cy.get('#service-address-container-continue').click();
    }

    enterHomeAddress(propertyNumber, postcode) {
        cy.get('#home-address-choice-manual-label').click();
        cy.get('#residential-address-premise').type(propertyNumber);
        cy.get('#residential-address-postcode').type(postcode);
        cy.get('#residential-address-postcode-Lookup').wait(2000).click();
        cy.get('#residential-address-container-continue').wait(2000).click();
    }

    checkCountryOfResidenceContains(country) {
        cy.get('#CountryOfResidence').should('have.value', country);
        cy.get('#country-of-residence-container-continue').click();
    }

    selectOfficer(elementId, officerName) {
        cy.get(elementId).each(($el) => {
            const text = $el.text();
            cy.log(text);
            if (text.includes(officerName)) {
                cy.wrap($el).should('contain.text', officerName).click();
            }
        })
    }

}
export default OfficerAppointment