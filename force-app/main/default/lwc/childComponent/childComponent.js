import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    // 1. Add a property to receive message from parent (make it public!)
    @api message;
    
    // 2. Add a method to send a message to the parent using an event
    sendToParent() {
        // Create and dispatch a custom event with a message
        const messageEvent = new CustomEvent('sendmessage', {
            detail: 'Hello from Child Component!'
        });
        this.dispatchEvent(messageEvent);
    }
    
    // 3. Add a public method that parent can call directly
    // It should update the message property with a new value
    @api updateMessage(newMessage) {
        this.message = newMessage;
    }
}