'use client'

import Tag from "@/components/Tag";
import { useRepoInfo } from "@/hooks/useRepoInfo";
import { ProjectLib } from "@/lib/projectPreview";
import { ProjectCard, ProjectInfo } from "@/lib/types";
import { addFetchedInfo} from "@/store/projectStore/projectSlice";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { readdir } from 'node:fs/promises';
//import path from "node:path";
           
export default function Project() {

  let txt = 'some text here '
  let filler = []
  for (let i = 0; i < 90; i++) {
    filler.push(txt) 
  }

  const [info, setInfo] = useState<ProjectInfo>()
  if (typeof useParams() === 'string') {
    
  }
  const {title} = useParams()
  const stringTitle = title.toString()
  const dispatch = useDispatch()
  const curProj: ProjectCard | undefined = ProjectLib.find((p) => p.page == title)
  const projects:ProjectInfo[] = useSelector((state:RootState) => state.projects)
  const projInfo: ProjectInfo | undefined = projects.find((p) => p.page == stringTitle)
  const fetchInfo = async () => {
    const resp = await import(`@/lib/projects/${title}`)
    setInfo(resp[`${title}`])
    /*try {
      const files = await readdir(path.join(''));
      for (const file of files)
       console.log(file);
    } catch (err) {
     console.error(err);
    }*/
  }
  //console.log('first', readdir('/images/projectImages/ClockProject'))
  useEffect(() => {
    fetchInfo()
    useRepoInfo(stringTitle).then(info => {dispatch(addFetchedInfo({title: stringTitle, info}))
      console.log('info', projInfo)})   
    //console.log('projInfo', projInfo)
  }, [])
//
/*
<img src={`/images/projectImages/${info?.imageFolder}`} className="w-3/4 flex-none align-middle h-auto"/>
      <div className=" bg-slate-600 align-middle p-3">
        <b>{info?.title}</b>   <br/>
        {info?.description}  
      </div>
*/
  let newFiller= atob('SSBERUZJTklURUxZIHdpbGwgY2xlYW4gdGhlIGNvZGUgYW5kIGRlbGV0ZSBh\nbGwgcmVkdW5kYW50IGxpbmVzIGFuZCBpbXBvcnRzICpDbHVlbGVzcyoK\n')
/**<div>
          <h1>Notes:</h1>
          <p>{filler}</p>
        </div> */
  return (
    <div>
      <Link href={'/'} className="absolute mt-3 ml-8">&#60; Back</Link>
      <div className="flex w-11/12 justify-center m-auto max-h-[10%]">
        <Carousel className="w-3/4 flex-none border-y-4 border-l-4 border-black rounded-l-xl mt-14 align-middle">
          {info?.imageFolder.map((p, index) => {
            return(
            <Carousel.Item key={index}>
              <img src={`/images/projectImages/${p}`} className="rounded-l-md"/>
            </Carousel.Item>
          )})}
        </Carousel>
        <div className="mt-14 border-y-4 border-r-4 border-black rounded-r-xl bg-zinc-400 align-middle p-3 max-w-[33%]">
          <p className="inline break-words"><span className="font-bold text-2xl">{projInfo?.title}</span>   <br/>
            
            {curProj?.description}    <br/>
            
            <span className="font-bold">Tags:</span>
          </p>
          {projInfo?.used.map((text, index) => {
            return (
            <Tag key={index} t={text}/>
          )})} <br />
          <p className="inline"><span className="font-bold text-2xl"></span>

            <span className="font-bold">Created: </span> {projInfo?.createdAt} <br />
            <span className="font-bold">Size: </span> {projInfo?.size} <br />
            <span className="font-bold">Link: </span> <a href={projInfo?.github} target="_blank" className="break-words">{projInfo?.github} </a>   <br/>
          </p>
        </div>
      </div>
      <div className="w-5/6 mt-7 mx-auto">
        <h1 className="font-bold text-3xl mb-3">Notes:</h1>
        <p className="ml-3">
          
          {projInfo?.description}
          
        </p>
      </div>
    </div>
      
  )
}
