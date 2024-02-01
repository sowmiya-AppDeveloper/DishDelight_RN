import React from 'react';
import { ScrollViewProps } from 'react-native';
import { ExternalKeyboardAvoidingContainerProps } from './KeyboardAvoidingContainer';
export interface KeyboardAvoidingScrollViewProps extends ScrollViewProps, ExternalKeyboardAvoidingContainerProps {
}
export declare const KeyboardAvoidingScrollView: React.FC<KeyboardAvoidingScrollViewProps>;
