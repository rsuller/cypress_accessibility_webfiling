import PreFilingPage from "./generic/PreFilingPage";

class CorporateSecretaryChangeDetailsPreFilingPage extends PreFilingPage {

    changeCorporateSecretaryDetails() {
        cy.get('#ch04-prescreen-start').click();
    }

}

export default CorporateSecretaryChangeDetailsPreFilingPage