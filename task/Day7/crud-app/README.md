Open terminal in vs-code.

1. Run command npm init
   it will take a while to process, click on yes. & it will create package.json file in your folder

2. Run command npm install --save json-server
   it will take a while to process & it will add node_modulesfolder & package-lock.json file.

note⚠️: In case if you want to push folder into Github then run command below

git init
touch .gitignore and then open .gitignore file which just created in write node_modules in it. so, it will ignore that folder to push into Github.

3. run command in terminal touch database.json

4. Go to package.json file
   In script, add "start": "json-server --watch database.json"

5. Run command npm run start
   it will load database.json.
   copy-paste localhost:'https://book-wboi.onrender.com/users' url from there run it your chrome browser.

6. Open new terminal in VS-Code ,run path folder and then run "npm run json-server"
