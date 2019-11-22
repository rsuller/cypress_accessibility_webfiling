import PreFilingPage from "./generic/PreFilingPage"

class SecretaryChangeDetailsPreFilingPage extends PreFilingPage {

    changeSecretaryDetails() {
        cy.get('#ch03-prescreen-start').click();
    }

}

export default SecretaryChangeDetailsPreFilingPage