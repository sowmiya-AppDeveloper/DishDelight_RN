import React from 'react';
import { SectionListProps } from 'react-native';
import { ExternalKeyboardAvoidingContainerProps } from './KeyboardAvoidingContainer';
export interface KeyboardAvoidingSectionListProps<TItem extends {
    id: string;
}> extends SectionListProps<TItem>, ExternalKeyboardAvoidingContainerProps {
}
export declare const KeyboardAvoidingSectionList: (<TItem extends {
    id: string;
}>(props: KeyboardAvoidingSectionListProps<TItem>) => JSX.Element) & Pick<React.ComponentType<KeyboardAvoidingSectionListProps<{
    id: string;
}>>, "propTypes" | "contextTypes" | "defaultProps" | "displayName">;
