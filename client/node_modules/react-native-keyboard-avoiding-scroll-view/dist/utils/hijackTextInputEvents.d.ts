interface TextInputEvents {
    textInputDidFocus: (focusedTextInputId: number) => void;
    textInputDidBlur: (focusedTextInputId: number) => void;
}
export declare function hijackTextInputEvents(): import("./EventEmitter").EventEmitterInstance<TextInputEvents>;
export {};
