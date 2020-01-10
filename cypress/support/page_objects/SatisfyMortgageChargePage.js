import BasePage from "./generic/BasePage";
import AddressPage from "./generic/Address";

const addressPage = new AddressPage();

class SatisfyMortgageChargePage extends BasePage {

    //Expand all fields and check the accessibility before interacting with the page
    initialAccessibilityCheck() {
        cy.accessibilityCheck();
        return this;
    }

    selectSatisfiedInFull() {
        cy.get('#charge-satisfaction-choice-full').click();
        cy.get('#charge-satisfaction-continue').click();
        return this;
    }

    enterInterestInCharge(interest) {
        cy.get('#InterestInCharge').type(interest);
        cy.get('#charge-interest-continue').click();
        return this;
    }

    enterName(name) {
        cy.get('#Name').type(name);
        cy.get('#charge-your-name-continue').type(name);
        return this;
    }

    clickEnterAddressManually() {
        cy.get('#residential-address-manual-link').click();
        return this;
    }

    enterHomeAddress(propertyNumber, postcode) {
        addressPage.lookUpResidentialAddress(propertyNumber, postcode);
        cy.get('#charge-your-address-continue').wait(3000).click();
        //Accessibility check here due to clicking the lookup button that auto populates fields
        cy.accessibilityCheck();
        return this;
    }

    //Enter invalid character in fields that are not mandatory in order to fire errors
    enterInvalidCharactersToFireErrors(invalidChar) {
        cy.get('#residential-address-postcode').type(invalidChar);
        cy.get('#residential-address-thoroughfare').type(invalidChar);
        cy.get('#residential-address-county').type(invalidChar);
        return this;
    }

    submitChargeSatisfaction() {
        cy.get('input[class="button regular submit positive"]').click();
        return this;
    }

}

export default SatisfyMortgageChargePage