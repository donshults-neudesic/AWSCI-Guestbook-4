#!/usr/bin/env groovy
node('master'){
    //sh "export PATH="/.nvm/versions/node/v6.11.1/bin:$PATH"
    try{
       // PATH = "/.nvm/versions/node/v6.11.1/bin:$PATH"
       
       def node = tool 'nodejs6.10'
       env.PATH = "${node}/bin:${env.PATH}"
        stage('build'){
            checkout scm
            echo "Environment will be : $env.PATH"
            sh 'node -v'
            sh "npm -v"
            sh "npm install"
            sh "npm install gulp --save-dev"
            sh "node node_modules\gulp\bin\gulp.js -v"
            //sh "gulp clean"

            //sh "gulp js"
            sh "gulp zip"
        }
        stage('deploy-aws'){
            sh "echo 'We are deploying to AWS'"
        }
    
    } catch(error) {
        sh "echo 'Caught an error'"

    } finally {
        sh "echo 'finally runs now'"
    }

}