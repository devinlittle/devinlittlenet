pipeline {
    agent any
    tools {
        nodejs "node"
        git "Default"
    }
    stages {
        stage('Initilize') {
            steps {
                dir("build") {
                    deleteDir()   
                }
                dir("node_modules") {
                    deleteDir()   
                }
                git branch: 'main', url: 'https://github.com/pixthehe/devinlittlenet.git'
                sh "npm install -g pnpm"
                sh "pnpm install --frozen-lockfile"
            }
        }
        stage('Build') {
            steps {
                sh "pnpm run build"
                sh "cp package.json build/"
            }
        }
        stage("Finalize") {
            steps { 
                archiveArtifacts artifacts: 'build/**', followSymlinks: false
            }
        }
    }
}
