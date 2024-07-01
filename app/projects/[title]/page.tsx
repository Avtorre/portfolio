'use client'

import Tag from "@/components/Tag";
import { ProjectInfo } from "@/lib/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
//import { readdir } from 'node:fs/promises';
//import path from "node:path";
           
export default function Project() {
  const [info, setInfo] = useState<ProjectInfo>()
  const {title} = useParams()
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
  }, [])
//
/*
<img src={`/images/projectImages/${info?.imageFolder}`} className="w-3/4 flex-none align-middle h-auto"/>
      <div className=" bg-slate-600 align-middle p-3">
        <b>{info?.title}</b>   <br/>
        {info?.description}  
      </div>
*/
  return (
    <div className="flex w-11/12 m-auto">
      <Link href={'/'} className="absolute mt-3">&#60; Back</Link>
      <Carousel className="w-3/4 flex-none border-y-4 border-l-4 border-black rounded-l-xl  mt-14 align-middle h-auto">
        {info?.imageFolder.map(p => {
          return(
          <Carousel.Item>
            <img src={`/images/projectImages/${p}`} className="rounded-l-md"/>
          </Carousel.Item>
        )
        })}
      </Carousel>
      <div className="mt-14 border-y-4 border-r-4 border-black rounded-r-xl bg-zinc-400 align-middle p-3">
        <b>{info?.title}</b>   <br/>
        {info?.description}    <br/>
        {info?.used.map(text => {
          return (
          <Tag t={text}/>
        )})}
      </div>
    </div>
  )
}
