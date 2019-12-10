import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage'
import SubmissionConfirmationPage from '../../support/page_objects/SubmissionConfirmationPage'
import AllFormsPage from '../../support/page_objects/AllformsPage'
import ManageRegistersPreFilingPage from '../../support/page_objects/ManageRegistersPreFilingPage'
import ChangeDirectorsUraRegisterLocationPage from '../../support/page_objects/ChangeDirectorsUraRegisterLocationPage'

const companyOverview = new CompanyOverviewPage();
const allFormsPage = new AllFormsPage();
const manageRegistersPreFilingPage = new ManageRegistersPreFilingPage();
const submissionConfirmationPage = new SubmissionConfirmationPage();
const changeDirectorsUraRegisterLocationPage = new ChangeDirectorsUraRegisterLocationPage();

describe('EH02/EW02- Elect to Hold Directors usual residential address information on the Public Register or Registered Office Address', () => {
    it('EH02/EW02 check all screens and submit form', () => {

        // Select form from overview
        companyOverview.selectAllForms();
        allFormsPage.selectChangeRoAndCompanyRecords()
            .selectEh02();
        manageRegistersPreFilingPage.selectDirectorsUraRegister();
        //Elect to hold directors URA register on public record or  hold at the registered office
        changeDirectorsUraRegisterLocationPage.moveDirectorsUraRegister();

        //Confirm submission page displayed and accessibility check
        submissionConfirmationPage.confirmHeadingContains('Confirmation of Submission');
        cy.accessibilityCheck();

    })
})
