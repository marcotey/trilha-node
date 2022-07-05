import Redis from 'ioredis';
import { promisify } from 'util';

const redisClient = new Redis({
    host: 'redis',
    port: 6379,
});

function getRedis(value: string) {
    const syncRedisGet = promisify(redisClient.get).bind(redisClient);

    return syncRedisGet(value);
}

function setRedis(key: string, value: string) {
    const syncRedisSet = promisify(redisClient.set).bind(redisClient);
    return syncRedisSet(key, value);
}

function delRedis(key: string) {
    const syncRedisDel = promisify(redisClient.del).bind(redisClient);
    return syncRedisDel(key);
}

export { redisClient, getRedis, setRedis, delRedis };
