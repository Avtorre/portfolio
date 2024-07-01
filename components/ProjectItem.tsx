import Image from "next/image"


const ProjectItem = (props: {imageSrc: string, title: string, description: string}) => {
  /*
  <div className="bg-gray-950 w-64 aspect-video"> 
      ProjectItem
  </div>
  */
  return (
    <div className="w-72 border-2 border-zinc-800 rounded-2xl">
      <Image src={props.imageSrc} width={288} height={146} alt={props.title} className="rounded-t-xl "/>
      <div className="h-24 bg-gray-300 p-1 rounded-b-xl">
        <p className="text-xl font-semibold">{props.title}</p>
        {props.description} <br/>
        <p className="italic font-light text-sm text-end mt-2 mr-2">(Click for more info...)</p>
      </div>
    </div>
  )
}

export default ProjectItem