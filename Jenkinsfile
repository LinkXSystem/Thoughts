pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            sh 'chmod +x ./jenkins/scripts/build.sh'
        }
        stage('Action') {
            steps {
                sh './jenkins/scripts/build.sh' 
            }
        }
    }
}