import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ClickAwayListener, Collapse, Menu, Paper } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Dehaze";

const useStyles = makeStyles((theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    boxShadow: "none",
    color:'#e6007e !important',
    marginLeft:20
  },
  dropdown: {
    position: 'absolute',
    top: '41%',
    padding: '5%',
    left: 0,
    backgroundColor: "#121212",
    width: '100%',
    opacity: 1,
    zIndex: 9999,
    borderTop: '3px solid #e94834',
  },
 
}))

export default function  ButtonMenu (props){
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleMenu = () => {
      setOpen((prev) => !prev);
      
    };
    return (
      <div >
          
        
        <IconButton className={classes.buttonCollapse} onClick={handleMenu}>
             <MenuIcon />
        </IconButton>
       
         
    
        
    <div>
    <Collapse className={classes.dropdown} in={open}>    
            <div >
            {props.children}
            </div>
        
    </Collapse>
    </div>  
      </div>
    );
}

