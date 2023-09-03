### Backend

Hosted endpoint: https://raidology-fd921332d8fd.herokuapp.com/

Redoc: https://raidology-fd921332d8fd.herokuapp.com/redoc

This contains the FastAPI endpoints for the ML model. Run custom.py for a test endpoint, main.py for the full (slow) endpoint,
and docs.png to see an example. This uses a quantized checkpoint of MiniGPT-4 and a fine tuned version of Segment Anything (semantic segmentation masks) on RadQA which benchmarked the best without an A10+ GPU. <br/>

There are three API endpoints: /root (for debugging prod), /seg (required: url), and /explain (required: url)

There is a Procfile to deploy to Heroku (will scale costs fast) as well as a Docker file for containerization in any cloud environment, though Lambda Labs is required due to the high CUDA compute. 

We also have a Postman API suite, to test out all of the APIs we deployed and used in our application: https://www.postman.com/mission-operator-17323510/workspace/raidology
