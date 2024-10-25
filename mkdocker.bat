cd C:\Users\Administrator\Documents\WSP Assignment 2 Server\WSP-Assignment-2
docker build -t wsp-assignment-2 .
docker run -p 1337:3000 --name portfolio-container wsp-assignment-2