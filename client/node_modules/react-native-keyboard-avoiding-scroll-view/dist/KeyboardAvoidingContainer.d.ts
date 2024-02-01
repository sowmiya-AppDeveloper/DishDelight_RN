import React from 'react';
import { ScrollViewProps, StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { NoInfer } from './utils/utility-types';
export interface ExternalKeyboardAvoidingContainerProps {
    stickyFooter?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
}
export interface InternalKeyboardAvoidingContainerProps<TScrollViewProps extends ScrollViewProps> {
    ScrollViewComponent: React.ComponentType<NoInfer<TScrollViewProps>>;
    scrollViewRef: React.Ref<React.ComponentType<TScrollViewProps>>;
    scrollViewProps: TScrollViewProps;
    stickyFooterRef: React.Ref<View>;
    stickyFooterProps: ViewProps;
}
export interface KeyboardAvoidingContainerProps<TScrollViewProps extends ScrollViewProps> extends ExternalKeyboardAvoidingContainerProps, InternalKeyboardAvoidingContainerProps<TScrollViewProps> {
}
export declare const KeyboardAvoidingContainer: (<TScrollViewProps extends ScrollViewProps>({ stickyFooter, containerStyle, ScrollViewComponent, scrollViewRef, scrollViewProps, stickyFooterRef, stickyFooterProps, }: KeyboardAvoidingContainerProps<TScrollViewProps>) => JSX.Element) & Pick<React.NamedExoticComponent<KeyboardAvoidingContainerProps<ScrollViewProps>>, "displayName">;
export declare function useKeyboardAvoidingContainerProps<TScrollViewProps extends ScrollViewProps>({ stickyFooter, containerStyle, onScroll, contentContainerStyle: contentContainerStyleProp, style: styleProp, ...passthroughScrollViewProps }: TScrollViewProps & ExternalKeyboardAvoidingContainerProps): Omit<KeyboardAvoidingContainerProps<TScrollViewProps>, 'ScrollViewComponent'>;
