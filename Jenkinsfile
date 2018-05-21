pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 2017:2017' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'chmod +x ./jenkins/scripts/build.sh'
            }
        }
        stage('Action') {
            steps {
                sh './jenkins/scripts/build.sh' 
            }
        }
    }
}