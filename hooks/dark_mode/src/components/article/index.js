import React from 'react'

const Article = ({colorWrited, ColorLine}) => {
  return (
    <article className="article" style={{ color: colorWrited }}>
        <h4 >Magnam Facilis Autem</h4>
        <div className='underline'>
            <hr className='line'  style={{ backgroundColor: ColorLine }}></hr>
        </div>
        <p>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
    </article>
  )
}

export default Article;
