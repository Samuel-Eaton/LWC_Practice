import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message = 'Hello from Parent';
    receivedMessage = '';
    
    // This handles the event from the child
    handleMessageFromChild(event) {
        this.receivedMessage = event.detail
        // Get the message from event.detail and store it in receivedMessage
    }
    
    // This calls a method on the child directly
    updateChildMessage() {
     const childComponent = this.template.querySelector(
         childComponent.updateMessage('Success! Message sent from parent!');
        // Find the child using querySelector and call its "updateMessage" method with a new value
    }
}
