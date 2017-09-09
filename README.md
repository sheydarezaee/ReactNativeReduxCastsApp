# ReactNativeReduxCastsApp
React Native Redux project

- update xcode in app store
- brew update
- brew install node
- node -v
- brew install watchamn
- npm install -g react-native-cli

generate first project:
- react-native init --version 0.47.0 albums
to run application on ios:
- change to the project directory
- react-native run-ios
  (this will build our project and launch the ios simulator and show it) 

set-up eslint:
* editor specific settings: install linter and then eslint which is parsing JS code, and creates and shows errors to the user accordingly, you install these two one time and it works for all projects
* project specific settings/ configuration:
you can download and install some pre-set configs

installation of eslint on sublime3:
(1) - npm install -g eslint
(2) = to intsall package control, go to packagecontrol.io/installation, copy the big chunck of code for sublime text 3 on terminal 

import urllib.request,os,hashlib; h = 'df21e130d211cfc94d9b0905775a7c0f' + '1e3d39e33b79698005270310898eea76'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

and paste it to the sublime console, meaning click view on the top, and click show console

(3) to install a config with npm, which is for the specific project settings, for that:
   - npm install --save-dev eslint-config-rallycoding

   this will install that configuration, but we also have to tell sublime to use those set of rules. we need to create a new config file inside of the root project directory which is albums here, so create a file called .eslintrc
   and in that file type:
   {
     "extends": "rallycoding"
   }

 (4) now we have to install linter and eslint to sublime text:
 hit command+shift+p opens up command pallete, search for install --> click on Package Control: Install Package 
 install these two: 
 SublimeLinter ---> this was not found
 SublimeLinter-contrib-eslint ----> this was not found neither

 

