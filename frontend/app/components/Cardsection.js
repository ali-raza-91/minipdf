import React from 'react'
import Card from './Card'
import img1 from '@/public/merge.png'
import img2 from '@/public/compress.png'
function Cardsection() {
  const cards = [
    {
      id: 1,
      img: img1,
      title: "Merge card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 2,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 3,
      img: img1,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 4,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 5,
      img: img1,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 6,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 7,
      img: img1,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 8,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 9,
      img: img1,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 10,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 11,
      img: img1,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    },
    {
      id: 12,
      img: img2,
      title: "Split card",
      description: "Let me know your layout and I can guide which to use (especially for logo place"
    }

  ]
  return (
    <>
      <div className='p-6 bg-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {cards.map((item) => {
          return (
            <Card key={item.id} id={item.id} img={item.img} title={item.title} description={item.description} className='border-4 border-blue-500' />
          )
        })}
      </div>
    </>
  )
}

export default Cardsection