import Image from "next/image"


const ProjectItem = (props: {imageSrc: string, title: string, description: string}) => {

  return (
    <div className="w-72 mx-6 hover:shadow-xl border-2 border-zinc-800 rounded-2xl">
      <Image src={props.imageSrc} width={288} height={146} alt={props.title} className="rounded-t-xl "/>
      <div className="h-24 p-1 rounded-b-xl bg-zinc-400/[.3] border-t-2 border-zinc-800 ">
        <p className="text-xl font-semibold">{props.title}</p>
        <p className="inline-flex">{props.description}</p><br/>
        <p className="italic font-light text-sm text-end mt-2 mr-2">(Click for more info...)</p>
      </div>
    </div>
  )
}

export default ProjectItem