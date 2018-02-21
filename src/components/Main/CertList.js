import React from 'react'

const CertList = (props) => {
  let {name, icon, alt} = props.info
  console.log(props);

  return (
    <li>
      <img src={icon} alt={alt} />
      {name}
    </li>
  )
}

export default CertList
