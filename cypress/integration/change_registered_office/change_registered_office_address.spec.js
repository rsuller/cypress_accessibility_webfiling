import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import CompanySignInPage from '../../support/page_objects/CompanySignInPage'
import ChangeRegisteredOfficePage from '../../support/page_objects/ChangeRegisteredOfficePage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'

beforeEach(()=> {
    // Sign into Webfiling
    cy.signIntoWebfiling();

    // Sign into company to file for
    const companySignIn = new CompanySignInPage();
    cy.accessibilityCheck();
    companySignIn.enterCompanyDetails('00006400', '222222'); 
}) 

describe('Change of registered office address', () => {
    it('File successful AD01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const changeRegisteredOffice = new ChangeRegisteredOfficePage();
        const submissionConfirmation = new SubmissionConfirmationPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Change address');

        // Alter address - just change premise
        changeRegisteredOffice.changeAddress('100', 'SW1P 1JP');
        cy.accessibilityCheck();
        
        // Check address is correct
        changeRegisteredOffice.checkAddressByStreetName('ROCHESTER ROW')
        .checkAddressByTown('LONDON')
        .checkCountryValue('GB-ENG')
        .confirmChangeOfAddress();
        
        // Confirm submission
        submissionConfirmation.confirmHeadingContains('Confirmation of Submission')
    })

})