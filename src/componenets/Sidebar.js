import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AppsIcon from "@mui/icons-material/Apps";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import BusinessIcon from "@mui/icons-material/Business";
import DeleteIcon from "@mui/icons-material/Delete";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';


function Sidebar({ sidebar, setSidebar }) {
  return (
    <div className="sidebar">
      <div className="s-top align">
        <div className="sec">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocLF5PwZQJ9c4iJiZBWUplO1xJM5fYmpznHh6RoMYbXfSQ=s96-c-rg-br100"
            alt=""
          />
          <div>
            <label>Personal</label>
          </div>
        </div>
        <div className="pro" >
          <label>Get Canva Pro</label>
          <StarPurple500Icon sx={{color:'#976b1f'}}/>
        </div>
        <div className='sec'>
          <HomeIcon/>
          <label>Home</label>
        </div>
        <div className="sec" style={{color:'#575efd'}}>
          <AutoAwesomeIcon/>
          <label>Magic Pen</label>
          <div className="right-arrow new">New</div>
        </div>
      </div>
      <div className="s-center align">
        <div className="sec">
          <FolderCopyIcon />
          <label>Projects</label>
          <ChevronRightIcon className="right-arrow" />
        </div>
        <div className="sec">
          <SpaceDashboardIcon />
          <label>Template</label>
          <ChevronRightIcon className="right-arrow" />
        </div>
        <div className="sec">
          <CardGiftcardIcon />
          <label>Brand</label>
          <ChevronRightIcon className="right-arrow" />
        </div>
        <div className="sec">
          <AppsIcon />
          <label>Apps</label>
          <ChevronRightIcon className="right-arrow" />
        </div>
      </div>
      <div className="s-bottom align">
        <div className="sec">
          <BusinessIcon />
          <label>Team</label>
        </div>
        <hr className="hr" />
        <div className="sec">
          <DeleteIcon />
          <label>Trash</label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
