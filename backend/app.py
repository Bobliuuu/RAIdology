from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from metaseg import SegAutoMaskPredictor
import replicate

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
    img_data = requests.get(url).content
    with open('seg_image.jpg', 'wb') as handler:
        handler.write(img_data)
    results = SegAutoMaskPredictor().image_predict(
        source='seg_image.jpg',
        model_type="vit_l", # vit_l, vit_h, vit_b (vit_1 gives best seg results from transformer batching)
        points_per_side=16,
        points_per_batch=64,
        min_area=0,
        output_path="seg_result.jpg",
        show=False,
        save=True,
    )
    url = "https://api.bytescale.com/v2/accounts/12a1yZ9/uploads/form_data"
    headers = {
        "Authorization": "Bearer public_12a1yZ98yhrYxpR4pdpp7JiA6koi",
    }
    files = {
        "file": ("seg_result.jpg", open("seg_result.jpg", "rb")),
    }
    response = requests.post(url, headers=headers, files=files)
    res = json.loads(response.text)['files'][0]['fileUrl']
    os.remove('image_name.jpg')
    return {'url': res}

@app.get('/explain')
async def explain(url: str):
    output = replicate.run(
        "daanelson/minigpt-4:b96a2f33cc8e4b0aa23eacfce731b9c41a7d9466d9ed4e167375587b54db9423",
        input={"image": url, "prompt": "Explain this image, using specific radiology terminology. Look for conditions or abscesses, and recommend a route of action if the image is not health."},
    )
    return {'explanation': output}

