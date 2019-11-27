class CompanySignInPage {

    enterCompanyDetails(companyNumber, authcode) {
        cy.get("input[id='companySignInPage.coNum']").type(companyNumber);
        cy.get("input[id='companySignInPage.authCode']").type(authcode);
        cy.get('.button').click();
    }

}
export default CompanySignInPage