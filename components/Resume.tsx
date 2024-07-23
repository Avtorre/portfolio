import Image from "next/image"
import Link from "next/link"

const Resume = () => {
  let summary = 'An enthusiastic Frontend Developer with experience in creating projects with HTML, CSS, Javascript, React.js, TypeScript, Next.js, Redux, MobX, Tailwind CSS. Looking for working experience that will help improve current skills and learn something new.'
  return (
    <div className="h-7/12 2xl:h-3/5 w-3/5 2xl:w-3/6 m-auto border-zinc-700 border-2 rounded-xl border-solid p-4 max-md:w-11/12">
      <div className="">
        <div className="flex">
          <span className="font-bold text-3xl">Aleksandr Maraev</span>
          <div className="w-fit ml-auto self-end max-sm:space-x-0 space-x-2">
            <Link href="https://github.com/Avtorre" target="_blank">
              <Image className="inline hover:shadow-lg border-1 rounded-lg border-zinc-700 p-1" src={'/github.svg'} alt="" width={35} height={35}/>  
            </Link>
            <Link href="https://www.codewars.com/users/Avtorre" target="_blank">
              <Image className="inline hover:shadow-lg border-1 rounded-lg border-zinc-700 p-1" src={'/codewars.svg'} alt="" width={35} height={35}/>  
            </Link>
          </div> 
        </div>
        <span className="font-light text-sm">Email: maraev968@gmail.com</span>
      </div>
      <h3 className="font-bold mt-1 text-xl my-2">Summary:</h3>
        <p>{summary}</p> 
      <h3 className="font-bold mt-1 text-xl my-2">Experience:</h3>
        <div className="w-11/12 mx-auto">
          <p className="flex mt-1 leading-4">
            <span className="font-semibold text-md underline ">Frontend Developer Intern </span> <span className="inline-flex w-fit ml-auto self-end">05/2024 - 07/2024</span>
          </p> 
          <p className="font-semibold ml-2 flex-col leading-5">
            Netvision
          </p>
          <p className="ml-3">
            - Developed client side of a new web application using Next, Redux, TypeScript, Tailwind, React-bootstrap.  <br />
            - Analysed two versions of an already existing web application to propose possible improvements to it and to get better acquainted with the structure of big projects.
          </p>
        </div>
      <h3 className="font-bold mt-1 text-xl my-2">Education:</h3> 
        <div className="w-11/12 mx-auto">
            <p className="flex mt-1 leading-4">
              <span className="font-semibold text-md">Povolzhskiy State University of Telecommunications and Informatics</span> <span className="inline-flex w-fit ml-auto self-end">2021 - 2025</span>
            </p> 
            <p className="ml-2 flex-col leading-5">
              Informatics and computer technology, Bachelor's degree
            </p>
        </div>
        <h3 className="font-bold mt-1 text-xl my-2">Skills & Competencies:</h3> 
        <div className="w-1/3 max-carousel-fix:w-2/3 max-sm:w-full ml-11 mr-auto sm:columns-2 pl-3 gap-0">
            <ul className="list-disc">
              <li>HTML </li>
              <li>CSS</li>
              <li>JavaScript</li> 
              <li>React</li>
              <li>MobX</li>
              <li>Next.js</li>
              <li>Redux</li> 
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li> 
            </ul>
        </div>
        
    </div>
  )
}

export default Resume
