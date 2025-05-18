import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message = 'Hello from Parent';
    receivedMessage = '';
    
    // This handles the event from the child
    handleMessageFromChild(event) {
        // COMPLETE THIS METHOD
        // Get the message from event.detail and store it in receivedMessage
    }
    
    // This calls a method on the child directly
    updateChildMessage() {
        // COMPLETE THIS METHOD
        // Find the child using querySelector and call its "updateMessage" method with a new value
    }
}