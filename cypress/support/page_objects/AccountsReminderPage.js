class AccountsReminderPage {

    doNotFileAccounts() {
        cy.contains('No thanks, I don\'t want to file accounts').click();
    }

}

export default AccountsReminderPage