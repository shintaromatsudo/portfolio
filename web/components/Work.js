import React from 'react'

const Work = props => {
  const hover = () => {
    // console.log(props)
  }
  return (
    <React.Fragment>
      <div className="work" onMouseEnter={hover}>
        <a>
          <img src={props.image} />
          <h2>{props.title}</h2>
          <p>{props.content}</p>
        </a>
        <style jsx>{`
          .work {
            height: 250px;
            border: 1px solid black;
            border-radius: 5px;
            cursor: pointer;
          }
          img {
            width: 250px;
            height: 250px;
            object-fit: cover;
          }
          p {
            color: red;
          }
          a {
            text-decoration: none;
          }
        `}</style>
      </div>
    </React.Fragment>
  )
}

export default Work
