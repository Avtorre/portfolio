
const Resume = () => {
  let summary = 'An enthusiastic Frontend Developer with experience in creating projects with HTML, CSS, Javascript, React.js, TypeScript, Next.js, Tailwind CSS. Looking for working experience that will help improve current skills and learn something new.'
  let txt = 'some text here '
  let filler = []
  for (let i = 0; i < 90; i++) {
    filler.push(txt) 
  }
  return (
    <div className="h-7/12 2xl:h-3/5 w-3/5 2xl:w-3/6 m-auto border-zinc-700 border-2 rounded-xl border-solid p-4">
      <p>
        <span className="font-bold text-3xl">Aleksandr Maraev</span> <br/>
        <span className="font-light text-sm">Email: maraev968@gmail.com</span>
      </p>
      <h3 className="font-semibold mt-1 text-xl">Summary:</h3>
      <p>{summary}</p> 
      <h3 className="font-semibold mt-1 text-xl">Education:</h3> 
      {filler}
    </div>
  )
}

export default Resume
