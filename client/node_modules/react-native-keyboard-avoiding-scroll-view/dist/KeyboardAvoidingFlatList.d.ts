import React from 'react';
import { FlatListProps } from 'react-native';
import { ExternalKeyboardAvoidingContainerProps } from './KeyboardAvoidingContainer';
export interface KeyboardAvoidingFlatListProps<TItem extends {
    id: string;
}> extends FlatListProps<TItem>, ExternalKeyboardAvoidingContainerProps {
}
export declare const KeyboardAvoidingFlatList: (<TItem extends {
    id: string;
}>(props: KeyboardAvoidingFlatListProps<TItem>) => JSX.Element) & Pick<React.ComponentType<KeyboardAvoidingFlatListProps<{
    id: string;
}>>, "propTypes" | "contextTypes" | "defaultProps" | "displayName">;
