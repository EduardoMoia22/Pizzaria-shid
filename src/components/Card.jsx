export function Card(props){
  return(
    <div className="rounded-[30px] flex flex-col items-center justify-between border border-border">
      <img src={props.src} className="rounded-[30px]"/>

      <div className="text-center px-6">
        <h4 className="font-semibold text-2xl">
          {props.title}
        </h4>

        <p className="font-light text-sm  text-center mt-1 mb-5">
          {props.desc}
        </p>

        <strong className="font-semibold text-2xl">
          ${props.price}.00
        </strong>
      </div>

      <div className="flex flex-col w-full px-6 gap-3 mb-7">
        <select className="bg-transparent rounded-3xl border border-border-select h-10 px-4">
          <option>Regular</option>
        </select>

        <button>
          <div className='h-10 flex items-center justify-center bg-primary font-medium uppercase text-white rounded-3xl'>
            add to cart
          </div>
        </button>
      </div>
      
    </div>
  )
}