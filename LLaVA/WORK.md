### Work Done

We finetuned LLaVa on an ensemble of [ROCO SOTA](https://www.kaggle.com/datasets/virajbagal/roco-dataset) and a annotated version of
[roco-instruct-65k](https://huggingface.co/datasets/photonmz/roco-instruct-65k), specifically fine tuned for LLaVa and MiniGPT training. We used QLoRa to finetune the data, similar to Vicuna-7b (see backend/scripts). We then validated the data using LLaVa-Med by comparing against a theoretical implementation of this process. 

We trained a subset of ROCO on the LLaVa SOTA model on an A100 GPU from Lambda Labs, so the steps must be replicated from the original README.md to reproduce. 
In the future, we will add DNS and get extra GPU instances (with funding) to run the full LLaVa-Med training of 15 hours. 
