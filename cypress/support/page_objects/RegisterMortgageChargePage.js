import BasePage from "./generic/BasePage";


class RegisterMortgageChargePage extends BasePage {

    //Expand all fields and check the accessibility before interacting with the page
    initialAccessibilityCheck() {
        this.expandAll();
        //cy.accessibilityCheck();
        return this;
    }

    selectTodayAsChargeCreationDate() {
        const dayElement = "#day-select-1";
        const monthElement = "#month-select-1";
        const yearElement = "#year-select-1";
        cy.selectTodaysDate(dayElement, monthElement, yearElement);
    }

    enterPersonsEntitled(name) {
        cy.get('#personEntitled1').type(name)
    }

    enterChargeDescription(description) {
        cy.get('#chargeDescription').type(description);
    }

    selectOtherChargeYes() {
        cy.get('#charge-fixed-security-yes').click()
    }
    selectFloatingChargeYesAll() {
        cy.get('#charge-coversall-yesall').click();
    }

    selectNegativePledgeYes() {
        cy.get('#charge-negativepledge-yes').click();
    }

    selectTrusteeStatementYes() {
        cy.get('#charge-baretrustee-yes').click();
    }

    fileUpload(fileName) {
        cy.fixture(fileName, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then((fileContent) =>
                cy.get('input[type="file"][id="charge-file-upload"]').upload({
                    fileContent,
                    fileName,
                    mimeType: 'application/pdf',
                    encoding: 'utf8'
                })
        );
        return this;
    }

    deedCertificationYes(certifiedByName) {
        cy.get('#charge-redaction-yes').click();
        cy.get('#certifiedBy').type(certifiedByName)
    }

    authenticationofCertification() {
        //Item 1
        cy.get('#cta-1-question').select("Place of birth");
        cy.get('#cta-1-answer').type("aaa");
        //Item 2
        cy.get('#cta-2-question').select("Telephone number");
        cy.get('#cta-2-answer').type("123");
        //Item 3 
        cy.get('#cta-3-question').select("Passport number");
        cy.get('#cta-3-answer').type("456")
    }

    submitChargeRegistration() {
        cy.contains('Register Charge').click();
        return this;
    }

}

export default RegisterMortgageChargePage