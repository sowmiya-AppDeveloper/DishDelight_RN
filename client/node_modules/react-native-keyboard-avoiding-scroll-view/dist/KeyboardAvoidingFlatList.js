import React from 'react';
import { FlatList } from 'react-native';
import { KeyboardAvoidingContainer, useKeyboardAvoidingContainerProps, } from './KeyboardAvoidingContainer';
import { generic } from './utils/react';
export const KeyboardAvoidingFlatList = generic((props) => {
    const KeyboardAvoidingContainerProps = useKeyboardAvoidingContainerProps(props);
    return (<KeyboardAvoidingContainer {...KeyboardAvoidingContainerProps} ScrollViewComponent={FlatList}/>);
});
