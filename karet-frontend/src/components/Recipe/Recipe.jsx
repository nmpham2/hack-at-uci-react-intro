import { Card, CardBody, CardFooter, Stack, Heading, Text, Button  } from '@chakra-ui/react'
import FilterButton from '../FilterButton/FilterButton';
import GenerateButton from '../GenerateButton/GenerateButton';
import "./Recipe.css"

const Recipe = () => {
    return (
        <div className="recipeBox">
            <div className="recipeHeaderText">
                <h1>Try these recipes...</h1> 
                <div className="filterButtonBox">
                <FilterButton/>
                </div> 
                <div className="generateButtonBox">
                <GenerateButton/>
                </div>  
            </div>
            <div className="recipeContainer">
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        {/* <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='Caffe Latte'
        /> */}

        <Stack>
            <CardBody>
            <h1 className="recipeTitle">Dragon Roll</h1>
            <p className="recipeDescription">Dragon roll is a kind of sushi roll.</p>
            <p className="Times">Prep Time:</p>
            <p className="Times">Cook Time:</p>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Link
            </Button>
            </CardFooter>
        </Stack>
        </Card>
        </div>
        </div>
    );
};

export default Recipe;