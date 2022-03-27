# 1cak-scraper
**1cak.com Un-Official Api Wrapper**

simple unofficial api wrapper for [1cak.com](https://1cak.com "wancuk jancoookkk")
**NSFW Post & GIF Video is now supported :)**
## 👨‍🍳 Install

`npm install github:Gimenz/1cak`

## 📔 Example
```js
const Wancak = require('1cak-scraper')

// support nsfw content, if you provide cookie 
const jancok = new Wancak('cookie');

(async () => {
    try {
	
        // search posts
        const search = await jancok.search('peline di mik');
        console.log(search);

        // random post
        const random = await jancok.shuffle();
        console.log(random);

        // find post by section
        const section = await jancok.section('legendary');
        console.log(section);

        //and manymore 
    } catch (error) {
        console.log(error);
    }
})()
```
## 🌳 Dependency
- [Axios](https://npmjs.com/axios)

## 🥚 Credits
-  [1cak.com](https://1cak.com "1cak.com")

🧗‍♀️ Contribution(s) are welcome!