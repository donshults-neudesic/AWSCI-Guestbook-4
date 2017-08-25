#!/usr/bin/env goovy
node('master'){
    env.PATH = "${nodeHome}/bin:${env.PATH}"
    sh "echo env.Path"
    sh "node -v"
    sh "npm -v"
    try{
        stage('build'){
            checkout scm
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