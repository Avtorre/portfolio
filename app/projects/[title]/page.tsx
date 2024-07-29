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

export default function Project() {
  const {title} = useParams()
  const stringTitle = title.toString()
  const dispatch = useDispatch()
  const curProj: ProjectCard | undefined = ProjectLib.find((p) => p.page == title)
  const projects:ProjectInfo[] = useSelector((state:RootState) => state.projects)
  const projInfo: ProjectInfo | undefined = projects.find((p) => p.page == stringTitle)

  useEffect(() => {
    const GetData = () => {
      useRepoInfo(stringTitle).then(info => dispatch(addFetchedInfo({title: stringTitle, info}))) 
    }
    GetData()
  })

  return (
    <div>
      <Link href={'/'} className="hover:shadow-xl absolute mt-3 ml-8 border-1 rounded-xl px-2 py-0 border-black max-carousel-fix:top-14">&#60; Back</Link>
      <div className="flex w-11/12 h-2/3 justify-center m-auto max-carousel-fix:block">
        <Carousel className="bg-slate-400/20 w-4/5 border-y-4 border-l-4 border-black rounded-l-xl mt-14 align-middle max-carousel-fix:border-r-4 max-carousel-fix:w-full max-carousel-fix:rounded-t-2xl max-carousel-fix:rounded-b-none">
          {projInfo?.imageFolder.map((p, index) => {
            return(
            <Carousel.Item key={index} className="w-full h-full co">
              <div className="relative pb-[56.25%] h-0 overflow-hidden object-cover content-center">
                <img alt="project image" src={`/images/projectImages/${p}`} className="absolute !top-0 !left-0 !right-0 m-auto !bottom-0 object-scale-down h-full rounded-l-md max-carousel-fix:rounded-t-xl max-carousel-fix:rounded-b-none"/>
              </div>
            </Carousel.Item>
          )})}
        </Carousel>
        <div className="w-1/4 mt-14 border-y-4 border-r-4 border-black rounded-r-xl bg-zinc-400 align-middle p-3 max-carousel-fix:w-full max-carousel-fix:border-t-0 max-carousel-fix:border-l-4 max-carousel-fix:mt-0 max-carousel-fix:rounded-b-xl max-carousel-fix:rounded-t-none">
          <p className="inline break-words"><span className="font-bold text-2xl">{projInfo?.title}</span>   <br/>
            
            {curProj?.description}    <br/>
            
            <span className="font-bold">Used:</span>
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
        <pre className="ml-3 font-inter text-xl whitespace-pre-wrap">
          
          {projInfo?.description}
          
        </pre>
      </div>
    </div>
      
  )
}
