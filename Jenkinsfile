#!/usr/bin/env groovy
node('master'){
    //sh "export PATH="/.nvm/versions/node/v6.11.1/bin:$PATH"
    try{
       // PATH = "/.nvm/versions/node/v6.11.1/bin:$PATH"
       
       // def node = tool name: 'Node-6.11.1'
       // env.PATH = "${node}/bin:${env.PATH}"
        stage('build'){
            checkout scm
            echo "Environment will be : $PATH"
            
            sh "/var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/nodejst6.10/bin/node -v"
            //sh "npm install"
            //sh "gulp clean"
            //sh "gulp js"
            //sh "gulp zip"
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