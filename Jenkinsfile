pipeline {
    agent {
        docker {
            image 'node:latest' 
            args '-p 3000:3000' 
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