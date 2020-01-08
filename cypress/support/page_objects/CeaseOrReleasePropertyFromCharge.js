import BasePage from "./generic/BasePage";


class CeaseOrReleasePropertyFromCharge extends BasePage {

    //Check the accessibility before interacting with the page
    initialAccessibilityCheck() {
        cy.accessibilityCheck();
        return this;
    }

    selectAllPropertyAsExtentOfRelease() {
        cy.get('#charge-fullpart-choice-full').click();
        cy.get('#charge-fullpart-continue').click();
        return this;
    }

    selectReleasedFromChargeForCeaseOrRelease() {
        cy.get('#charge-ceaserelease-choice-release').click();
        cy.get('#charge-ceaserelease-continue').click();
        return this;
    }

    enterInterestInCharge(interest) {
        cy.get('#InterestInCharge').type(interest);
        cy.get('#charge-interest-continue').click();
        return this;
    }

    enterName(name) {
        cy.get('#Name').type(name);
        cy.get('#charge-your-name-continue').click();
        return this;
    }

    clickEnterAddressManually() {
        cy.get('#residential-address-manual-link').click();
        return this;
    }

    enterHomeAddress(propertyNumber, postcode) {
        cy.get('#residential-address-premise').type(propertyNumber);
        cy.get('#residential-address-postcode').type(postcode);
        //Click lookup postcode and wait for the address to be populated
        cy.get('#residential-address-postcode-Lookup').wait(3000).click();
        cy.get('#charge-your-address-continue').wait(3000).click();
        return this;
    }

    //Enter invalid character in fields that are not mandatory in order to fire errors
    enterInvalidCharactersToFireErrors(invalidChar) {
        cy.get('#residential-address-postcode').type(invalidChar);
        cy.get('#residential-address-thoroughfare').type(invalidChar);
        cy.get('#residential-address-county').type(invalidChar);
        return this;
    }

    submitCeaseOrReleaseProperty() {
        cy.get('input[class="button regular submit positive"]').click();
        return this;
    }

}

export default CeaseOrReleasePropertyFromCharge