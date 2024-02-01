import React from 'react';
import { SectionList } from 'react-native';
import { KeyboardAvoidingContainer, useKeyboardAvoidingContainerProps, } from './KeyboardAvoidingContainer';
import { generic } from './utils/react';
export const KeyboardAvoidingSectionList = generic((props) => {
    const KeyboardAvoidingContainerProps = useKeyboardAvoidingContainerProps(props);
    return (<KeyboardAvoidingContainer {...KeyboardAvoidingContainerProps} ScrollViewComponent={SectionList}/>);
});
