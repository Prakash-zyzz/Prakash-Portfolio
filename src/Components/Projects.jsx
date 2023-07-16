import React from 'react'
import Projectitems from './Projectitems'
import Dataanalytics from "../assets/dataanalytics.jpg"
import Blockchain from "../assets/blockchain.jpg"
import Travel from "../assets/travel.jpg"
import Burger from "../assets/burger.jpg"
import Realestate from "../assets/realestate.jpg"
import Netflix from "../assets/netflix.jpg"
import Scorkeeper from "../assets/scorekeeper.png"

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='mx-auto text-4xl text-[#00172D] text-center font-bold'>Projects</h1>
    <p className='text-center py-8'>
    The front-end web development project utilized a powerful combination of HTML, CSS, JavaScript, React.js, and Tailwind CSS to create a dynamic and visually appealing user interface. By leveraging React.js, the project achieved efficient component-based architecture, while Tailwind CSS enabled rapid styling and customization.The seamless integration of these technologies resulted in a modern, responsive, and engaging web application that seamlessly combines functionality with an intuitive user experience.
    </p>
    <div className='grid sm:grid-cols-2 gap-12'>
      <Projectitems id='1' img={Blockchain} title="Block Chain app" url="https://prakash-zyzz.github.io/BlockChain/" />
      <Projectitems id='2' img={Burger} title="Food app" url="https://prakash-zyzz.github.io/Food-App/"  />
      <Projectitems id='3' img={Dataanalytics} title="Data Analytics app" url="https://prakash-zyzz.github.io/Dataanalytics/"  />
      <Projectitems id='4' img={Realestate} title="Real Estate app" url="https://prakash-zyzz.github.io/RealEstate/" />
      <Projectitems id='4' img={Netflix} title="Netlix" url="https://netflixclone-6f045.web.app/" />
      <Projectitems id='4' img={Scorkeeper} title="ScoreKeeper" url="https://prakash-zyzz.github.io/ScoreKeeper/" />
      

    </div>
    </div>
  )
}

export default Projects