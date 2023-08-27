# This is a test endpoint to show how FastAPI would be configured with a large enough GPU

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(
    title="RAIdology API",
    description='An API for the best radiology assistant',
    summary="Simplifying radiology, one conversation at a time.",
    version="0.0.1",
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/')
async def root(): 
    return {'message': 'Welcome to RAIdology!'}

@app.get('/seg')
async def segmentation(url: str):
    return {'url': 'https://upcdn.io/12a1yZ9/raw/uploads/2023/08/27/4mD4GhoMDx-seg_result.jpg'}

@app.get('/explain')
async def explain(url: str): 
    # explain stuff
    return {'explanation': 'The ultrasound image shows a lesion in the pancreas, which is indicated by the irregular contour (M). This lesion is likely a cyst, which is a fluid-filled sac that can form in various organs, including the pancreas. The presence of calcifications (RK) in the lesion suggests that it may be a pancreatic cyst, which is a type of cyst that forms in the pancreas. These cysts can be benign or malignant, and they can cause symptoms such as abdominal pain, nausea, and vomiting. The ultrasound image also shows other small abscesses in the pancreas, which are likely related to the cyst. These abscesses are small collections of pus that can form in response to infection or inflammation. Overall, the ultrasound image suggests that the patient has a pancreatic cyst that may be benign or malignant, and it is important for the patient to follow up with a healthcare provider for further evaluation and treatment.'}