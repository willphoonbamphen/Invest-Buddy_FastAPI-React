import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List , Dict
import settrade_v2

app = FastAPI(debug=True)

origins = [
    "http://localhost:5173",
    # Add more origins here
]

class Fruit(BaseModel):
    name: str

class FruitsList(BaseModel):
    fruits: List[Fruit]

memory_db = {
    "fruits": []
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/fruits", response_model=FruitsList)
async def get_fruits():
    return FruitsList(fruits=memory_db["fruits"])


@app.post("/fruits")
async def add_fruit(fruit : Fruit):   
    memory_db["fruits"].append(fruit)
    return fruit

    
#@app.put("/fruits/{fruit_name}")
#async def delete_fruit_by_name(fruit_name: str):
 #   memory_db["fruits"] = [fruit for fruit in memory_db["fruits"] if fruit.name != fruit_name]
 #   return {"message": f"Fruit '{fruit_name}' deleted"}
 

@app.delete("/fruits/{fruit_name}")
async def update_fruit_by_name(fruit_name: str, updated_fruit: Fruit):
    for index, fruit in enumerate(memory_db["fruits"]):
        if fruit.name == fruit_name:
            memory_db["fruits"].pop(index)
            return 
    return {"message": f"Fruit '{fruit_name}' not found"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)