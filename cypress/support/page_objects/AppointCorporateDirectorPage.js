class AppointCorporateDirectorPage {

    enterCompanyName(companyName) {
        cy.get('#corporateName').type(companyName);
        cy.get('#corporate-name-container-continue').click();
    }

    selectTodayAsAppointmentDate() {
        const dayElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(2) > .selector-day";
        const monthElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(3) > .selector-month";
        const yearElement = "#appt-date-container > div.dateselector > .date-selector > :nth-child(4) > .selector-year";

        cy.selectTodaysDate(dayElement, monthElement, yearElement);
        cy.get('#appt-date-container-continue').click();
    }

    enterCompanyAddress(propertyNumber, postcode) {
        cy.get('#service-address-premise').type(propertyNumber);
        cy.get('#service-address-postcode').type(postcode);
        // Look up address
        cy.get('#service-address-postcode-Lookup').click();
        // Accessibility check here
        cy.accessibilityCheck();
        cy.get('#company-address-container-continue').wait(2000).click();
    }

    selectEEAStatus(status) {
        if(status === true) {
            cy.get('#EEAInd-label').click();
            cy.accessibilityCheck();
            // Enter EEA details
            cy.get('#PlaceRegisteredEEA').select('United Kingdom');
            cy.get('#RegistrationNumberEEA').type('00006400');
        } else {
            cy.get('#NONEEAInd-label').click();
            cy.accessibilityCheck();
            // Complete Non EEA details
            // TODO
        }
        cy.get('#eea-container-continue').click();
    }

    consentToAct() {
        cy.get('#socta-statement').check();
        cy.get('#statement-of-consent-to-act-container-continue').click();
    }

}

export default AppointCorporateDirectorPage