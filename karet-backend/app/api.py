from datetime import date
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

ingredients = ingredients = [
    ['Carrots','02/24/2023','Counter',20],
    ['Chicken','02/05/2023','Fridge',50]
]

# - - - - - GET ROUTE - - - - - #  
# Welcome page
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your ingredients adder."}

# Route Handler
@app.get("/todo", tags=["todos"])
async def get_ingredients() -> dict:
    
    # Updating the days left until expiration data
    today = date.today()
    for ingredient in ingredients:
        ingredient[3] = _calculate_days_left(ingredient[1])

    return {"data":ingredients}

# - - - - - POST ROUTE - - - - - #  
@app.post("/todo", tags=["todos"])
async def add_ingredient(name, expiration_date, location) -> dict:
    values = list((name, expiration_date, location))
    ingredients.append(values)
    ingredients[-1].append( _calculate_days_left(expiration_date) )
    return {
        "data": { "Ingredient added." }
    }

# - - - - - PUT ROUTE - - - - - #  
@app.put("/todo/{id}", tags=["todos"])
async def update_ingredient(name, expiration_date, location) -> dict:
        for ingredient in ingredients:
            if ingredient[0] != name:
                continue

            if expiration_date is not None:
                ingredient[1] = expiration_date
            if location is not None:
                ingredient[2] = location

            ingredient[3] = _calculate_days_left(ingredient[1])
            return{
                "data": f"Ingredient {ingredient[0]} updated."
            }
        return{
            "data": f"Ingredient {name} not found."
        } 

# - - - - - DELETE ROUTE - - - - - #
@app.delete("/todo/{id}", tags=["todos"])
async def delete_ingredient(ingredient_to_delete: str) -> dict:
    for ingredient in ingredients:
        if ingredient[0] == ingredient_to_delete:
            ingredients.remove(ingredient)
            return{
                "data": f"Ingredient {ingredient[0]} removed."
            }
    return {
        "data": f"Ingredient {ingredient_to_delete} not found."
    }

def _calculate_days_left(expiration_date: str) -> int:
    """
    Given a date in MM/DD/YYYY format, output the # of days left, from today, to that day.
    """
    today = date.today()
    month, day, year = expiration_date.split('/')
    expiration_date = date.fromisoformat(f'{year}-{month}-{day}')
    
    days_left = str(expiration_date - today)
    days_left = days_left.split()[0]

    if days_left[0] == '0':
        return 0
    else:
        return int(days_left)
