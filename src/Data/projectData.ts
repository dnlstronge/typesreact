/* Model import (see models for full type) */
import project from "../Models/Projects"

/*Group Task (1001) :  */
import main1001 from "../Assets/GroupTask/1001main.jpg"
import a1001 from "../Assets/GroupTask/1001a.png"
import b1001 from "../Assets/GroupTask/1001b.png"
import c1001 from "../Assets/GroupTask/1001c.png"
import d1001 from "../Assets/GroupTask/1001d.png"
import content1001 from "../Content/Projects/grouptask"





/*  for typing config see models */


const projectData: project[] = [
    
    /*GroupTask */

    {
        uid: 1001,
        title: "GroupTask",
        image: main1001,
        imageArray: [a1001, b1001, c1001, d1001],
        url: "https://grouptaskapp-4eccd.web.app/",
        git: "https://github.com/dnlstronge/groupTask",
        route: "/grouptask",
        isLive: true,
        gif: false,
        contentMain: content1001.main,
        contentSup: "" ,
        techUsed: ["", "", ""]
    }
]




export default projectData;
