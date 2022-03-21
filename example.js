const Wancak = require('./src')
const jihan = new Wancak('cookie');

// search post by keyword
jihan.search('jihan jahat banget').then(res => {
    console.log(res);
})

// shuffle atau random
jihan.shuffle().then(res => {
    console.log(res);
})

// mencari post berdasarkan section
jihan.section('trending').then(res => {
    console.log(res);
})

// set nfsw on / off
jihan.nsfw(1).then(res => {
    console.log(res);
})