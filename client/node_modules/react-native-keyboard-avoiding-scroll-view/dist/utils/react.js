import React from 'react';
// Passthrough function used to type a full-fledged generic React component
// based on a generic function
export function generic(Component) {
    return Component;
}
// Generic version of React.memo
export const genericMemo = (Component, propsAreEqual) => 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
React.memo(Component, propsAreEqual);
