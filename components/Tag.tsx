
const Tag = (props:{t: string}) => {
  return (
    <div className="bg-zinc-500 text-slate-300 h-max w-max p-1 px-2 inline-flex ml-1 mt-1 rounded-xl">
      {props.t}
    </div>
  )
}

export default Tag
