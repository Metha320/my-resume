import React from 'react';
import '../Style/logolist.css'


const logolist = [
  {title: 'flutter', path: "flutter"},
  {title: 'html', path: "html"},
  {title: 'css', path: "css"},
  {title: 'react', path: "react"},
  {title: 'nodejs', path: "nodejs"},
];

function Logos() {
  return (
    <>
    {logolist.map(function(data, i) {
      return (
        <img className=' col-sm-4 col-md-3 col-lg-2 ' key={i} src={require('../images/'+data.path+'.png')} alt={data.title} />
      )
    })}
    </>

  )
}
export default Logos;