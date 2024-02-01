import { EventEmitterListener, EmitterSubscription as EventEmitterSubscription, EventEmitter as WeaklyTypedEventEmitterInstance } from 'react-native';
export declare type ListenerType<T> = [T] extends [(...args: infer U) => any] ? U : [T] extends [void] ? [] : [T];
export interface EventEmitterInstance<TEvents> extends Omit<WeaklyTypedEventEmitterInstance, 'addListener' | 'once' | 'removeAllListeners' | 'listeners' | 'emit' | 'removeListener'> {
    addListener<K extends keyof TEvents>(eventType: K, listener: (...args: ListenerType<TEvents[K]>) => void, context?: unknown): EventEmitterSubscription;
    once<K extends keyof TEvents>(eventType: K, listener: (...args: ListenerType<TEvents[K]>) => void, context?: unknown): EventEmitterSubscription;
    removeAllListeners(eventType: keyof TEvents): void;
    listeners(eventType: keyof TEvents): EventEmitterSubscription[];
    emit<K extends keyof TEvents>(eventType: K, ...params: ListenerType<TEvents[K]>): void;
    removeListener<K extends keyof TEvents>(eventType: K, listener: (...args: ListenerType<TEvents[K]>) => void): void;
}
export declare type EventEmitter<TEvents> = EventEmitterInstance<TEvents>;
export declare type EventEmitterListener = EventEmitterListener;
export declare const EventEmitter: new <TEvents>() => EventEmitterInstance<TEvents>;
