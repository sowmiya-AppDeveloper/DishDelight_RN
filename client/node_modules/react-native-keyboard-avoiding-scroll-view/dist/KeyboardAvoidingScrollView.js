import React from 'react';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingContainer, useKeyboardAvoidingContainerProps, } from './KeyboardAvoidingContainer';
export const KeyboardAvoidingScrollView = props => {
    const KeyboardAvoidingContainerProps = useKeyboardAvoidingContainerProps(props);
    return (<KeyboardAvoidingContainer {...KeyboardAvoidingContainerProps} ScrollViewComponent={ScrollView}/>);
};
