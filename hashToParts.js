var SHA256 = require("crypto-js/sha256");

const parts = {
    bd: {
        body: 'normal-body',
        eyes: 'bd-eyes',
        hair: 'bd-hair',
        head: 'normal-head',
        mounth: 'normal-mounth',
    },
    hg: {
        body: 'coding-body',
        eyes: 'hg-eyes',
        hair: 'hg-hair',
        head: 'normal-head',
        mounth: 'normal-mounth',
    },
    pg: {
        body: 'normal-body',
        eyes: 'pg-eyes',
        hair: 'pg-hair',
        head: 'pg-head',
        mounth: 'pg-mounth',
    },
    rg: {
        body: 'rg-body',
        eyes: 'rg-eyes',
        hair: 'rg-hair',
        head: 'normal-head',
        mounth: 'rg-mounth',
    },
    sg: {
        body: 'sg-body',
        eyes: 'sg-eyes',
        hair: 'sg-hair',
        head: 'sg-head',
        mounth: 'sg-mounth',
    },
}

const hashPartMapper = {
    00: 'bd',
    01: 'hg',
    02: 'pg',
    03: 'rg',
    04: 'sg',
}

const hashToParts = (text) => {
    const sha256Hash = SHA256(text).toString();
    const sha256Numbers = sha256Hash.toString().replace(/\D/g,'');
    const numbersParts = sha256Numbers.slice(0, 10)
    const numbersPartsMapper = {
        body: hashPartMapper[Math.round((50/100) * `${numbersParts[0]}${numbersParts[1]}`) % 4],
        eyes: hashPartMapper[Math.round((50/100) * `${numbersParts[2]}${numbersParts[3]}`) % 4],
        hair: hashPartMapper[Math.round((50/100) * `${numbersParts[4]}${numbersParts[5]}`) % 4],
        head: hashPartMapper[Math.round((50/100) * `${numbersParts[6]}${numbersParts[7]}`) % 4],
        mounth: hashPartMapper[Math.round((50/100) * `${numbersParts[8]}${numbersParts[9]}`) % 4],
    }


    return {
        body: parts[numbersPartsMapper.body].body,
        eyes: parts[numbersPartsMapper.eyes].eyes,
        hair: parts[numbersPartsMapper.hair].hair,
        head: parts[numbersPartsMapper.head].head,
        mounth: parts[numbersPartsMapper.mounth].mounth,
    }
}

module.exports = hashToParts