import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
function App() {
  return (
    <>
    <h1>Hello React</h1>
    <Button variant="contained" color='success' >contained</Button>
    <Button variant="outlined">contained</Button><br /><br />
    <Button variant="contained" color='warning' startIcon={<DeleteIcon/>}>delete</Button>
    <Button variant="contained" color='warning' endIcon={<DeleteIcon/>}>delete</Button>
    <br /><br />
    <IconButton aria-label="delete" color='error'>
        <DeleteIcon />
      </IconButton>
      <Button variant="contained" style={{backgroundColor:'grey'}} >contained</Button>
      <Button variant="contained" sx={{backgroundColor:'grey'}} >contained</Button>

      <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel control={<Checkbox />} label="label" />
    </FormGroup>
      <Checkbox defaultChecked color="secondary" />
      <Checkbox icon={<FavoriteBorder/>} checkedIcon={<FavoriteBorder/>}/>
      <Checkbox onChange={()=>{
        console.log("change done ")}}/>
        <Button loading variant="plain">
          Plain
        </Button>
    </>
  );
}
export default App;
