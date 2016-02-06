# Responsive Email template<br> (extendable, framework)
Build system use SASS, JADE preprocessors. Base is Gulp.js

[![CSSCODER email template](https://raw.githubusercontent.com/csscoderRU/Responsive-Email-Template-Builder/master/screens/thumb.jpg)](http://dev.csscoder.pro/emails/Responsive-Email-Template-Builder/index.html)

### Example [link](http://dev.csscoder.pro/emails/Responsive-Email-Template-Builder/index.html)

Steps use system

    // 1 install node modules
    
    npm install
    
    // 2 build template
    
    gulp
     
    // 3 load images to server (ftp)
    
    gulp final
    
Also you must create file **.access.json** in root project folder

    {
      "ftp": {
        "host": "test.com(IP)",
        "user": "user-test-FTP",
        "pass": "passwordToFTP",
        "site": "linkToSiteView"
      }
    }

Template tests from Litmus.com
* Outloolk 2000-2016
* Lotus Notes 8 - 9
* Thunderbird
* Apple mail
* Android, gmail.app
* iOS
* popular web clients

Screens folder [link](https://github.com/csscoderRU/Responsive-Email-Template-Builder/tree/master/screens/)