// @ts-ignore: internal module
import TextInputState from 'react-native/Libraries/Components/TextInput/TextInputState';
import { EventEmitter } from './EventEmitter';
let textInputEvents = null;
export function hijackTextInputEvents() {
    if (textInputEvents)
        return textInputEvents;
    textInputEvents = new EventEmitter();
    const originalFocusTextInput = TextInputState.focusTextInput.bind(TextInputState);
    const originalBlurTextInput = TextInputState.blurTextInput.bind(TextInputState);
    let currentlyFocusedTextInputId = null;
    TextInputState.focusTextInput = (focusedTextInputId) => {
        originalFocusTextInput(focusedTextInputId);
        if (currentlyFocusedTextInputId !== focusedTextInputId &&
            focusedTextInputId !== null) {
            currentlyFocusedTextInputId = focusedTextInputId;
            if (textInputEvents) {
                textInputEvents.emit('textInputDidFocus', focusedTextInputId);
            }
        }
    };
    TextInputState.blurTextInput = (focusedTextInputId) => {
        originalBlurTextInput(focusedTextInputId);
        if (currentlyFocusedTextInputId === focusedTextInputId &&
            focusedTextInputId !== null) {
            currentlyFocusedTextInputId = null;
            if (textInputEvents) {
                textInputEvents.emit('textInputDidBlur', focusedTextInputId);
            }
        }
    };
    return textInputEvents;
}
