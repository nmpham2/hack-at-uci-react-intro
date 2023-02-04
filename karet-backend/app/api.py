from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

ingredients = dict()

# - - - - - GET ROUTE - - - - - #  
# Welcome page
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your ingredients adder."}

# Route Handler
@app.get("/todo", tags=["todos"])
async def get_ingredients() -> dict:
    return {"data":ingredients}

# - - - - - POST ROUTE - - - - - #  
@app.post("/todo", tags=["todos"])
async def add_ingredient(name: str, values : list) -> dict:
    ingredients[name] = values
    return {
        "data": { "Ingredient added." }
    }

# - - - - - PUT ROUTE - - - - - #  
@app.put("/todo/{id}", tags=["todos"])
async def update_ingredient(ingredient_to_update: str, new_values: list) -> dict:
    try:
        ingredients[ingredient_to_update]
        
        ingredients[ingredient_to_update] = new_values
        return{
            "data": f"Ingredient {ingredient_to_update} updated."
        }
    except KeyError:
        return{
            "data": f"Ingredient {ingredient_to_update} not found."
        }

# - - - - - DELETE ROUTE - - - - - #
@app.delete("/todo/{id}", tags=["todos"])
async def delete_ingredient(ingredient_to_delete: str) -> dict:
    try:
        del ingredients[ingredient_to_delete]
        return {
            "data": f"Ingredient {ingredient_to_delete} removed."
        }
    except KeyError:
        return {
            "data": f"Ingredient {ingredient_to_delete} not found."
        }