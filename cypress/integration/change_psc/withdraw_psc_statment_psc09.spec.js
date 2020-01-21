import CompanyOverviewPage from '../../support/page_objects/CompanyOverviewPage.js';
import PSCLandingPage from '../../support/page_objects/PSCLandingPage';
import PscStatmentPage from '../../support/page_objects/PscStatementPage';
import AllFormsPage from '../../support/page_objects/AllformsPage'
import PreFilingPSCPage from '../../support/page_objects/PreFilingPSCPage';

const companyOverview = new CompanyOverviewPage();
const pscLandingPage = new PSCLandingPage();
const pscStatementPage = new PscStatmentPage();
const allForms = new AllFormsPage();
const preFilingPage = new PreFilingPSCPage();

describe('Withdrawal of a Person with Significant Control (PSC) statement - PSC09', () => {
    beforeEach(() => {
        cy.log('Appoint a PSC08 statment as a prerequisite');

        companyOverview.selectLinkWithText('Add a PSC notification');
        pscLandingPage.addPscStatement();
        cy.checkPageHeadingIs('Notification of a person with significant control (PSC) statement');
        pscStatementPage.selectReason();
        pscStatementPage.selectReasonContinue();
        pscStatementPage.selectStatement();
        pscStatementPage.selectStatementContinue();
        pscStatementPage.selectTodayAsRegisterEntryDate();
        pscStatementPage.selectRegisterEntryDateContinue();
        cy.checkDisclaimer();
        pscStatementPage.submitStatment();

    })

    it('File successful PSC09', () => {
        companyOverview.selectAllForms();
        allForms.selectPscs();
        allForms.selectPsc09();

        // Check the appointed PSC statement is displayed
        cy.get('tbody tr td:nth-child(1)').invoke('text').then((text) => {
            expect(text.trim()).to.not.eq('There are currently no persons with significant control statements registered.');
        });

        preFilingPage.selectPscStatementToRemove();


    })

})