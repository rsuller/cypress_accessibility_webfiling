import PscAppointment from "./generic/PscAppointment";

class ChangeLegalEntityPsc extends PscAppointment {

    changePscName() {
        cy.get('#corporate-name-container-change').click();
    }

    changeNameCancel() {
        cy.get('#corporate-name-container-cancel').click();
    }

    changePscAddress() {
        cy.get('#service-address-container-change').click();
    }

    expandPscAddress() {
        cy.get('#service-address-manual-link').click();
    }

    cancelPscAddressChange() {
        cy.get('#service-address-container-cancel').click();
    }

    changeEntityDetails() {
        cy.get('#psc-eea-container-change').click();
    }

    cancelEntityDetailsChange() {
        cy.get('#psc-eea-container-cancel').click();
    }

    changeNatureOfControl() {
        cy.get('#nature-of-control-container-change').click();
    }

    cancelNatureOfControlChange() {
        cy.get('#nature-of-control-container-cancel').click();
    }

}

export default ChangeLegalEntityPsc