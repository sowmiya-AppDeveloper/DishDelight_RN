import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function reset(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.reset(name, params);
  } else {
  }
}

export const navigateScreen = (name, props) => {
  navigationRef.navigate(name, {...props});
};
