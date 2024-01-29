import React from 'react'
import './workorder.css';

const Workorder = () => {
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  return (
    <div>

      <div id="mySidepanel" class="sidepanel">
        <button type="button" class="closebtn" onClick={closeNav}>×</button>

        <button className="openbtn" onClick={openNav()}>☰ Toggle Sidepanel</button>
      </div>







    </div>
  )
}

export default Workorder
