'use strict';

function cacheEl(fn) {
    const cache = [];

    return function () {
        const arrayArg = Array.from(arguments);
        const arrayArgJson = JSON.stringify(arrayArg);

        for (let i = 0; i < cache.length; i++) {

            if (JSON.stringify(cache[i].arrayArg) === arrayArgJson) {
                return cache[i].result;
            }

        }

        const result = fn.apply(this, arrayArg);

        const obj = {
            result,
            arrayArg
        };

        cache.push(obj);

        if (cache.length > 10) {
            cache.shift();
        }

        return result;

    }
}








