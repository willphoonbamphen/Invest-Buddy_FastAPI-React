import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(debug=True)

origins = [
    "http://localhost:5173",
    # Add more origins here
]

class Fruit(BaseModel):
    name: str

class Fruits(BaseModel):
    fruits: List[Fruit]

memory_db = {
    "fruits": []  # Initialize the "fruits" key with an empty list
}


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/fruits", response_model=Fruits)
def get_fruits():
    return Fruits(fruits=memory_db["fruits"])

    


@app.post("/fruits")
def add_fruit(fruit: Fruit):   
    memory_db["fruits"].append(fruit.dict())
    return {"message": f"Fruit '{fruit.name}' added successfully"}
    return fruit

@app.put("/fruits")
async def update_fruit(fruit: Fruit):
    for i in memory_db["fruits"]:
        if memory_db["fruits"][i] == fruit.name:
            memory_db["fruits"].pop(i)
            return {"message": f"Fruit '{fruit.name}' deleted successfully"}
    return {"error": f"Fruit '{fruit.name}' already exists"}, 400
            
    
    


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)