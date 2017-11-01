# Responsive Email template<br> (extendable, framework)
Build system use SASS, JADE preprocessors. Base on Gulp.js

[![CSSCODER email template](https://raw.githubusercontent.com/csscoderRU/Responsive-Email-Template-Builder/master/screens/thumb.jpg)](http://dev.csscoder.pro/emails/Responsive-Email-Template-Builder/index.html)

### Example [link](http://dev.csscoder.pro/emails/Responsive-Email-Template-Builder/index.html)

Steps use system

    // 1 install node modules
    
    npm install
    
    // 2 build template
    
    gulp
     
    // 3 load images to server (ftp)
    
    gulp final
    
Also you must rename  file **access-ftp-Example.json** to **access-ftp.json** like this

    {
      "host": "test.com(IP)",
      "port": 22,
      "user": "user-test-FTP",
      "pass": "passwordToSFTP",
      "site": "linkToSiteView",
      "rootPath": "ROOT_PATH_ON_SERVER"
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