python -m llava.eval.run_llava \
	--model-path ./checkpoints/$MODEL_VERSION \
	--image-file ~/roco-dataset/data/train/radiology/images/ROCO_00288.jpg \
	--query 'Explain this image, from the point of view of a doctor.'