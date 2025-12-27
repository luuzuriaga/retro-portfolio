import duck from "../assets/gif/duck.gif";
import LinkedIn from "../assets/desktopIcons/linkedin-pixel.png";
import Github from "../assets/desktopIcons/github-pixel.png";
import MailIcon from "../assets/desktopIcons/mail.png";



export default function Connect() {
    
    return(
<>

        <div className="max-w-[1000px] p-3 overflow-y-auto max-h-[600px] w-full text-black flex flex-col relative px-5 pt-3 sm:gap-4">
            <div className="flex flex-col justify-center items-center sm:flex-row font-bold gap-2 relative">
                 <img src={duck} className="h-24 w-24  sm:h-44 sm:w-44 border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md"></img>
                 
                 <div className="flex flex-col p-4 text-xs sm:text-lg border-t-2 border-l-2 border-gray-200 border-b-2 border-r-2 border-b-gray-500 border-r-gray-500 bg-white shadow-md">
Hey! You’ve reached Lucero’s dev corner. 💻  <br></br>
Got a web project in mind, a idea to explore, or just want to talk code and UX?  <br></br>
Drop me a message — I’d love to connect.<br></br>
                 <div className="flex flex-row gap-2 mt-2 items-end">
                    <a href="mailto:lucero.uzuriaga2020@gmail.com" target="_blank"><img src={MailIcon} className= "hover:scale-110 w-8 h-8 cursor-pointer" ></img></a>
                    <a href="https://github.com/luuzuriaga" target="_blank"><img src={Github} className= "hover:scale-110 w-8 h-8  cursor-pointer" ></img></a>
                    <a href="https://www.linkedin.com/in/lucerouzuriaga/" target="_blank"><img src={LinkedIn} className= "hover:scale-110 w-8 h-8 cursor-pointer" ></img></a>
                </div>
                 </div> 
                 
            </div>
                     
             
    </div>
</>
    );
}