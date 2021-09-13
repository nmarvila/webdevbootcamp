// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('RESPONSE, WAITING TO PARSE...', res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('DATA PARSED...', data);
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('OH NO! ERROR!', e);
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log('ERROR!', err);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    } catch (e) {
        console.log('ERROR!', e);
    }
}