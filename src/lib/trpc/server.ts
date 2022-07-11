// $lib/trpcServer.ts
import type { inferAsyncReturnType } from '@trpc/server';
import * as trpc from '@trpc/server';
import { messageRouter } from './message.router';
import { userRouter } from './user.router';
import trpcTransformer from 'trpc-transformer';
import { channelRouter } from './channel.router';

// optional
export const createContext = () => {
	// ...
	return {
		/** context data */
	};
};

// optional
export const responseMeta = () => {
	// ...
	return {
		// { headers: ... }
	};
};

export const router = trpc
	.router<inferAsyncReturnType<typeof createContext>>()
	.transformer(trpcTransformer)
	.merge(messageRouter)
	.merge(userRouter)
	.merge(channelRouter);

export type Router = typeof router;
