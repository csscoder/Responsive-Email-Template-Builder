

# Responsive Email template<br> (extendable, framework)

[![CSSCODER email template](https://raw.githubusercontent.com/csscoderRU/Responsive-Email-Template-Builder/master/screens/Browserstack-logo.svg){:width="200px"}](https://www.browserstack.com)

Some times we need some simple email templates, for example I use it on a good service [Mailgun](https://mailgun.com) for testing contact form, subscribe or other needed features.

Here you can take HTML files with inlined CSS in folder ```/build```.

You can build something else yourself - it's easy. Build system works by SCSS, PUG preprocessors. Base on Gulp.js

Steps use system

Build system use SASS, JADE preprocessors. Base on Gulp.js

[![CSSCODER email template](https://raw.githubusercontent.com/csscoderRU/Responsive-Email-Template-Builder/master/screens/email-template-preview.png)](http://222828.selcdn.com/temp-mail-images/simple-email-template/index-inline.html)

### Example [link](http://222828.selcdn.com/temp-mail-images/simple-email-template/index-inline.html)


Steps use template builder

	// 1 check node version - it's work for "node": ">=10.0.0 =<10.16.0", and install dependencies
    
    npm install
    
    // 2 run dev mode (after that will be run local server http://localhost:7777)
    
    npm run dev
     
    // Build your email templates (with inlined css) you will find it in  "./build" folder
    // before this task you must setup remote url for your images look at this file "./src/config.js" section "urlImageHost"
    
    npm run build
    

Template tested by [emailonacid.com](https://emailonacid.com)
* Outloolk 2000-2016
* Lotus Notes 8 - 9
* Thunderbird
* Apple mail
* Android, gmail.app
* iOS
* popular web clients

Screens folder [link](https://github.com/csscoderRU/Responsive-Email-Template-Builder/tree/master/screens/)
