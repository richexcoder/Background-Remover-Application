# my python backend file
# this removes the background from images

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from rembg import remove
from PIL import Image
import io

app = FastAPI()

# this fixes the cors error in the browser
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500", "http://localhost:5500"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# just to check if the server is running
@app.get("/health")
def health():
    return {"status": "ok"}

# the main endpoint that removes the background
@app.post("/remove-bg")
async def remove_bg(file: UploadFile = File(...)):
    # read the image bytes
    image_bytes = await file.read()

    # open the image
    image = Image.open(io.BytesIO(image_bytes))

    # remove the background using rembg
    output = remove(image)

    # save it to a buffer as png
    buffer = io.BytesIO()
    output.save(buffer, format="PNG")
    buffer.seek(0)

    # send it back as an actual image response (this was the bug)
    return Response(content=buffer.getvalue(), media_type="image/png")