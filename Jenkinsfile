#!/usr/bin/env goovy
node('master'){
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
        sh "echo 'Caught an error'+error"

    } finally {}
        sh "echo 'finally runs now'"
    }

}