import PreFilingPage from "./generic/PreFilingPage";

class DirectorChangeDetailsPreFilingPage extends PreFilingPage {

    changeDirectorDetails() {
        cy.get('#ch01-prescreen-start').click();
    }

}

export default DirectorChangeDetailsPreFilingPage