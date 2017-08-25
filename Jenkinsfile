#!/usr/bin/env groovy
node('master'){
    //sh "export PATH=$PATH:~/.nvm/versions/node/v6.11.1/bin"
    try{
        def node = tool name: 'Node-6.11.1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        env.PATH = "${node}/bin:${env.PATH}"
        stage('build'){
            checkout scm
            echo "Environment will be : ${env.NODE_ENV} - $PATH"
            
            sh "node -v"
            sh "npm install"
            sh "gulp clean"
            sh "gulp js"
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