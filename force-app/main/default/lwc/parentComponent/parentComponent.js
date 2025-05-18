import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message = 'Hello from Parent';
    receivedMessage = '';
    
    // This handles the event from the child
    handleMessageFromChild(event) {
        // Get the message from event.detail and store it in receivedMessage
        this.receivedMessage = event.detail;
    }
    
    // This calls a method on the child directly
    updateChildMessage() {
        // Find the child using querySelector and call its "updateMessage" method with a new value
        const childComponent = this.template.querySelector('c-child-component');
        if (childComponent) {
            childComponent.updateMessage('Updated message from parent!');
        }
    }
}