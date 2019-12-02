import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeDirectorsRegisterLocationPage from '../../support/page_objects/ChangeDirectorsRegisterLocationPage'

describe('Change of registered office address', () => {
    it('File successful AD01', () => {
        // Go to change registered office address
        const companyOverview = new CompanyOverviewPage();
        const allFormsPage = new AllFormsPage();
        const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
        const submissionConfirmationPage = new SubmissionConfirmationPage();
        const changeDirectorsRegisterLocationPage = new ChangeDirectorsRegisterLocationPage()

        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
        .selectEh01();
        
        //Check the manage registers page
        cy.accessibilityCheck();

        manageRegistersPreFilingPage.selectDirectorsRegister();

        //Check the manage Director's registers page
        cy.accessibilityCheck();

        //Method to hold directors register on public record
        changeDirectorsRegisterLocationPage.electToHoldOnPublicRegister();

    })

})