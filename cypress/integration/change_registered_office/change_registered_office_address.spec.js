import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import ChangeRegisteredOfficePage from '../../support/page_objects/ChangeRegisteredOfficePage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'

describe('Change of registered office address', () => {
    it('File successful AD01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const changeRegisteredOffice = new ChangeRegisteredOfficePage();
        const submissionConfirmation = new SubmissionConfirmationPage();

        cy.accessibilityCheck();
        companyOverview.selectLinkWithText('Change address');

        // Alter address - just change premise
        changeRegisteredOffice.lookUpROAddress('100', 'SW1P 1JP');
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