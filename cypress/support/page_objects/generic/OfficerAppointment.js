import BasePage from "./BasePage";

// Constants
const invalidCharacter = "`";

class OfficerAppointment extends BasePage {

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

    expandCorrespondenceDetails() {
        cy.get('#correspondence-address-choice-manual-label').click();
        cy.contains('Enter address manually').wait(2000).click();
    }

    expandHomeAddressDetails() {
        cy.get('#home-address-choice-manual-label').click();
        cy.get('#residential-address-manual-link').wait(2000).click();
    }

    invalidEntryForNameFields() {
        cy.get('#Title').type(invalidCharacter);
        cy.get('#OtherForenames').type(invalidCharacter);
        return this;
    }

    enterInvalidCharacterForCorrespondenceAddress() {
        cy.get('#service-address-postcode').type(invalidCharacter);
        cy.get('#service-address-thoroughfare').type(invalidCharacter);
        cy.get('#service-address-county').type(invalidCharacter);
        cy.get('#service-address-careOfName').type(invalidCharacter);
        cy.get('#service-address-poBox').type(invalidCharacter);
        return this;
    }

    enterInvalidCharacterForHomeAddress() {
        cy.get('#residential-address-postcode').type(invalidCharacter);
        cy.get('#residential-address-thoroughfare').type(invalidCharacter);
        cy.get('#residential-address-county').type(invalidCharacter);
        return this;
    }

}
export default OfficerAppointment