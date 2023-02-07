# Overcome
Overcome is a web application where anyone can start working out without judgement in a cozy and welcoming place. One of its main focus is the mental health aspect of exercises and you can even record journals of your journey :)

[Screencast from 07-02-2023 13:55:36.webm](https://user-images.githubusercontent.com/106849571/217312636-992d3dce-d12e-4b6b-81a9-39106d51a575.webm)

You can use the app here: http://100.25.221.19/
Or if you are solely interested in the back-end: http://100.25.221.19/api

## About
Overcome is a mental health focused fitness application. Below are the implemented features:

- Sign up
- Login
- Google OAuth login
- Persistent sessions using JSON Web Token
- Logout
- Show list of exercises on the database
- Create new exercises
- Create a new objective
- Update user's objective
- Show the user's sheet list
- Create new exercise sheet
- Insert exercises into exercise sheet
- Delete sheets
- Start a new workout based on the sheets the user has
- Save workout on the database
- See user's history of workouts
- Save cardio workouts
- Show the user their journal list
- Read older journals
- Edit older journals
- Delete older journals
- Create new journals

## Technologies
The following tools and frameworks were used in the construction of this back-end:
<p>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" />
  <img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" />
  <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
  <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" />
</p>

## How to run
1. Create a root project called Overcome-Front
```bash
mkdir Overcome-Front
```
2. Clone this repository
3. Create .env based on .env.example
4. If you don't have docker and/or docker compose, please make sure you have both installed
5. Run docker compose
```bash
docker-compose up --build
```
6. Clone the back-end an run the instructions at https://github.com/rodrigocqb/Overcome-Back
7. After that, you can access the app through http://localhost:80/
8. If you have something running on port 80, please close the process so you can run the application. In case you had, just rerun docker compose up. A common reason for that is the apache process on Ubuntu. You can stop it by running:
```bash
sudo /etc/init.d/apache2 stop
```
