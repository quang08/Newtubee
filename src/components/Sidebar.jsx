import {Stack} from '@mui/material';

import {categories} from '../utils/constants';

//Passing both props from Feed now can recieve and pass in the Sidebar function
const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY:'auto',
            height: {sx: 'auto', md: '95%'}, 
            flexDirection: {md: 'column'},//on mobile it should be horizontal
        }}
    >
        {categories.map((category)=>(
            <button 
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{
                    background: category.name === selectedCategory && '#FC1503', //highlight current section
                    color: 'white',
                }}
                key={category.name} 
            //whenever we're mapping thru smt in React, on that prop that's using the element, we need to give it a key
            >
                <span //styling the icon
                    style={{color: category.name === selectedCategory ? 'white':'red', marginRight: '15px'}}
                >
                    {category.icon}
                </span>
                <span //styling the name
                    style={{opacity: category.name === selectedCategory ? '1':'0.8' }}
                >
                    {category.name}
                </span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar
