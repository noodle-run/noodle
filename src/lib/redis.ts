import { env } from '@/env';
import Redis from 'ioredis';

export const redis = new Redis(env.REDIS_URL);
