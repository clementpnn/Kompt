import { atom, useAtom } from 'jotai'
import { useBooleanStore } from './stores/booleanToggles'

const base = atom(0)

function App() {
  const [count, setCount] = useAtom(base)
  const { isTrue, toggle } = useBooleanStore();

  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure><img src='https://placeimg.com/400/225/arch' alt='Shoes' /></figure>
        <div className='card-body'>
          <h2 className='card-title'>Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>

      <div className='rating rating-lg'>
        <input type='radio' name='rating-9' className='rating-hidden' />
        <input type='radio' name='rating-9' className='mask mask-star-2' />
        <input type='radio' name='rating-9' className='mask mask-star-2' checked />
        <input type='radio' name='rating-9' className='mask mask-star-2' />
        <input type='radio' name='rating-9' className='mask mask-star-2' />
        <input type='radio' name='rating-9' className='mask mask-star-2' />
      </div>

      <button className='btn btn-secondary block' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

      <button className='btn btn-accent' onClick={toggle}>
        is true {isTrue ? 'yes' : 'no'}
      </button>

      <div className="alert alert-success shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>
    </>
  )
}

export default App
