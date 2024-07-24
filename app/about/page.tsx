import Link from "next/link";

export default function About() {

  return (
    <div className="w-3/5 mx-auto mt-3">
      <h1 className="font-bold text-5xl">About</h1>
      <div className="mt-2 ml-2 text-xl font-sans leading-10">
        <p>This project was made as a part of my portfolio and supposed to be found through the link in my resume. </p>
        <p>If you have any questions you can send them on e-mail stated on the main page. </p>
        <p>For more info on the project check <Link href="/projects/portfolio"><span className="underline">this</span></Link> page. </p>
        <p>Hosted on GitHub Pages.</p>
      </div>
    </div>
      
  )
}
