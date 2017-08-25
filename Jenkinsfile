#!/usr/bin/env goovy
node('master'){

    try{
        withEnv(["PATH+NODE=${tool name: 'node-6.11.1', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) 
        {sh 'node -v'  }
        stage('build'){
            checkout scm
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