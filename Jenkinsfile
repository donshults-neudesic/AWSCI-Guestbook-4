#!/usr/bin/env goovy
node('master'){

    try{
        print "Environment will be : ${env.NODE_ENV}"
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