import { UIManager } from 'react-native';
export function measureInWindow(node) {
    return new Promise(resolve => {
        UIManager.measureInWindow(node, (screenX, screenY, width, height) => {
            resolve({ screenX, screenY, width, height });
        });
    });
}
