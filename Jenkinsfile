#!/usr/bin/env groovy
node('master'){
    //sh "export PATH="/.nvm/versions/node/v6.11.1/bin:$PATH"
    try{
       // PATH = "/.nvm/versions/node/v6.11.1/bin:$PATH"
       
       def node = tool 'nodejs6.10'
       env.PATH = "${node}/bin:${env.PATH}"
        stage('build'){
            checkout scm
            echo "Environment will be : $env.PATH - $env.NODE_PATH"
            sh 'node -v'
            sh "npm -v"
            sh "npm install"
            sh "npm install gulp-cli --save-dev"
            sh "npm install gulp --save-dev"
            sh "node_modules/.bin/gulp -v" 
            sh "node_modules/.bin/gulp clean"
            sh "node_modules/.bin/gulp js"
            sh "node_modules/.bin/gulp zip"
            //sh "node_modules/.bin/gulp setawsprofile"
            //sh "node_modules/.bin/gulp uploadweb"
            withAWS(profile:'default'){
                 awsIdentity();
           }

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