/**
 * External dependencies
 */
import { AnyInterpreter, Sender } from 'xstate';

/**
 * Internal dependencies
 */
import { customizeStoreStateMachineEvents } from '.';
import { ThemeCard } from './intro/types';

export type CustomizeStoreComponent = ( props: {
	parentMachine: AnyInterpreter;
	sendEvent: Sender< customizeStoreStateMachineEvents >;
	context: customizeStoreStateMachineContext;
} ) => React.ReactElement | null;

export type CustomizeStoreComponentMeta = {
	component: CustomizeStoreComponent;
};

export type customizeStoreStateMachineContext = {
	themeConfiguration: Record< string, unknown >; // placeholder for theme configuration until we know what it looks like
	intro: {
		hasErrors: boolean;
		themeCards: ThemeCard[];
		activeTheme: string;
		activeThemeHasMods: boolean;
		customizeStoreTaskCompleted: boolean;
	};
};
