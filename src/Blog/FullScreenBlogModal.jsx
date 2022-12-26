
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {MdOutlineClose } from 'react-icons/md'
import {FaAngleDoubleUp}  from 'react-icons/fa'
import {AiOutlineEdit} from 'react-icons/ai'
import parse from 'html-react-parser'; 




import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { useSelector } from 'react-redux';
 
const Transition = React.forwardRef(function Transition(props, ref) {  
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenBlogModal(props) {
  let {type ,data} =props
  
  const [open, setOpen] = React.useState(false);
   const [disc , setDisc] = React.useState(data.disc);
   let ud =  useSelector(ele=>ele.loggedInUser )

  function updateBlog(id,discription) {
    let model = {
      _id:id,disc: discription
    }
      axios.post(`${process.env.REACT_APP_BASE_URL}/user/update` ,model ).then(res=>{ 
       if(res.data.status==200) {
        toast(" updated  succesfully ")
        setOpen(false);
       }
     }).catch(err=>{
       console.log("not updated ",err);
     })
     
  }
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   if(type=="show") {
    return (
      <div>
        <Button  onClick={handleClickOpen}>
        {type=="show"?<FaAngleDoubleUp size={20} /> : ""}
        {type=="update"?<AiOutlineEdit  size={20}/>:""} 
        </Button>
        
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >    
                 <MdOutlineClose />
              </IconButton>
              <Typography mx={{ ml: 2 }} variant="h6" component="div">
                {data.title}<br />
       {/*              <p> {data.meta.jetpack_publicize_message} </p> */}
              </Typography>
             
            </Toolbar>
           
          </AppBar>
          
          <div style={{  width:"80%" , margin:"auto"}}>
          {parse(data.disc)}
          </div>

        </Dialog>
      </div>
    );

   }else if (type=="update") {

    return (
        
      <div>
        
      {
        Object.keys(ud).length!=0 && ud._id==data.blogOwner? <Button  onClick={handleClickOpen}>
        {type=="update"?<AiOutlineEdit  size={20}/>:""} 
        </Button>:""
      }
     
        
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
         
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >    
                 <MdOutlineClose />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                 {data.title }
              </Typography>
              <Button autoFocus color="inherit"
               onClick={e=> updateBlog( data._id ,  disc )}>
                save
              </Button>
            </Toolbar>
          </AppBar>


          <div style={{  width:"80%" , margin:"auto"}}>
          {/* parse(data.content.rendered) */}
        
        <CKEditor
         config={(config)=>{
          config.resize_maxWidth = 800;
          config.resize_maxHeight = 600;
          }}

        editor={ ClassicEditor }
        data={disc}
        onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
              setDisc(data) 
        } } 

        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        }} 

        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
        } }
    />

          </div>
        </Dialog>

       

      </div>
    );
   }
    
 

}
