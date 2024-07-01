
const Tag = (props:{t: string}) => {
  return (
    <div className="bg-zinc-500 h-max w-max p-1 inline-flex ml-1 mt-2 rounded-xl">
      {props.t}
    </div>
  )
}

export default Tag
